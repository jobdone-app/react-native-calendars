import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';
import platformStyles from './platform-style';


const STYLESHEET_ID = 'stylesheet.agenda.main';

export default function styleConstructor(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  const {knob, weekdays} = platformStyles(appStyle);
  
  return StyleSheet.create({
    knob,
    weekdays,
    header: {
      overflow: 'hidden',
      justifyContent: 'flex-end',
      position:'absolute',
      height:'100%',
      width:'100%'
    },
    knobContainer: {
      //flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      height: 15,
      bottom: 0,
      shadowOpacity: 0.26,
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      marginBottom: 2,
      shadowColor: 'rgb(59,97,163)',
      borderColor: 'rgba(22,36,61,0.2)',
      elevation: 4,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      backgroundColor : 'white',
      alignItems: 'center',
      justifyContent : 'center',
    },
    weekday: {
      width: 32,
      textAlign: 'center',
      color: appStyle.textSectionTitleColor,
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight
    },
    reservations: {
      flex: 1,
      marginTop: 130,
      backgroundColor: appStyle.backgroundColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
