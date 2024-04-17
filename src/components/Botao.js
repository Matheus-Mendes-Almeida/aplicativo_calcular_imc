import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const Botao = (props) => {
    return(
        <TouchableOpacity style={estilos.fundo} onPress={props.funcao}>
            <Text style={estilos.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: '#CED0CE',
        marginHorizontal: 10,
        marginVertical: 5
    },
    texto: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    }
})

export default Botao