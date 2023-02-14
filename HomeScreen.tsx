/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSave = () => {
    // Lógica para salvar a lista
    navigation.navigate('SavedLists');
  };

  return (
    <View>
      <Text>Tela Inicial</Text>
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

export default HomeScreen;
