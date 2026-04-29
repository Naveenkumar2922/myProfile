function renderAboutMe() {
  const container = document.getElementById("about-container");
  if (!container) return;

  container.innerHTML = `
    <p class="text-xl text-600 dark:text-300 mx-auto text-left md:text-center leading-relaxed text-gray-700">
      ${aboutMeData}
    </p>
  `;
}