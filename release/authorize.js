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
    const msg = messages[Math.floor(Math.random() * messages.length)];
    container.innerHTML = `
      <p class="text-2xl text-blue-300 font-semibold mb-2"><span id="welcome-typed" class="mono"></span></p>
      <p class="text-sm text-gray-400 italic">${msg}</p>
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

  // ---- Typewriter pour "Welcome back, <user>" ----
  if (user && /^[A-Za-z0-9 _-]{2,32}$/.test(user)) {
    const target = container.querySelector('#welcome-typed');
    if (target) {
      const text = `> Welcome back, ${user}.`;
      let idx = 0;
      const speed = 45; // ms/char
      const type = () => {
        if (idx <= text.length) {
          target.textContent = text.slice(0, idx);
          idx++;
          setTimeout(type, speed);
        }
      };
      type();
    }
  }
})();
