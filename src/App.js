
import './App.css';
import { LeftMenu } from './components/LeftMenu';
import { Footer } from './components/Footer';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Albums } from './pages/Albums';
import { Artists } from './pages/Artists';
import { Browse } from './pages/Browse';
import { ListenNow } from './pages/ListenNow';
import { Radio } from './pages/Radio';
import { RecentlyAdded } from './pages/RecentlyAdded';
import { Songs } from './pages/Songs';
import { MusicPlayer } from './components/MusicPlayer/MusicPlayer';
import { useState } from 'react';

function App() {

  const [playlist, setPlaylist] = useState('')
  const [i, setI] = useState('')

  return (
    <div>
    <LeftMenu/>
    <MusicPlayer playlist={playlist} i={i}/>
    <BrowserRouter>
      <Routes>

       <Route path="/" exact element={<Browse setPlaylist={setPlaylist} setI={setI}/>} />
       <Route path="/albums" exact element={<Albums/>} />
       <Route path="/artists" exact element={<Artists/>} />
       <Route path="/browse" exact element={<Browse/>} />
       <Route path="/listen-now" exact element={<ListenNow/>} />
       <Route path="/radio" exact element={<Radio/>} />
       <Route path="/recently-added" exact element={<RecentlyAdded/>} />
       <Route path="/songs" exact element={<Songs/>} />

       </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
