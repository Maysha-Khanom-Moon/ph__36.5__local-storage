const addProduct = () => {
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')

    const product = productField.value
    const quantity = quantityField.value

    console.log(product, quantity);

    displayProduct(product, quantity)
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')

    li.innerText = `${product}: ${quantity}`

    ul.appendChild(li);
}

/* 
 * But refresh korle shob data hawa hoye jay. So aita store korte hobe database a
 * 
 * but database a store korar jonno user logedin thakte hobe, noyto database kar identity te data store hobe
 * 
 * here coming Local Storage for browser
 * 
 * Same browser and same device --> one time set and get always until you remove the data
 */