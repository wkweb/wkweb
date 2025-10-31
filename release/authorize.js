(function() {
  // ---- Liste de messages inspirés du projet Wake / JIT ----
  const messages = [
    "Your code awakens instantly — no builds, no wait.",
    "Welcome to the future of live C development.",
    "Every keystroke is alive — just like your ideas.",
    "You’re part of the first generation of live coders.",
    "Where imagination meets execution — instantly.",
    "Wake compiles your thoughts as fast as you think.",
    "Real C. Real speed. No excuses.",
    "Your keyboard is now a JIT engine.",
    "No more rebuilds — just pure creation.",
    "Instant feedback. Infinite flow. Wake up your code."
  ];

  // ---- Récupération du nom depuis l’URL ----
  const params = new URLSearchParams(location.search);
  const user = params.get("u");

  // ---- Vérification et affichage ----
  const container = document.createElement("div");
container.className = "mono text-center mt-7 mb-5 px-4";


  if (user && /^[A-Za-z0-9 _-]{2,32}$/.test(user)) {
    // Message aléatoire
    container.innerHTML = `
      <p class="text-2xl text-blue-300 font-semibold mb-2">
        <span id="welcome-typed" class="mono"></span><span id="welcome-cursor" class="cursor">|</span>
      </p>
      <p class="text-sm text-gray-400 italic">
        <span id="subtitle-typed"></span><span id="subtitle-cursor" class="cursor">|</span>
      </p>
    `;
  } else {
    // Page non autorisée
    document.body.innerHTML = `
      <div style="text-align:center;margin-top:20vh;font-family:'JetBrains Mono',monospace;">
        <h2 style="color:#f66;">Unauthorized access</h2>
        <p style="color:#aaa;">This download link is reserved for Wake community members.</p>
      </div>`;
    throw new Error("Unauthorized");
  }

  // ---- Insertion juste après le header ----
  const header = document.getElementById("console-strip");
  header.insertAdjacentElement("afterend", container);

  // ---- Masquer le curseur du sous-titre au début ----
  if (user && /^[A-Za-z0-9 _-]{2,32}$/.test(user)) {
    const subCursor = container.querySelector('#subtitle-cursor');
    if (subCursor) subCursor.style.visibility = 'hidden';
  }

  // ---- Style curseur bleu (blink) ----
  (function ensureCursorStyle(){
    if (document.getElementById('auth-cursor-style')) return;
    const style = document.createElement('style');
    style.id = 'auth-cursor-style';
    style.textContent = `@keyframes blink{50%{opacity:0}} .cursor{display:inline-block;width:1ch;color:#2196f3;animation:blink 1s step-end infinite}`;
    document.head.appendChild(style);
  })();

  // ---- Helpers ----
  function typeOut(el, text, speed){
    el.textContent = '';
    return new Promise(res => {
      let i = 0;
      (function tick(){
        if (i <= text.length){
          el.textContent = text.slice(0, i);
          i++;
          setTimeout(tick, speed);
        } else res();
      })();
    });
  }
  function delOut(el, text, speed){
    return new Promise(res => {
      (function tick(t){
        if (t.length){
          el.textContent = t.slice(0, -1);
          setTimeout(() => tick(t.slice(0, -1)), speed);
        } else res();
      })(text);
    });
  }
  function makePicker(list){
    let last = -1;
    return function(){
      if (!list.length) return '';
      let i = Math.floor(Math.random()*list.length);
      if (list.length>1){ while(i===last) i = Math.floor(Math.random()*list.length); }
      last = i; return list[i];
    }
  }

  // ---- Séquence: titre, puis sous-titre en boucle ----
  (async function runSequence(){
    if (!(user && /^[A-Za-z0-9 _-]{2,32}$/.test(user))) return;
    const welcomeEl = container.querySelector('#welcome-typed');
    const welcomeCursor = container.querySelector('#welcome-cursor');
    const subEl = container.querySelector('#subtitle-typed');
    const subCursor = container.querySelector('#subtitle-cursor');
    if (!welcomeEl || !subEl) return;

    const titleText = `> Welcome back, ${user}.`;
    const titleSpeed = 45, subType = 55, subDel = 35, hold = 1500;

    if (welcomeCursor) welcomeCursor.style.visibility = 'visible';
    await typeOut(welcomeEl, titleText, titleSpeed);
    if (welcomeCursor) welcomeCursor.style.visibility = 'hidden';
    
    // Petite pause avant de "changer de ligne"
    await new Promise(r => setTimeout(r, 200));
    
    if (subCursor) subCursor.style.visibility = 'visible';
    const pick = makePicker(messages);
    (async function loop(){
      const next = pick();
      await typeOut(subEl, next, subType);
      await new Promise(r => setTimeout(r, hold));
      await delOut(subEl, next, subDel);
      await new Promise(r => setTimeout(r, 250));
      loop();
    })();
  })();
})();
