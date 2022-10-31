const base = {
  fontSize: {
    small: '14px',
    normal: '16px',
    large: '20px',
    xlarge: '25px',
    x2large: '30px',
  },
}

export const white = {
  ...base,
  color: {
    main: '#e6e6e6',
    sub: 'rgba(0, 0, 0, 0.15)',
    subHover: 'rgba(0, 0, 0, 0.25)',
    contrast: '#1a1a1a',
    highlight: '#ff6633',
  },
}

export const dark = {
  ...base,
  color: {
    main: '#1a1a1a',
    sub: 'rgba(255, 255, 255, 0.15)',
    subHover: 'rgba(255, 255, 255, 0.25)',
    contrast: '#cccccc',
    highlight: '#ff6633',
  },
}