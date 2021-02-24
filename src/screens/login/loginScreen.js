import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginForm from './loginFormScreen';

class Login extends Component{
  
  render(){
    return(
      <View>
        <Text style={styles.logo}>LogIn</Text>
       <LoginForm />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    fontWeight:'bold',
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
    alignSelf: 'center'
  }
};

export default Login;