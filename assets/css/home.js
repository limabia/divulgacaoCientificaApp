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
        borderRadius: 4, 
        padding: 20
    },
    textCategoria:{
        color: Colors.azul,
        fontSize: 15, 
        fontWeight: '600'
    },
    styleButton:{
        width: '100%',
        borderRadius: 4,
        height: 40,
        backgroundColor: Colors.azulClaro,
        paddingTop: 10.5,
        paddingBottom: 10.5
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