export const getOneCartItem = id => {
    return $.ajax({
        method: 'GET',
        url: `api/shopping_cart_items/${id}`
    })
}

export const getAllCartItems = () => {
  return $.ajax({
    method: "GET",
    url: `api/shopping_cart_items`
  });
};

export const createCartItem = item => {
  return $.ajax({
    method: "POST",
    url: `api/shopping_cart_items`,
    data: {item}
  });
};

export const updateCartItem = (item) => {
return $.ajax({
    method: "PATCH",
    url: `api/shopping_cart_items/${item.id}`,
    data: { item },
});
};

export const deleteCartItem = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/shopping_cart_items/${id}`,
  });
};
