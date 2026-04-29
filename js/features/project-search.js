function searchProjects() {
    const projectsContainer = document.getElementById("projects-container");
    const searchInput = document.getElementById("project-search");
    const sortSelect = document.getElementById("project-sort");
    const filtersContainer = document.getElementById("project-filters");
    const countDisplay = document.getElementById("project-count");

    if (!projectsContainer) return;

    let currentCategory = "All";
    let searchQuery = "";
    let currentSort = "default";

    // 1. Generate category buttons
    const categories = ["All", ...new Set(projectsData.map(p => p.category))];
    
    filtersContainer.innerHTML = "";
    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = `px-4 py-2 rounded-full font-bold transition-colors ${category === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`;
        btn.textContent = category;
        btn.addEventListener("click", () => {
            currentCategory = category;
            
            // Update active state
            Array.from(filtersContainer.children).forEach(child => {
                child.className = `px-4 py-2 rounded-full font-bold transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300`;
            });
            btn.className = `px-4 py-2 rounded-full font-bold transition-colors bg-blue-600 text-white`;
            
            renderProjects();
        });
        filtersContainer.appendChild(btn);
    });

    // 2. Event Listeners for Search and Sort
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderProjects();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            renderProjects();
        });
    }

    // 3. Render Projects Function
    function renderProjects() {
        projectsContainer.innerHTML = "";
        
        // Filter
        let filtered = projectsData.filter(project => {
            const matchesCategory = currentCategory === "All" || project.category === currentCategory;
            const matchesSearch = project.name.toLowerCase().includes(searchQuery) || project.description.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        // Sort
        if (currentSort === "a-z") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (currentSort === "z-a") {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        } else {
            // Restore default sorting by ID
            filtered.sort((a, b) => a.id - b.id);
        }

        // Update Count
        if (countDisplay) {
            countDisplay.textContent = `${filtered.length} project${filtered.length !== 1 ? 's' : ''} found`;
        }

        // Build HTML
        filtered.forEach(project => {
            const card = document.createElement("div");
            card.className = "px-8 py-6 text-center bg-white rounded-3xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow";
            
            // Handle Recently Viewed Storage
            card.addEventListener("click", () => {
                let viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
                // remove if already exists to move it to the top
                viewed = viewed.filter(id => id !== project.id);
                viewed.unshift(project.id);
                // Keep only last 3
                if (viewed.length > 3) viewed.pop();
                localStorage.setItem('recentlyViewed', JSON.stringify(viewed));
            });

            const iconBox = document.createElement("div");
            iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";
            const iconText = document.createElement("span");
            iconText.className = "text-2xl text-white font-bold";
            iconText.textContent = project.id;
            iconBox.appendChild(iconText);

            const projectName = document.createElement("h3");
            projectName.className = "text-xl font-bold mb-2";
            projectName.textContent = project.name;

            const projectCategory = document.createElement("span");
            projectCategory.className = "text-sm font-semibold block mb-2 text-blue-600";
            projectCategory.textContent = project.category;

            // Expand/Collapse Description
            const descContainer = document.createElement("div");
            descContainer.className = "mb-4 text-sm text-gray-700";
            
            const shortDesc = project.description.length > 60 ? project.description.slice(0, 60) + "..." : project.description;
            const descText = document.createElement("p");
            descText.textContent = shortDesc;
            descContainer.appendChild(descText);

            if (project.description.length > 60) {
                const toggleBtn = document.createElement("button");
                toggleBtn.textContent = "View More";
                toggleBtn.className = "text-blue-500 font-bold mt-1 hover:underline text-xs";
                
                let isExpanded = false;
                toggleBtn.addEventListener("click", (e) => {
                    e.stopPropagation(); // prevent card click
                    isExpanded = !isExpanded;
                    descText.textContent = isExpanded ? project.description : shortDesc;
                    toggleBtn.textContent = isExpanded ? "View Less" : "View More";
                });
                descContainer.appendChild(toggleBtn);
            }

            const techSpan = document.createElement("div");
            techSpan.className = "mb-4";
            if (project.technologies) {
                project.technologies.forEach(tech => {
                    const t = document.createElement("span");
                    t.className = "px-3 py-1 text-xs font-bold rounded-full bg-gray-200 inline-block m-1";
                    t.textContent = tech;
                    techSpan.appendChild(t);
                });
            }

            const projectStatus = document.createElement("span");
            projectStatus.className = "text-xs font-bold uppercase px-2 py-1 rounded bg-green-200 text-green-800";
            projectStatus.textContent = project.status;

            card.appendChild(iconBox);
            card.appendChild(projectName);
            card.appendChild(projectCategory);
            card.appendChild(descContainer);
            card.appendChild(techSpan);
            card.appendChild(projectStatus);

            projectsContainer.appendChild(card);
        });
    }

    // Initial render
    renderProjects();
}