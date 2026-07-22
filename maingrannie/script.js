// ===== Config =====
const CONTACT_EMAIL = "benton@moistgrannies.shop";
const CHECKOUT_URL = "https://benton.moistgrannies.shop";

// ===== Mailto links (opens visitor's mail app with recipient pre-filled) =====
document.querySelectorAll("#emailLink1, #emailLink2, #emailLink3").forEach((link) => {
  link.setAttribute("href", `mailto:${CONTACT_EMAIL}`);
});

// ===== Checkout buttons -> redirect to subdomain =====
document.querySelectorAll("[data-buy]").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = CHECKOUT_URL;
  });
});