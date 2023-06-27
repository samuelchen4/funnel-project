import React from 'react';
import { pickComponent } from './helper/pickComponent';

const Component = (componentData) => {
  const { title = '', subTitle = '' } = componentData;
  return (
    <section className='mb-4'>
      <h3 className='mb-2'>{title && title}</h3>
      <p className='mb-1'>{subTitle && subTitle}</p>
      {pickComponent(componentData)}
    </section>
  );
};

export default Component;
