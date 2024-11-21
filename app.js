 let products = [
    { "name": "Smartphone", "brand": "Samsung", "price": 799, "rating": 4.5, "quantity": 20, "stock": "In Stock", "discount": 10, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgbipX7FLOP0uUockIbnkiSgFRVDritJhMA&s" },
    { "name": "Laptop", "brand": "Dell", "price": 1200, "rating": 4.6, "quantity": 15, "stock": "In Stock", "discount": 5, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SI0-IeC-YIyKLCLnq1td8ZMow2YwhtMstA&s" },
    { "name": "Smartwatch", "brand": "Apple", "price": 399, "rating": 4.7, "quantity": 25, "stock": "In Stock", "discount": 15, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0n04FEyjWS5PKJFUlmtMfR7Ccw03gYSaZ5Q&s" },
    { "name": "Bluetooth ", "brand": "Sony", "price": 199, "rating": 4.4, "quantity": 50, "stock": "In Stock", "discount": 20, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqq60oF699MMzPdlF0sf4r9JnVWWj0GpHTw&s" },
    { "name": "Wireless Earbuds", "brand": "Jabra", "price": 149, "rating": 4.3, "quantity": 30, "stock": "In Stock", "discount": 25, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_zplU_4sZo50slJ9H8H3v7AWOQUsUJJK2g&s" },
    { "name": "Tablet", "brand": "Lenovo" , "price": 299, "rating": 4.2, "quantity": 10, "stock": "Low Stock", "discount": 10, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMiVPX46z9zVxjtHe_pftjx-id0U-gNiU3w&s" },
    { "name": "Gaming Console", "brand": "PlayStation", "price": 499, "rating": 4.8, "quantity": 5, "stock": "Low Stock", "discount": 0, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4En13OoZNRXyQ8_CYDZcZEjWZcix1reUycA&s" },
    { "name": "4K Smart TV", "brand": "LG", "price": 899, "rating": 4.6, "quantity": 8, "stock": "Low Stock", "discount": 5, "image": "https://images.priceoye.pk/sony-49-inch-4k-49x7500f-pakistan-priceoye-gxqy5-500x500.webp" },
    { "name": "Bluetooth Speaker", "brand": "Bose", "price": 179, "rating": 4.5, "quantity": 40, "stock": "In Stock", "discount": 15, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHKOfVrcmDL_Awuxe_P29TFVMWF_1csezmw&s" },
    { "name": "Action Camera", "brand": "GoPro", "price": 349, "rating": 4.7, "quantity": 12, "stock": "In Stock", "discount": 10, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQ0szwgIBnLWsQMtjH394NYqJFSFuJ-QEow&s" },
    { "name": "External Hard ", "brand": "Seagate", "price": 99, "rating": 4.4, "quantity": 60, "stock": "In Stock", "discount": 20, "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/f1d961ac-a3c0-4bf5-b6d2-8ed4c32057ff.jpg?format=webp" },
    { "name": "Gaming Laptop", "brand": "MSI", "price": 1500, "rating": 4.7, "quantity": 7, "stock": "Low Stock", "discount": 5, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjch2oCF_R-NCsBzoFvbfoT4O4Xbtm2Iiug&s" },
    { "name": "Monitor", "brand": "Acer", "price": 249, "rating": 4.5, "quantity": 18, "stock": "In Stock", "discount": 10, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRam-RCKdjZtPkIp8cTAHwkAZLWEPWQehsfVw&s" },
    { "name": "Mechan Keyboard", "brand": "Razer", "price": 129, "rating": 4.6, "quantity": 50, "stock": "In Stock", "discount": 15, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lUdpg2cRrskCSdBP4phQyL7vD5uMo0QyQA&s" },
    { "name": "Gaming Mouse", "brand": "Logitech", "price": 79, "rating": 4.4, "quantity": 70, "stock": "In Stock", "discount": 25, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnw1FXJX2Z3-MsyPq9cf52kc_U_FZMqQbrKQ&s" },
    { "name": "E-Reader", "brand": "Kindle", "price": 139, "rating": 4.5, "quantity": 22, "stock": "In Stock", "discount": 10, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuIeq5RuoHHKOkKq422eL0THFzCPrC1JXKQ&s" },
    { "name": "Router", "brand": "Netgear", "price": 159, "rating": 4.3, "quantity": 15, "stock": "In Stock", "discount": 5, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUwU4PItdCoNSYkZt8_8_XIGH4YSS5Z96gw&s" },
    { "name": "Webcam", "brand": "Logitech", "price": 99, "rating": 4.2, "quantity": 35, "stock": "In Stock", "discount": 20, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChxp2HVLRHn7UuPsgfcwL-Zp8twga-sLLmw&s" },
    { "name": "Drone", "brand": "DJI", "price": 1099, "rating": 4.8, "quantity": 3, "stock": "Low Stock", "discount": 0, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuVpu89dfAmWpTm_cT0OjTFvaXV6TGGfFLDA&s" },
    { "name": "Smart Home Hub", "brand": "Google Nest", "price": 129, "rating": 4.6, "quantity": 25, "stock": "In Stock", "discount": 15, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbHhHw7ceY33RYQ6fw0ynl6wwhkrCEtOCkw&s" },
    { "name": "Fitness Tracker", "brand": "Fitbit", "price": 99, "rating": 4.3, "quantity": 45, "stock": "In Stock", "discount": 20, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5ZT7RvO7r6BeeCw3WMYErnRgI1izEhS3vg&s" },
    { "name": "VR Headset", "brand": "Meta Quest", "price": 399, "rating": 4.7, "quantity": 10, "stock": "Low Stock", "discount": 5, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctpo21dkbq1D7K_Voure-4pEGvST8hg8_0g&s" },
    { "name": "Electric Scooter", "brand": "Xiaomi", "price": 499, "rating": 4.5, "quantity": 12, "stock": "In Stock", "discount": 10, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5S_U7O6-rOVABnFVkJiOd4ja2C1_vawpyw&s" },
    { "name": "Digital Camera", "brand": "Canon", "price": 799, "rating": 4.4, "quantity": 10, "stock": "Low Stock", "discount": 10, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrM60gksfCOCfu10YFlSxxgg3WCY8cvVKpwA&s" },
   
    
  ]
  




let cart = [];

let div = document.querySelector("#container");

// products.map((item, index) => {
//   div.innerHTML += `
//     <div class="card" style="width: 18rem;">
//       <img src="${item.image}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title"> Name: ${item.name}</h5>
//         <h5 class="card-title"> Price: ${item.price}</h5>
//         <h5 class="card-title"> Stock: ${item.stock}</h5>
//         <p>Rating: ${item.rating} ⭐⭐⭐⭐⭐ </p>
//         <button class="btn btn-primary" onclick="addToCart(${index})">Show More</button>
//       </div>
//     </div>
//   `;
// });

products.map((item, index) => {
  div.innerHTML += `
    <div class="card-wrapper">
      <img src="${item.image}" class="card-img-left" alt="Product Image">
      <div class="card-content">
        <h5 class="card-title">Name: ${item.name}</h5>
        <h5 class="card-title">Price: ${item.price}</h5>
        <h5 class="card-title">Stock: ${item.stock}</h5>
        <p class="card-rating">Rating: ${item.rating} ⭐⭐⭐⭐⭐</p>
        <div class="card-buttons">
        
       <button class="btn btn-primary" onclick="addToCart(${index})">Show More</button>
         
        </div>
      </div>
    </div>
  `;
});


function addToCart(index){
 
    var check = cart.indexOf(products[index])
    if(check === -1){
        products[index].quantity = 1
        cart.push(products[index])
        
    }
    else{
        cart[check].quantity += 1
    }

  

    console.log(cart);

    let carts = JSON.stringify(cart)
    localStorage.setItem("card" , carts)
   
    window.location = "index.product.html"
    
}




