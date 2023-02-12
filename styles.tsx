/* eslint-disable prettier/prettier */
import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  buttonCleanList: {
    width: 120,
    height: 50,
  },
  buttonDeleteItem: {
    width: 19,
    height: 19,
  },
  viewInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  inputQuantity: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
  },
  inputName: {
    flex: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
  },
  button: {
    padding: 11,
    margin: 5,
    backgroundColor: 'lightgray',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableList: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 5,
  },
  tableCell: {
    flex: 1,
    padding: 5,
  },
  scrollView: {
    marginHorizontal: 5,
    height: '70%',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  logo: {
    fontFamily: 'System',
    fontStyle: 'italic',
    fontSize: 20,
  },
});

export default styles;
