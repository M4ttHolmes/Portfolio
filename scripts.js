let page = document.querySelectorAll("iframe")[0];
console.log(page);


function loadHome() {
  page.src = "./contentPages/home.html";
}

function loadSkills() {
  page.src = "./contentPages/skills.html";
}

function loadProjects() {
  page.src = "./contentPages/projects.html";
}

function loadContact() {
  page.src = "./contentPages/contact.html";
}

$(document).ready(function(){
  $('.navbar-dark > button').on('click', function(){
      $('.navbar-dark').toggleClass('color-changed');
  });
  });