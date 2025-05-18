import { css } from 'styled-components';

// Shared grain overlay effect that can be applied to any component
export const grainOverlay = css`
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 182px;
    opacity: 0.3;
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 2;
  }
`;

// Gradient overlay that can be customized with different colors
export const gradientOverlay = (color, opacity = 0.6) => css`
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${color}${Math.round(opacity * 100)} 0%,
      ${color}${Math.round(opacity * 70)} 50%,
      ${color}${Math.round(opacity * 40)} 100%
    );
    mix-blend-mode: multiply;
    pointer-events: none;
    z-index: 1;
  }
`;

// Vignette effect for depth
export const vignetteEffect = css`
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.5);
  mix-blend-mode: multiply;
`;
