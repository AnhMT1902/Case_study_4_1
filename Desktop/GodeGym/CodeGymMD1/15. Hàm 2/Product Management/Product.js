let ArrProducts = [
    ['Iphone 14', '40.000.000 VND', '12'],
    ['Iphone 14 Max', '45.000.000 VND', '9'],
    ['Iphone 14 Pro', '50.000.000 VND', '11'],
    ['Iphone 14 Pro Max', '55.000.000 VND', '15']
]
display();

function PrintArrProducts() {
    let Products = [];
    Products += "<table>"
    for (let i = 0; i < ArrProducts.length; i++) {
        Products += "<tr>"
        Products += `<td>${i + 1}</td>`
        Products += `<td>${ArrProducts[i][0]}</td>`;
        Products += `<td>${ArrProducts[i][1]}</td>`;
        Products += `<td>${ArrProducts[i][2]}</td>`;
        Products += `<td><button onclick="EditProduct(${i})">Edit</button></td>`;
        Products += `<td><button onclick="RemoveProduct(${i})">Remove</button></td>`;
        Products += "</tr>"
    }
    Products += "</table>";
    return Products;
}

function addArrProducts() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let amount = document.getElementById('amount').value;
    let product = [name, price, amount];
    if (name != '' && price != '' && amount != '') {
        ArrProducts.push(product);
    } else {
        alert("M nhap dung vao!");
    }
    display();
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('amount').value = '';


}

function display() {
    document.getElementById('addProducts').innerHTML = PrintArrProducts();
}

function RemoveProduct(i) {
    let remove = confirm('Are you sure you want to delete?')
    if (remove) {
        ArrProducts.splice(i, 1);
    }
    display();
}

function EditProduct(i) {
    let Name = prompt('New name');
    let Price = prompt('New price');
    let Amount = prompt('New amount');
    if (Name != "") {
        ArrProducts[i][0] = Name;
    }
    if (Price != "") {
        ArrProducts[i][1] = Price;
    }
    if (Amount != "") {
        ArrProducts[i][2] = Amount;
    }
    display();

}




