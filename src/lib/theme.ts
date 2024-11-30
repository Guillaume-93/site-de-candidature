import { siteData } from '@/data/site-data';

type ThemeColor = keyof typeof siteData.themes['default']['colors']; // Accès aux couleurs du thème "default"
type ColorShade = 'light' | 'DEFAULT' | 'dark';

export function getThemeColor(color: ThemeColor, shade: ColorShade = 'DEFAULT'): string
{
  const currentThemeKey = siteData.theme.current; // Récupère la clé du thème actuel ('default' ou 'dark')
  const currentTheme = siteData.themes[currentThemeKey]; // Accède au thème actif

  if (!currentTheme || !currentTheme.colors[color]) {
    throw new Error(`Couleur "${color}" non trouvée dans le thème "${currentThemeKey}".`);
  }

  return currentTheme.colors[color][shade]; // Retourne la couleur demandée
}

export function getAnimationConfig(duration: keyof typeof siteData.themes['default']['animation']['duration'] = 'DEFAULT')
{
  const currentTheme = siteData.theme.current;
  const themeAnimation = siteData.themes[currentTheme]?.animation || {};
  return {
    duration: themeAnimation.duration[duration] || 0.5, // Valeur par défaut si non définie
    ease: themeAnimation.ease || [0.4, 0.0, 0.2, 1],
  };
}

export function getThemeClass(type: 'background' | 'text' | 'border', variant: 'primary' | 'secondary'): string
{
  const currentTheme = siteData.theme.current;
  const colors = siteData.themes[currentTheme]?.colors || {};

  const prefix = {
    background: 'bg',
    text: 'text',
    border: 'border',
  }[type];

  const colorClass = colors[variant]?.DEFAULT;
  return colorClass ? `${prefix}-${colorClass}` : '';
}