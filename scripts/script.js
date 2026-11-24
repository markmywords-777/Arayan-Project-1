

const themeToggle = document.getElementById("theme-toggle");

// Get saved theme or use dark mode by default
let currentTheme = localStorage.getItem("theme") || "dark";

// Apply theme
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    const icon = themeToggle.querySelector("i");

    if (theme === "dark") {
        icon.className = "fa-solid fa-sun";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        icon.className = "fa-solid fa-moon";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}

// Set initial theme
applyTheme(currentTheme);

// Switch theme when clicked
themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(currentTheme);

    // Remember user's selected theme
    localStorage.setItem("theme", currentTheme);
});
