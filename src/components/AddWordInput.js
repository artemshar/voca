import { useState } from "react";

export const AddWordInput = ({value}) => {
  const [word, setWord] = useState('');

  const handleSubmit = (evt) => {
      evt.preventDefault();
      // action
      setWord('');
  }

  return (
    <div className="add_word_input__wrap">
      <form onSubmit={handleSubmit}>
        <label>
          New word:
          <input type="text" onChange={(e) => setWord(e.target.value)} value={word} />
        </label>
        <input type="submit" value="Submit" /> 
      </form>
    </div>
  );
}