# AI Book Search App

This is a simple AI-powered book search app that uses the Gemini API to recommend books based on user queries. The app allows users to input a search term (like a book title, author, or genre), and it displays a list of book recommendations with their titles, authors, descriptions, ratings, and prices.

## Features

- AI-based book recommendations
- Search functionality by title, author, or genre
- Display of book title, author, description, rating, and price
- Dark Mode and Light Mode support

## Prerequisites

Before running this app, ensure that you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

If you don't have Node.js and npm installed, download and install them from [here](https://nodejs.org/).

---

## Setup and Installation

Follow the steps below to set up and run the app locally.

### 1. Clone the repository

```bash
git clone https://github.com/kingofallsnakes/Ai_Book_Search.git
cd Ai_Book_Search
```

### 2. Install dependencies

Once you've cloned the repository, install the required dependencies:

```bash
npm install
```

### 3. Set up your Gemini API Key

To interact with the Gemini API, you'll need to replace the placeholder API key with your own. Follow these steps:

1. **Obtain a Gemini API Key**: You need to create a project on the [Gemini API](https://cloud.google.com/generative-language) console to get your API key.
2. **Replace the API Key**: Open the `api.js` file in your project and replace the following line with your Gemini API Key.

   ```javascript
   const GEMINI_API_KEY = "Your_api_key";
   ```

   - Change `"Your_api_key"` to your actual Gemini API key.

### 4. Run the application

Once everything is set up, you can start the development server.

#### For Development (with hot-reload):
```bash
npm run dev
```

#### For Production Build:
```bash
npm run build
```

### 5. Open the app in your browser

After running the app, you can view it in your web browser by navigating to:

```
http://localhost:5173
```

## Troubleshooting

1. **Gemini API Errors**: If you encounter issues with the Gemini API (like `API key is missing`), ensure that your API key is correctly placed in the `api.js` file.

2. **Module not found error**: If you see an error like `Module not found`, try running:

    ```bash
    npm install
    ```

3. **App not loading properly**: If the app doesn’t load, try clearing the cache:

    ```bash
    npm run build
    ```

    Then, restart the server.

---

## Contribution

If you'd like to contribute to this project, feel free to fork it and submit a pull request. Any improvements are welcome!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
