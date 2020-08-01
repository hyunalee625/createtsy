export const getAllProducts = () => {
    return $.ajax({
        method: 'GET',
        url: `api/products`
        
    })
}

export const getOneProduct = id => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${id}`

    })
}
