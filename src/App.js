import WordsList from './components/WordsList.js'
import './App.css';
import { words } from './data/words.js';

function App() {
  return (
    <div className="App">
      <WordsList words={words}/>
    </div>
  );
}

export default App;
