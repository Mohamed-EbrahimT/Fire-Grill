const subscribeBtn = document.querySelector(".inp-s8 button"); 

if(subscribeBtn){ 
  subscribeBtn.addEventListener("click", function(){ 
    const emailInput = document.querySelector(".inp-s8 input"); 
    
    if(emailInput){ 
      const email = emailInput.value.trim(); 
      
      if(email.includes("@") && email.includes(".")){ 
        alert("✅ Thank you for subscribing, " + email); 
      } else {
        alert("❌ Please enter a valid email address"); 
      }
    }
  });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartDropdown = document.getElementById("cartDropdown");
const cartIcon = document.getElementById("cartIcon");

function updateCartUI(){
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item=>{
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <p>${item.name}</p>
          <small>$${item.price}</small>
        </div>
      </div>
    `;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

updateCartUI();

cartIcon.addEventListener("click",()=>{
  cartDropdown.style.display =
    cartDropdown.style.display === "block" ? "none" : "block";
});
 

cartIcons.forEach(icon => { 
  icon.addEventListener("click", () => { 
    cartCount++; 
    if(badge){ 
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



  

