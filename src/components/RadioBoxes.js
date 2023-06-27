import React, { useState } from 'react';

const RadioBoxes = (props) => {
  const { text = [], col = 2 } = props;
  const [selected, setSelected] = useState('');

  const selectHandler = (e) => {
    // stores value and handles routing to the next page
    setSelected(e.target.value);

    // route to next page
  };

  // renders the checkboxes
  const renderInputs = (textArr) => {
    const instances = textArr.map((text) => {
      return (
        <div className='border-2 border-black p-3 lg:w-24 lg:h-24 bg-blue-100'>
          <h2>{text}</h2>
          <input
            type='radio'
            value={text}
            checked={selected === text}
            onChange={selectHandler}
          />
        </div>
      );
    });
    return instances;
  };

  return (
    <div className='flex justify-center border-4 border-red-100'>
      <form
        className={`bg-gray-100 px-4 py-2 grid grid-cols-${col} gap-2 border-4`}
      >
        {renderInputs(text)}
      </form>
    </div>
  );
};

export default RadioBoxes;
