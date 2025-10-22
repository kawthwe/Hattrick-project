var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productMatInput = document.getElementById('productMatInput');
var productShippingInput = document.getElementById('productShippingInput');
var productSizesInput = document.getElementById('productSizesInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var productImageInput = document.getElementById('productImageInput');

var productList = JSON.parse(localStorage.getItem('products')) || [];

function addProduct() {
  var file = productImageInput.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      saveProduct(e.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    saveProduct('');
  }
}

function saveProduct(imageData) {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    material: productMatInput.value,
    shipping: productShippingInput.value,
    sizes: productSizesInput.value,
    description: productDescriptionInput.value,
    image: imageData
  };

  productList.push(product);
  localStorage.setItem('products', JSON.stringify(productList));

  clearInput();
  displayData();
  alert("Product added successfully!");
}

function clearInput() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productMatInput.value = "";
  productShippingInput.value = "";
  productSizesInput.value = "";
  productDescriptionInput.value = "";
  productImageInput.value = "";
}

function displayData() {
  var cartona = '';
  for (var i = 0; i < productList.length; i++) {
    cartona += `
      <div class="col-md-4">
        <div class="card w-100">
          <img src="${productList[i].image}" class="w-100" alt="Product Image">
          <h2>* ${productList[i].name} *</h2>
          <h3 class="text-danger">${productList[i].price}</h3>
          <button onClick="deleteItem(${i})" class="btn btn-outline-danger">Delete</button>
          <a href="product-01.html">SHOW MORE</a>
        </div>
      </div>
    `;
  }
  document.getElementById('dataCard').innerHTML = cartona;
}

function deleteItem(index) {
  productList.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(productList));
  displayData();
}

displayData();
