import { StyleSheet } from 'react-native'
import AppColors from '../../global/Colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors["color-background"],
        flex: 1,
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: AppColors['color-text-in-primary'],
        fontFamily: 'Poppins_400Regular',
    },

    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%'
    },

    submitButton: {
        backgroundColor: AppColors['color-secondary'],
        flexDirection: "row",
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: "center",
    },

    submitButtonText: {
        color: AppColors['color-button-text'],
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },

})

export default styles;