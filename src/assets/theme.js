import {createTheme } from '@mui/material'
import { lightGreen, purple } from '@mui/material/colors'


const primaryColor = lightGreen[500]
const secondaryColor = purple[400]

const customTheme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },

    }
})

export default customTheme