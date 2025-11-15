const subscribeBtn = document.querySelector(".inp-s8 button");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", function () {
    const emailInput = document.querySelector(".inp-s8 input");
    if (emailInput) {
      const email = emailInput.value.trim();
      if (email.includes("@") && email.includes(".")) {
        alert("✅ Thank you for subscribing, " + email);
      } else {
        alert("❌ Please enter a valid email address");
      }
    }
  });
}

let cartCount = 3;
const badge = document.querySelector(".cart-icon .badge");
const cartIcons = document.querySelectorAll(".fa-cart-plus");

cartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    cartCount++;
    if (badge) {
      badge.textContent = cartCount;
      badge.style.transform = "scale(1.4)";
      setTimeout(() => badge.style.transform = "scale(1)", 200);
    }
  });
});

let orderCount = 0;

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    orderCount++;
    document.getElementById("cart-count").innerText = orderCount;
    showToast("✅ تمت إضافة منتج جديد إلى سلتك");
  });
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
