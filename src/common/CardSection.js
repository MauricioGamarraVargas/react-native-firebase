import React from 'react';
import { View, Text} from 'react-native';

const CardSection = ({ children }) => {
  return(
    <View style = { styles.cardSection }>
      <Text>{ children }</Text>
    </View>
  )
};

const styles = {
  cardSection: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 7,
    backgroundColor: '#fff'
  }
}

export { CardSection };