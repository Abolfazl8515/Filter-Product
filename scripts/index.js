const boxElements = document.querySelector(".product-group-1");
const userInput = document.querySelector("#user-input");
fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((item) => {
      boxElements.innerHTML += `
        <div class="product-item">
              <img src=${item.image} width="200" height="200" alt="product">
              <p class="Prise">${item.price} $</p>
              <p class="title-P">${item.title}</p>
          </div>
      `;
    });
  });

userInput.addEventListener("keyup", (e) => {
  const Items = document.querySelectorAll(".product-item");
  Items.forEach((item) => {
    if (!item.lastElementChild.innerHTML.includes(e.target.value)) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
});
