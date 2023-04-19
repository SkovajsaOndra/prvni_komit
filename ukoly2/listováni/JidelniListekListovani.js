const menu = [
    { jidlo: "Burger", cena: 99,  imgSrc: "obrazky/jídlo1.jpg" },
    { jidlo: "Řízek s bramborovou kaší", cena: 129, image: "https://www.nejrecept.cz/upload/89021245_605757a266ac75_full.jpg" },
    { jidlo: "Salát s kuřecím masem", cena: 79, image: "https://itesco.cz/imgglobal/content_platform/recipes/main/3a/sized/756x426-100-fff-0-0/3a8dec6d8b2d1dd0fbcbacd837d0b70b.jpg" },
    { jidlo: "Špagety", cena: 89, image: "https://media.igurmet.cz/yummy/be/06/be06f2199330a8d41c85c2581f2f9bdf.jpg" },
    { jidlo: "Smažený sýr s hranolkami", cena: 69, image: "https://www.receptyonline.cz/wp-content/uploads/2015/09/154148smazak-hranolky-tatarka.jpg" },
  ];

const nazevJidlaElem = document.getElementById("nazev_jidla");
const obrazekJidlaElem = document.getElementById("obrazek_jidla");
const cenaElem = document.getElementById("cena");
const zpatkyBtn = document.getElementById("zpet");
const dalsiBtn = document.getElementById("dal");

let JidloIndex = 0;

function JidloInfo() {
    const currentFood = menu[currentJidloIndex];
    foodNameElem.textContent = currentJidlo.name;
    foodImgElem.src = currentJidlo.imgSrc;
    priceElem.textContent = currentJidlo.price;
}

zpatkyBtn.addEventListener("click", () => {
    currentFoodIndex = (currentJidloIndex - 1 + food_data.length) % food_data.length;
    JidloInfo();
});

dalsiBtn.addEventListener("click", () => {
    currentFoodIndex = (currentJidloIndex + 1) % food_data.length;
   JidloInfo();
});

JidloInfo();