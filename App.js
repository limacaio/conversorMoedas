import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Keyboard, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Picker from './src/components/picker';
import styles from './src/components/styles';
import api from './src/services/api';


export default function App() {

  const [moeda, setMoeda] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [valorPConverter, setValorPConverter] = useState(0);

  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);

  useEffect(() => {
    async function CarregaMoedas() {
      const resposta = await api.get('all');

      let arrayMoedas = []
      Object.keys(resposta.data).map((key) => {

        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })
      setMoeda(arrayMoedas);
      setLoading(false);
    }
    CarregaMoedas();
  }, []);

  async function converter() {
    if (moedaSelecionada === null || valorPConverter === 0) {
      alert("Selecione uma moeda!");
     
      return;
    }
    //fazendo a requisição
    const response = await api.get(`all/${moedaSelecionada}-BRL`);
    //console.log(response.data[moedaSelecionada].ask);

    //fazendo o calculo
    let resultado = (response.data[moedaSelecionada].ask * parseFloat(valorPConverter));
    setValorConvertido(`R$${resultado.toFixed(2)}`);
    setValorMoeda(valorPConverter);

    //fechando o teclado
    Keyboard.dismiss();
  }

  if (loading) {
    return (
      //MONTANDO ICONE DE LOADING
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator color='#121212' size={45} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>

        <View style={styles.areaMoeda}>
          <Text style={styles.txtTitulo}> Selecione sua Moeda</Text>
          <Picker moedas={moeda} onChange={(moeda) => setMoedaSelecionada(moeda)} />
        </View>

        {/*============================================================ */}
        {/*============================================================ */}
        <View style={styles.areaValor}>
          <Text style={styles.txtTitConverter}> Digite o valor para Converter R$</Text>
          <TextInput
            style={styles.input}
            placeholder={'Ex: 100'}
            keyboardType={'decimal-pad'}
            onChangeText={(valor) => setValorPConverter(valor)}
          />
        </View>
        {/*============================================================ */}
        {/*============================================================ */}
        <TouchableOpacity style={styles.botaoArea} onPress={converter}>
          <Text style={styles.botaoText}>CONVERTER</Text>
        </TouchableOpacity>
        {/*============================================================ */}
        {/*============================================================ */}
        {valorConvertido !== 0 && (
          <View style={styles.areaResultado}>
            <Text style={styles.txtResultado }> {valorMoeda} {moedaSelecionada} </Text>
            <Text style={styles.txtResultado01}> {valorConvertido} </Text>
          </View>
        )}

      </View>
    );
  }
}


