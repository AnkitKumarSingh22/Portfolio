/**
 * Initializes theme toggle functionality
 */
export function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  // Check for saved theme preference or user's system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }
  
  // Toggle theme when button is clicked
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    updateThemeIcon(newTheme);
  });
  
  // Update theme toggle icon based on current theme
  function updateThemeIcon(theme) {
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');
    
    if (theme === 'dark') {
      themeToggleIcon.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'5\'%3E%3C/circle%3E%3Cline x1=\'12\' y1=\'1\' x2=\'12\' y2=\'3\'%3E%3C/line%3E%3Cline x1=\'12\' y1=\'21\' x2=\'12\' y2=\'23\'%3E%3C/line%3E%3Cline x1=\'4.22\' y1=\'4.22\' x2=\'5.64\' y2=\'5.64\'%3E%3C/line%3E%3Cline x1=\'18.36\' y1=\'18.36\' x2=\'19.78\' y2=\'19.78\'%3E%3C/line%3E%3Cline x1=\'1\' y1=\'12\' x2=\'3\' y2=\'12\'%3E%3C/line%3E%3Cline x1=\'21\' y1=\'12\' x2=\'23\' y2=\'12\'%3E%3C/line%3E%3Cline x1=\'4.22\' y1=\'19.78\' x2=\'5.64\' y2=\'18.36\'%3E%3C/line%3E%3Cline x1=\'18.36\' y1=\'5.64\' x2=\'19.78\' y2=\'4.22\'%3E%3C/line%3E%3C/svg%3E")';
    } else {
      themeToggleIcon.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\'%3E%3C/path%3E%3C/svg%3E")';
    }
  }
}