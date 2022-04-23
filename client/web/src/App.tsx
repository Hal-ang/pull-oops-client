// import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Daily from './screen/Daily';
import Diary from './screen/Diary';
import Guide from './screen/Guide';
import Main from './screen/Main';
import Splash from './screen/Splash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="splash" element={<Splash />} />
        <Route path="step/:stepId">
          <Route path="guide" element={<Guide />} />
          <Route path="diary">
            <Route path="" element={<Diary />} />
            <Route path=":date" element={<Daily />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
