console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[];
console.log( basket );


function emptyBasket(){
  while (basket.length > 0){
    basket.pop();
    return basket.length;
  }


}//end of empty basket


function addItem(item){
    console.log( 'Item added to Basket:', item);
    basket.push( item );
    return basket;

} // end addItem

function itemAdded(){
  if(basket.length>0){
    return true
  }
  else{
    return false
  }
}

function listLoop(){
  for ( i=0; i<basket.length; i++){
    console.log('Items in basket', basket[ i ]);
  }


}// end

addItem('Steak');
addItem('Fruit');
itemAdded();
console.log('Was an item added to basket?',itemAdded());
listLoop();
emptyBasket();
console.log('The total number of items remaining in Basket:', emptyBasket());
