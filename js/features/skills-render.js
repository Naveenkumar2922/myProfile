function renderSkills() {
    const skillsContainer = document.getElementById("skills-container");
    const skillsFilters = document.getElementById("skills-filters");

    if (!skillsContainer) {
        console.log("Skills container not found");
        return;
    }

    let currentCategory = "All";
    
    // Generate filter buttons if container exists
    if (skillsFilters) {
        skillsFilters.innerHTML = "";
        const categories = ["All", ...new Set(skillsData.map(s => s.category).filter(Boolean))];
        
        categories.forEach(category => {
            const btn = document.createElement("button");
            btn.className = `px-4 py-2 ${category === "All" ? "bg-blue-600 text-white" : "bg-white text-blue-600"} rounded font-bold shadow hover:bg-blue-500 hover:text-white transition-colors`;
            btn.textContent = category;
            
            btn.addEventListener("click", () => {
                currentCategory = category;
                // update active state
                Array.from(skillsFilters.children).forEach(child => {
                    child.className = `px-4 py-2 bg-white text-blue-600 rounded font-bold shadow hover:bg-blue-500 hover:text-white transition-colors`;
                });
                btn.className = `px-4 py-2 bg-blue-600 text-white rounded font-bold shadow hover:bg-blue-500 hover:text-white transition-colors`;
                
                renderFilteredSkills();
            });
            skillsFilters.appendChild(btn);
        });
    }

    function renderFilteredSkills() {
        skillsContainer.innerHTML = "";
        
        const filtered = currentCategory === "All" ? skillsData : skillsData.filter(s => s.category === currentCategory);

        filtered.forEach(function (skill) {
            //to create outer card
            const card = document.createElement("div");
            card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

            //create icon
            const iconBox = document.createElement("div");
            iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

            //create icon text
            const iconText = document.createElement("span");
            iconText.className = "text-2xl text-white font-bold";
            iconText.textContent = skill.shortLabel;

            //Put icon text inside icon box
            iconBox.appendChild(iconText);

            // create skill name 
            const skillName = document.createElement("h3");
            skillName.className = "text-xl font-bold mb-2";
            skillName.textContent = skill.name;

            //create skill desc
            const skillDescription = document.createElement("p");
            skillDescription.className = "text-sm text-gray-600";
            skillDescription.textContent = skill.description;

            // Append all child elements to card
            card.appendChild(iconBox);
            card.appendChild(skillName);
            card.appendChild(skillDescription);

            //Append card to skills container
            skillsContainer.appendChild(card);
        });
    }

    renderFilteredSkills();
    console.log("Skills rendered successfully");
}