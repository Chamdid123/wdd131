const navi = document.querySelector('.navi')
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () =>{
    navi.classList.toggle('open');
    hamburger.classList.toggle('open');

});
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fukuoka Japan",
    location: "Fukuoka City, Japan",
    dedicated: "2000, june, 11",
    area: 10700,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14618-main.jpg"
  },
  {
    templeName: "Alaska United States",
    location: "Alaska United States",
    dedicated: "1999, January, 9-10",
    area: 11937,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-57454-icon.jpg"
  },
  {
    templeName: "A Fokontany Andranoro",
    location: "  Antananarivo",
    dedicated: "2025, March, 15",
    area: 10000,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/antananarivo-madagascar-temple/antananarivo-madagascar-temple-57245-main.jpg"
  },
];
const gallery = document.querySelector(".gallery");
function displayTemples(templesList) {
  gallery.innerHTML = "";
  templesList.forEach(temples => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${temples.templeName}</h3>
      <p><strong>Location:</strong>${temples.location}</p>
      <p><strong>Dedicated:</strong>${temples.dedicated}</p>
      <p><strong>Area:</strong>${temples.area.toLocaleString()}</p>
      <img src = "${temples.imageUrl}" alt ="${temples.templeName}" loading="lazy">
    `;
    gallery.appendChild(card);
   });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            parseInt(temple.dedicated) < 1900
        )
    );
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            parseInt(temple.dedicated) > 2000
        )
    );
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            temple.area > 90000
        )
    );
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            temple.area < 10000
        )
    );
});