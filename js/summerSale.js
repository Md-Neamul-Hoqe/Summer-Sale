console.clear();
/* set Coupon from header section */
const couponBox = document.getElementById("coupon");
const coupon = document.getElementById("coupon").innerText;

/**
 *  Cart Variables
 * */
/* [get coupon from user] */
const couponField = document.getElementById("couponField");
const couponApplyBtn = document.getElementById("couponApplyBtn");
const purchaseBtn = document.getElementById("purchaseBtn");
const orderList = document.getElementById("orderList");
const totalPriceElement = document.getElementById("totalPrice");
const discountElement = document.getElementById("discount");
const grandTotalElement = document.getElementById("grandTotal");

/* Cart Controllers */
let totalPrice = 0,
  discount = 0;

document
  .getElementById("productsSide")
  .addEventListener("click", function (clickEvent) {
    const card = clickEvent.target.closest(".card");
    if (card) {
      const title = card.querySelector(".card-title").innerText;

      const priceString = card.querySelector(".price").innerText;
      const price = parseFloat(priceString);
      totalPrice += price;

      /* button disabled/enabled */
      if (totalPrice >= 200) {
        couponApplyBtn.classList.remove("btn-disabled");
      }
      if (totalPrice > 0) {
        purchaseBtn.classList.remove("btn-disabled");
      }

      /* Cart Output Show */
      const list = document.createElement("li");
      orderList.appendChild(list).innerText = title;
      totalPriceElement.innerText = totalPrice.toFixed(2);
      grandTotalElement.innerText = (totalPrice - discount).toFixed(2);
    }
  });

couponBox.addEventListener("click", function () {
  couponField.value = coupon; /* Copy to the coupon field */
  couponBox.setAttribute("title", "Copied");
});

/* Coupon verification */
couponApplyBtn.addEventListener("click", function () {
  const userCoupon = couponField.value;

  if (coupon === userCoupon) {
    discount = totalPrice * 0.2;

    /* Cart Output Update for discount */
    discountElement.innerText = discount.toFixed(2);
    grandTotalElement.innerText = (totalPrice - discount).toFixed(2);
  } else {
    return alert("Sorry! This coupon has no discount yet.");
  }
});

/* reset on click over "go home" */
function resetCart() {
  localStorage.clear();
  console.clear();
  location.href = location.origin + location.pathname;
}
