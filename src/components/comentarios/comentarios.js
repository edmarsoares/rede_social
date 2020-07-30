import React, { Fragment, useState, useEffect } from 'react';
import estilo from './style';

import {
    View,
    ScrollView,
    Image,
    Dimensions,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';


const Comentarios = ({ comentarios }) => {

    const [estComentario, setComentarios] = useState(comentarios);

    let campoEntrada;
    let conteudoCampoInput = "";

    const adicionarComentario = () => {

        //Referencia ao campo input
        campoEntrada.clear();

        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "Marcos Antonio"
        };
        setComentarios([...estComentario, novoComentario]);

    }

    return (

        <Fragment>
            <FlatList
                data={estComentario}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={estilo.inline} >
                        <Text style={estilo.textComentario}>{item.userName}</Text>

                        <Text>{item.text}</Text>
                    </View>
                } />
            <View style={estilo.inline}>
                <TextInput
                    ref={textInput => campoEntrada = textInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={"Deixe seu comentário..."}
                    style={estilo.textInput} />

                <TouchableOpacity onPress={adicionarComentario}>
                    <Image source={require("../../../resources/img/send.png")} style={estilo.imagemSend} />
                </TouchableOpacity>
            </View>

        </Fragment>
    )
};

export default Comentarios;