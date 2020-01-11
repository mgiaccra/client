const colors = {
    accent: '#9B9693',
    accent2: '#B8A7A7',
    light: '#EEEEEE',
    bgLight: '#D2D2CD',
    primary: '#7B8175',
    secondary: '#2F3126',
    dark: '#0C110D',
    danger: '#D75844',
    info: '#5497D7',
    warning: '#DAB744',
    success: '#54DD44',
    alternative: '#C26812'
}

const sizes = {
    // Global Sizes
    base: 12,
    font: 12,
    border: 12,
    padding: 20,

    // Font Sizes
    h1: 36,
    h2: 24,
    h3: 16,
    body: 10,
    title: 14,
    caption: 12,
    small: 8,
    label: 28,
}

const fonts = {
    h1: {
        fontFamily: 'Montserrat-Bold',
        fontSize: sizes.h1,
    },
    h2: {
        fontSize: sizes.h2,
    },
    h3: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: sizes.h3,
    },
    body: {
        fontSize: sizes.body,
    },
    title: {
        fontSize: sizes.title,
    },
    caption: {
        fontFamily: 'Montserrat-Bold',
        fontSize: sizes.caption,
    },
    small: {
        fontSize: sizes.small,
    }
}

export { colors, sizes, fonts }