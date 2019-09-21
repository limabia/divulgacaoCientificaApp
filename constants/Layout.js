import { Dimensions } from 'react-native';
import Colors from "./Colors";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  containerFlex: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  mt4:{
    marginTop: 4
  },
  mt14:{
    marginTop: 14
  },
  mt46:{
    marginTop: 46
  },
  mt49:{
    marginTop: 49
  },
  mt120:{
    marginTop: 120
  },

  mr23:{
    marginRight: 23
  },

  mb15:{
    marginBottom: 15
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end'
  },
  textRight: {
    textAlign: 'right'
  },
  left: {
    alignItems: 'flex-start'
  },
  Medium16C2:{
    color: Colors.branco,
    // fontFamily: 'robotmedium',
    fontSize: 16,
    fontWeight: '500'
  },
  Normal16C2:{
    color: Colors.C2,
    // fontFamily: 'robotmedium',
    fontSize: 16,
  },
  Medium20C2:{
    color: Colors.C2,
    // fontFamily: 'robotmedium',
    fontSize: 20,
    fontWeight: '500'
  },
  Medium30C2:{
    color: Colors.C2,
    // fontFamily: 'robotmedium',
    fontSize: 30,
    fontWeight: '500'
  },
  Regular14C2:{
    color: Colors.C2,
    // fontFamily: 'robotmedium',
    fontSize: 14.4,
    fontWeight: 'normal'
  },
  underline: {
    textDecorationLine: 'underline'
  },
  blurCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowOpacity: 1,
    shadowRadius: 1.00,

    elevation: 1,
  },
  backImage:{
    height: 16,
    width: 19,
    marginLeft: 16
  },
  notificationsImage:{
    height: 25,
    width: 25,
  },
  pillNotifications:{
    height: 8,
    width: 8,
    borderRadius: 4,
    marginLeft: -29,
    marginRight: 23,
    backgroundColor: 'red',
    marginTop: 1,
    borderWidth: 1.5,
    borderColor: Colors.branco
  },
  settingsImage:{
    height: 15,
    width: 15,
  },
  textHeader:{
    color: Colors.azul0,
    // fontFamily: 'robotmedium',
    fontSize: 20,
    fontWeight: '500'
  },
  width57:{
    width:'25%'
  },
  XAxisMargin:{
    marginHorizontal: -15,
    marginTop: 6,
    height: 20
  }
};
