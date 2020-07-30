import {
    StyleSheet,
} from 'react-native';


const estilo = StyleSheet.create({
    inline:{
        flexDirection:"row",
        alignItems:"center"
    },
    imagemSend: {
        width:30,
        height:30,
        marginRight:5
    },
    textInput:{
        flex:1,
        marginLeft:10
    },
    textComentario:{
        marginRight: 5,
        fontWeight: "bold"
    }
});

export default estilo;