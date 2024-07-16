// effect ease in (about us)
document.addEventListener("DOMContentLoaded", function () {
  var aboutSection = document.querySelector("#about");

  function isElementVision(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top + rect.height * 0.1 >= 0 &&
      rect.left + rect.width * 0.1 >= 0 &&
      rect.bottom - rect.height * 0.1 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right - rect.width * 0.1 <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  visionScroll = () => {
    if (isElementVision(aboutSection)) {
      aboutSection.classList.add("show");
    }
    // else {
    //   aboutSection.classList.remove("show");
    // }
  };

  window.addEventListener("scroll", visionScroll);
  visionScroll(); //scroll effect at our applicaiton ease in
});

// effect ease in (our application)
document.addEventListener("DOMContentLoaded", function () {
  var appSection = document.querySelector("#app");

  isElementViewApp = (el) => {
    var rect = el.getBoundingClientRect();
    return (
      rect.top + rect.height * 0.1 >= 0 &&
      rect.left + rect.width * 0.1 >= 0 &&
      rect.bottom - rect.height * 0.1 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right - rect.width * 0.1 <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  scrollApp = () => {
    if (isElementViewApp(appSection)) {
      appSection.classList.add("show");
    }
    // else {
    //   appSection.classList.remove("show");
    // }
  };

  window.addEventListener("scroll", scrollApp);
  scrollApp();
});

// slid effect for page about
document.addEventListener("DOMContentLoaded", function () {
  var visionData = document.querySelector("#data");

  function isElementView(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top + rect.height * 0.1 >= 0 &&
      rect.left + rect.width * 0.1 >= 0 &&
      rect.bottom - rect.height * 0.1 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right - rect.width * 0.1 <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  handleScroll = () => {
    if (isElementView(visionData)) {
      visionData.classList.add("show");
    }
    // else {
    //   visionData.classList.remove("show");
    // }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); //scroll effect at our applicaiton ease in
});

// typing index animation
const animationTyping = document.getElementById("animation-typing");
const contentsTyping = "Hello, Welcome to logistic portal";
let charIndex = 0;
typeChar = () => {
  animationTyping.textContent += contentsTyping[charIndex];
  charIndex++;
  if (charIndex < contentsTyping.length) {
    setTimeout(typeChar, 100);
  }
};
typeChar(); //type effect at hero section
