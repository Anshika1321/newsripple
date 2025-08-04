# NewsRipple - React News App

NewsRipple is a modern, responsive, single-page news application built using React.js. It displays the latest headlines across various categories using the NewsAPI.

## 🚀 Features

* Top Headlines: Displays real-time news headlines.

* Responsive Design: Optimized for mobile, tablet, and desktop.

* Multiple Categories: Business, Entertainment, Health, Science, Sports, Technology.

* Pagination: Navigate through multiple pages of articles.

* Scroll to Top: Smooth button for quick scroll.

* Loading State: Spinner for API calls.

* SEO-Friendly: Dynamic page titles based on category.

* Error Handling: Graceful fallback for API failures.

## 📁 Folder Structure

<pre>src/
├── components/
│   ├── Navbar.js
│   ├── News.js
│   ├── NewsItem.js
│   ├── ScrollButton.js
│   └── Spinner.js
├── App.js
├── App.css
├── index.js
├── index.css
└── logo.svg</pre>

## 🛠️ Installation & Setup

1. Prerequisites

* Node.js (v14+)

* npm or yarn

* News API key from newsapi.org

2. Clone the Repository

<pre>git clone https://github.com/Anshika1321/newsripple.git
cd newsripple</pre>

3. Install Dependencies

<pre>npm install</pre>

4. Environment Variable Setup

Create a .env file in the root directory and add your News API key:

<pre>REACT_APP_NEWS_API_KEY=your_api_key_here</pre>

5. Start the Application

<pre>npm start</pre>

* The app will run on ```http://localhost:3000```.

## 🔧 Component Overview

### 1. App.js

* Main application component.

* Sets up routing with react-router-dom.

* Renders Navbar, ScrollButton, and News components.

### 2. Navbar.js

* Navigation bar using Bootstrap.

* Contains links to all categories (uses Link from react-router-dom).

### 3. News.js

* Fetches news articles based on category and API key.

* Displays articles using NewsItem.

* Manages pagination and loading states.

### 4. NewsItem.js

* Displays a single news article card (title, description, source, link).

* ScrollButton.js

* Button that appears on scroll to let users quickly scroll back to top.

### 5. Spinner.js

* Displays loading spinner while data is being fetched.

## 🎨 Styling

* App.css: Contains custom styles like scroll button, card hover, and responsive fixes.

* Bootstrap: Imported via npm for pre-built components and layout grid.

## 📦 Technologies Used

* React.js

* React Router DOM

* Bootstrap

* PropTypes

* NewsAPI

## 🤝 Acknowledgements

* NewsAPI — For real-time news data.

* Bootstrap — For responsive UI.

* React Router — For navigation.
