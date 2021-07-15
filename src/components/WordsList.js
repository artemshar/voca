import { WordCard } from './WordCard';
import './WordsList.css';

function WordsList(words) {
  console.log(words);
  let wordsJSX = words.words.map((item, key) => {
    return (
        <WordCard key={key} word={item}/>
    );
  })
  
  return (
    <div className="words_list">
      {wordsJSX}
    </div>
  );
}

export default WordsList;