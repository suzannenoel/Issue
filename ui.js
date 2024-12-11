document.addEventListener('DOMContentLoaded', function() {
  // Nav Menu
  const tasks = document.querySelectorAll('.side-menu');
  M.Sidenav.init(tasks, {edge: 'right'});
  // Add task Form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});