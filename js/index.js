const dropdown = document.querySelector('.nav-bar [href="javascript:void(0)"]');
dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.nextElementSibling.classList.toggle("show");
    // if (!dropdown.nextElementSibling.classList.contains('show'))
    setTimeout(() => {
        document.addEventListener("click", auxClick);
    });

    function auxClick(e) {
        const path = e.path || e.composedPath();
        for (let i = 0; i < path.length - 2; i++) {
            if (path[i] == dropdown) return;
        }
        dropdown.nextElementSibling.classList.remove("show");
        document.removeEventListener("click", auxClick);
    }
});

const mobilToggle = document.querySelector(".mobileToggle");
mobilToggle.addEventListener("click", () => {
    mobilToggle.nextElementSibling.classList.add("show");
    mobilToggle.nextElementSibling.classList.remove("animOff");
    if (!document.onclick) {
        setTimeout(() => {
            document.onclick = (e) => {
                const path = e.path || e.composedPath();
                for (let i = 0; i < path.length - 2; i++) {
                    if (path[i].classList.contains("mobileDropPar")) return;
                }
                console.log("here");
                mobilToggle.nextElementSibling.classList.add("animOff");
                document.onclick = null;
            };
        });
    }
});

const mobileCancel = document.querySelector(".mobileCancel");
mobileCancel.addEventListener("click", (e) => {
    mobileCancel.parentElement.classList.add("animOff");
    document.onclick = null;
});