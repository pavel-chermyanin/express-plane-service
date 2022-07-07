import { Provider } from 'react-redux';
import { HashRouter, Routes, Route} from 'react-router-dom'


import { paths } from './paths';
import { HomePage, PlanePage } from './pages';
import { store } from './store';


function App() {
  return (

    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={`${paths.plane}/:id`} element={<PlanePage />} />
        </Routes>
      </Provider>
    </HashRouter>
  );
}

export default App;
