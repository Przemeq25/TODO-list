export const theme = {
  space: [0, 4, 8, 16, 32, 64],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  fontSizes: [10, 12, 14, 16, 36, 180],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
  },
  colors: {
    text: '#ffffff',
    background: '#060606',
    primary: '#6f74ff',
    secondary: '#30c',
    gray: '#8E8E8E',
    muted: '#191919',
    error: '#ff0000',
    success: '#05c118',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 3,
    },
    hr: {
      margin: 0,
    },
  },
  sizes: { container: 768 },
  radii: { borderRadius: 5 },
  text: {
    title: {
      fontWeight: 'bold',
      fontSize: 4,
    },
    subtitle: {
      variant: 'paragraph',
      color: 'gray',
      fontSize: 2,
    },
    small: {
      fontSize: 1,
      color: 'text',
      variant: 'paragraph',
    },
    hidden: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  buttons: {
    primary: {
      color: 'text',
      bg: 'primary',
      transition: 'all ease 300ms ',
      cursor: 'pointer',
      py: 1,
      fontSize: 2,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'text',
      transition: 'all ease 300ms',
      cursor: 'pointer',
      border: '1px solid white',
      py: 1,
      fontSize: 2,
      bg: 'transparent',
      '&:hover': {
        bg: 'text',
        color: 'secondary',
      },
    },
    icon: {
      cursor: 'pointer',
      mx: 1,
      '&:hover': {
        bg: 'primary',
      },
    },
  },
  forms: {
    textarea: {
      resize: 'none',
      textTransform: 'capitalize',
    },
    input: {
      fontSize: 1,
      py: 1,
    },
    checkbox: {
      color: 'primary',
      m: 0,
      cursor: 'pointer',
    },
    switch: {
      mr: 0,
    },
  },
  alerts: {
    success: {
      color: 'text',
      bg: 'success',
      fontWeight: 'body',
    },
    error: {
      color: 'text',
      bg: 'error',
      fontWeight: 'body',
    },
  },
  breakpoints: [
    '@media (max-width: 550px)',
    '@media (max-width: 768px)',
    '@media (max-width: 1024px)',
  ],
};
