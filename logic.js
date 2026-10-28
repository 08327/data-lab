// Select all sidebar navigation links.
const navItems = document.querySelectorAll(".nav-item");

// Select the main content area and page title.
const pageContent = document.getElementById("page-content");
const pageTitle = document.getElementById("page-title");

// Define the content for each page.
const pages = {
    graph: {
        title: "Data Graph",
        heading: "Test sentence 1"
    },

    probability: {
        title: "Probability",
        heading: "test "
    }
};

// Listen for clicks on the sidebar.
navItems.forEach((item) => {

    item.addEventListener("click", (event) => {

        event.preventDefault();

        // Identify the selected page.
        const pageName = item.dataset.page;
        const page = pages[pageName];

        if (!page) return;

        // Update the active sidebar link.
        navItems.forEach((navItem) => {
            navItem.classList.remove("active");
        });

        item.classList.add("active");

        // Update the page title and content.
        pageTitle.textContent = page.title;
        pageContent.innerHTML = `<h1>${page.heading}</h1>`;

        // Update the browser URL without reloading.
        history.replaceState(null, "", `#${pageName}`);
    });

});