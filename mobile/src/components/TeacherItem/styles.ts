import { StyleSheet } from 'react-native'
import AppColors from '../../global/Colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: AppColors["color-line-in-white"],
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: AppColors["color-text-title"],
        fontSize: 20
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: AppColors['color-text-base'],
        fontSize: 12,
        marginTop: 4,
    },

    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: AppColors['color-text-base']
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        marginTop: 24,
        alignItems: 'center',
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: AppColors['color-text-base'],
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: AppColors["color-primary"],
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: AppColors['color-primary'],
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 8,
    },

    favorited: {
        backgroundColor: '#e33d3d'
    },

    contactButton: {
        backgroundColor: AppColors['color-secondary'],
        flex: 1,
        width: 56,
        flexDirection: "row",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 8,
    },

    contactButtonText: {
        color: AppColors['color-button-text'],
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16
    },




})

export default styles;