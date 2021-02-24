import React from 'react';
import { View, Text } from 'react-native';

const Card = ({ children }) => {
  return(
    <View style={ styles.cardStyle }>
      { children }
    </View>
  )
};

const styles = {
  cardStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    borderBottomWidth:0,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    shadowColor: '#000',
    shadowOffset: { width:0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius:2,
    elevation: 1
  }
}
export { Card };
