// siblingElement.parentNode.insertBefore(newElement, siblingElement.nextSibling);
console.clear();

if (location.pathname === "/shop.html") {
  /* shop.html */
  const products = document.getElementById("products");
  const cartSummary = document.getElementById("cartSummary");
  const reviewOrderBtn = document.getElementById("reviewOrderBtn");

  const totalProductsTag = document.getElementById("totalProducts");
  const totalPriceTag = document.getElementById("totalPrice");
  const grandTotalTag = document.getElementById("grandTotal");

  const shippingChargeTag = document.getElementById("shippingCharge");
  const shippingChargeString = shippingChargeTag.innerText;
  const shippingCharge = parseFloat(shippingChargeString);

  const taxTag = document.getElementById("tax");
  const taxString = taxTag.innerText;
  const tax = parseFloat(taxString);

  reviewOrderBtn.addEventListener("click", function () {
    location.pathname = "/orderReview.html";
  });
  const cartClear = document.querySelector("#cartSummary button");
  cartClear.addEventListener("click", function () {
    localStorage.clear();
    totalProductsTag.innerText = 0;
    totalPriceTag.innerText = 0;
    grandTotalTag.innerText = 0;
  });

  let calculatePrice = 0,
    totalProducts = 0;
  products.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const productProperties = e.target.parentNode.children;
      console.log();
      const productImageLink =
        productProperties[0].children[0].getAttribute("src");
      const productName = productProperties[1].children[0].innerText;
      const productPriceString =
        productProperties[1].children[1].children[0].innerText;
      const productPrice = parseFloat(productPriceString);
      (calculatePrice += productPrice), totalProducts++;
      // console.log(productProperties, productImageLink, productName, productPrice);

      localStorage.setItem("productName", productName);
      localStorage.setItem("productImageLink", productImageLink);
      localStorage.setItem("productPrice", productPrice);
      localStorage.setItem("totalPrice", calculatePrice);
      localStorage.setItem("totalProducts", totalProducts);

      /* Show Output in order summary */
      totalProductsTag.innerText = totalProducts;
      totalPriceTag.innerText = calculatePrice;
      grandTotalTag.innerText = calculatePrice - (tax + shippingCharge);
    }
  });
}

if (location.pathname === "/orderReview.html") {
  const productName = localStorage.getItem("productName");
  const productImageLink = localStorage.getItem("productImageLink");
  const productPrice = localStorage.getItem("productPrice");
  const totalPrice = localStorage.getItem("totalPrice");
  const totalProducts = localStorage.getItem("totalProducts");

  const reviewSection = document.getElementById("reviewSection");
  console.log(reviewSection.children[0].children);
  const productWrapper = reviewSection.children[0].children;
  const product = document.createElement("div");
  

  // localStorage.clear();
  console.log("Total Products: ", totalProducts, " Price: ", totalPrice);
  console.log(productName, productImageLink, productPrice, totalPrice);
}
