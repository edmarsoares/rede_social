import React, { Fragment } from 'react';
import estilo from "./style.js";

import {
    Text, Image, View
  } from 'react-native';

const Cabecalho = ({nomeUsuario, urlImage}) =>{
    return (
        <View style={estilo.cabecalho} >

            <Image source={{uri: urlImage}}
            style={estilo.fotoUsuario}
            
            />
            <Text>{nomeUsuario}</Text>

        </View>
    );
}

export default Cabecalho;

