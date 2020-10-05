export const getAllProducts = () => {
    // debugger
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url =
    //   "https://openapi.etsy.com/v2/listings/active.js?callback=getdata&api_key=j7empvnlknpxz69tj8ikeo7k&fields=title,description,price,url&limit=30";
    return $.ajax({
      method: "GET",
      url: `api/products/`,
    });
    // debugger

}

export const getOneProduct = productId => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${productId}`

    })
}

export const searchProducts = (search_query) =>
  $.ajax({
    method: "GET",
    url: `api/products/search`,
    data: { search_query },
  });

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
//   .then((response) => response.text())
//   .then((contents) => console.log(contents))
//   .catch(() =>
//     console.log("Can’t access " + url + " response. Blocked by browser?")
//   );
