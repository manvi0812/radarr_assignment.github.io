import { Routes, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Landing from './components/Landing';

import * as ROUTES from './routes';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
      <Route path={ROUTES.ALLCHARACTERS} element={<Characters />} />
    </Routes>
  );
}

export default App;

// {
//   "url": "https://www.anapioficeandfire.com/api/characters/181",
//   "name": "Benjen Stark",
//   "gender": "Male",
//   "culture": "Northmen",
//   "born": "In 267 AC or later, at Winterfell",
//   "died": "",
//   "titles": [
//       "First Ranger"
//   ],
//   "aliases": [
//       "The Wolf Pup",
//       "Ben Stark"
//   ],
//   "father": "",
//   "mother": "",
//   "spouse": "",
//   "allegiances": [
//       "https://www.anapioficeandfire.com/api/houses/362"
//   ],
//   "books": [
//       "https://www.anapioficeandfire.com/api/books/1",
//       "https://www.anapioficeandfire.com/api/books/2",
//       "https://www.anapioficeandfire.com/api/books/3",
//       "https://www.anapioficeandfire.com/api/books/5",
//       "https://www.anapioficeandfire.com/api/books/8"
//   ],
//   "povBooks": [],
//   "tvSeries": [
//       "Season 1",
//       "Season 6"
//   ],
//   "playedBy": [
//       "Joseph Mawle",
//       "Matteo Elezi"
//   ]
// },
