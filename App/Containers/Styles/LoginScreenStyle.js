import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: '#004777'
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
    flex: 0.1,
    justifyContent: 'center'
  },
  label: {
    color: 'white',
    fontWeight: 'bold'
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
    color: '#FFF'
  },
  buttonContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ingresarButton: {
    borderRadius: 10,
    backgroundColor: '#F05C23',
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
  },
  separatorLine: {
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 30,
    paddingBottom: 30,
    alignSelf: 'stretch'
  }
})
