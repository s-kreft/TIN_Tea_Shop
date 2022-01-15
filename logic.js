class Product {
    constructor(id,name, description, image, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price  = price;
    }

}


const product1 = new Product(1, "Huang Xiao", "Yellow Tea", "pictures/yellow-pics/huang-xiao.jpg", 20);
const product2 = new Product(2, "Golden Dragon Organic", "Yellow Tea", "pictures/yellow-pics/golden-dragon-organic.jpg", 39);
const product3 = new Product(3, "Junshan Yin Zhen", "Yellow Tea", "pictures/yellow-pics/junshan-yin-zhen-2021.jpg", 175);


let products = new Array(product1, product2, product3);

for(let i = 0; i < 3; i++ ) {
    console.log(products[i]);
}

console.log(products);
var template_item = document.getElementById('template_item');
var grid_container = document.getElementById('grid_container');
for(let i = 0; i < products.length; i++) {
    var product = products[i];
    var clone = template_item.content.cloneNode(true);
    clone.querySelector('.item_id').textContent=product.id;
    clone.querySelector('p').textContent=product.name;
    clone.querySelector('img').src = product.image;
    clone.querySelector('span').textContent = product.price;


    grid_container.appendChild(clone);
}
let cart = new Array;

function addToCart(el) {
var product_id = el.parentElement.querySelector('.item_id').textContent;
var product_cart = findByID(parseInt(product_id));

cart.push(product_cart);
console.log(cart);
}
function findByID(product_id) {
    var temp;
    products.forEach(product => {
        if(product_id === product.id) {
            temp = product;
        }
    });
    return temp;
}


