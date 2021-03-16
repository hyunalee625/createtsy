export const fetchReviews = (productId) => {
    return $.ajax({
      method: "GET",
      url: `/api/products/${productId}/reviews`,
    });
}

export const fetchReview = (reviewId) => {
  return $.ajax({
    method: "GET",
    url: `/api/reviews/${reviewId}`
  })
}

export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: `/api/products/${review.product_id}/reviews`,
    data: { review },
  });
}

export const updateReview = (review) => {
  // debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/products/${review.product_id}/reviews/${review.id}`,
    data: { review },
  });
}

export const deleteReview = (review) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/products/${review.product_id}/reviews/${review.id}`,
  });
}