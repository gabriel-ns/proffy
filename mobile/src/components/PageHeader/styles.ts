import { StyleSheet } from 'react-native'
import AppColors from '../../global/Colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors["color-primary-light"],
        justifyContent: 'center',
        padding: 40
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40
    }
})

export default styles;