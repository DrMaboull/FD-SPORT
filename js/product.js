$DATA = [
    {
        "name": "Adidas Originals",
        "floating": false,
        "category": "Maillot",
        "sport": "football",
        "image": "/images/product/psg1.jpg",
        "price": 125,
        "profile": {
            "man": 100,
            "woman": 25,
            "indoor": 0,
            "outdoor": 100
        }
    },
    {
        "name": "ticket",
        "floating": true,
        "category": "ticket",
        "sport": "football",
        "image": "URL",
        "price": 105,
        "profile": {
            "man": 100,
            "woman": 25,
            "indoor": 0,
            "outdoor": 100
        }
    }
];

function displayProds($product) {
    $("#nameProd").prepend($product.name);
    $("#categoryProd").prepend($product.category);
    $("#priceProd").prepend($product.price);
    console.log($product.image);
    $("#imageProd").prepend( '<img src = "' + "fdSport/images/product/psg1.jpg" + '" >');
}

displayProds($DATA[0]);




