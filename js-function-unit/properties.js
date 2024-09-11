var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25
};

var penCount = shoppingCart.pen;
console.log(penCount);
var penCount2 = shoppingCart['pen'];
console.log(penCount2);
var properties = Object.keys(shoppingCart);
console.log(properties);
var propertieValues= Object.values(shoppingCart);
console.log(propertieValues);

var PN = "mouse";
var PV = shoppingCart[PN];
console.log(PV);