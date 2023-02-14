import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';

const Inputs = () => {
  const [list, setList] = useState<{text: string; number: string}[]>([]);
  const [text, setText] = useState('');
  const [listName, setListName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [number, setNumber] = useState('1');
  const inputNameRef = useRef<TextInput>(null);
  const inputNumberRef = useRef<TextInput>(null);
  const inputNameListRef = useRef<TextInput>(null);
  const [contador, setContador] = useState(1);

  const addItem = () => {
    console.log('addItem chamado com text: ', text, 'e number: ', number);
    let floatNumber = parseFloat(number.replace(/[^0-9.-]+/g, ''));
    if (text.length < 2) {
      Alert.alert('O campo nome deve ter no mínimo 2 caracteres.');
      return;
    } else if (floatNumber === 0 || isNaN(floatNumber) || floatNumber < 0) {
      Alert.alert('A quantidade não pode ser igual a Zero ou Vazia.');
      if (inputNumberRef.current) {
        setNumber('1');
        inputNumberRef.current.focus();
      }
      return;
    }

    setList([...list, {text, number: String(floatNumber)}]);
    setText('');
    setNumber('1');

    if (list.length === 0) {
      setModalVisible(true);
      inputNameListRef.current?.focus();
      return;
    }
  };

  const handleModalSubmit = (listNameUser: string) => {
    let nomeLista;
    if (listNameUser.length === 0) {
      setContador(contador + 1);
      nomeLista = 'Lista' + contador;
    } else {
      nomeLista = listNameUser;
    }
    setListName(nomeLista.toUpperCase());
    setModalVisible(false);
  };

  const updateQuantity = (index: number, newNumber: any) => {
    const newList = [...list];
    newList[index].number = newNumber;
    if (newNumber === 0) {
      newList[index].number = String(1);
    }
    setList(newList);
  };

  const handleClear = () => {
    setList([]);
    setListName('');
  };

  const deleteItem = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <View>
      <View>
        <Text style={styles.listNameText}>Nome da Lista: {listName}</Text>
      </View>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Ex: Coca-Cola"
          ref={inputNameRef}
          value={text}
          onChangeText={setText}
          style={styles.inputName}
        />
        <TextInput
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
          style={styles.inputQuantity}
          maxLength={4}
        />
        <TouchableOpacity onPress={addItem} style={styles.button}>
          <Icon name="plus" size={30} color="#999" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View>
          <TextInput
            placeholder="Nome da lista"
            ref={inputNameListRef}
            value={listName}
            onChangeText={setListName}
            style={styles.inputNameList}
          />
          <TouchableOpacity
            onPress={() => handleModalSubmit(listName)}
            style={styles.button}>
            <Text>Enviar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ScrollView style={styles.scrollView}>
        <View style={styles.tableList}>
          {list.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{item.text}</Text>
              <Text style={styles.tableCell}>{item.number}</Text>
              <TouchableOpacity
                onPress={() => updateQuantity(index, Number(item.number) + 1)}
                style={styles.button}>
                <Icon name="plus" size={18} color="#999" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => updateQuantity(index, Number(item.number) - 1)}
                style={styles.button}>
                <Icon name="minus" size={18} color="#999" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteItem(index)}
                style={styles.button}>
                <Icon name="trash" size={18} color="#999" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.saveAndClearList}>
        <TouchableOpacity onPress={handleClear} style={styles.button}>
          <Icon name="trash" size={25} color="#999" />
          <Text>Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClear} style={styles.button}>
          <Icon name="save" size={25} color="#999" />
          <Text>Lista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Inputs;
