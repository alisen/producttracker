const Database = require('./database.js');
const qrcode = require('qrcode-terminal');
const util = require('util')
/* const Product = require('./product.js');
const Shop = require('./shop.js'); */

/* product1 = new Product('Shampoo', 'ml', '500', '1,49');
product2 = new Product('Waterfilter', 'piece', '1', '31,99');
product3 = new Product('Sweetener', 'piece', '1200', '0,89');
product4 = new Product('Kefir', 'gr', '500', '0,79');
product5 = new Product('Tomato Sauce', 'gr', '200', '0,49');

shop = new Shop();
shop1 = new Shop('Supermarket', 'Edeka', 'Greifswalder Str. 86, 10409 Berlin');
shop2 = new Shop('Supermarket', 'Rewe', 'Greifswalder Str. 154-156, 10409 Berlin');
shop3 = new Shop('Supermarket', 'Alnatura', 'Greifswalder Str. 89, 10409 Berlin');
shop4 = new Shop('Spätkauf', 'Hutfabrik', 'Pappelallee 3-4, 10437 Berlin');

console.log("------------shop1-----------");
shop.add(shop1, product1);
shop.add(shop1, product2);
shop.add(shop1, product3);
shop.add(shop1, product4);
shop.add(shop1, product5);
shop.printAllShopProducts(shop1);
console.log("------------shop2----------");
shop.add(shop2, product2);
shop.add(shop2, product5);
shop.printAllShopProducts(shop2);
console.log("------------shop3-----------");
shop.add(shop3, product3);
shop.add(shop3, product4);
shop.printAllShopProducts(shop3);
console.log("------------shop4-----------");
shop.add(shop4, product3);
shop.add(shop4, product5);
shop.add(shop4, product5); //on purpose duplicate checking
shop.printAllShopProducts(shop4);
//Product counts on Shops
console.log("------------Counts-----------");
shop.count(shop1);
shop.count(shop2);
shop.count(shop3);
shop.count(shop4);
 */
qrcode.generate('http://alisen.xyz', {
    small: true
});


//Database.save('shops.json', [shop1, shop2, shop3, shop4])
//Database.save('products.json', [product1, product2, product3, product4, product5])


const loadedFile = Database.load('./db/shops.json')
console.log(util.inspect(loadedFile, false, null, true /* enable colors */ ))


//const Database = require('./database.js')
//console.log(Database.load('person.json').name)