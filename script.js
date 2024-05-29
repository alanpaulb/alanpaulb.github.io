document.getElementById('menu-toggle').addEventListener('click', function() {
  var navbarMenu = document.getElementById('navbar-menu');
  if (navbarMenu.classList.contains('show')) {
      navbarMenu.classList.remove('show');
  } else {
      navbarMenu.classList.add('show');
  }
});
