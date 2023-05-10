"use strict";

// add class navbarDark on navbar scroll
var header = document.querySelector('.navbar');

window.onscroll = function () {
  var top = window.scrollY;

  if (top >= 100) {
    header.classList.add('navbarDark');
  } else {
    header.classList.remove('navbarDark');
  }
};
//# sourceMappingURL=script.dev.js.map
