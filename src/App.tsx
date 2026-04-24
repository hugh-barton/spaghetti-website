import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🍝 All About Spaghetti</h1>
        <p>Discover the wonderful world of Italy's most famous pasta</p>
      </header>
      
      <main className="App-main">
        <section className="intro">
          <h2>What is Spaghetti?</h2>
          <p>
            Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. 
            Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals.
          </p>
          <p>
            The word "spaghetti" comes from the Italian word "spaghetto", which means "thin string" or "twine".
          </p>
        </section>

        <section className="history">
          <h2>A Brief History</h2>
          <p>
            Spaghetti has been around for centuries. While pasta in various forms existed in ancient civilizations, 
            dried spaghetti as we know it today became popular in Italy during the 12th century.
          </p>
          <p>
            It was Italian immigrants who brought spaghetti to America in the late 19th and early 20th centuries, 
            where it quickly became a beloved comfort food.
          </p>
        </section>

        <section className="types">
          <h2>Types of Spaghetti</h2>
          <ul>
            <li><strong>Spaghetti</strong> - The classic thin round pasta</li>
            <li><strong>Spaghettini</strong> - Even thinner than regular spaghetti</li>
            <li><strong>Spaghettoni</strong> - Thicker than regular spaghetti</li>
            <li><strong>Bucatini</strong> - Spaghetti with a hole running through the center</li>
            <li><strong>Angel Hair</strong> - The thinnest of all spaghetti varieties</li>
          </ul>
        </section>

        <section className="cooking">
          <h2>How to Cook Perfect Spaghetti</h2>
          <ol>
            <li>Bring a large pot of salted water to boil (use 4-6 quarts per pound)</li>
            <li>Add spaghetti to the boiling water and stir immediately</li>
            <li>Cook according to package directions, usually 8-12 minutes</li>
            <li>Test for "al dente" - tender but still firm to the bite</li>
            <li>Drain immediately and serve with your favorite sauce</li>
          </ol>
        </section>

        <section className="fun-facts">
          <h2>Fun Facts About Spaghetti</h2>
          <ul>
            <li>The average Italian eats about 60 pounds of pasta per year!</li>
            <li>Spaghetti trees were a famous April Fool's joke in 1957</li>
            <li>The world record for longest spaghetti strand is over 2,000 feet</li>
            <li>October 17th is National Pasta Day in the United States</li>
          </ul>
        </section>
      </main>

      <footer className="App-footer">
        <p>Made with ❤️ for spaghetti lovers everywhere 🍝</p>
      </footer>
    </div>
  );
}

export default App;