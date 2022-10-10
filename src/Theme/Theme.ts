import { extendTheme } from '@chakra-ui/react'
import { Input } from './Components/Input'
const colors = {
    brand: {
        orange: "#D1A954",
        grey: "#333333",
    },
}
const breakpoints = {
    msm: '600px',
    sm: '771px',
    md: '800px',
    lg: '980px',
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