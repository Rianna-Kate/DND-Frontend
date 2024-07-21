import { Route, Routes, useLocation } from 'react-router-dom';

import { ClassSearch } from '../ClassSearch/ClassSearch';
import { LevelSearch } from '../LevelSearch/LevelSearch';
import { Navbar } from '../Navbar/Navbar';
import { SpellSearch } from '../SpellSearch/SpellSearch';
import { Start } from '../Start/Start';
import styles from './App.module.css';

function App() {
  const location = useLocation();
  const showNavbar = ['/Spell-Search', '/Class-Search', '/Level-Search'].includes(location.pathname);

  return (
    <div className={styles.overlay}>
      <div className={styles.App}>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/DND-Frontend/" element={<Start />} />
          <Route path="/Spell-Search" element={<SpellSearch />} />
          <Route path="/Class-Search" element={<ClassSearch />} />
          <Route path="/Level-Search" element={<LevelSearch />} />
        </Routes>
      </div>
      <div className={styles.bottomBlur} />
    </div>
  );
}

export default App;
