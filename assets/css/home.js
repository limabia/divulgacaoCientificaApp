import {Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default {
    container: {
        backgroundColor: Colors.gelo,
        flex: 1,
        padding: 15
    },
    containerLogo:{
        marginTop: 16,
        marginBottom: 16
    },
    logo: {
        height: 56,
        width: 149
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
        backgroundColor: Colors.azul,
        paddingTop: 10.5,
        paddingBottom: 10.5
    },
    pb15:{
       paddingBottom: 15
    },
    box:{
        backgroundColor: Colors.branco,
        width: '100%',
        height: 'auto',
        borderRadius: 4
    },
    boxChart:{
        backgroundColor: Colors.branco,
        borderRadius: 4,
        padding: 22,
        height:'auto'
    },
    textQuantidadeProcessos:{
        fontSize: 49,
        fontWeight: '900',
        color: Colors.azul0,
    },
    textInformativo:{
        fontSize: 12,
        fontWeight: '500',
        color: Colors.azul0,
    },
}