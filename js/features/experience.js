function renderExperience() {
  const container = document.getElementById("experience-container");
  if (!container) return;
  
  let html = "";
  for (let i = 0; i < experienceData.length; i++) {
    const exp = experienceData[i];
    html += `
      <div class="">
        <h4 class="text-xl font-bold text-gray-800">${exp.role}</h4>
        <p class="text-md text-gray-700 mt-1">${exp.description}</p>
      </div>
    `;
  }
  container.innerHTML = html;
}