const mens =[
  {
    id:1,
    title:"Highlander Casual shirt",
    img:"./images/1ed79c22-68b5-491a-b673-e91e4411d8aa1585905063620HIGHLANDERMenOliveGreenBlackSlimFitCheckedCasualShirt1.webp",
    price:599,
  },
  {
    id:1,
    title:"Dennis Lingo",
    img:"./images/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.webp",
    price:554,
  },
  {
    id:1,
    title:"WROGN Casual shirt",
    img:"./images/dfda8898-827b-41de-9a9c-c86b061ae8141569490364357-WROGN-Men-Olive-Green--Black-Slim-Fit-Checked-Casual-Shirt-3-1.jpg",
    price:1264,
  },
  {
    id:1,
    title:"Campus Sutra",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg",
    price:599,
  },
  {
    id:1,
    title:"ROADSTER",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8889611/2019/3/20/35de2e6b-d93a-441c-81c7-bc0ae0108b011553080254568-Roadster-Men-Black--White-Regular-Fit-Checked-Casual-Shirt-9-2.jpg",
    price:699,
  },
  {
    id:1,
    title:"HIGHLANDER Men's Slim",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9162675/2019/12/3/79b2dbb2-f8bf-4fb4-9d74-122f7f7ad8dd1575363062409-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-86115753630-1.jpg",
    price:1264,
  },
  {
    id:1,
    title:"ROADSTER Casual's",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9680385/2019/8/19/9a71effc-5ca8-4f56-94c0-2c71054102101566218377789-Roadster-Men-Shirts-8021566218376333-1.jpg",
    price:1264,
  },
  {
    id:1,
    title:"WROGN Casual shirt",
    img:"./images/dfda8898-827b-41de-9a9c-c86b061ae8141569490364357-WROGN-Men-Olive-Green--Black-Slim-Fit-Checked-Casual-Shirt-3-1.jpg",
    price:1264,
  },
]
const womens =[
  {
    id:1,
    title:"AHIKA Women Straight Kurta",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
    price:594,
  },
  {
    id:1,
    title:"Indo Era Cotton Kurta Set",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11459658/2020/2/15/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
    price:1442,
  },
  {
    id:1,
    title:"Harpa A-line Dress",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/16/25f5b6a7-ce25-4e66-8a61-3aa2037b6c741600207614629-1.jpg",
    price:764,
  },
  {
    id:1,
    title:"Athena",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2472347/2018/2/16/11518762631793-SASSAFRAS-Women-White-Printed-Maxi-Dress-9851518762631557-1.jpg",
    price:999,
  },
  {
    id:1,
    title:"Sassfrass Maxi Dress",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8969717/2019/3/28/e448c9a1-3a0f-40e7-b267-1bf44a44ba501553778956208-Indo-Era-Beige-Solid-Straight-Kurta-Sets-9801553778954623-1.jpg",
    price:999,
  },
  {
    id:1,
    title:"Berrylush Wrap dress",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/12/2/e1aff50c-bd0a-4154-a5ca-f37674328ab41575309398460-5.jpg",
    price:899,
  },
  {
    id:1,
    title:"Sassfrass Maxi Dress",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10308637/2019/7/29/cae45b56-123b-4db9-b6a1-612cc597337e1564400317667-SASSAFRAS-Women-Maroon-Solid-A-Line-Dress-with-Pleats-551564-1.jpg",
    price:679,
  },
  {
    id:1,
    title:"Veni Vidi Vici",
    img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10054821/2019/7/3/db52fd6a-19fc-4add-bc4b-77b8608454d01562138455279-Veni-Vidi-Vici-Women-Black-Bodycon-Dress-3841562138453419-1.jpg",
    price:718,
  }
]
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });

const productCenter = document.querySelector(".mens-clothing");
const WomensCenter = document.querySelector(".womens");
window.addEventListener("DOMContentLoaded",function(){
  displayMensItems(mens);
  displayWomensItems(womens);
});

function displayMensItems(mensItems){
  let displayMens = mensItems.map(function(item){
     return `<div class="product">
                <div class="product-header">
                  <img src="${item.img}" alt="${item.title}">

                  <ul class="icons">
                    <span><i class="bx bx-shopping-bag"></i></span>
                  </ul>
                </div>
                <div class="product-footer">
                  <a href="#"><h3>${item.title}</h3></a>
                  <div class="rating">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bx-star"></i>
                  </div>
                  <h4 class="price">Rs ${item.price}</h4>
                </div>
            </div>`
  });
  displayMens = displayMens.join('');
  productCenter.innerHTML = displayMens;
}
function displayWomensItems(WomenItems){
  let displayWomens = WomenItems.map(function(item){
     return `<div class="product">
                <div class="product-header">
                  <img src="${item.img}" alt="${item.title}">

                  <ul class="icons">
                    <span><i class="bx bx-shopping-bag"></i></span>
                  </ul>
                </div>
                <div class="product-footer">
                  <a href="#"><h3>${item.title}</h3></a>
                  <div class="rating">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bx-star"></i>
                  </div>
                  <h4 class="price">Rs ${item.price}</h4>
                </div>
            </div>`
  });
  displayWomens = displayWomens.join('');
  WomensCenter.innerHTML = displayWomens;
}
