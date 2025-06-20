// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Search bar functionality
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-bar button");

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query !== "") {
      alert(`You searched for: "${query}"`);
      // In real project: window.location.href = `/search?q=${encodeURIComponent(query)}`;
    } else {
      alert("Please type something to search.");
    }
  });

  // Handle category clicks
  const categories = document.querySelectorAll(".category");
  categories.forEach(category => {
    category.addEventListener("click", () => {
      const name = category.querySelector("p").innerText;
      alert(`You clicked on: ${name}`);
      // In real project: window.location.href = `/category/${name.toLowerCase().replace(/\s+/g, "-")}`;
    });
  });

  // Chat button (example)
  const chatLink = document.querySelector('nav a[href="#"]:nth-child(4)');
  chatLink.addEventListener("click", () => {
    alert("Chat feature coming soon! You can contact me on WhatsApp for now.");
    // Example: window.open("https://wa.me/94770700101", "_blank");
  });

});
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-bar button");

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query !== "") {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(googleSearchUrl, "_blank"); // Opens in a new tab
    } else {
      alert("Please type something to search.");
    }
  });
});