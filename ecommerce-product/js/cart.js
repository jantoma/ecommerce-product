(function () {
  "use strict";

  const cartSvgIcons = document.querySelectorAll(".cart-icon");
  const cartCount = document.querySelector("#cart-count");
  const quantity = document.querySelector("#quantity");
  const decreaseQuantity = document.querySelector("#decremnt");
  const increaseQuantity = document.querySelector("#increment");
  const addToCartBtn = document.querySelector(".add-to-cart");
  const cartBox = document.querySelector(".cart-box");
  const cart = document.querySelector("#cart");
  const checkOutBtn = document.querySelector("#checkout-btn");

  let proudects = [];
  let countProduct = 0;

  function updateCart() {
    cart.innerHTML = "";
    if (proudects.length > 0) {
      proudects.forEach((product, index) => {
        let proudectList = 
        ` <li>
            <img id="productImg" src="${product.image}" alt="Product Image">
              <div class="title-box">
                <p>${product.name}</p>
                      <div class="title">
                        <span style ="color:var(--Dark--grayish--blue);">$${
                          product.price
                        }.00 x ${countProduct}</span>
                        <span style ="color:var(--Orange--)"><strong style = "color:var(--Dark--grayish--blue)">Total: </strong>$${
                          product.price * countProduct
                        }.00</span>
                      </div>
              </div>

              <button class="dele-product-btn" data-index = "${index}">
                  <svg  width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a" />
                    </defs>
                    <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                  </svg>
              </button>
     </li>`;
        cart.innerHTML = proudectList;
      });

      checkOutBtn.style.display = "block";
    } else {
      cart.innerHTML = `<li><p>Your Cart is empty.</p></li>`;
      checkOutBtn.style.display = "none";
      cartBox.style.display = "none";
    }

    bindDeleteEvents();
  }

  function addProudect() {
    if (countProduct > 0) {
      proudects.push({
        name: "Fall Limited Edition Sneakers",
        price: 125.0,
        image: "images/image-product-1-thumbnail.jpg",
      });

      updateCart();
      cartCount.style.display = "block";
      cartCount.innerHTML = countProduct;
      countProduct = 0;
      quantity.innerHTML = countProduct;

    } else {
      alert("Please add at least one product.");
    }
  }

  cartSvgIcons.forEach((cartSvgIcon) => {
    cartSvgIcon.addEventListener("click", () => {
      if (cartBox.style.display === "none" || cartBox.style.display === "") {
        cartBox.style.display = "block";
      } else {
        cartBox.style.display = "none";
      }
    });
  });

  decreaseQuantity.addEventListener("click", () => {
    if (countProduct > 0) {
      countProduct -= 1;
      quantity.innerHTML = countProduct;
    }
  });

  increaseQuantity.addEventListener("click", () => {
    countProduct += 1;
    quantity.innerHTML = countProduct;
  });

  addToCartBtn.addEventListener("click", addProudect);
  function bindDeleteEvents() {
    const deleteButtons = document.querySelectorAll(".dele-product-btn");
    deleteButtons.forEach((deleteButton) => {
      const index = parseInt(deleteButton.getAttribute("data-index"));
      deleteButton.addEventListener("click", () => {
        proudects.splice(index);
        cartCount.style.display = "none";
        updateCart();
      });
    });
  }

  updateCart();
})();
