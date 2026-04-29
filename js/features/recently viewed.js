function initRecentlyViewed() {
    const container = document.getElementById("recently-viewed-container");
    if (!container) return;

    let viewedIds = [];
    try {
        viewedIds = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    } catch (e) {
        console.error("Error parsing recentlyViewed from localStorage", e);
    }

    if (viewedIds.length === 0) return;

    // Unhide the container
    container.classList.remove("hidden");
    
    // Create header
    const header = document.createElement("h3");
    header.className = "text-2xl font-bold mb-6 text-center";
    header.textContent = "Recently Viewed Projects";
    container.appendChild(header);

    // Create cards container
    const cardsGrid = document.createElement("div");
    cardsGrid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
    
    viewedIds.forEach(id => {
        const project = projectsData.find(p => p.id === id);
        if (!project) return;

        const card = document.createElement("div");
        card.className = "px-8 py-6 text-center bg-gray-50 rounded-3xl shadow border cursor-pointer";

        const title = document.createElement("h4");
        title.className = "text-lg font-bold mb-2";
        title.textContent = project.name;

        const category = document.createElement("span");
        category.className = "text-sm text-blue-600 block mb-2";
        category.textContent = project.category;

        card.appendChild(title);
        card.appendChild(category);
        cardsGrid.appendChild(card);
    });

    container.appendChild(cardsGrid);
}