import React from 'react';
import { View, TextInput, Text} from  'react-native';

const Input = (props) => {
  return(
    <View style={styles.contentStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput 
        style={styles.inputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  )
}

const styles = {
  contentStyle: {
    width: '90%',
    
    marginLeft: 15,
    marginRight:15,
    borderColor: '#000',
    borderBottomWidth: 1,
  },

  inputStyle: {
    fontSize: 14,
    paddingRight: 5,
    paddingLeft: 5,
  },

  labelStyle:{
    fontSize: 14,
    paddingLeft: 5,
  }
}

export { Input };