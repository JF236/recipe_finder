import React from 'react';
import './App.css';
import CategorySearch from './CategorySearch';
import NameSearch from './NameSearch';
import AddRecipe from './AddRecipe';
import MyRecipes from './MyRecipes';
import Settings from './Settings';
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
    <li><NavLink to='/'>Home</NavLink></li>
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

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/categorysearch" element={<CategorySearch />}></Route>
    <Route exact path='/namesearch' element={<NameSearch />}></Route>
    <Route exact path='/addrecipe' element={<AddRecipe />}></Route>
    <Route exact path='/myrecipes' element={<MyRecipes />}></Route>
    <Route exact path='/settings' element={<Settings />}></Route>
  </Routes>
);


export default App;