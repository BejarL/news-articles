window.addEventListener('load', initialize);

// Initialization Function
function initialize() {
    loadArticles();
    initializeMap();
    fetchNews();
}

// Article Management
function loadArticles() {
    const articles = [
        { title: "The History of Palestine", content: "Detailed article about the history." },
        { title: "Current Events", content: "Latest news from Palestine." }
    ];
    const articlesContainer = document.getElementById('articlesDisplay');
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        articlesContainer.appendChild(articleElement);
    });
}

function searchArticles() {
    const searchValue = document.getElementById('searchBox').value.toLowerCase();
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        article.style.display = title.includes(searchValue) ? 'block' : 'none';
    });
}

function showHistory() {
    document.getElementById('articles').style.display = 'none';
    document.getElementById('historySection').style.display = 'block';
    document.getElementById('currentEventsSection').style.display = 'none';
}

// Function to show the current events section and hide other sections
function showCurrentEvents() {
    document.getElementById('articles').style.display = 'none';
    document.getElementById('historySection').style.display = 'none';
    document.getElementById('currentEventsSection').style.display = 'block';
}

function filterArticles(category) {
    const articles = [
        { title: "The History of Palestine", content: "Detailed article about the history.", category: 'history' },
        { title: "Current Events", content: "Latest news from Palestine.", category: 'current' }
    ];
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = '';
    const filteredArticles = articles.filter(article => article.category === category);
    filteredArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        articlesContainer.appendChild(articleElement);
    });
}

// Map Initialization
function initializeMap() {
    const myMap = L.map('map').setView([31.9466, 35.3027], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(myMap);
    L.marker([31.9466, 35.3027]).addTo(myMap).bindPopup('A significant location in Palestine.').openPopup();
}

// News Fetching
function fetchNews() {
    const language = document.getElementById('languageSelect').value;
    fetch(`http://localhost:3000/proxy-news?lang=${language}`)
        .then(response => response.json())
        .then(articles => updateArticles(articles))
        .catch(err => console.error('Failed to fetch articles:', err));
}

// News Update
function updateArticles(articles) {
    const articlesContainer = document.getElementById('articlesDisplay');
    articlesContainer.innerHTML = '';

    const nonIsraeliArticles = articles.filter(article => {
        const sourceName = article.source?.name || '';
        return !sourceName.includes('Israeli Source Name');
    });

    nonIsraeliArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'news-article';
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        articlesContainer.appendChild(articleElement);
    });

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        articlesContainer.appendChild(articleElement);
    });

    // Ensure search box and filters remain visible
    document.getElementById('languageSelect').style.display = 'block';
    document.getElementById('searchBox').style.display = 'block';
    document.querySelector('.btn-group').style.display = 'block';
}