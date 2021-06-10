import logo from './logo.svg';
import './App.css';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div main>
        <section class="accordion">
            <label for="cb_1"><h2>Rubrik 1</h2></label>
            <input id="cb_1" type="checkbox"></input>
            <section>
                <p>Text</p><p>mer text</p>
            </section>
            <label for="cb_2"><h2>Rubrik 2</h2></label>
            <input id="cb_2" type="checkbox"></input>
            <section>
                <p>mer text</p>
            </section>
            <label for="cb_3"><h2>Rubrik 3</h2></label>
            <input id="cb_3" type="checkbox"></input>
            <section>
                <p>Text</p>
            </section>
        </section>
    </div>
      </header>
    </div>
  );
}

export default App;
