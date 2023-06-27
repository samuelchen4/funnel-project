import React from 'react';

// Creates checkbox inputs based on quantity, and a text array
const CheckBoxes = (props) => {
  const { text = [], col = 2 } = props;

  // renders the checkboxes
  const renderInputs = (textArr) => {
    const instances = textArr.map((text) => {
      return (
        <div className='border-2 border-black p-3 lg:w-24 lg:h-24 bg-blue-100'>
          <h2>{text}</h2>
          <input type='checkbox' value={text} />
        </div>
      );
    });
    return instances;
  };

  return (
    <div className='flex justify-center'>
      <div
        className={`bg-gray-100 px-4 py-2 grid grid-cols-${col} gap-2 border-4`}
      >
        {renderInputs(text)}
      </div>
    </div>
  );
};

export default CheckBoxes;
