let toggleNavStatus = false;

let toggleNav = function () {
  let  getsideBar = document.querySelector(".side-navbar");
  let  getsideBarUl = document.querySelector(".side-navbar ul");
  let  getsideBarTitle = document.querySelector(".side-navbar span");
  let  getsideBarLinks = document.querySelectorAll(".side-navbar a");


if (toggleNavStatus === false) {
    getsideBar.style.width = "272";
    getsideBarUl.style.visibility = "visible";
    getsideBarTitle.style.opacity = "0.5";


    let arrayLength = getsideBarLinks.length;
    for (i = 0; i < arrayLength; i++) {
        getsideBarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
}

 else if (toggleNavStatus === true) {
    getsideBar.style.width = "50px";
    getsideBarUl.style.visibility = "hidden";
    getsideBarTitle.style.opacity = "1";


    let arrayLength = getsideBarLinks.length;
    for ( i = 0; i < arrayLength; i++ ) {
        getsideBarLinks[i].style.opacity = "0";
    }

    toggleNavStatus = false;
}



}

