import './style.css';

function App() {
  return (
    <main>

      {/* Website Name */}
      <h1 className="website-name">SM PREMIUM MV</h1>

      <form className="search-tab">
          <input type="search"placeholder="Search movies..."/>
          <button type="submit">Search</button>
      </form>

      {/* Movies */}
      <h2>WHAT'S ON TODAY?</h2>

      <div className="movie-area">

  <div className="side-box">
    <h3>NOW</h3>
    <p>SHOWING</p>
  </div>

  <section className="movies">

    <article className="movie blue">
      <img src="src/assets/F1.jpeg" />
      <h1>18:00</h1>
      <p>F1 THE MOVIE</p>
      <small>Premier on October 10 2026</small>
    </article>

    <article className="movie orange">
      <img src="src/assets/kung fu.jpeg" />
      <h1>20:00</h1>
      <p>KUNG FU PANDA</p>
      <small>Premier on January 2028</small>
    </article>

    <div className="movie green">
      <img src="src/assets/Tangled.jpeg" />
      <h1>22:00</h1>
      <p>TANGLED</p>
      <small>Now Showing</small>
    </div>

  </section>

  <div className="side-box">
    <h3>SM</h3>
    <p>CINEMA</p>
  </div>

</div>


      {/* Description */}
      <h2>DESCRIPTION</h2>

      <section className="movies">

        <div className="block blue">
          <h1>18:00</h1>
          <p>F1 THE MOVIE</p>
          <small>Payment: ₱250</small>
          <small>Chair: A12</small>
          <small>Status: Available</small>
        </div>

        <div className="block orange">
          <h1>20:00</h1>
          <p>KUNG FU PANDA</p>
          <small>Payment: ₱200</small>
          <small>Chair: B08</small>
          <small>Status: Available</small>
        </div>

        <div className="block green">
          <h1>22:00</h1>
          <p>TANGLED</p>
          <small>Payment: ₱220</small>
          <small>Chair: C15</small>
          <small>Status: Available</small>
        </div>

      </section>

      
      <footer className="site-footer">
        <h2>SM PREMIUM MV</h2>
        <p>Your movie experience starts here.</p>

        <div className="footer-links">
            <a href="#movies">Movie Schedule</a>
            <a href="#description">Ticket Information</a>
            <a href="mailto:contact@example.com">Contact Us</a>
        </div>

         <div className="footer-bottom">
            <p>© 2026 SM PREMIUM MV. All rights reserved.</p>
        </div>
</footer>

    </main>
  );
}

export default App;