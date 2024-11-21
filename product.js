

let deta = localStorage.getItem("card");
let change = JSON.parse(deta);
console.log(change);

const div = document.querySelector("#parent");

// Generate Cards
change.map((item, index) => {
  div.innerHTML += `
    <div class="card-wrapper">
      <img src="${item.image}" class="card-img-left" alt="Product Image">
      <div class="card-content">
        <h5 class="card-title">Name: ${item.name}</h5>
        <h5 class="card-title">Price: ${item.price}</h5>
        <h5 class="card-title">Stock: ${item.stock}</h5>
        <p class="card-rating">Rating: ${item.rating} ⭐⭐⭐⭐⭐</p>
        <div class="card-buttons">
          <button class="btn btn-primary" onclick="addToCart(${index})">Add To Cart</button>
          <button class="btn btn-danger" onclick="delete1(${index})">Delete</button>
        </div>
      </div>
    </div>
  `;
});

// Delete Function
function delete1(index) {
  change.splice(index, 1); // Remove the item
  div.innerHTML = ''; // Clear the cards
  change.map((item, index) => {
    div.innerHTML += `
      <div class="card-wrapper">
        <img src="${item.image}" class="card-img-left" alt="Product Image">
        <div class="card-content">
          <h5 class="card-title">Name: ${item.name}</h5>
          <h5 class="card-title">Price: ${item.price}</h5>
          <h5 class="card-title">Stock: ${item.stock}</h5>
          <p class="card-rating">Rating: ${item.rating} ⭐⭐⭐⭐⭐</p>
          <div class="card-buttons">
            <button class="btn btn-primary" onclick="addToCart(${index})">Add To Cart</button>
            <button class="btn btn-danger" onclick="delete1(${index})">Delete</button>
          </div>
        </div>
      </div>
    `;
  });
}
