import icon_cambridge_dictionary from '../images/cambridge_dictionary.ico';
import icon_youglish from '../images/youglish.png';
import './WordCard.css';

export const WordCard = ({word}) => {
  return (
    <div className="word_card">
      <div className="word_card__word">{word}</div>
      <div className="word_card__links">
        <a className="word_card__links_item" href={'https://dictionary.cambridge.org/dictionary/english/' + word} target="_blanc">
         <img width={18} src={icon_cambridge_dictionary}/>
        </a>
        <a className="word_card__links_item" href={'https://youglish.com/pronounce/' + word} target="_blanc">
          <img width={18} src={icon_youglish}/>
        </a>
      </div>
    </div>
  );
}
