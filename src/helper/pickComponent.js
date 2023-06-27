import CheckBoxes from '../components/CheckBoxes';
import RadioBoxes from '../components/RadioBoxes';

// picks out component based on type property
export const pickComponent = (componentInfo) => {
  const { type, col, text = [] } = componentInfo;
  switch (type) {
    case 'checkbox':
      return <CheckBoxes text={text} col={col} />;
    case 'radio':
      return <RadioBoxes {...componentInfo} />;
    default:
      throw new Error(`Input type of ${type} not found!`);
  }
};
