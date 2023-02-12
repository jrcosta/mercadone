/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import styles from './styles';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
  Image,
} from 'react-native';

const Inputs = () => {
  const [list, setList] = useState<{text: string; number: string}[]>([]);
  const [text, setText] = useState('');
  const [number, setNumber] = useState('1');
  const inputNameRef = useRef<TextInput>(null);
  const inputNumberRef = useRef<TextInput>(null);

  const adicionarItem = () => {
    let floatNumber = parseFloat(number.replace(/[^0-9.-]+/g, ''));
    if (text.length < 2) {
      Alert.alert('O campo nome deve ter no mínimo 2 caracteres.');
      return;
    } else if (floatNumber === 0 || isNaN(floatNumber)) {
      Alert.alert('A quantidade não pode ser igual a Zero ou Vazia.');
      if (inputNumberRef.current) {
        inputNumberRef.current.focus();
      }
      return;
    }
    setList([...list, {text, number: String(floatNumber)}]);
    setText('');
    setNumber('1');
    if (inputNameRef.current) {
      inputNameRef.current.focus();
    }
  };

  const atualizaQuantidade = (index: number, newNumber: any) => {
    const newList = [...list];
    newList[index].number = newNumber;
    if (newNumber === 0) {
      newList[index].number = String(1);
    }
    setList(newList);
  };

  const handleClear = () => {
    setList([]);
  };

  const deletarItem = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <View>
      <View style={styles.line} />
      <Text style={styles.logo}>MercaDONE</Text>
      <View style={styles.line} />
      <View style={styles.viewInputs}>
        <TextInput
          ref={inputNameRef}
          value={text}
          onChangeText={setText}
          style={styles.inputName}
        />
        <TextInput
          ref={inputNumberRef}
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
          style={styles.inputQuantity}
          maxLength={4}
        />

        <TouchableOpacity onPress={adicionarItem} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.tableList}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{paddingLeft: 5}}>
              <Text>Produto</Text>
            </View>
            <View style={{paddingRight: 195}}>
              <Text>Quantidade</Text>
            </View>
          </View>
          {list.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{item.text}</Text>
              <Text style={styles.tableCell}>{item.number}</Text>
              <TouchableOpacity
                onPress={() =>
                  atualizaQuantidade(index, Number(item.number) + 1)
                }
                style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  atualizaQuantidade(index, Number(item.number) - 1)
                }
                style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deletarItem(index)}
                style={styles.button}>
                <Image
                  source={require('./lixeira.png')}
                  style={styles.buttonDeleteItem}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonCleanList}>
        <TouchableOpacity onPress={handleClear} style={styles.button}>
          <Text style={styles.buttonText}>Limpar Lista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Inputs;
