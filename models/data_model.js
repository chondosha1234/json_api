const data = require("../data.json");
const fs = require('fs');

function getRecipe(recipe_name){
  let recipe = {}
  for (let i = 0; i < data["recipes"].length; i++){
    let current_recipe = data["recipes"][i];
    if (current_recipe["name"] === recipe_name){
      recipe = data["recipes"][i];
    }
  }
  return recipe;
};

module.exports = {

  getRecipe(recipe_name){
    let recipe = {}
    for (let i = 0; i < data["recipes"].length; i++){
      let current_recipe = data["recipes"][i];
      if (current_recipe["name"] === recipe_name){
        recipe = data["recipes"][i];
      }
    }
    return recipe;
  },

  addRecipe(recipe_name, ingredients, instructions){
    const recipe = getRecipe(recipe_name);
    console.log(ingredients);
    //way to check that recipe json object is null
    if (Object.keys(recipe).length === 0 && recipe.constructor === Object){
      data["recipes"].push({
        "name": recipe_name,
        "ingredients": ingredients,
        "instructions": instructions
      });
      console.log(data);
      fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) =>{
        if (err) throw err;
        console.log('Data written to file');
      });
      return getRecipe(recipe_name); //return the newly created recipe
    }else {
      return {};  //if getRecipe returned existing recipe, return empty object
    }
  },

  updateRecipe(recipe_name, ingredients, instructions){
    const recipe = getRecipe(recipe_name);
    if (Object.keys(recipe). length === 0 && recipe.constructor === Object){
      return {};
    }else {
      if (ingredients != undefined){
        recipe["ingredients"] = ingredients;
      }
      if (instructions != undefined){
        recipe["instructions"] = instructions;
      }
    }
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) =>{
      if (err) throw err;
      console.log("Data updated");
    });
    return getRecipe(recipe_name);
  }
};
