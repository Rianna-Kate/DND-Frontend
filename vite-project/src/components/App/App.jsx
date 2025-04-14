import { Route, Routes, useLocation } from 'react-router-dom';

import { ClassSearch } from '../ClassSearch/ClassSearch';
import { LevelSearch } from '../LevelSearch/LevelSearch';
import { Navbar } from '../Navbar/Navbar';
import { SpellSearch } from '../SpellSearch/SpellSearch';
import { Start } from '../Start/Start';
import styles from './App.module.css';

function App() {
  const location = useLocation();
  const showNavbar = ['/DND-Frontend/Spell-Search', '/DND-Frontend/Class-Search', '/DND-Frontend/Level-Search'].includes(location.pathname);

  return (
    <div className={styles.overlay}>
      <div className={styles.App}>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/DND-Frontend/" element={<Start />} />
          <Route path="DND-Frontend/Spell-Search" element={<SpellSearch />} />
          <Route path="DND-Frontend/Class-Search" element={<ClassSearch />} />
          <Route path="DND-Frontend/Level-Search" element={<LevelSearch />} />
        </Routes>
      </div>
      <div className={styles.bottomBlur} />
    </div>
  );
}

export default App;
