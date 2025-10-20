var productNameInput=document.getElementById('productNameInput')
var productPriceInput=document.getElementById('productPriceInput')
var productMatInput=document.getElementById('productMatInput')
var productShippingInput=document.getElementById('productShippingInput')
var productSizesInput=document.getElementById('productSizesInput')
var productDescriptionInput=document.getElementById('productDescriptionInput')
var productImageInput = document.getElementById('productImageInput');


var productsContainer = document.getElementById('productsContainer');
var productList = JSON.parse(localStorage.getItem('products')) || [];

function addProduct() {
  // نحول الصورة إلى Base64 علشان نقدر نخزنها في LocalStorage
  var file = productImageInput.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      saveProduct(e.target.result); // نرسل الصورة بعد التحويل
    };
    reader.readAsDataURL(file);
  } else {
    saveProduct(''); // في حال مافيش صورة
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

productList.push(product)
  localStorage.setItem('products', JSON.stringify(productList)); // نحفظها

clearInput()
displayData()
console.log(productList);
alert("Product added successfully!");

}
function clearInput(){
 productNameInput.value=""
 productPriceInput.value=""
 productMatInput.value =''
 productShippingInput.value=''
 productSizesInput.value =''
 productDescriptionInput.value =''

}
// function displayData(){
//     cartona=''
//        for( var i=0 ;i< productList.length ;i ++){
//       cartona += `
//        <div class="col-md-4">
//         <div class="card w-100 ">
//           <p>${i}</p>
//           <h2>* ${productList [i].name} *</h2>
//           <h3 class="m=auto text-danger">${productList [i].price}</h3>
//            <button  onClick = "dleateItem(${i})"  class="btn btn-outline-danger"> Delete</button>
//          </div>
//      </div>
//        `
//     }
//     document.getElementById('dataCard').innerHTML=cartona
// }
function dleateItem(index){
   productList.splice(index,1)
   displayData()

}