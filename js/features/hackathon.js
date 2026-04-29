function renderHackathons() {
  const container = document.getElementById("hackathons-container");
  if (!container) return;
  
  let html = "";
  for (let i = 0; i < hackathonData.length; i++) {
    const hack = hackathonData[i];
    html += `
      <div class="mb-4">
        <span class="text-gray-500 mt-1"></span>
        <p class="text-md text-gray-700 leading-relaxed ">• ${hack.description}</p>
      </div>
    `;
  }
  container.innerHTML = html;
}