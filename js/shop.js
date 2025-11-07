if (document.getElementById('productdemoInput')) {
  var productdemoInput = document.getElementById('productdemoInput');

  productdemoInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      addProduct();
    }
  });
}



var productList = JSON.parse(localStorage.getItem('products')) || [];

function displayData() {
  var container = document.getElementById('dataCard');
  if (!container) return;

  var html = '';
  for (var i = 0; i < productList.length; i++) {
    html += `
      <div class="card" style="border:1px solid #ccc; padding:10px; margin:10px; width:400px;">
        <img src="${productList[i].image}" style="width:100%; height:200px; object-fit:cover;" alt="Product">
        <h3>${productList[i].name}</h3>
        <p>price: ${productList[i].price}</p>
        <p>material: ${productList[i].material}</p>
        <p>description: ${productList[i].description}</p>
        <button class="text-center btn btn-danger" onclick="deleteItem(${i})">🗑   Delet</button>
      </div>
    `;
  }

  container.innerHTML = html;
}

function deleteItem(index) {
  productList.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(productList));
  displayData();
}

displayData();
