import React from 'react';
import { View, TextInput, Text} from  'react-native';

const Input = (props) => {
  return(
    <View style={styles.contentStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput 
        style={styles.inputStyle}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry? true: false}
      />
    </View>
  )
}

const styles = {
  contentStyle:{  
    borderColor: '#000',
    borderBottomWidth: 1,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
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