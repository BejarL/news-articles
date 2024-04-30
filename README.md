# Palestine Information Hub

This project, "Palestine Information Hub," is a web application designed to aggregate and present news articles, historical insights, and current events about Palestine. The application leverages a backend service built with Node.js and Express, interfacing with the NewsAPI to fetch relevant articles, which are then presented through a dynamic frontend using HTML, CSS (Bootstrap), and JavaScript.

## Live Build

- [News Site](https://radiant-profiterole-0e0652.netlify.app/)

## Features

- **Dynamic News Fetching:** Utilizes NewsAPI to fetch news articles related to Palestine.
- **Language Selection:** Allows users to select the language of the news articles (English, Arabic, French).
- **Interactive Map:** Displays a map pinpointing significant locations related to the news articles.
- **Responsive Design:** Implements Bootstrap for a responsive layout that adapts to various device screens.
- **Search Functionality:** Users can search for articles based on keywords.
- **Filter Articles:** Provides buttons to filter articles by categories such as 'history' and 'current events'.

## Project Structure

- `index.html` - The main HTML document for the homepage.
- `about.html` - Contains information about the "Palestine Information Hub."
- `style.css` - Styling for the web pages.
- `script.js` - Handles the frontend logic for fetching and displaying articles, and managing user interactions.
- `newsApi.js` - Server-side logic written in Node.js to interact with the NewsAPI and filter results.
- `package.json` - Manages project dependencies and scripts.

## Setup

To run this project locally:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Start the server with `npm start`.
5. Open `http://localhost:3000` in your web browser to view the application.

## How to Use

- Navigate between the 'Home' and 'About' pages using the navigation links.
- Choose a language from the dropdown menu on the homepage to fetch news in that language.
- Use the search box to filter articles by keywords.
- Click on the 'History' or 'Current Events' buttons to filter articles by category.

## Contributing

Contributions to the "Palestine Information Hub" are welcomed. To contribute:

1. Fork the repository.
2. Create a new branch for your features or fixes.
3. Submit a pull request for review.

## License

This project is licensed under the MIT License.

## Acknowledgments

- NewsAPI for providing the news data.
- Bootstrap for the responsive frontend framework.
- Leaflet for the interactive map functionality.
