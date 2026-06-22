const books = [
    {
        id: 1,
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam",
        category: "biography",
        price: 299,
        originalPrice: 499,
        rating: 4.8,
        reviews: 2341,
        image: "images/books/wings-of-fire.png",
        description: "Autobiography of India's beloved former president.",
        inStock: true
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "fiction",
        price: 349,
        originalPrice: 499,
        rating: 4.7,
        reviews: 5012,
        image: "images/books/the-alchemist.png",
        description: "A magical story about pursuing your dreams.",
        inStock: true
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        category: "self-help",
        price: 499,
        originalPrice: 799,
        rating: 4.9,
        reviews: 8420,
        image: "images/books/atomic-habits.png",
        description: "Tiny changes, remarkable results.",
        inStock: true
    },
    {
        id: 4,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "history",
        price: 599,
        originalPrice: 899,
        rating: 4.6,
        reviews: 12450,
        image: "images/books/sapiens.png",
        description: "A brief history of humankind.",
        inStock: true
    },
    {
        id: 5,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "business",
        price: 350,
        originalPrice: 499,
        rating: 4.5,
        reviews: 6800,
        image: "images/books/rich-dad.png",
        description: "What the rich teach their kids about money.",
        inStock: true
    },
    {
        id: 6,
        title: "Five Point Someone",
        author: "Chetan Bhagat",
        category: "fiction",
        price: 199,
        originalPrice: 299,
        rating: 4.3,
        reviews: 9200,
        image: "images/books/five-point.png",
        description: "What not to do at IIT.",
        inStock: false
    },
    {
        id: 7,
        title: "The Power of Subconscious Mind",
        author: "Joseph Murphy",
        category: "self-help",
        price: 249,
        originalPrice: 399,
        rating: 4.6,
        reviews: 4100,
        image: "images/books/subconscious.png",
        description: "Unlock the power within you.",
        inStock: true
    },
    {
        id: 8,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "business",
        price: 299,
        originalPrice: 499,
        rating: 4.7,
        reviews: 7300,
        image: "images/books/think-grow.png",
        description: "The classic guide to success.",
        inStock: true
    },
    {
        id: 9,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "business",
        price: 399,
        originalPrice: 599,
        rating: 4.8,
        reviews: 9540,
        image: "images/books/psychology-money.png",
        description: "Timeless lessons on wealth, greed, and happiness.",
        inStock: true
    },
    {
        id: 10,
        title: "Ikigai",
        author: "Héctor García",
        category: "self-help",
        price: 299,
        originalPrice: 499,
        rating: 4.7,
        reviews: 11200,
        image: "images/books/ikigai.png",
        description: "The Japanese secret to a long and happy life.",
        inStock: true
    },
    {
        id: 11,
        title: "Can't Hurt Me",
        author: "David Goggins",
        category: "biography",
        price: 450,
        originalPrice: 699,
        rating: 4.9,
        reviews: 7890,
        image: "images/books/cant-hurt-me.png",
        description: "Master your mind and defy the odds.",
        inStock: true
    },
    {
        id: 12,
        title: "The Midnight Library",
        author: "Matt Haig",
        category: "fiction",
        price: 320,
        originalPrice: 499,
        rating: 4.5,
        reviews: 6410,
        image: "images/books/midnight-library.png",
        description: "Between life and death there is a library of second chances.",
        inStock: true
    },
    {
        id: 13,
        title: "Shoe Dog",
        author: "Phil Knight",
        category: "business",
        price: 499,
        originalPrice: 799,
        rating: 4.8,
        reviews: 5230,
        image: "images/books/shoe-dog.png",
        description: "A memoir by the creator of Nike.",
        inStock: true
    },
    {
        id: 14,
        title: "Deep Work",
        author: "Cal Newport",
        category: "self-help",
        price: 399,
        originalPrice: 599,
        rating: 4.6,
        reviews: 4850,
        image: "images/books/deep-work.png",
        description: "Rules for focused success in a distracted world.",
        inStock: false
    },
    {
        id: 15,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "education",
        price: 349,
        originalPrice: 499,
        rating: 4.7,
        reviews: 8120,
        image: "images/books/history-time.png",
        description: "A landmark volume exploring the mysteries of the universe.",
        inStock: true
    },
    {
        id: 16,
        title: "The Palace of Illusions",
        author: "Chitra Banerjee Divakaruni",
        category: "fiction",
        price: 299,
        originalPrice: 450,
        rating: 4.6,
        reviews: 3920,
        image: "images/books/palace-illusions.png",
        description: "The Mahabharata retold from Draupadi's perspective.",
        inStock: true
    },
    {
        id: 17,
        title: "An Era of Darkness",
        author: "Shashi Tharoor",
        category: "history",
        price: 425,
        originalPrice: 699,
        rating: 4.5,
        reviews: 2110,
        image: "images/books/era-darkness.png",
        description: "An unsparing look at the devastating effects of British rule in India.",
        inStock: true
    },
    {
        id: 18,
        title: "Zero to One",
        author: "Peter Thiel",
        category: "business",
        price: 380,
        originalPrice: 550,
        rating: 4.6,
        reviews: 5900,
        image: "images/books/zero-to-one.png",
        description: "Notes on startups, or how to build the future.",
        inStock: true
    }
];

const booksContainer = document.getElementById('books-container')


// All Books
function createBookCard(book) {
    return `
        <article class="book-card" data-id="${book.id}">
            <img src="${book.image}" alt="${book.title}" loading="lazy">
            <h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="rating">⭐${book.rating} (${book.reviews} reviews) </p>
            <p class="price">
                    ₹${book.price}
                    <small><s>₹${book.originalPrice}</s></small>
            </p>
            <button
                class="add-to-cart"
                data-id="${book.id}"
                ${!book.inStock ? "disabled" : ""}
            >
                ${book.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
        </article>
    `
}

function renderBook(bookList) {
    if (!booksContainer) return;

    const allHTML = bookList.map(book => createBookCard(book)).join("")

    booksContainer.innerHTML = allHTML
}

renderBook(books)