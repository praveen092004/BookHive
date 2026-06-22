// Get the search and filter elements 
const searchInput = document.getElementById("search-input"); 
const categoryFilter = document.getElementById("category-filter"); 
const sortSelect = document.getElementById("sort"); 
  
// Function that filters and sorts books 
function applyFilters() { 
    let filteredBooks = [...books];  // Copy 
  
    // 1. Apply search filter 
    const searchTerm = searchInput.value.trim().toLowerCase(); 
    if (searchTerm) { 
        filteredBooks = filteredBooks.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm) 
        ); 
    } 
  
    // 2. Apply category filter 
    const selectedCategory = categoryFilter.value; 
    if (selectedCategory && selectedCategory !== "all") { 
        filteredBooks = filteredBooks.filter(book => 
            book.category === selectedCategory 
        ); 
    } 
  
    // 3. Apply sorting 
    const sortBy = sortSelect.value; 
    switch (sortBy) { 
        case "price-low": 
            filteredBooks.sort((a, b) => a.price - b.price); 
            break; 
        case "price-high": 
            filteredBooks.sort((a, b) => b.price - a.price); 
            break; 
        case "rating": 
            filteredBooks.sort((a, b) => b.rating - a.rating); 
            break; 
    } 
  
    // Re-render with filtered data 
    renderBook(filteredBooks); 
    attachAddToCartListeners();  // Re-attach to new buttons 
  
    // Show count 
    showResultCount(filteredBooks.length); 
} 

function showResultCount(count) {
    let countDisplay = document.getElementById("result-count")
    if(!countDisplay) {
        countDisplay = document.createElement("p")
        countDisplay.id = "result-count"
        countDisplay.style.textAlign = "center"
        countDisplay.style.color = "#666"
        const grid = document.getElementById("books-container")
        grid.parentNode.insertBefore(countDisplay, grid)
    }
    countDisplay.textContent = `Showing ${count} book${count !== 1 ? 's' : ''}`
}

// Attach Event Listener
searchInput.addEventListener("input", applyFilters)
categoryFilter.addEventListener("change", applyFilters)
sortSelect.addEventListener("change", applyFilters)

applyFilters()
