const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const submenuToggle = document.getElementById("submenu-toggle");
const submenu = document.getElementById("submenu");
const submenuToggleParticipa = document.getElementById(
  "submenu-toggle-participa"
);
const submenuParticipa = document.getElementById("submenu-participa");
const submenuToggleEntidad = document.getElementById("submenu-toggle-entidad");
const submenuEntidad = document.getElementById("submenu-entidad");
const submenuToggles = document.querySelectorAll(".submenu-toggle");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

submenuToggle.addEventListener("click", () => {
  closeOtherSubmenus(submenu);
  submenu.classList.toggle("hidden");
});

submenuToggleParticipa.addEventListener("click", () => {
  closeOtherSubmenus(submenuParticipa);
  submenuParticipa.classList.toggle("hidden");
});

submenuToggleEntidad.addEventListener("click", () => {
  closeOtherSubmenus(submenuEntidad);
  submenuEntidad.classList.toggle("hidden");
});

submenuToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const subsubmenu = toggle.nextElementSibling;

    // Solo cierra los submenús secundarios dentro del submenú actual
    closeOtherSubSubmenus(toggle);

    subsubmenu.classList.toggle("hidden");
  });
});

function closeOtherSubmenus(exclude) {
  const allSubmenus = document.querySelectorAll(
    "#submenu, #submenu-participa, #submenu-entidad"
  );
  allSubmenus.forEach((submenu) => {
    if (submenu !== exclude) {
      submenu.classList.add("hidden");
    }
  });
}

function closeOtherSubSubmenus(exclude) {
  const subSubmenus =
    exclude.parentElement.parentElement.querySelectorAll("ul");
  subSubmenus.forEach((submenu) => {
    if (submenu !== exclude.nextElementSibling) {
      submenu.classList.add("hidden");
    }
  });
}
