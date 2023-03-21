import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, } from 'react-native';
import Picker from './src/components/picker';
import styles from './src/components/styles';


export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.areaMoeda}>
        <Text style={styles.txtTitulo}> Selecione sua Moeda</Text>
        <Picker />

      </View>
      {/*============================================================ */}
      {/*============================================================ */}
      <View style={styles.areaValor}>
        <Text style={styles.txtTitConverter}> Digite o valor para Converter R$</Text>
        <TextInput
          style={styles.input}
          placeholder={'Ex: 100'}
          keyboardType={'decimal-pad'}

        />
      </View>

      <TouchableOpacity style={styles.botaoArea}>
        <Text style={styles.botaoText}>CONVERTER</Text>
      </TouchableOpacity>

      <View style={styles.areaResultado}>
        <Text style={styles.txtResultado}> resultado </Text>
      </View>

    </View>
  );
}

