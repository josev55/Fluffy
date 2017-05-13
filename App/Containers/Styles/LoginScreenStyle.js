import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.15
  },
  logo: {
    borderRadius: 10,
    width: 130,
    height: 130
  },
  formContainer: {
    flex: 0.2,
    justifyContent: 'center'
  },
  usernameContainer: {
    marginLeft: 60,
    marginRight: 60
  },
  passwordContainer: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 20
  },
  textInput: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: '#777'
  },
  buttonContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ingresarButton: {
    borderRadius: 10,
    backgroundColor: '#AAA',
    alignSelf: 'stretch',
    marginLeft: 60,
    marginRight: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  }
})
