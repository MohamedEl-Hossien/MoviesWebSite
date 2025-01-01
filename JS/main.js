// Check If There's Local Storage Color Option
if (localStorage.getItem("pageColor") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("pageColor")
  );
  document.querySelectorAll(".colors-list li").forEach((color) => {
    // Remove Active Class From All Colors
    color.classList.remove("active");
    // Add Active Class On Taregt Color
    if (
      window.getComputedStyle(color).backgroundColor ===
      localStorage.getItem("pageColor")
    ) {
      color.classList.add("active");
    }
  });
}

// Check If There's Local Storage Bullets List Option
if (localStorage.getItem("bulletOption") !== null) {
  // Remove Active Class From All Colors
  document.querySelectorAll(".bullets-options span").forEach((option) => {
    option.classList.remove("active");
  });
  if (localStorage.getItem("bulletOption") === "hide") {
    // Add Active Class On Taregt Option
    document.querySelector(".bullets-options .hide").classList.add("active");
    // Hide Bullets List If Hide Option Selected
    document.querySelector(".nav-bullets").style.display = "none";
  } else if (localStorage.getItem("bulletOption") === "show") {
    // Add Active Class On Taregt Option
    document.querySelector(".bullets-options .show").classList.add("active");
    // Show Bullets List If Show Option Selected
    document.querySelector(".nav-bullets").style.display = "block";
  }
}

// Select Landing Page
const landingPage = document.querySelector(".landing-page");

// Array of Imgs
const arrayOfImgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpeg"];

// Change Background of Landing Page
let backgroundInterval;
let randomImg = 0;
function randomBackground() {
  backgroundInterval = setInterval(() => {
    //let randomImg = Math.floor(Math.random() * arrayOfImgs.length);
    landingPage.style.backgroundImage =
      `url("Imgs/` + arrayOfImgs[randomImg] + `")`;
    if (randomImg < arrayOfImgs.length - 1) {
      randomImg++;
    } else {
      randomImg = 0;
    }
  }, 5000);
}

// Check If There's Local Storage Background Option
if (localStorage.getItem("backgroundOption") !== null) {
  document.querySelectorAll(".background-options span").forEach((option) => {
    // Remove Active Class From All Options
    option.classList.remove("active");
    // Add Active Class On Taregt option
  });
  if (localStorage.getItem("backgroundOption") === "random") {
    document
      .querySelector(".background-options .random")
      .classList.add("active");
    randomBackground();
  } else {
    document
      .querySelector(".background-options .fixed")
      .classList.add("active");
    clearInterval(backgroundInterval);
  }
} else {
  randomBackground();
}

// Open Settings Box Using Settings Gear
const settingsGear = document.querySelector(".fa-gear");
const settingsBox = document.querySelector(".settings-box");
settingsGear.onclick = function () {
  this.classList.toggle("fa-spin");
  settingsBox.classList.toggle("open");
};

// Select All Possible Colors of Site
const pageColor = document.querySelectorAll(".colors-list li");
// Loop On All Colors
pageColor.forEach((color) => {
  // Add Event On click On Each Color
  color.onclick = () => {
    // Loop on All Colors
    color.parentElement.querySelectorAll(".active").forEach((otherColors) => {
      // Remove Active Class From All Colors
      otherColors.classList.remove("active");
    });
    // Add Active Class On Target Color
    color.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      window.getComputedStyle(color).backgroundColor
    );
    localStorage.setItem(
      "pageColor",
      window.getComputedStyle(color).backgroundColor
    );
  };
});

// Select Background Mode Options
const backgroundOptions = document.querySelectorAll(".background-options span");
// Loop On All Options
backgroundOptions.forEach((current) => {
  // Add Event On click On Each Option
  current.onclick = () => {
    // Loop on All Options
    backgroundOptions.forEach((option) => {
      // Remove Active Class From All Options
      option.classList.remove("active");
    });
    // Add Active Class On Target Option
    current.classList.add("active");
    if (current.classList.contains("fixed")) {
      // Stop Random Images If Fixed Option Selected
      clearInterval(backgroundInterval);
      localStorage.setItem("backgroundOption", "fixed");
    } else {
      // Start Random Images If Random Option Selected
      randomBackground();
      localStorage.setItem("backgroundOption", "random");
    }
  };
});

// Select Bullets List Options
const bulletsOptions = document.querySelectorAll(".bullets-options span");
// Loop On All Options
bulletsOptions.forEach((current) => {
  // Add Event On click On Each Option
  current.onclick = () => {
    // Loop on All Options
    bulletsOptions.forEach((option) => {
      // Remove Active Class From All Options
      option.classList.remove("active");
    });
    // Add Active Class On Target Option
    current.classList.add("active");
    if (current.classList.contains("hide")) {
      // Hide Bullets List If Hide Option Selected
      document.querySelector(".nav-bullets").style.display = "none";
      localStorage.setItem("bulletOption", "hide");
    } else {
      // Shiw Bullets List If Show Option Selected
      document.querySelector(".nav-bullets").style.display = "block";
      localStorage.setItem("bulletOption", "show");
    }
  };
});

let moviesSection = document.querySelector(".movies-box");
let moviesName = [
  "CHALLENGERS",
  "ABOVE THE TREES",
  "FANTASY",
  "L.I.F.E",
  "BORDERLANDS",
  "ABIGAIL",
];

for (let i = 0; i < moviesName.length; i++) {
  let divMovie = document.createElement("div");
  let textContainer = document.createElement("div");
  let movieName = document.createElement("h3");
  let movieContent = document.createElement("p");
  movieContent.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit Consequuntur minima vitae quia accusamus, quod suscipit iure ad qui corrupti quibusdam.";
  movieName.innerHTML = moviesName[i];
  textContainer.appendChild(movieName);
  textContainer.appendChild(movieContent);
  textContainer.classList.add("text-container");
  divMovie.appendChild(textContainer);
  divMovie.classList.add("movie");
  divMovie.style.backgroundImage = `url(Imgs/m${i}.jpg)`;
  moviesSection.appendChild(divMovie);
}

let arrowRight = document.querySelector(".next");
let arrowLeft = document.querySelector(".prev");
const moviesBox = document.querySelector(".movies-box");
arrowRight.onclick = () => {
  console.log(moviesBox.scrollLeft);
  moviesBox.scrollLeft += document.querySelector(".movie").offsetWidth + 17;
  document.querySelector(".prev").style.borderColor =
    document.documentElement.style.getPropertyValue("--main-color");
  moviesBox.onscroll = () => {
    if (
      Math.ceil(moviesBox.scrollLeft) >=
      moviesBox.scrollWidth - moviesBox.clientWidth
    ) {
      arrowRight.style.borderColor = "#141414";
    }
  };
};

arrowLeft.onclick = () => {
    console.log(moviesBox.scrollLeft);
  moviesBox.scrollLeft -= document.querySelector(".movie").offsetWidth + 17;
  document.querySelector(".next").style.borderColor =
    document.documentElement.style.getPropertyValue("--main-color");
  moviesBox.onscroll = () => {
    if (moviesBox.scrollLeft === 0) {
      arrowLeft.style.borderColor = `#141414`;
    }
  };
};

document.addEventListener("click", (e) => {
  if (e.target.className === "movie") {
    // Create Overlay Element
    let popupOverlay = document.createElement("div");

    // Add Class To PopUp Overlay
    popupOverlay.className = "popup-overlay";

    // Append PopUp Overlay To Body
    document.body.appendChild(popupOverlay);

    // Create PopUp Box
    let popupBox = document.createElement("div");

    // Add Class To PopUp Box
    popupBox.className = "popup-box";

    // Create Heading
    let imgTitle = document.createElement("h3");

    // Create Text For Heading
    let imgText = document.createTextNode(
      e.target.children[0].children[0].innerHTML
    );
    // Append The Text To The Heading
    imgTitle.appendChild(imgText);

    // Append The Heading To The PopUP Box
    popupBox.appendChild(imgTitle);

    // Create Image
    let popupImg = document.createElement("img");

    // Set Image Src
    popupImg.style.backgroundImage = window.getComputedStyle(
      e.target
    ).backgroundImage;
    popupImg.style.backgroundSize = "cover";

    // Append Image To PopUp Box
    popupBox.appendChild(popupImg);

    // Create Close Button
    let closeButton = document.createElement("span");

    // Add Class To Close Button
    closeButton.className = "close-button";

    // Add Text To Close Button
    closeButton.appendChild(document.createTextNode("X"));

    // Append Close Button To PopUp BOx
    popupBox.appendChild(closeButton);

    // Append PopUp Box To Body
    document.body.appendChild(popupBox);
  }

  if (e.target.className === "close-button") {
    document.querySelector(".popup-box").remove();
    document.querySelector(".popup-overlay").remove();
  }
});

// Select Header Links of Site
const headerLinks = document.querySelectorAll(".links li a");
// Select Bullets list

const allBullets = document.querySelectorAll(".bullet");
function scrollToSection(elements) {
  elements.forEach((elm) => {
    elm.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrollToSection(allBullets);
scrollToSection(headerLinks);

let reserButton = document.querySelector(".reset-button");
reserButton.addEventListener("click", () => {
  let localItemsToRemove = ["backgroundOption", "bulletOption", "pageColor"];
  localItemsToRemove.forEach((itemKey) => localStorage.removeItem(itemKey));
  location.reload();
});

const linksList = document.querySelector(".links");
const buttonList = document.querySelector(".toggle-links");
buttonList.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("open");
  linksList.classList.toggle("open");
  if (settingsBox.classList.contains("open")) {
    settingsGear.classList.toggle("fa-spin");
    settingsBox.classList.toggle("open");
  }
};

document.onclick = (e) => {
  if (e.target !== buttonList && e.target !== linksList) {
    if (linksList.classList.contains("open")) {
      buttonList.classList.toggle("open");
      linksList.classList.toggle("open");
    }
  }

  if (e.target !== settingsGear && e.target !== settingsBox) {
    if (settingsBox.classList.contains("open")) {
      settingsGear.classList.toggle("fa-spin");
      settingsBox.classList.toggle("open");
    }
  }
};

linksList.onclick = function (e) {
  e.stopPropagation();
  if (linksList.classList.contains("open")) {
    buttonList.classList.toggle("open");
    linksList.classList.toggle("open");
  }
};

settingsBox.onclick = function (e) {
  e.stopPropagation();
  if (linksList.classList.contains("open")) {
    buttonList.classList.toggle("open");
    linksList.classList.toggle("open");
  }
};
