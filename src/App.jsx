import './style.css';

function App() {
  return (
    <main>
      <h2>WHAT'S ON TODAY?</h2>

      <section className="movies">

        <div className="movie blue">
          <img src="src/assets/F1.jpeg" />
          <h1>18:00</h1>
          <p>F1 THE MOVIE</p>
        </div>

        <div className="movie orange">
          <img src="src/assets/Kung fu.jpeg" />
          <h1>20:00</h1>
          <p>KUNG FU PANDA</p>
        </div>

        <div className="movie green">
          <img src="src/assets/Tangled.jpeg" />
          <h1>22:00</h1>
          <p>TANGLED</p>
        </div>

      </section>

      <h2>SQUARE BLOCKS</h2>

      <section className="movies">

        <div className="block blue">
          <h1>18:00</h1>
          <p>PROGRAM 1</p>
        </div>

        <div className="block orange">
          <h1>20:00</h1>
          <p>PROGRAM 2</p>
        </div>

        <div className="block green">
          <h1>22:00</h1>
          <p>PROGRAM 3</p>
        </div>

      </section>
    </main>
  );
}

export default App;