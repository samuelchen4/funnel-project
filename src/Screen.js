import React from 'react';
import Component from './Component';

// takes in an array of components
const Screen = (screenData) => {
  // console.log(screenData);
  const {
    index,
    finalScreenIndex,
    components = [],
    title = '',
    subtitle = '',
  } = screenData;
  const renderComponents = (componentsArr) => {
    // screensArr is an array of the components
    const components = componentsArr.map((componentData) => {
      return <Component {...componentData} />;
    });
    return components;
  };

  return (
    <main className='lg:p-4 text-center border-4 border-green-200 mx-10'>
      <h1>{title && title}</h1>
      <p>{subtitle && subtitle}</p>
      {renderComponents(components)}
    </main>
  );
};

export default Screen;
