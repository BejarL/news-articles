import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// Use CORS middleware to allow requests from your frontend domain
app.use(cors({
    origin: ['http://localhost:3000', 'http://yourfrontenddomain.com']
}));


app.get('/news', async (req, res) => {
    const url = `https://newsapi.org/v2/everything?q=Palestine&apiKey=${process.env.NEWS_API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data.articles);
    } catch (error) {
        console.error('API call failed:', error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.get('/proxy-news', async (req, res) => {
    const url = `https://newsapi.org/v2/everything?q=Palestine&apiKey=${process.env.NEWS_API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const filteredArticles = data.articles.filter(article => !article.source.name.includes('Israeli Source Name'));
        res.json(filteredArticles);
    } catch (error) {
        console.error('Failed to fetch or filter news:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));