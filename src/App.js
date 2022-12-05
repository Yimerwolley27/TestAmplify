import './App.css';
import Inputbox from './components/Inputbox.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        <img className="logo" src ="https://www.costargroup.com/images/librariesprovider3/costar-group/costar_group-logo.png?sfvrsn=2" alt="React Image" />
        </h1>
      </header>
      <body className="App-body">
        <div>
          <Inputbox></Inputbox>
        </div>
      </body>
      <footer className="App-footer">
        FOOTER
      </footer>
    </div>
  );
}

export default App;