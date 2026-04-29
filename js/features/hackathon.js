function renderHackathons() {
  const container = document.getElementById("hackathons-container");
  if (!container) return;
  
  let html = "";
  for (let i = 0; i < hackathonData.length; i++) {
    const hack = hackathonData[i];
    html += `
      <div class="glass-card p-6 mb-6 text-left hover:scale-[1.03] transition-all duration-300 shadow-xl border-t border-l border-white/50 dark:border-white/20 bg-white/30 dark:bg-slate-800/40 backdrop-blur-xl flex items-start gap-4">
        <span class="text-3xl filter drop-shadow-md mt-1 animate-bounce">🏆</span>
        <p class="text-lg text-slate-800 dark:text-slate-100 leading-relaxed font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500">${hack.description}</p>
      </div>
    `;
  }
  container.innerHTML = html;
}