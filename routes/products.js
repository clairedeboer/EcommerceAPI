var express = require('express');
var router = express.Router();

let productsData = [{Size: 8, Color: 'Black'}, {Size: 7, Color: 'Blue'}, ]; 

/* GET users listing. */
router.get('/', (request, response) => {
  console.log('first get request', request); 
  console.log('first get response', response);
  return response.send(productsData);
});

//Object.values(users)

router.get('/:productId', (request, response) => {
  console.log('second get request.params,productID', request.params.productId);
  return response.send(productsData[request.params.productId]); 
});
 
router.post('/', (request, response) => {
  console.log('post request', request); 
  const product = {
    Size: request.body.Size,
    Color: request.body.Color, 
  };
  productsData.push(product); 
  console.log('post request.body', request.body)
  return response.send('ok');
}); 

module.exports = router;
