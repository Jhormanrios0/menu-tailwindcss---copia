const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Submenu buttons
const submenuToggle = document.getElementById("submenu-toggle");
const submenu = document.getElementById("submenu");
const submenuToggleParticipa = document.getElementById(
  "submenu-toggle-participa"
);
const submenuParticipa = document.getElementById("submenu-participa");
const submenuToggleEntidad = document.getElementById("submenu-toggle-entidad");
const submenuEntidad = document.getElementById("submenu-entidad");
const submenuToggleComunicaciones = document.getElementById(
  "submenu-toggle-comunicaciones"
);
const submenuComunicaciones = document.getElementById("submenu-comunicaciones");
const submenuToggleNuestraAlcaldia = document.getElementById(
  "submenu-toggle-nuestra-alcaldia"
);
const submenuNuestraAlcaldia = document.getElementById(
  "submenu-nuestra-alcaldia"
);

// Submenu toggle buttons
const submenuToggles = document.querySelectorAll(".submenu-toggle");

// Event listeners for main menu
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Event listeners for submenu
submenuToggle.addEventListener("click", () => {
  toggleSubmenu(submenu);
});

submenuToggleParticipa.addEventListener("click", () => {
  toggleSubmenu(submenuParticipa);
});

submenuToggleEntidad.addEventListener("click", () => {
  toggleSubmenu(submenuEntidad);
});

submenuToggleNuestraAlcaldia.addEventListener("click", () => {
  toggleSubmenu(submenuNuestraAlcaldia);
});

submenuToggleComunicaciones.addEventListener("click", () => {
  toggleSubmenu(submenuComunicaciones);
});

// Event listeners for submenu items
submenuToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const subsubmenu = toggle.nextElementSibling;

    // Close other sub-submenus within the same submenu
    closeOtherSubSubmenus(toggle);

    // Toggle the visibility of the current sub-submenu
    subsubmenu.classList.toggle("hidden");
  });
});

function toggleSubmenu(currentMenu) {
  // Get all submenus
  const allSubmenus = document.querySelectorAll(
    "#submenu, #submenu-participa, #submenu-entidad, #submenu-comunicaciones, #submenu-nuestra-alcaldia"
  );

  // Hide all submenus except the one being toggled
  allSubmenus.forEach((menu) => {
    if (menu !== currentMenu) {
      menu.classList.add("hidden");
    }
  });

  // Toggle the visibility of the current submenu
  currentMenu.classList.toggle("hidden");
}

function closeOtherSubSubmenus(currentToggle) {
  // Get the parent menu of the current toggle
  const parentMenu = currentToggle.parentElement.parentElement;

  // Get all sub-submenus within the parent menu
  const subSubmenus = parentMenu.querySelectorAll("ul");

  // Hide all sub-submenus except the one being toggled
  subSubmenus.forEach((submenu) => {
    if (submenu !== currentToggle.nextElementSibling) {
      submenu.classList.add("hidden");
    }
  });
}
