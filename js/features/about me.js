function renderAboutMe() {
  const container = document.getElementById("about-container");
  if (!container) return;

  container.innerHTML = `
    <p class="text-xl text-gray-700 dark:text-gray-200 mx-auto text-left md:text-center leading-relaxed font-medium">
      ${aboutMeData}
    </p>
  `;
}