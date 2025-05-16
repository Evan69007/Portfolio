document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('theme-toggle');
  const indicator = document.getElementById('toggle-indicator');

  // Apply saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    toggle.checked = true;
    indicator.classList.add('translate-x-5');
  }

  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      indicator.classList.add('translate-x-5');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      indicator.classList.remove('translate-x-5');
    }
  });
});