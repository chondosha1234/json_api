const data = require('../data.json');
const data_model = require("../models/data_model");

module.exports = {

  getAllRecipes: function(req, res){
    const recipes = data["recipes"];
    res.send(JSON.stringify(recipes));
  },

  getRecipe: function(req, res){
    const recipe_name = req.params.recipe_name;
    const recipe = data_model.getRecipe(recipe_name);
    res.send(JSON.stringify(recipe));
  },

  addRecipe: function(req, res){
    const recipe_name = req.body.recipe_name;
    const ingredients = req.body.ingredients;
    const instructions = req.body.instructions;
    const recipe = data_model.addRecipe(recipe_name, ingredients, instructions);
    if (recipe == {}){
      res.send({
        "error": "Recipe already exists"
      });
    }else {
      res.send(JSON.stringify(recipe));
    }
  },

  updateRecipe: function(req, res){
    const recipe_name = req.body.recipe_name;
    const ingredients = req.body.ingredients;
    const instructions = req.body.instructions;
    const recipe = data_model.updateRecipe(recipe_name, ingredients, instructions);
    if (recipe == {}){
      res.send({
        "error": "Recipe does not exist"
      });
    }else {
      res.send(JSON.stringify(recipe));
    }
  }
};
