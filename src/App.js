import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';


const App = () => {
 

  const APP_ID = "47029d1a";
  const APP_KEY = "48cdaaf44278097e19fa14b28ace83ff";	
  
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');



  useEffect( () =>{
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response =  await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <h1>
        Recipe Generator
      </h1>
     <form  className='search-form'  onSubmit={getSearch}>
       <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
       <button className='search-button' type='submit'>Search</button>
       
     </form>
    <div className='recipe'>     
     {recipes.map(recipe => (
       <Recipe
        title = {recipe.recipe.label} 
        calories = {recipe.recipe.calories} 
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
       
       />
  ))}
    </div>
  </div>
  );
}

export default App;
