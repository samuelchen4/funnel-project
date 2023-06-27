import { Route, Routes } from 'react-router-dom';
import Screen from './Screen';
import { testFunnel } from './testing';
import ErrorScreen from './ErrorScreen';

function App() {
  // renders multiple screen components depending on size of array in script
  const renderScreens = (funnel) => {
    // screen Info is an array
    const screens = funnel.map((screenData, i) => {
      // create state which is the next path, if last return submit
      // path is equal to the index, so next path is index+1
      const path = i !== 0 ? `/${i}` : '/';
      return (
        <Route
          path={path}
          element={
            <Screen
              {...screenData}
              index={i}
              finalScreenIndex={funnel.length - 1}
            />
          }
        />
      );
    });

    return screens;
  };
  // setup React Router to deal with the screens
  return (
    <div className='text-center'>
      <h1>App Level, This will hold the background img</h1>
      <p>add React Router to JSX</p>
      <Routes>
        {renderScreens(testFunnel)}
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </div>
  );
}

export default App;
