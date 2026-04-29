function renderEducation() {
  const container = document.getElementById("education-container");
  if (!container) return;
  
  let html = "";
  for (let i = 0; i < educationData.length; i++) {
    const ed = educationData[i];
    html += `
      <div class="glass-card p-6 mb-6 text-left hover:scale-[1.03] transition-all duration-300 shadow-xl border-t border-l border-white/50 dark:border-white/20 bg-white/30 dark:bg-slate-800/40 backdrop-blur-xl">
        <h4 class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-1">${ed.institution}</h4>
        <p class="text-lg font-bold text-emerald-500 dark:text-emerald-400 mb-2">${ed.degree}</p>
        <p class="text-md text-slate-700 dark:text-slate-300 font-medium mb-2">${ed.duration} ${ed.location ? ' | ' + ed.location : ''}</p>
        <p class="text-sm font-bold text-white bg-gradient-to-r from-amber-400 to-orange-500 inline-block px-4 py-1.5 rounded-full mt-2 shadow-md">${ed.score}</p>
      </div>
    `;
  }
  container.innerHTML = html;
}