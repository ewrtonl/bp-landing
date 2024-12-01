const menu = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
});

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function closeMenu() {
  nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".leads-form form");
  const modal = document.getElementById("emailModal");
  const modalContent = modal.querySelector(".modal-content div h3");
  const closeModal = modal.querySelector(".close");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (!nameValue || !emailValue) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (nameValue) {
      modalContent.textContent = `Olá, ${nameValue}!`;
    } else {
      return;
    }

    modal.style.display = "flex";
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

ScrollReveal().reveal(
  ".header-content, .header-content img, .content-info, .content-info1, .content-info1 h2, .content-info1 img, .content-info2, .content-info2 div, .products, .products .products-header, .product-list, .about, .about-info, .about-info2, .about-info2 img, .leads-form, .leads-form form, .leads-form img",
  {
    origin: "top",
    distance: "40px",
    duration: 800,
  }
);
