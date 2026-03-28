/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#191c1c', // on_surface
    background: '#f8faf9', // background
    backgroundElement: '#eceeed', // surface_container
    backgroundSelected: '#e1e3e2', // surface_container_highest
    textSecondary: '#424845', // on_surface_variant
    
    // Stitch Project ("Your Cart") Tokens
    error: '#ba1a1a',
    error_container: '#ffdad6',
    inverse_on_surface: '#eff1f0',
    inverse_primary: '#b5ccc3',
    inverse_surface: '#2e3131',
    on_background: '#191c1c',
    on_error: '#ffffff',
    on_error_container: '#93000a',
    on_primary: '#ffffff',
    on_primary_container: '#bfd6cd',
    on_primary_fixed: '#0b1f1a',
    on_primary_fixed_variant: '#364b44',
    on_secondary: '#ffffff',
    on_secondary_container: '#715e00',
    on_secondary_fixed: '#221b00',
    on_secondary_fixed_variant: '#544600',
    on_surface: '#191c1c',
    on_surface_variant: '#424845',
    on_tertiary: '#ffffff',
    on_tertiary_container: '#ffc5ac',
    on_tertiary_fixed: '#351000',
    on_tertiary_fixed_variant: '#723516',
    outline: '#727875',
    outline_variant: '#c2c8c4',
    primary: '#324640',
    primary_container: '#495e57',
    primary_fixed: '#d0e8de',
    primary_fixed_dim: '#b5ccc3',
    secondary: '#705d00',
    secondary_container: '#fed723',
    secondary_fixed: '#ffe16e',
    secondary_fixed_dim: '#e9c400',
    surface: '#f8faf9',
    surface_bright: '#f8faf9',
    surface_container: '#eceeed',
    surface_container_high: '#e6e9e8',
    surface_container_highest: '#e1e3e2',
    surface_container_low: '#f2f4f3',
    surface_container_lowest: '#ffffff',
    surface_dim: '#d8dad9',
    surface_tint: '#4e635c',
    surface_variant: '#e1e3e2',
    tertiary: '#6d3112',
    tertiary_container: '#8a4827',
    tertiary_fixed: '#ffdbcc',
    tertiary_fixed_dim: '#ffb695'
  },
  dark: {
    // using light mode base colors as placeholders since the design is LIGHT mode only
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

const _Fonts = Platform.select({
  ios: {
    sans: 'Manrope',
    serif: 'Noto Serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'Manrope',
    serif: 'Noto Serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'Manrope, var(--font-display)',
    serif: 'Noto Serif, var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Fonts = _Fonts || {
  sans: 'Manrope',
  serif: 'Noto Serif',
  rounded: 'normal',
  mono: 'monospace',
};

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
