function renderCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container) return;

  let html = "";
  for (let i = 0; i < certificationsData.length; i++) {
    const cert = certificationsData[i];
    html += `
      <div class="mb-4">
        <h4 class="text-xl font-bold text-gray-800">• ${cert.course}</h4>
        <p class="text-md text-gray-600 ml-4">${cert.provider}</p>
      </div>
    `;
  }
  
  container.innerHTML = html;
}