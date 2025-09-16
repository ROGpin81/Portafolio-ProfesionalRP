const CONFIG = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0a192f',
        panel: '#112240',
        text: '#e6f1ff',
        muted: '#8892b0',
        accent: { DEFAULT: '#64ffda', hover: '#57d9c1' }
      },
      ringColor: {
        DEFAULT: '#64ffda'
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(2,12,27,.7)'
      },
      maxWidth: { '8xl': '90rem' }
    }
  }
};

// Inyecta en navegador (CDN)
(function (g) {
  if (!g) return;
  g.tailwind = g.tailwind || {};
  g.tailwind.config = CONFIG;
})(typeof window !== 'undefined' ? window : undefined);

// Exporta para CommonJS (extensión VS Code)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
