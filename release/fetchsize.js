document.addEventListener('DOMContentLoaded', function () {
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

  const params = new URLSearchParams(location.search);
  const userRaw = params.get('u') || '';
  const user = userRaw.trim();

  // Autorise lettres/chiffres/espaces/traits, y compris accents (regex Unicode)
  const ok = /^[\p{L}\p{N} _-]{2,32}$/u.test(user);
  if (!ok) return; // ne casse pas la page si absent/invalid

  const msg = messages[Math.floor(Math.random() * messages.length)];
  const welcome = document.createElement('div');
  welcome.className = 'mono text-center mt-3 mb-6 px-4';
  welcome.innerHTML = `
    <p class="text-2xl text-blue-300 font-semibold mb-1">Welcome back, ${user}.</p>
    <p class="text-sm text-gray-400 italic">${msg}</p>
  `;

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    // Insère juste en dessous du titre
    heroTitle.insertAdjacentElement('afterend', welcome);
  }
});