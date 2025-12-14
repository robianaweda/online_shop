// Product Data
const products = [
    // Al-Qur'an
    {
        id: 1,
        name: "Al-Qur'an Tajwid",
        category: "alquran",
        price: 125000,
        description: "Al-Qur'an dengan panduan tajwid warna, ukuran A5",
        icon: "fas fa-book-quran",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Al-Qur'an Terjemah",
        category: "alquran",
        price: 150000,
        description: "Al-Qur'an terjemah bahasa Indonesia lengkap",
        icon: "fas fa-book-quran",
        badge: null
    },
    {
        id: 3,
        name: "Al-Qur'an Mini",
        category: "alquran",
        price: 75000,
        description: "Al-Qur'an praktis ukuran saku untuk traveling",
        icon: "fas fa-book-quran",
        badge: "New"
    },
    {
        id: 4,
        name: "Al-Qur'an Rainbow",
        category: "alquran",
        price: 200000,
        description: "Al-Qur'an tajwid dengan warna rainbow premium",
        icon: "fas fa-book-quran",
        badge: "Premium"
    },

    // Kitab
    {
        id: 5,
        name: "Shahih Bukhari",
        category: "kitab",
        price: 350000,
        description: "Kitab hadis Shahih Bukhari lengkap 9 jilid",
        icon: "fas fa-book",
        badge: "Best Seller"
    },
    {
        id: 6,
        name: "Shahih Muslim",
        category: "kitab",
        price: 320000,
        description: "Kitab hadis Shahih Muslim lengkap",
        icon: "fas fa-book",
        badge: null
    },
    {
        id: 7,
        name: "Riyadhus Shalihin",
        category: "kitab",
        price: 95000,
        description: "Taman orang-orang shalih, terjemahan lengkap",
        icon: "fas fa-book",
        badge: null
    },
    {
        id: 8,
        name: "Fiqih Sunnah",
        category: "kitab",
        price: 180000,
        description: "Fiqih Sunnah karya Sayyid Sabiq 5 jilid",
        icon: "fas fa-book",
        badge: "Popular"
    },
    {
        id: 9,
        name: "Bulughul Maram",
        category: "kitab",
        price: 85000,
        description: "Kumpulan hadis hukum dengan terjemahan",
        icon: "fas fa-book",
        badge: null
    },

    // Sajadah
    {
        id: 10,
        name: "Sajadah Turkey Premium",
        category: "sajadah",
        price: 165000,
        description: "Sajadah import Turkey motif masjid Nabawi",
        icon: "fas fa-pray",
        badge: "Premium"
    },
    {
        id: 11,
        name: "Sajadah Portable",
        category: "sajadah",
        price: 45000,
        description: "Sajadah lipat praktis dengan tas",
        icon: "fas fa-pray",
        badge: null
    },
    {
        id: 12,
        name: "Sajadah Anak",
        category: "sajadah",
        price: 35000,
        description: "Sajadah dengan motif edukatif untuk anak",
        icon: "fas fa-pray",
        badge: "New"
    },
    {
        id: 13,
        name: "Sajadah Tebal Empuk",
        category: "sajadah",
        price: 125000,
        description: "Sajadah tebal dan empuk, nyaman untuk sujud",
        icon: "fas fa-pray",
        badge: "Best Seller"
    },

    // Pakaian
    {
        id: 14,
        name: "Sarung Atlas Premium",
        category: "pakaian",
        price: 185000,
        description: "Sarung motif tradisional kualitas premium",
        icon: "fas fa-tshirt",
        badge: "Premium"
    },
    {
        id: 15,
        name: "Sarung Wadimor",
        category: "pakaian",
        price: 95000,
        description: "Sarung Wadimor original berbagai motif",
        icon: "fas fa-tshirt",
        badge: null
    },
    {
        id: 16,
        name: "Koko Putih Lengan Panjang",
        category: "pakaian",
        price: 145000,
        description: "Baju koko lengan panjang bahan katun premium",
        icon: "fas fa-tshirt",
        badge: "Best Seller"
    },
    {
        id: 17,
        name: "Gamis Pria Dewasa",
        category: "pakaian",
        price: 215000,
        description: "Gamis pria bahan katun premium nyaman",
        icon: "fas fa-tshirt",
        badge: null
    },
    {
        id: 18,
        name: "Peci Songkok Hitam",
        category: "pakaian",
        price: 35000,
        description: "Peci songkok hitam polos kualitas terbaik",
        icon: "fas fa-tshirt",
        badge: null
    },

    // Aksesori
    {
        id: 19,
        name: "Tasbih Kayu 99",
        category: "aksesori",
        price: 55000,
        description: "Tasbih kayu kokka 99 butir premium",
        icon: "fas fa-hand-holding-heart",
        badge: null
    },
    {
        id: 20,
        name: "Tasbih Digital",
        category: "aksesori",
        price: 45000,
        description: "Tasbih digital counter otomatis dengan LED",
        icon: "fas fa-hand-holding-heart",
        badge: "New"
    },
    {
        id: 21,
        name: "Jam Adzan Digital",
        category: "aksesori",
        price: 275000,
        description: "Jam adzan digital dengan arah kiblat",
        icon: "fas fa-hand-holding-heart",
        badge: "Popular"
    },
    {
        id: 22,
        name: "Mukenah Dewasa",
        category: "aksesori",
        price: 125000,
        description: "Mukenah katun jepang motif cantik",
        icon: "fas fa-hand-holding-heart",
        badge: null
    },
    {
        id: 23,
        name: "Al-Ma'tsurat Saku",
        category: "aksesori",
        price: 25000,
        description: "Buku doa Al-Ma'tsurat ukuran saku",
        icon: "fas fa-hand-holding-heart",
        badge: null
    },
    {
        id: 24,
        name: "Parfum Arab Non Alkohol",
        category: "aksesori",
        price: 85000,
        description: "Parfum minyak wangi non alkohol 12ml",
        icon: "fas fa-hand-holding-heart",
        badge: "Best Seller"
    }
];

// Shopping Cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const categoryCards = document.querySelectorAll('.category-card');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCart();
    setupEventListeners();
    loadCartFromStorage();
});

// Display Products
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #999;">Tidak ada produk ditemukan</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    ];

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    card.innerHTML = `
        <div class="product-image" style="background: ${randomGradient}">
            <i class="${product.icon}"></i>
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">${formatPrice(product.price)}</span>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i>
                </button>
            </div>
        </div>
    `;

    return card;
}

// Get Category Name
function getCategoryName(category) {
    const categories = {
        'alquran': 'Al-Qur\'an',
        'kitab': 'Kitab',
        'sajadah': 'Sajadah',
        'pakaian': 'Pakaian',
        'aksesori': 'Aksesori'
    };
    return categories[category] || category;
}

// Format Price
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    saveCartToStorage();
    showNotification('Produk ditambahkan ke keranjang!');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCartToStorage();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
            saveCartToStorage();
        }
    }
}

// Update Cart Display
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Keranjang belanja kosong</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <i class="${item.icon}"></i>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

// Filter Products by Category
function filterProducts(category) {
    let filtered = products;

    if (category !== 'all') {
        filtered = products.filter(p => p.category === category);
    }

    displayProducts(filtered);
}

// Search Products
function searchProducts(query) {
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        getCategoryName(p.category).toLowerCase().includes(query.toLowerCase())
    );

    displayProducts(filtered);
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart Modal
    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Category Filter
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const category = card.dataset.category;
            filterProducts(category);
        });
    });

    // Search
    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });

    // Smooth Scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Checkout Button
    document.querySelector('.btn-checkout').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Keranjang belanja masih kosong!');
            return;
        }

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemsList = cart.map(item => `- ${item.name} (${item.quantity}x)`).join('\n');

        alert(`Terima kasih telah berbelanja di Ramadhan Mall!\n\nRincian Pesanan:\n${itemsList}\n\nTotal: ${formatPrice(total)}\n\nPesanan Anda akan segera diproses.`);

        // Clear cart after checkout
        cart = [];
        updateCart();
        saveCartToStorage();
        cartModal.classList.remove('active');
    });
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Local Storage
function saveCartToStorage() {
    localStorage.setItem('ramadhanMallCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('ramadhanMallCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Scroll Effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.padding = '1rem 0';
    }
});
