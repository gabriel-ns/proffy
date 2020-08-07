import { StyleSheet } from 'react-native'
import AppColors from '../../global/Colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors["color-primary"],
        flex: 1,
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: AppColors["color-title-in-primary"],
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description: {
        marginTop: 24,
        color: AppColors["color-text-in-primary"],
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: AppColors["color-secondary"],
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    okButtonText: {
        color: AppColors['color-button-text'],
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }
})

export default styles;