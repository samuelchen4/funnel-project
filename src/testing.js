// each element in the array is a screen
// the elements are arrays of objects which are components and their information

export const testFunnel = [
  // screens
  {
    title: 'This is the screen title',
    subtitle: 'this is the screen subtitle',
    components: [
      // components
      {
        type: 'radio',
        text: ['SUV', 'Car', 'Truck', 'Van'],
        col: 3,
        title: 'Component level title',
        subtitle: 'component level subtitle',
      },
      {
        type: 'radio',
        text: ['10', '20', '50', '100', '200', '250'],
        col: 2,
      },
      {
        type: 'checkbox',
        text: ['male', 'female', 'other'],
        col: 3,
      },
    ],
  },
  {
    path: 'cool',
    title: 'This is the screen title',
    subtitle: 'this is the screen subtitle',
    components: [
      // components
      {
        type: 'checkbox',
        text: ['male', 'female', 'other'],
        col: 3,
      },
    ],
  },
  // need screen meta data
];
