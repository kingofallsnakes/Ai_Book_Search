import React, { useState } from "react";
import { searchBooksAPI } from "./api";
import "./App.css"; // updated App.css for better design

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const searchBooks = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const bookResults = await searchBooksAPI(query);
      setBooks(bookResults);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`book-search-app ${darkMode ? "dark" : "light"}`}>
      <header>
        <nav>
          <h1>📚 AI Book Finder</h1>
          <div className="nav-links">
            <a href="#">Home</a>
            <button className="toggle-btn" onClick={toggleDarkMode}>
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Discover Your Next Great Read</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search books by title, author, or topic..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchBooks()}
            />
            <button onClick={searchBooks} disabled={loading}>
              {loading ? <span className="spinner"></span> : "Search"}
            </button>
          </div>
        </section>

        <section className="results">
          {loading ? (
            <div className="loading">Finding amazing books... 🔍</div>
          ) : error ? (
            <div className="error-message">
              <p>😥 Oops! Something went wrong:</p>
              <p>{error}</p>
            </div>
          ) : (
            <div className="book-grid">
              {books.length === 0 ? (
                <div className="no-results">
                  No book recommendations found. Try a different search query.
                </div>
              ) : (
                books.map((book, index) => (
                  <div key={index} className="book-card">
                    <div className="book-details">
                      <h3>{book.title}</h3>
                      <p className="author">by {book.author}</p>
                      <p className="description">{book.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>© 2025 AI Book Finder | Powered by Cobra</p>
      </footer>
    </div>
  );
}

export default App;
