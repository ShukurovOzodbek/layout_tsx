import { extendTheme } from '@chakra-ui/react'
import { Input } from './Components/Input'
const colors = {
    brand: {
        orange: "#D1A954",
        grey: "#333333",
    },
}
const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1236px',
}

export const theme = extendTheme({
    colors,
    components: {
        Input
    },
    breakpoints
})