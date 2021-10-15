function arrayOfProducts(array) {
    const products = [];

    for (let i = 0; i < array.length; i++) {
        let runningProduct = 1;

        for (let j = 0; j < array.lenght; j++) {
            if (i !== j) {
                runningProduct *= array[j]
            }

            products[i] = runningProduct;
        }
    }

    return products;
}

console.log(arrayOfProducts([5, 1, 2, 4]))