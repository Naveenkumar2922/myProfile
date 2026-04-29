function renderExperience() {
  const container = document.getElementById("experience-container");
  if (!container) return;
  
  let html = "";
  for (let i = 0; i < experienceData.length; i++) {
    const exp = experienceData[i];
    html += `
      <div class="glass-card p-6 mb-6 text-left hover:scale-[1.03] transition-all duration-300 shadow-xl border-t border-l border-white/50 dark:border-white/20 bg-white/30 dark:bg-slate-800/40 backdrop-blur-xl">
        <h4 class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-2">${exp.role}</h4>
        <p class="text-lg text-slate-800 dark:text-slate-100 mt-2 font-medium">${exp.description}</p>
      </div>
    `;
  }
  container.innerHTML = html;
}