import obrazek from './obrazek.png';
import questions from './questions.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={obrazek} className="App-logo" alt="logo" /> {/* dodawanie obrazka*/}
        <a> akapit </a> {/* dodawanie akapitu*/}
        
        <div>
          <ol className='questions-list'>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
          </ol> {/* dodawanie listy*/}

        </div>

        <a href='#'>odnośnik</a> {/* dodawanie odnośnika*/}
        
      </header>
    </div>
  );
}

export default App;
