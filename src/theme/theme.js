import {colors} from '../theme/colors.pallete'

export const darkspacetheme={
    pallete :{
        main: colors.primary,
        bg: {
            white: colors.white,
            disabled: colors.bgdisabled
        },
        stroke: {
            foused: colors.teritary,
            grey: colors.strokegrey
        },
        text:{
            black: colors.primary,
            white: colors.white,
            grey: colors.grey,
            lightgrey: colors.lightgrey,
            disabled: colors.disabled,
            error: colors.error,
            validatiion: colors.warning,
            success: colors.success,
        },
        button:{
            primary:{
                bgdefault: colors.primary,
                tetxdefault: colors.white,
                bghover: colors.secondary,
                tetxhover: colors.white,
                bgfocused: colors.secondary,
                strokefocused: colors.teritary,
                textfocused: colors.white,
                bgactive: colors.secondary,
                textactive: colors.white,
                bgclick: colors.darkpurple,
                textclick: colors.white,
                bgdisabled: colors.bgdisabled,
                texdisabled: colors.disabled
            },secondary: {
                strokedefault: colors.blue,
                textdefault: colors.blue,
                bghover: colors.bghover,
                stokehover: colors.blue,
                texthover: colors.blue,
                bgfocused: colors.bghover,
                strokefocused: colors.teritary,
                textfocused: colors.blue,
                bgactive: colors.bghover,
                stokeactive: colors.blue,
                textactive: colors.blue,
                bgclick: colors.bghover,
                textclick: colors.blue,
                bgdisabled: colors.bgdisabled,
                textdisabled: colors.disabled,
            },teritary:{
                bgdefault: colors.white,
                textdefault: colors.blue,
                bghover: colors.bghover,
                texthover: colors.blue,
                bgfocused: colors.bghover,
                strokefocused: colors.teritary,
                textfocused: colors.blue,
                bgactive: colors.bghover,
                textactiver: colors.blue,
                bgclick: colors.bgclick,
                textclick: colors.blue,
                bgdisabled: colors.bgdisabled,
                textdisabled: colors.disabled,
            }
        },
        fields:{
            form: colors.fieldform,
            title: colors.fieldtitle,
            text: colors.fieldtext,
            description: colors.grey,
            textdisabled: colors.textdisabled,
            stroke:{
                hover: colors.loading,
                focused: colors.blue,
                validation: colors.strokevalidation,
                error: colors.strokeerror
            },
            bg: {
                validatiion: colors.bgvalidation,
                error: colors.bgerror
            }
        }

    },
    colorPallete:colors
}