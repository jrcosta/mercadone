/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  saveAndClearList: {
    width: 100,
    height: 60,
    flexDirection: 'row',
    paddingLeft: 1,
  },
  buttonDeleteItem: {
    width: 19,
    height: 19,
  },
  listNameText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingLeft: 5,
    textAlign: 'left',
  },
  inputNameList: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  viewInputs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputQuantity: {
    flex: 1,
    height: 40,
    textAlign: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    margin: 5,
  },
  inputName: {
    flex: 5,
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    margin: 5,
    paddingLeft: 1,
  },
  button: {
    padding: 5,
    margin: 5,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableList: {

  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    alignItems: 'center',
    padding: 5,
  },
  tableCell: {
    flex: 1,
    padding: 5,
  },
  scrollView: {
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontSize: 5,
  },
});

export default styles;
