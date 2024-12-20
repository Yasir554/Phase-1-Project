const BASE_URL = "https://openlibrary.org/search.json?q=";

// DOM Elements
const bookCover = document.getElementById("cover-image");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPublishedDate = document.getElementById("published-date");
const bookFirstPublishYear = document.getElementById("first-publish-year");
const bookPageCount = document.getElementById("pages");
const bookDescription = document.getElementById("description");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-item");
const themeButton = document.getElementById("theme");
const loadingMessage = document.getElementById("loading-message");

// Default query to load on page refresh
const DEFAULT_BOOK_QUERY = "harry potter";

// Fetch Book Details
async function fetchBookDetails(query) {
    try {
        const response = await fetch(`${BASE_URL}${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.docs.length === 0) {
            alert("No results found.");
            return;
        }

        const book = data.docs[0];
        populateBookDetails(book);
        localStorage.setItem("bookData", JSON.stringify(book));
    } catch (error) {
        console.error("Error fetching book details:", error);
        alert("An error occurred while fetching book details.");
    } finally {
        hideLoadingMessage();
    }
}

// Populate Book Details
function populateBookDetails(book) {
    bookCover.src = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : "./images/Placeholder.jpg";
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author(s): ${book.author_name?.join(", ") || "N/A"}`;
    bookPublishedDate.textContent = `Published Date: ${book.publish_date?.[0] || "N/A"}`;
    bookFirstPublishYear.textContent = `First Publish Year: ${book.first_publish_year || "N/A"}`;
    bookPageCount.textContent = `Pages: ${book.number_of_pages_median || "N/A"}`;
}

// Show loading message
function showLoadingMessage() {
    loadingMessage.style.display = "block";
}

// Hide loading message
function hideLoadingMessage() {
    loadingMessage.style.display = "none";
}

// Event Listeners
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) {
        alert("Please enter a book name.");
        return;
    }
    showLoadingMessage();
    fetchBookDetails(query);
});

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    themeButton.textContent = isDarkMode ? "☀️" : "🌙";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Initialize Page
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

    const savedBookData = localStorage.getItem("bookData");
    if (savedBookData) {
        // If a book is saved in localStorage, show it
        populateBookDetails(JSON.parse(savedBookData));
    } else {
        // If no saved book, load the default book
        showLoadingMessage();
        fetchBookDetails(DEFAULT_BOOK_QUERY);
    }
});


/* Happy Coding */