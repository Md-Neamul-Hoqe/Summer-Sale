console.clear();
/* set Coupon from header section */
const coupon = document.getElementById("coupon").innerText;

/* get coupon from user */
const couponField = document.getElementById("couponField");
const couponApplyBtn = document.getElementById("couponApplyBtn");
const purchaseBtn = document.getElementById("purchaseBtn");

const productsSide = document.getElementById("productsSide");
const orderList = document.getElementById("orderList");
const totalPriceElement = document.getElementById("totalPrice");
const grandTotalElement = document.getElementById("grandTotal");
const discountElement = document.getElementById("discount");

let totalPrice = 0,
  discount = 0;

productsSide.addEventListener("click", function (clickEvent) {
  const card = clickEvent.target.closest(".card");
  if (card) {
    console.log(card);
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

/* Coupon validation */
couponApplyBtn.addEventListener("click", function () {
  const userCoupon = couponField.value;
  console.log(userCoupon);
  if (coupon === userCoupon) {
    discount = totalPrice * 0.2;

    /* Cart Output Update for discount */
    discountElement.innerText = discount.toFixed(2);
    grandTotalElement.innerText = (totalPrice - discount).toFixed(2);
  } else {
    return alert("Sorry! This coupon has no discount yiet.");
  }
});

/* reset on click over "go home" */
function resetCart() {
  totalPriceElement.innerText = 0;
  discountElement.innerText = 0;
  grandTotalElement.innerText = 0;
  orderList.innerHTML = "";
  purchaseBtn.classList.add("btn-disabled");
  couponApplyBtn.classList.add("btn-disabled");
}
