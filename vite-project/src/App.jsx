import { Route, Routes, useLocation } from 'react-router-dom';

import styles from './App.module.css';
import { ClassSearch } from './components/ClassSearch/ClassSearch';
import { LevelSearch } from './components/LevelSearch/LevelSearch';
import { Navbar } from './components/Navbar/Navbar';
import { SpellSearch } from './components/SpellSearch/SpellSearch';
import { Start } from './components/Start/Start';

function App() {
  const location = useLocation();
  const showNavbar = ['/Spell-Search', '/Class-Search', '/Level-Search'].includes(location.pathname);

  return (
    <div className={styles.overlay}>
      <div className={styles.App}>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Start />} />
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
