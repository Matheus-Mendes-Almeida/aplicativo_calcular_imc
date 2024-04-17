import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from './src/components/Botao'

const App = () => {

  const [txtPeso, setPeso] = useState('')
  const [txtAltura,  setAltura] = useState('')
  const [txtImc, setImc] = useState('')
  const styles = StyleSheet.create({
    view:{
      padding: 10,
      flex: 1,
      flexDirection: 'column'
    },
    botao: {
      backgroundColor: 'grey',
      marginHorizontal: 10,
      marginVertical: 15
    },
    logoPequeno: {
      height: 50,
      width:50
    },
    logoGrande: {
      height: '70%',
      width: '70%'
    },
    txtTitulo: {
      fontSize: 28,
      color: 'red'
    },
    txtLabel: {
      fontSize: 20,
      color: 'blue',
      fontFamily: 'RobotoCondensed-Bold'
    },
    txtInput: {
      fontSize: 20,
      borderWidth: 1,
      borderColor: 'grey',
      backgroundColor: '#FFFFFF',
      marginHorizontal: 10
    }, 
    containerImagem: {
      flex: 0.20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    containerInputs: {
      flex: 0.40,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    containerBotoes: {
      flex: 0.20,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    containerResultados: {
      flex: 0.20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

  })

  const calcularIMC = () => {
    setImc(parseFloat(txtPeso) / (parseFloat(txtAltura) * parseFloat(txtAltura)))
  }

  const limparTxtInputs = () => {
    setAltura('')
    setPeso('')
    setImc('')
  }

  return (
    <View style={styles.view}>
      <View style={styles.containerImagem}>
        <Icon name="favorite" size={60} color='#000000' />
        <Image style = {styles.logoGrande} source={{uri: 'https://th.bing.com/th/id/OIP.MXaaYugg34XQBXbMPjCW1gHaEK?rs=1&pid=ImgDetMain'}} />
      </View>

      <View style={styles.containerInputs}>
        <Text style={styles.txtLabel}>Peso</Text>
        <TextInput style={styles.txtInput} value={txtPeso} onChangeText={setPeso} />

        <Text style={styles.txtLabel}>Altura</Text>
        <TextInput style={styles.txtInput} value={txtAltura} onChangeText={setAltura}/>

        <Text></Text>
      </View>
      
      <View style={styles.containerBotoes}>
        <Botao texto='Calcular' funcao={calcularIMC}/>
        <Botao texto='Limpar' funcao={limparTxtInputs}/>
      </View>
      <View style={styles.containerResultados}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>IMC:</Text>
        <Text>{parseFloat(txtImc).toFixed(2)}</Text>
      </View>
    </View>
  )
}

export default App