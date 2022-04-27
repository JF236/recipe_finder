import React from 'react';
import './App.css';
import AddRecipe from './AddRecipe';
import { NavLink, Routes, Route } from 'react-router-dom';

const App = () => (
  <div className='app'>
    <h1>Recipedia</h1>
    <Navigation />
    <Main />
  </div>
);


const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/categorysearch'>Category Search</NavLink></li>
      <li><NavLink to='/namesearch'>Name Search</NavLink></li>
      <li><NavLink to='/addrecipe'>Add Recipe</NavLink></li>
      <li><NavLink to='/myrecipes'>My Recipes</NavLink></li>
      <li><NavLink to='/settings'>Settings</NavLink></li>
    </ul>
  </nav>
);


const Home = () => (
  <div className='home'>
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more about me.</p>
  </div>
);

const MyRecipes = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Settings = () => (
  <div className='contact'>
    <h1>Contact Me!!!</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const CategorySearch = () => (
  <div className='contact'>
    <h1>Contact Me!!!</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const NameSearch = () => (
  <div className='contact'>
    <h1>Contact Me!!!</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/categoryseach" element={<CategorySearch />}></Route>
    <Route exact path='/namesearch' element={<NameSearch />}></Route>
    <Route exact path='/addrecipe' element={<AddRecipe />}></Route>
    <Route exact path='/myrecipes' element={<MyRecipes />}></Route>
    <Route exact path='/settings' element={<Settings />}></Route>
  </Routes>
);


export default App;