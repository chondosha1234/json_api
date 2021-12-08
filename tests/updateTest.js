const request = require('request');

const options = {
  url: 'http://localhost:3000/recipes',
  json: true,
  body: {
    recipe_name: "spaghetti",
    ingredients: [
      "alfredo sauce",
      "linguini"
    ]
  }
};

request.put(options, (err, res, body)=>{
  if (err){
    return console.log(err);
  }
  console.log(`Status: ${res.statusCode}`);
  console.log(body);
});
