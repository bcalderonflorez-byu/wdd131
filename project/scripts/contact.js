const menuButton1 = document.getElementById("menu");
const navMenu1 = document.getElementById("nav-menu");

menuButton1.addEventListener("click", () => {
    navMenu1.classList.toggle("open");
    menuButton1.textContent = navMenu1.classList.contains("open") ? "✖" : "☰";
});

const yearSpan = document.getElementById("currentyear");
const currentYear= new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastMod = document.getElementById("lastModified");
lastMod.textContent = document.lastModified;


const products = [
  {
    id: "fc-1888",
    name: "VortexFlow Gear Pump",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "QuantumPiston Pump",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "TurboDrive Vane Pump",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "PowerPulse Axial Pump",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "TitanFlow High-Pressure Pump",
    averagerating: 5.0
  }
];

window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

});


