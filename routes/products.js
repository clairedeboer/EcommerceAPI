var express = require('express');
var router = express.Router();

let productsData = [{Size: 8, Color: 'Black'}, {Size: 7, Color: 'Blue'}, ]; 

/* GET users listing. */
router.get('/', (request, response) => {
  return response.send(productsData);
});

//Object.values(users)

router.get('/:productId', (request, response) => {
  return response.send(productsData[request.params.productId-1]); 
});
 


router.post('/', (request, response) => {
  const product = {
    Size: request.body.Size,
    Color: request.body.Color, 
  };
  productsData.push(product); 
  return response.send('added');
});



router.put('/:productId', (request, response) => {
  const product = {
    Size: request.body.Size,
    Color: request.body.Color, 
  };
  productsData[request.params.productId-1] = product; 
  return response.send('updated');
});
 


router.delete('/:productId', (request, response) => {
  console.log('productsData before splice', productsData); 
  productsData.splice(request.params.productId-1, 1); 
  console.log('productsData after splice', productsData); 
  return response.send('deleted');
});

module.exports = router;
