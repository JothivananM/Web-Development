let products1 = [
    {id: 101, name: `TV`, price: `30000`},
    {id: 102, name: `Laptop`, price: `50000`},
    {id: 103, name: `Computer`, price: `40000`}
]

let products2 = [
    {id: 201, name: `Book`, price: `300`},
    {id: 202, name: `Table`, price: `500`},
    {id: 203, name: `Chair`, price: `400`}
]

let allProducts = products1.concat(products2);

 for (const key in allProducts) {  
         console.log(`\nId: ${allProducts[key].id}\n Name: ${allProducts[key].name}\n Price: ${allProducts[key].price}`);    
    }

let filterArray = allProducts.filter((p) =>{
    return p.id == 203;
});

console.log(filterArray);