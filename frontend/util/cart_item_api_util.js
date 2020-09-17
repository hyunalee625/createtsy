export const createCartItem = (shoppingCartItem) => {
  return $.ajax({
    method: "POST",
    url: `api/shopping_cart_items`,
    data: { shoppingCartItem },
  });
};

export const fetchCartItems = () => {
    return $.ajax({
      method: "GET",
      url: `api/shopping_cart_items`
    });
}

export const updateCartItem = (shoppingCartItem) => {
  return $.ajax({
    method: "PATCH",
    url: `api/shopping_cart_items/${shopping_cart_item.id}`,
    data: { shoppingCartItem },
  });
};

export const deleteCartItem = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `api/shopping_cart_items/${id}`
    });
}