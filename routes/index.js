var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/recipes', controller.getAllRecipes);
router.post('/recipes', controller.addRecipe);
router.put('/recipes', controller.updateRecipe);
router.get('/recipes/details/:recipe_name', controller.getRecipe);

module.exports = router;
