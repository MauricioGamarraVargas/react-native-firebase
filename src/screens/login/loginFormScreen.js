import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Spinner, Card, CardSection } from '../../common'

class LoginForm extends Component{
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  buttonRender = () => {
    const { loading } = this.state;
    return loading?<Spinner size='small' />:<Button>Log in</Button> 
  }
  render(){
    return( 
      <View>
        <View>
          <Input
            label='Email'
            placeholder='Ingrese su email'
            onChangeText={text => this.setState({ email:text })}
          />
        </View>
        <View>
          <Input
            type='password'
            label='Password'
            placeholder='Ingrese su password'
            secureTextEntry={true}
            onChangeText={text => this.setState({ password:text })}
          />
        </View>       
            {this.buttonRender()}
      </View>       
    )
  }
}

export default LoginForm;