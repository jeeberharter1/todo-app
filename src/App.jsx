import { useState } from 'react';
import './App.scss';
import TodoCardList from './components/TodoCardList/TodoCardList';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <div className={darkTheme ? 'app darkTheme' : 'app lightTheme'} id='app'>
      <header className="header">
        <img src="bg-mobile-light.jpg" alt="" className='background' />
        <h1 className="header__title">todo</h1>
        <img 
          src={darkTheme ? 'icon-sun.svg' : 'icon-moon.svg'} 
          alt="dark mode" 
          onClick={toggleTheme} 
          className='themeToggle' 
        />
      </header>

      <main className="main">
        <TodoCardList />
      </main>
    </div>
  );
}

export default App;
