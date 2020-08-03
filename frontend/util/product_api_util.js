export const getAllProducts = data => {
    return $.ajax({
        method: 'GET',
        url: 'api/products',
        data
        
    })
}

export const getOneProduct = id => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${id}`

    })
}
