import { StyleSheet } from 'react-native';
import { Colors } from '@app/resources/specs';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headline: {
        fontSize: 24,
        color: Colors.listTextPurple
    },
    buttonStyle: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: Colors.listTextPurple,
        borderWidth: 1,
        backgroundColor: Colors.listItemGray,
        textStyle: {
            fontSize: 16,
            color: Colors.listTextPurple
        }
    }

})

export default styles;