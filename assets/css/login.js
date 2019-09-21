import {Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default {
    container: {
        backgroundColor: Colors.azul0,
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 48.5,
        paddingRight: 48.5,
    },
    containerRegister: {
        backgroundColor: Colors.azul0,
        flex: 1,
    },
    psddingContainer:{
        paddingLeft: 48.5,
        paddingRight: 48.5,
    },
    logo: {
        height: 50.8,
        width: 200
    },
    input:{
        height: 35,
        width: '100%',
        borderRadius: 4,
        backgroundColor: Colors.branco
    },
    styleButton:{
        width: '100%',
        borderRadius: 4,
        height: 40,
        backgroundColor: Colors.azulClaro,
        paddingTop: 10.5,
        paddingBottom: 10.5
    }
}