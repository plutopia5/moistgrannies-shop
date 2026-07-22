// =========================
// MoistGrannies.shop
// script.js
// =========================

// Moist Grannies 4 Sale

const products = [
{
name:"Mildred",
category:"classic",
price:"$3,499.99",
rating:5,
reviews:1842,
image:"https://placehold.co/600x600?text=Mildred",
description:"Limited-edition resin collectible featuring Mildred knitting at maximum speed."
},

{
name:"Ethel",
category:"classic",
price:"$5,999.99",
rating:5,
reviews:963,
image:"https://placehold.co/600x600?text=Ethel",
description:"Collector's figurine complete with rocking chair and tiny spectacles."
},

{
name:"Gertrude",
category:"legendary",
price:"$7,777.77",
rating:5,
reviews:402,
image:"https://placehold.co/600x600?text=Gertrude",
description:"Legendary chrome-plated display edition."
},

{
name:"Barbara XL",
category:"limited",
price:"$2,199.99",
rating:5,
reviews:1223,
image:"https://placehold.co/600x600?text=Barbara",
description:"Includes miniature pie and tiny garden gnome."
},

{
name:"Nana Supreme",
category:"legendary",
price:"$99,999.99",
rating:5,
reviews:12,
image:"https://placehold.co/600x600?text=Nana",
description:"Museum-quality display piece."
},

{
name:"Doris",
category:"classic",
price:"$899.99",
rating:5,
reviews:832,
image:"https://placehold.co/600x600?text=Doris",
description:"An original fan favorite."
},

{
name:"Betty",
category:"classic",
price:"$1,399.99",
rating:5,
reviews:517,
image:"https://placehold.co/600x600?text=Betty",
description:"Retro packaging with faux-autograph."
},

{
name:"Shirley Gold Edition",
category:"limited",
price:"$4,899.99",
rating:5,
reviews:211,
image:"https://placehold.co/600x600?text=Shirley",
description:"Gold-painted anniversary release."
},

{
name:"Agnes",
category:"legendary",
price:"$14,999.99",
rating:5,
reviews:64,
image:"https://placehold.co/600x600?text=Agnes",
description:"Only never produced."
},

{
name:"Dorothy",
category:"limited",
price:"$3,299.99",
rating:5,
reviews:504,
image:"https://placehold.co/600x600?text=Dorothy",
description:"Includes faux velvet display base."
},

{
name:"Edna",
category:"classic",
price:"$1,799.99",
rating:5,
reviews:610,
image:"https://placehold.co/600x600?text=Edna",
description:"Hand-painted (allegedly)."
},

{
name:"Florence Mega Pack",
category:"legendary",
price:"$24,999.99",
rating:5,
reviews:8,
image:"https://placehold.co/600x600?text=Florence",
description:"Contains absolutely nothing because it's sold out."
}
];

const fakeReviews = [
"⭐⭐⭐⭐⭐ 'Still waiting for a restock since 1999.'",
"⭐⭐⭐⭐⭐ 'Looks amazing on my wishlist.'",
"⭐⭐⭐⭐⭐ 'Sold out before I even found the website.'",
"⭐⭐⭐⭐⭐ 'Customer support politely told me no.'",
"⭐⭐⭐⭐⭐ '10/10 would fail to purchase again.'",
"⭐⭐⭐⭐⭐ 'The permanent sold-out feature is flawless.'",
"⭐⭐⭐⭐⭐ 'Five stars. Zero inventory.'"
];

const grid=document.getElementById("productGrid");
const search=document.getElementById("searchInput");
const category=document.getElementById("categorySelect");

function randomReview(){
    return fakeReviews[Math.floor(Math.random()*fakeReviews.length)];
}

function stars(n){
    return "⭐".repeat(n);
}

function render(){

    grid.innerHTML="";

    const searchValue=search.value.toLowerCase();
    const cat=category.value;

    const filtered=products.filter(product=>{

        const matchesSearch=
        product.name.toLowerCase().includes(searchValue);

        const matchesCategory=
        cat==="all"||product.category===cat;

        return matchesSearch&&matchesCategory;

    });

    filtered.forEach(product=>{

        const card=document.createElement("div");

        card.className="card";

        card.innerHTML=`

        <div class="badge">
            SOLD OUT
        </div>

        <img src="${product.image}" alt="${product.name}">

        <div class="card-content">

            <h3>${product.name}</h3>

            <div class="price">
                ${product.price}
            </div>

            <p class="description">
                ${product.description}
            </p>

            <div class="rating">
                ${stars(product.rating)}
                (${product.reviews} reviews)
            </div>

            <div class="review">
                ${randomReview()}
            </div>

            <button disabled>
                SOLD OUT
            </button>

        </div>
        `;

        grid.appendChild(card);

    });

}

search.addEventListener("input",render);
category.addEventListener("change",render);

render();

// Keep cart permanently empty

const cart=document.getElementById("cartCount");
cart.textContent="0";

// Fun title animation

const titles=[
"MoistGrannies.shop",
"Everything Sold Out",
"Collector's Paradise",
"Never Restocking"
];

let i=0;

setInterval(()=>{

document.title=titles[i];

i++;

if(i>=titles.length){
i=0;
}

},2500);

// Footer year

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=
`© ${new Date().getFullYear()} MoistGrannies.shop<br>This website is satire. All collectible characters are fictional.`;

}