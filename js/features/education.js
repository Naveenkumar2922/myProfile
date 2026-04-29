function renderEducation() {
  const container = document.getElementById("education-container");
  if (!container) return;
  
  let html = "";
  for (let i = 0; i < educationData.length; i++) {
    const ed = educationData[i];
    html += `
      <div class="">
        <h4 class="text-xl font-bold text-gray-800">${ed.institution}</h4>
        <p class="text-md font-semibold text-grey-600">${ed.degree}</p>
        <p class="text-sm text-gray-500 mb-1">${ed.duration} ${ed.location ? ' | ' + ed.location : ''}</p>
        <p class="text-sm font-medium text-gray-700">${ed.score}</p>
      </div>
    `;
  }
  container.innerHTML = html;
}