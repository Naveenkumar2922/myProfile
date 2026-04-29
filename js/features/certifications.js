function renderCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container) return;

  let html = "";
  for (let i = 0; i < certificationsData.length; i++) {
    const cert = certificationsData[i];
    html += `
      <div class="glass-card p-6 mb-6 text-left hover:scale-[1.03] transition-all duration-300 shadow-xl border-t border-l border-white/50 dark:border-white/20 bg-white/30 dark:bg-slate-800/40 backdrop-blur-xl">
        <h4 class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-600 flex items-center gap-2">
          <span class="text-2xl filter drop-shadow-md">📜</span> ${cert.course}
        </h4>
        <p class="text-lg font-bold text-fuchsia-600 dark:text-fuchsia-400 ml-10 mt-2">${cert.provider}</p>
      </div>
    `;
  }
  
  container.innerHTML = html;
}