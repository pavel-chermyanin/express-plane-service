import { Provider } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom'


import { paths } from './paths';
import { Homepage } from './pages/home-page';
import { store } from './store';


function App() {
  return (

    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path={paths.home} element={<Homepage />} />
        </Routes>

      </Provider>
    </HashRouter>
  );
}

export default App;
