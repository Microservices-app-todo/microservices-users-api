module.exports = {
    branches: ['develop'], // o ['main', 'next'] si manejas ramas múltiples
    tagFormat: 'v${version}',
  
    plugins: [
      '@semantic-release/commit-analyzer',          // analiza los commits y determina si es major/minor/patch
      '@semantic-release/release-notes-generator',  // genera changelog automáticamente
      '@semantic-release/github',                   // crea un GitHub Release con los detalles
    ],
  };
  