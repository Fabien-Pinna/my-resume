// Fonction pour estimer la couleur en fonction de la position dans le gradient
export function getGradientColorAtPosition(element, gradientColors, gradientStops) {
    // Trouver la position relative de l'élément dans son conteneur
    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();
    const position = (rect.left + rect.width / 2 - parentRect.left) / parentRect.width;

    // Calculer la couleur en fonction de la position et des points d'arrêt du gradient
    // Note: Cet exemple suppose un gradient linéaire simple de gauche à droite
    // Pour des gradients plus complexes, la logique serait plus complexe
    let prevStop = 0;
    let nextStop = 1;
    let prevColor = gradientColors[0];
    let nextColor = gradientColors[gradientColors.length - 1];

    // Trouver les points d'arrêt de gradient entre lesquels se trouve la position
    for (let i = 0; i < gradientStops.length; i++) {
        if (position >= gradientStops[i]) {
            prevStop = gradientStops[i];
            prevColor = gradientColors[i];
        } else {
            nextStop = gradientStops[i];
            nextColor = gradientColors[i];
            break;
        }
    }

    // Calculer la progression entre les deux points d'arrêt
    const progress = (position - prevStop) / (nextStop - prevStop);

    // Interpoler la couleur
    return interpolateColor(prevColor, nextColor, progress);
}

// Fonction pour interpoler entre deux couleurs
export function interpolateColor(color1, color2, progress) {
    // Convertir les couleurs hexadécimales en composantes RGB
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    // Calculer les composantes RGB de la nouvelle couleur
    const r = Math.round(rgb1.r + progress * (rgb2.r - rgb1.r));
    const g = Math.round(rgb1.g + progress * (rgb2.g - rgb1.g));
    const b = Math.round(rgb1.b + progress * (rgb2.b - rgb1.b));

    // Convertir les composantes RGB en chaîne hexadécimale
    return rgbToHex(r, g, b);
}

// Convertir une couleur hexadécimale en composantes RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Convertir des composantes RGB en couleur hexadécimale
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}




