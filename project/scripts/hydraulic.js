const menuButton1 = document.getElementById("menu");
const navMenu1 = document.getElementById("nav-menu");

menuButton1.addEventListener("click", () => {
    navMenu1.classList.toggle("open");
    menuButton1.textContent = navMenu1.classList.contains("open") ? "✖" : "☰";
});


const menuButton = document.getElementById("menu2");
const navMenu = document.getElementById("nav-menu2");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

const yearSpan = document.getElementById("currentyear");
const currentYear= new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastMod = document.getElementById("lastModified");
lastMod.textContent = document.lastModified;


//parte 2 tp

const temples = [
  {

    templeName: "HydroForce Elite 3000",
    Dimensions: "1200mm x 800mm x 950mm",
    Weight: "350 kg",
    Motor:"Power: 30 HP",
    Pressure_Rating: "3000 PSI",
    Price: "12500",
    imageUrl:"images/publicidad_1.webp",
    line:"old" 
  },
  {
    templeName: "TitanFlow PowerPack",
    Dimensions: "1950mm x 600mm x 900mm",
    Weight: "280 kg",
    Motor:"Power: 20 HP",
    Pressure_Rating: "2500 PSI",
    Price: "9800",
    imageUrl:"images/publicidad_2.webp",
    line:"old" 
  },
  {
    templeName: "MaxStroke Precision Cylinder",
    Dimensions: "150mm x 200mm x 900mm",
    Weight: "80 kg",
    Motor:"Power: 10 HP",
    Pressure_Rating: "3500 PSI",
    Price: "1800",
    imageUrl:"images/publicidad_3.webp",
    line:"old" 
  },
  {
    templeName: "UltraLift Telescopic Cylinder",
    Dimensions: "150mm x 500mm x 300mm",
    Weight: "180 kg",
    Motor:"Power: 10 HP",
    Pressure_Rating: "1500 PSI",
    Price: "800",
    imageUrl:"images/publicidad_4.webp",
    line:"old" 
  },
  {    
    templeName: "QuantumPiston Pump",
    Dimensions: "150mm x 550mm x 300mm",
    Weight: "180 kg",
    Motor:"Power: 30 HP",
    Pressure_Rating: "500 PSI",
    Price: "3000",
    imageUrl:"images/publicidad_5.webp",
    line:"old" 
  },
  {    
    templeName: "VortexFlow Gear Pump",
    Dimensions: "10mm x 50mm x 30mm",
    Weight: "500 kg",
    Motor:"Power: 30 HP",
    Pressure_Rating: "500 PSI",
    Price: "300",
    imageUrl:"images/publicidad_6.webp",
    line:"old" 
  },
  {    
    templeName: "FlowMaster Control Valve",
    Dimensions: "100mm x 50mm x 330mm",
    Weight: "100 kg",
    Motor:"Power: 40 HP",
    Pressure_Rating: "5000 PSI",
    Price: "2000",
    imageUrl:"images/publicidad_7.webp",
    line:"new" 
  },
  {
   
    templeName: "HydraSafe Relief Valve",
    Dimensions: "100mm x 580mm x 330mm",
    Weight: "100 kg",
    Motor:"Power: 4000 HP",
    Pressure_Rating: "5000 PSI",
    Price: "145",
    imageUrl:"images/publicidad_8.webp",
    line:"old" 
  },
  {
 
    templeName: "FlexCore High-Pressure Hose",
    Dimensions: "120mm x 80mm x 30mm",
    Weight: "80 kg",
    Motor:"Power: 5000 HP",
    Pressure_Rating: "5000 PSI",
    Price: "10000",
    imageUrl:"images/publicidad_9.webp" ,
    line:"new" 
  },
 
];

const container = document.getElementById("temples-container");
const PageTitle = document.getElementById("page-title");

function renderTemples(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach((t) => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const dedicatedDate = new Date(t.dedicated);
        card.innerHTML = `
        <h3>${t.templeName}</h3>
        <p><strong>Dimensions: </strong>${t.Dimensions}</p>
        <p><strong>Weight: </strong>${t.Weight}</p>
        <p><strong>Price: </strong>$${t.Price.toLocaleString()}</p>
        <img src= "${t.imageUrl}" alt="${t.templeName}" loading = "lazy">
        `;
        container.appendChild(card);
    });
}
renderTemples(temples);

document.querySelectorAll("#nav-menu2 a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        let filtered = [];

        switch (filter) {
            case "all":
                PageTitle.textContent = "Home";
                filtered = temples;
                break;

            case "Old":
                PageTitle.textContent = "Old Line";
                filtered = temples.filter((t) => t.line =="old");
                break;

            case "New":
                PageTitle.textContent = "New Line";
                filtered = temples.filter((t) => t.line =="new");
                break;
            case "Low_price":
                PageTitle.textContent= "Low price";
                filtered = temples.filter(t => t.Price < 1000);
                break;

            case "Hight_price":
                PageTitle.textContent = "Hight price";
                filtered = temples.filter(t => t.Price >=1000);
                break;
        }

        renderTemples(filtered)
    })
})