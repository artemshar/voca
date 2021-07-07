import WordsList from './components/WordsList.js';
import { AddWordInput } from './components/AddWordInput.js';
import './App.css';
import { words } from './data/words.js';

function App() {
  return (
    <div className="App">
      {/* <AddWordInput/> */}
      <WordsList words={words}/>
    </div>
  );
}

export default App;
