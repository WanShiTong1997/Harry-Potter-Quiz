(() => {
 const $=id=>document.getElementById(id), TARGET=30, SAVE_KEY='hogwartsArkivSaveV2';
 const COLORS={frida:'#ed78b5',anna:'#8fdcff',nicholas:'#3976d9',mette:'#f2c94c',tinna:'#ef6262'};
 const norm=s=>String(s||'').toLocaleLowerCase('da-DK').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/æ/g,'ae').replace(/ø/g,'o').replace(/å/g,'a').replace(/[^a-z0-9]/g,'');
 const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let state=null,locked=false,activeChoices=null;
 const colorFor=name=>COLORS[norm(name)]||'#c4a56b';
 const bookName=b=>b===0?'Flere bøger':`Bog ${b} · ${BOOK_TITLES[b]?.da||''}`;
 const filtered=()=>QUESTION_BANK.filter(q=>(state.book==='all'||q.book===Number(state.book))&&(state.difficulty==='all'||q.level===state.difficulty));
 function save(){if(!state)return;try{localStorage.setItem(SAVE_KEY,JSON.stringify(state));$('saveStatus').textContent='✓ Gemt på denne enhed';}catch(e){$('saveStatus').textContent='Kunne ikke gemme automatisk';}}
 function load(){try{return JSON.parse(localStorage.getItem(SAVE_KEY)||'null')}catch(e){return null}}
 function setup(){ $('setupView').classList.remove('hidden');$('gameView').classList.add('hidden');$('winnerView').classList.add('hidden'); }
 $('addPlayerBtn').onclick=()=>{const wrap=$('playerInputs');if(wrap.children.length>=8)return alert('Der kan højst være 8 spillere.');const n=wrap.children.length+1;const label=document.createElement('label');label.className='field';label.innerHTML=`<span>Spiller ${n}</span><input class="player-name" maxlength="18" placeholder="Skriv navn" autocomplete="off">`;wrap.append(label);};
 $('startBtn').onclick=()=>{const names=[...document.querySelectorAll('.player-name')].map(x=>x.value.trim()).filter(Boolean);if(names.length<2)return alert('Skriv navn på mindst to spillere.');if(new Set(names.map(norm)).size!==names.length)return alert('Hver spiller skal have sit eget navn.');const book=$('bookSelect').value,difficulty=$('difficulty').value;const pool=QUESTION_BANK.filter(q=>(book==='all'||q.book===Number(book))&&(difficulty==='all'||q.level===difficulty));if(!pool.length)return alert('Ingen spørgsmål matcher valget.');state={players:names.map(name=>({name,color:colorFor(name),score:0,coins:0,correct:0})),turn:0,round:0,correctTotal:0,book,difficulty,queue:shuffle(pool.map(q=>q.id)),used:[],currentId:null,finished:false};drawQuestion();save();$('setupView').classList.add('hidden');$('winnerView').classList.add('hidden');$('gameView').classList.remove('hidden');};
 $('saveExitBtn').onclick=()=>{save();setup();}; $('newGameBtn').onclick=()=>{localStorage.removeItem(SAVE_KEY);state=null;setup();};
 $('revealBtn').onclick=revealAnswer;
 $('correctBtn').onclick=()=>resolve(true,false);
 $('wrongBtn').onclick=()=>resolve(false,false);
 $('passBtn').onclick=()=>resolve(false,true);
 $('nextBtn').onclick=advance;
 $('choicesBtn').onclick=()=>{if(!canSpend())return;const q=current();state.players[state.turn].coins--;activeChoices=makeChoices(q);state.currentMode='coinChoices';renderChoices(activeChoices,q);$('revealArea').classList.add('hidden');$('gradeArea').classList.add('hidden');$('choicesBtn').disabled=true;$('friendBtn').disabled=true;save();renderBoard();};
 $('friendBtn').onclick=()=>{if(!canSpend())return;state.players[state.turn].coins--;state.currentMode='friend';const others=state.players.map((p,i)=>({...p,i})).filter(p=>p.i!==state.turn);$('friendArea').innerHTML=`<label class="field"><span>Hvem vil du spørge?</span><select id="friendSelect">${others.map(p=>`<option value="${p.i}">${escape(p.name)}</option>`).join('')}</select></label><p>Giv spilleren telefonen eller lad dem kigge med. De må fortælle dig svaret eller komme med deres bedste gæt.</p><button class="primary-btn" id="friendDone">Tilbage til spørgsmålet</button>`;$('friendArea').classList.remove('hidden');$('friendDone').onclick=()=>{$('friendArea').classList.add('hidden');$('revealArea').classList.remove('hidden');$('revealBtn').focus();};$('choicesBtn').disabled=true;$('friendBtn').disabled=true;save();renderBoard();};
 function current(){return QUESTION_BANK.find(q=>q.id===state.currentId);}
 function drawQuestion(){
   locked=false;activeChoices=null;
   if(!state.currentId){if(!state.queue.length){const pool=filtered().filter(q=>!state.used.includes(q.id));state.queue=shuffle(pool.map(q=>q.id));if(!state.queue.length)state.queue=shuffle(filtered().map(q=>q.id));}state.currentId=state.queue.shift();state.used.push(state.currentId);state.round++;}
   const q=current(),p=state.players[state.turn];
   $('roundLabel').textContent=`SPØRGSMÅL ${state.round}`;$('bookBadge').textContent=bookName(q.book);$('levelBadge').textContent=q.level.toLocaleUpperCase('da-DK');$('questionNumber').textContent=`NR. ${state.round}`;$('turnHeading').textContent=`${p.name} – din tur`;$('turnHeading').style.color=p.color;$('questionText').textContent=q.question;
   $('answerInstruction').textContent=q.options?.length===4?'Vælg det svar, du mener er rigtigt.':'Tænk over svaret, og tryk på “Vis svar”, når I er klar.';
   $('revealArea').classList.toggle('hidden',!!q.options?.length);$('revealBtn').disabled=false;$('gradeArea').classList.add('hidden');
   $('choicesArea').classList.add('hidden');$('choicesArea').innerHTML='';$('friendArea').classList.add('hidden');$('feedbackPanel').classList.add('hidden');
   $('passBtn').classList.remove('hidden');$('nextBtn').classList.add('hidden');$('choicesBtn').disabled=false;$('friendBtn').disabled=false;
   $('choicesBtn').classList.toggle('hidden',!!q.options?.length);
   if(q.options?.length===4){renderChoices(q.options.map((o,i)=>({da:o.da,en:o.en,index:i})),q,true);}
   else if(state.currentMode==='coinChoices'){activeChoices=makeChoices(q);renderChoices(activeChoices,q);$('revealArea').classList.add('hidden');$('choicesBtn').disabled=true;$('friendBtn').disabled=true;}
   else if(state.currentMode==='friend'){$('revealArea').classList.remove('hidden');$('choicesBtn').disabled=true;$('friendBtn').disabled=true;}
   document.querySelector('.question-card').style.setProperty('--active',p.color);renderBoard();
   if(state.currentMode==='revealed')revealAnswer();
   else if(state.currentMode==='resolved'){locked=true;$('choicesArea').classList.add('hidden');$('revealArea').classList.add('hidden');$('gradeArea').classList.add('hidden');$('passBtn').classList.add('hidden');$('nextBtn').classList.remove('hidden');showFeedback(false,'Spørgsmålet er allerede besvaret.',q);}
   save();
 }
 function renderChoices(choices,q,native=false){
   $('choicesArea').innerHTML='';
   choices.forEach((o,i)=>{const b=document.createElement('button');b.className='answer-option';b.innerHTML=`<span class="option-key">${String.fromCharCode(65+i)}</span><span class="option-copy"><span class="option-da">${escape(o.da)}</span><span class="option-en">${escape(o.en)}</span></span>`;b.onclick=()=>{const ok=native?i===q.correctIndex:o.key==='right';resolve(ok,false);};$('choicesArea').append(b);});
   $('choicesArea').classList.remove('hidden');
 }
 function renderBoard(target='scoreboard'){const board=$(target);board.innerHTML='';state.players.forEach((p,i)=>{const el=document.createElement('div');el.className='player-score'+(i===state.turn?' active':'');el.style.setProperty('--player',p.color);el.innerHTML=`<div class="player-nameplate">${escape(p.name)}${i===state.turn?' <span>DIN TUR</span>':''}</div><div class="player-points">${p.score}<small>POINT</small></div><div class="player-coins">${'🪙'.repeat(p.coins)||'—'} <small>${p.coins}/3</small></div>`;board.append(el);});$('coinStatus').textContent=`🪙 ${state.players[state.turn].coins} / 3 coins`;}
 function canSpend(){if(state.players[state.turn].coins<1){alert('Du har ingen coins. Få én for hver fem rigtige svar.');return false;}return true;}
 function makeChoices(q){
   const right={da:q.answerDa,en:q.answerEn,key:'right'};
   let pool=QUESTION_BANK.filter(x=>x.id!==q.id&&x.answerDa!==q.answerDa&&x.book===q.book);
   if(pool.length<3)pool=QUESTION_BANK.filter(x=>x.id!==q.id&&x.answerDa!==q.answerDa);
   const seen=new Set([norm(right.da)]),wrong=[];
   for(const x of shuffle(pool)){const k=norm(x.answerDa);if(!seen.has(k)){seen.add(k);wrong.push({da:x.answerDa,en:x.answerEn,key:'wrong'});}if(wrong.length===3)break;}
   return shuffle([right,...wrong]);
 }
 function revealAnswer(){if(locked)return;const q=current();$('revealArea').classList.add('hidden');$('choicesArea').classList.add('hidden');$('friendArea').classList.add('hidden');$('feedbackPanel').classList.remove('hidden','is-wrong');$('feedbackPanel').innerHTML=`<div class="answer-reveal"><div class="feedback-title">✦ Svar</div><div class="answer-main">${escape(q.answerDa)}</div>${q.answerEn&&q.answerEn!==q.answerDa?`<div class="answer-en answer-en-large">${escape(q.answerEn)}</div>`:''}<div class="answer-why">${escape(q.why||'')}</div></div>`;$('gradeArea').classList.remove('hidden');$('passBtn').classList.add('hidden');state.currentMode='revealed';save();}
 function resolve(ok,passed){
   if(locked)return;locked=true;const q=current(),p=state.players[state.turn];
   if(ok){p.score++;p.correct++;state.correctTotal++;let earned='';if(p.correct%5===0&&p.coins<3){p.coins++;earned=' Du får en coin for fem rigtige svar samlet!';}showFeedback(true,`Rigtigt!${earned}`,q);}
   else if(passed){showFeedback(false,'I sprang over.',q);}
   else{showFeedback(false,'Ikke rigtigt.',q);}
   renderBoard();$('choicesArea').classList.add('hidden');$('gradeArea').classList.add('hidden');$('revealArea').classList.add('hidden');$('friendArea').classList.add('hidden');$('passBtn').classList.add('hidden');$('nextBtn').classList.remove('hidden');$('nextBtn').textContent=state.players.some(x=>x.score>=TARGET)?'Se vinderen':'Næste spiller →';state.currentMode='resolved';save();
 }
 function showFeedback(ok,msg,q){const box=$('feedbackPanel');box.classList.remove('hidden','is-wrong');if(!ok)box.classList.add('is-wrong');box.innerHTML=`<div class="answer-reveal"><div class="feedback-title">✦ Svar</div><div class="answer-main">${escape(q.answerDa)}</div>${q.answerEn&&q.answerEn!==q.answerDa?`<div class="answer-en answer-en-large">${escape(q.answerEn)}</div>`:''}<div class="answer-status">${escape(msg)}</div><div class="answer-why">${escape(q.why||'')}</div></div>`;}
 function advance(){if(state.players.some(p=>p.score>=TARGET)){winner();return;}state.turn=(state.turn+1)%state.players.length;state.currentId=null;state.currentMode=null;drawQuestion();}
 function winner(){const champ=state.players.reduce((a,b)=>a.score>=b.score?a:b);$('gameView').classList.add('hidden');$('winnerView').classList.remove('hidden');$('winnerTitle').textContent=`${champ.name} vinder!`;$('winnerCopy').textContent=`${champ.name} nåede ${champ.score} point og blev Hogwarts Arkivs mester.`;renderBoard('finalBoard');save();}
 const oldSave=load();if(oldSave&&Array.isArray(oldSave.players)&&oldSave.players.length>=2){const b=document.createElement('button');b.className='secondary-btn';b.style.marginTop='12px';b.textContent='Fortsæt gemt spil';$('startBtn').after(b);b.onclick=()=>{state=oldSave;if(state.players.some(p=>p.score>=TARGET)){winner();}else{drawQuestion();$('setupView').classList.add('hidden');$('gameView').classList.remove('hidden');}};}
})();
