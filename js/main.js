var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productMatInput = document.getElementById('productMatInput');
var productShippingInput = document.getElementById('productShippingInput');
var productSizesInput = document.getElementById('productSizesInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var productImageInput = document.getElementById('productImageInput');
var productdemoInput = document.getElementById('productdemoInput');

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
  alert("product added successfully ");
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
