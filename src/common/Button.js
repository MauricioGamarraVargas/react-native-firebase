import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	return (
		<TouchableOpacity 
      style = { styles.buttonStyle }
			onPress = { onPress }
		>	
				<Text style={styles.textStyle}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = {
  textStyle: {
    color: '#007aff',
    alignSelf: 'center',
    fontSize:16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10
  },

  buttonStyle: {
    borderWidth: 1,
		borderColor: '#007aff',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    margin:20
  }
}

export { Button };