const request = require('request');

const options = {
  url: "http://localhost:3000/recipes",
  json: true,
  body: {
    recipe_name: "spaghetti",
    ingredients: [
      "Pasta",
      "Tomato Sauce"
    ],
    instructions: [
      "Boil water",
      "Put pasta in water",
      "Drain Pasta",
      "Cover in sauce"
    ]
  }
};

console.log(options['body']['ingredients']);

request.post(options, (err, res, body) => {
  if (err){
    return console.log(err);
  }
  console.log(`Status: ${res.statusCode}`);
  console.log(body);
});
