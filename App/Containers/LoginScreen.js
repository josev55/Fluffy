/* global require */

import React from 'react'
import { Text, KeyboardAvoidingView, Image, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class Login extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} resizeMode='contain' source={require('../Images/logo.png')} />
        </View>
        <View style={styles.formContainer}>
          <KeyboardAvoidingView behavior='padding'>
            <View style={styles.usernameContainer}>
              <Text style={styles.label}>Nombre de Usuario</Text>
              <TextInput keyboardType='email-address' style={styles.textInput} />
            </View>
            <View style={styles.passwordContainer}>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput style={styles.textInput} secureTextEntry />
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.ingresarButton} onPress={() => console.log('Button Clicked')}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const mapStateToProps = (/* state */) => {
  return {
  }
}

const mapDispatchToProps = (/* dispatch */) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
