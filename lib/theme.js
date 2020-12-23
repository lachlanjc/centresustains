import { merge } from 'theme-ui'

const colors = {
  indigo: '#622aff',
  blue: '#0e90db',
  pink: '#e94256',
  green: '#0b9e43',
  azure: '#027fff',
  purple: '#6045ec',
  red: '#e02200',
  yellow: '#ffb300',
  aqua: '#0b9e93',
  brown: '#e35416',

  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',

  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',

  // twitter: '#1da1f2',
  // facebook: '#3b5998',
  // instagram: '#e1306c'
}

const fonts = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif`

const theme = {
  breakpoints: [32, 48, 64, 96, 128].map(w => `${w}em`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 16, 20, 24, 32, 48, 64, 96, 128, 160, 192],
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    ...colors,
    primary: colors.green,
    accent: colors.pink,
    inverted: colors.white,

    text: colors.black,
    background: colors.white,
    elevated: colors.white,
    sheet: colors.snow,
    sunken: colors.smoke,
    border: colors.smoke,
    placeholder: colors.muted,
    secondary: colors.slate,
    muted: colors.muted,

    modes: {
      dark: {
        inverted: colors.darker,
        text: colors.white,
        background: colors.dark,
        elevated: colors.darkless,
        sheet: colors.darkless,
        sunken: colors.darker,
        border: colors.darkless,
        placeholder: colors.slate,
        secondary: colors.smoke,
        muted: colors.muted,
      }
    }
  },
  fonts: {
    monospace: '"SF Mono", "Roboto Mono", Menlo, Consolas, monospace',
    heading: `"ClearfaceStd", ${fonts}`,
    body: `"Fakt Soft", "Klima Web", ${fonts}`
  },
  lineHeights: {
    limit: 0.875,
    title: 1,
    heading: 1.125,
    subheading: 1.25,
    caption: 1.375,
    body: 1.5
  },
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 400
  },
  letterSpacings: {
    title: '-0.009em',
    headline: '0.009em'
  },
  sizes: {
    widePlus: 2048,
    wide: 1536,
    layoutPlus: 1200,
    layout: 1024,
    copyUltra: 980,
    copyPlus: 768,
    copy: 680,
    narrowPlus: 600,
    narrow: 512
  },
  radii: {
    small: 4,
    default: 8,
    extra: 12,
    ultra: 16,
    circle: 99999
  },
  shadows: {
    text: '0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)',
    small: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)',
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    elevated: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)'
  },
  text: {
    heading: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      letterSpacing: 'title',
      mt: 0,
      mb: 0
    },
    ultratitle: {
      fontSize: [5, 6, 7],
      lineHeight: 'title',
      fontWeight: 'title',
      letterSpacing: 'title'
    },
    title: {
      fontSize: [5, 6],
      fontWeight: 'title',
      letterSpacing: 'title',
      lineHeight: 'title'
    },
    subtitle: {
      mt: 1,
      mb: 4,
      fontSize: [2, 3],
      fontFamily: 'body',
      color: 'secondary',
      fontWeight: 'body',
      letterSpacing: 'headline',
      lineHeight: 'subheading'
    },
    headline: {
      variant: 'text.heading',
      letterSpacing: 'headline',
      lineHeight: 'heading',
      fontSize: 4,
      mt: 3,
      mb: 3
    },
    subheadline: {
      fontFamily: 'heading',
      letterSpacing: 'headline',
      lineHeight: 'subheading',
      fontSize: [2, 3],
      mt: 0,
      mb: 3
    },
    eyebrow: {
      color: 'muted',
      fontSize: [3, 4],
      fontWeight: 'bold',
      letterSpacing: 'headline',
      lineHeight: 'subheading',
      textTransform: 'uppercase',
      mt: 0,
      mb: 2
    },
    lead: {
      fontSize: [2, 3],
      my: [2, 3]
    },
    caption: {
      color: 'muted',
      fontSize: 1,
      letterSpacing: 'headline',
      lineHeight: 'caption'
    }
  },
  alerts: {
    primary: {
      borderRadius: 'default',
      bg: 'orange',
      color: 'background',
      fontWeight: 'body'
    }
  },
  badges: {
    pill: {
      borderRadius: 'circle',
      px: 3,
      py: 1,
      fontSize: 1
    },
    outline: {
      variant: 'badges.pill',
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'currentColor',
      fontWeight: 'body'
    }
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 'bold',
      borderRadius: 'default',
      display: 'inline-flex',
      alignItems: 'center',
      textShadow: 'none',
      boxShadow: 'card',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':focus,:hover': {
        boxShadow: 'elevated',
        transform: 'scale(1.0625)'
      },
      svg: { ml: -1, mr: 2 }
    },
    lg: {
      variant: 'buttons.primary',
      fontSize: 3,
      lineHeight: 'title',
      px: 4,
      py: 3
    },
    outline: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'primary',
      border: '3px solid currentColor'
    },
    outlineLg: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'primary',
      border: '2px solid currentColor',
      lineHeight: 'title',
      fontSize: 3,
      px: 4,
      py: 3
    }
  },
  cards: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      overflow: 'hidden'
    },
    sunken: {
      bg: 'sunken',
      p: [3, 4],
      borderRadius: 'extra'
    },
    interactive: {
      variant: 'cards.primary',
      textDecoration: 'none',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)',
        boxShadow: 'elevated'
      }
    },
    secondary: {
      borderRadius: 'extra',
      p: 3,
      bg: 'sheet',
      my: 0,
      strong: {
        variant: 'text.subheadline',
        lineHeight: 'heading',
        display: 'block',
        mb: 2
      },
      a: {
        textDecoration: 'none'
      },
      img: {
        borderRadius: 'default',
        mb: '12px !important'
      }
    }
  },
  forms: {
    input: {
      bg: 'elevated',
      color: 'text',
      fontFamily: 'inherit',
      borderRadius: 'base',
      border: 0,
      '::-webkit-input-placeholder': { color: 'placeholder' },
      '::-moz-placeholder': { color: 'placeholder' },
      ':-ms-input-placeholder': { color: 'placeholder' },
      '&[type="search"]::-webkit-search-decoration': { display: 'none' }
    },
    textarea: { variant: 'forms.input' },
    select: { variant: 'forms.input' },
    label: {
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      lineHeight: 'caption',
      fontSize: 2
    },
    labelHoriz: {
      color: 'text',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      lineHeight: 'caption',
      fontSize: 2,
      svg: { color: 'muted' }
    },
  },
  layout: {
    container: {
      maxWidth: ['layout', null, 'layoutPlus'],
      width: '100%',
      mx: 'auto',
      px: 3
    },
    wide: {
      variant: 'layout.container',
      maxWidth: ['layout', null, 'wide']
    },
    copy: {
      variant: 'layout.container',
      maxWidth: ['copy', null, 'copyPlus']
    },
    narrow: {
      variant: 'layout.container',
      maxWidth: ['narrow', null, 'narrowPlus']
    },
    story: {
      variant: 'layout.container',
      maxWidth: ['copy', null, 'copyPlus'],
      mt: 64,
      py: [4, 5],
      fontSize: 2,
      h1: { variant: 'text.title' },
      'h1 + h2': { variant: 'text.subtitle' }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
      margin: 0,
      minHeight: '100vh',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
      svg: {
        mr: 3,
        color: 'secondary',
        float: 'right'
      }
    },
    h3: {
      variant: 'text.eyebrow',
      fontSize: 3,
      mb: 0
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontWeight: 'body',
      lineHeight: 'body',
      my: 3
    },
    img: {
      maxWidth: '100%'
    },
    hr: {
      border: '2px solid',
      borderColor: 'accent',
      borderRadius: 2,
      maxWidth: 256,
      mx: 'auto',
      my: 4
    },
    a: {
      color: 'primary',
      textDecoration: 'underline',
      textDecorationSkip: 'objects edges box-decoration'
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'sunken',
      overflow: 'auto',
      borderRadius: 'default'
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
      color: 'accent',
      bg: 'sunken',
      borderRadius: 'small',
      mx: 1,
      px: 1
    },
    li: {
      my: 2
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'border',
        borderBottomStyle: 'solid'
      }
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px'
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px'
    }
  },
  util: {
    motion: '@media (prefers-reduced-motion: no-preference)',
    reduceMotion: '@media (prefers-reduced-motion: reduce)',
    reduceTransparency: '@media (prefers-reduced-transparency: reduce)',
    supportsClipText: '@supports (-webkit-background-clip: text)',
    supportsBackdrop:
      '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)',
  }
}

theme.util.cx = (c) => theme.colors[c] || c
theme.util.gx = (from, to) => `radial-gradient(
  ellipse farthest-corner at top left,
  ${theme.util.cx(from)},
  ${theme.util.cx(to)}
)`
theme.util.gxText = (from, to) => ({
  color: theme.util.cx(to),
  [theme.util.supportsClipText]: {
    backgroundImage: theme.util.gx(from, to),
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
})

theme.cards.translucent = {
  // variant: 'cards.primary',
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  color: 'text',
  boxShadow: 'none',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)'
  },
  [theme.util.reduceTransparency]: {
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none'
  }
}
theme.cards.translucentDark = {
  // variant: 'cards.primary',
  backgroundColor: 'rgba(0, 0, 0, 0.875)',
  color: 'white',
  boxShadow: 'none',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(0, 0, 0, 0.625)',
    backdropFilter: 'saturate(180%) blur(16px)',
    WebkitBackdropFilter: 'saturate(180%) blur(16px)'
  },
  [theme.util.reduceTransparency]: {
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none'
  }
}

theme.badges.primary = {
  display: 'inline-block',
  fontSize: 1,
  px: 3,
  py: 1,
  borderRadius: 'circle',
  fontFamily: 'heading',
  letterSpacing: 'headline',
  textTransform: 'uppercase'
}
theme.badges.lg = {
  ...theme.badges.primary,
  fontSize: [2, 3]
}
theme.badges.header = {
  ...theme.badges.primary,
  fontSize: [1, 2],
  bg: 'background',
  color: 'primary',
  opacity: 0.75,
  ml: [null, null, -3],
  transform: ['rotate(-2deg)', 'rotate(-3deg)']
}

theme.text.heading.fontFamily = 'heading'
theme.text.title.color = 'primary'
theme.text.headline.color = 'primary'

theme.variants = {}
theme.variants.header = {
  bg: 'sheet',
  mt: 5,
  pt: [4, 48],
  px: 3,
  pb: [3, 4],
  textAlign: 'center',
  h1: {
    variant: 'text.title',
    maxWidth: 'narrow',
    mx: 'auto'
  },
  h2: {
    variant: 'text.subtitle',
    maxWidth: 'copy',
    mx: 'auto'
  }
}
theme.variants.headerLeft = merge(
  theme.variants.header,
  {
    px: 0,
    textAlign: 'left',
    h1: { maxWidth: 'none', mx: 0 },
    'h1 + p': { maxWidth: 'copy', mt: -3, mb: 4, fontSize: 2 }
  }
)

export default theme
