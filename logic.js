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

// const template_item = document.querySelector('.template_item');
// const grid_container = document.querySelector('.grid_container');

// var item = template_item.content.cloneNode(true);
// item.querrySelector('product-name').textContent("Testowa herba");

// grid_container.appendChild(item);
// item.querySelector('product-name').textContent("Testowa herbata");
// grid_container.appendChild(item);

var template_item = document.getElementById('template_item');
var grid_container = document.getElementById('grid_container');

var clone = template_item.content.cloneNode(true);
clone.querySelector('p').textContent='Testowa Herbata';
clone.querySelector('img').src = 'pictures/yellow-pics/golden-dragon-organic.jpg';
clone.querySelector('span').textContent = '52';


grid_container.appendChild(clone);
