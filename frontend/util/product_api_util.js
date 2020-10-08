export const getAllProducts = () => {
    return $.ajax({
      method: "GET",
      url: `/api/products`,
    });
}

export const getOneProduct = productId => {
    return $.ajax({
        method: 'GET',
        url: `/api/products/${productId}`

    })
}

export const searchProducts = (search_query) => {
  return $.ajax({
    method: "GET",
    url: `/api/products/search`,
    data: { search_query },
  });
}

