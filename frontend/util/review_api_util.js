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
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.product_id}/reviews/${review.id}`,
    data: { review },
  });
}

export const deleteReview = (reviewId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${review.productId}/reviews/${review.id}`,
  });
}