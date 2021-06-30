console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!



let basket =[];
console.log( basket );

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
}// end of list loop




addItem('Steak');
itemAdded();
console.log('Was an item added to basket?',itemAdded());
listLoop();
