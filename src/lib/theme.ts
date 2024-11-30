import { siteData } from '@/data/site-data';

type ThemeColor = keyof typeof siteData.theme.colors;
type ColorShade = 'light' | 'DEFAULT' | 'dark';

export function getThemeColor(color: ThemeColor, shade: ColorShade = 'DEFAULT'): string {
  return siteData.theme.colors[color][shade];
}

export function getAnimationConfig(duration: keyof typeof siteData.theme.animation.duration = 'DEFAULT') {
  return {
    duration: siteData.theme.animation.duration[duration],
    ease: siteData.theme.animation.ease,
  };
}

export function getThemeClass(type: 'background' | 'text' | 'border', variant: string): string {
  const prefix = {
    background: 'bg',
    text: 'text',
    border: 'border',
  }[type];

  const colorMap = {
    primary: `${prefix}-${siteData.theme.colors.primary.DEFAULT}`,
    secondary: `${prefix}-${siteData.theme.colors.secondary.DEFAULT}`,
    accent: `${prefix}-${siteData.theme.colors.text.accent}`,
  };

  return colorMap[variant as keyof typeof colorMap] || '';
}