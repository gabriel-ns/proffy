import { StyleSheet } from 'react-native'
import AppColors from '../../global/Colors'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_400Regular_Italic } from '@expo-google-fonts/poppins';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors["color-primary"],
        flex: 1,
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: AppColors['color-line-in-white'],
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: AppColors["color-primary-lighter"],
    },

    buttonSecondary: {
        backgroundColor: AppColors["color-secondary-dark"],
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: AppColors['color-button-text'],
        fontSize: 20,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: AppColors['color-text-in-primary'],
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    }

})

export default styles;