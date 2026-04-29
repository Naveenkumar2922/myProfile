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
            btn.className = `px-4 py-2 ${category === "All" ? "glass-button !bg-red-600 text-white font-black shadow-[0_0_15px_rgba(220,38,38,0.5)] border-red-500" : "glass-button text-red-600 dark:text-red-400"} rounded-xl font-bold transition-all`;
            btn.textContent = category;
            
            btn.addEventListener("click", () => {
                currentCategory = category;
                // update active state
                Array.from(skillsFilters.children).forEach(child => {
                    child.className = `px-4 py-2 glass-button text-red-600 dark:text-red-400 rounded-xl font-bold transition-all`;
                });
                btn.className = `px-4 py-2 glass-button !bg-red-600 text-white font-black shadow-[0_0_15px_rgba(220,38,38,0.5)] border-red-500 rounded-xl transition-all`;
                
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
            card.className = "p-8 text-center glass-card hover:scale-[1.05] transition-all duration-300 shadow-xl border-t border-l border-white/50 dark:border-white/20 bg-white/30 dark:bg-slate-800/40 backdrop-blur-xl group";

            //create icon
            const iconBox = document.createElement("div");
            iconBox.className = "w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-600 to-orange-500 shadow-[0_0_25px_rgba(239,68,68,0.6)] border border-red-400/50 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300";

            //create icon text
            const iconText = document.createElement("span");
            iconText.className = "text-3xl text-white font-black drop-shadow-md";
            iconText.textContent = skill.shortLabel;

            //Put icon text inside icon box
            iconBox.appendChild(iconText);

            // create skill name 
            const skillName = document.createElement("h3");
            skillName.className = "text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500 dark:from-red-500 dark:to-orange-400 mb-2 drop-shadow-sm";
            skillName.textContent = skill.name;

            //create skill desc
            const skillDescription = document.createElement("p");
            skillDescription.className = "text-md text-slate-700 dark:text-slate-300 font-medium";
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