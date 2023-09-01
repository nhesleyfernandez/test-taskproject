var toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', function () {
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
    sidebar.classLista.add('hide');
  }
  else {
    sidebar.classList.add('show');
    sidebar.classList.remove('hide');
  }
})

// // dropdowns
// var toggleDown = document.getElementById('toggle-down');

// toggleDown.addEventListener('click', function () {
//   if (dropdown.classList.contains('dropdown-show')) {
//     dropdown.classList.remove('dropdown-show');
//     dropdown.classLista.add('dropdown-hide');
//   }
//   else {
//     dropdown.classList.add('dropdown-show');
//     dropdown.classList.remove('dropdown-hide');
//   }
// });

// //swipes dropdown
// var toggleDown2 = document.getElementById('toggle-down2');

// toggleDown2.addEventListener('click', function () {
//   if (dropdown2.classList.contains('dropdown2-show')) {
//     dropdown2.classList.remove('dropdown2-show');
//     dropdown2.classLista.add('dropdown2-hide');
//   }
//   else {
//     dropdown2.classList.add('dropdown2-show');
//     dropdown2.classList.remove('dropdown2-hide');
//   }
// });