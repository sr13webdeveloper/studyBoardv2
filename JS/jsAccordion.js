function toggleAccordion(event) {
    const button = event.currentTarget;
    const panel = button.nextElementSibling;
    
    // Collapse all other accordions
    const allPanels = document.querySelectorAll('.panel');
    allPanels.forEach(otherPanel => {
        if (otherPanel !== panel) {
            otherPanel.style.display = "none";
        }
    });
    
    // Expand the clicked accordion's panel
    if (panel.style.display === "block") {
        // Do nothing to prevent collapsing the current accordion
        return;
    } else {
        panel.style.display = "block";
    }

    // Optionally auto-click the first link in the expanded accordion
    const firstLink = panel.querySelector('.navbarLinks');
    if (firstLink) {
        firstLink.click();
    }
}

function collapseAccordion() {
    const allPanels = document.querySelectorAll('.panel');
    allPanels.forEach(panel => {
        panel.style.display = "none";
    });
}