import React, { Fragment, useState } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import estilo from './style';
import { curtirFoto , imgLike} from '../../../resources/api/curtidas';

const Foto = ({ urlFoto, descricao, qtdLike }) => {

    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qtdLike);

    const clicouCurtir = () => {
        let [novoEstCurtiu, qnt] = curtirFoto(curtiu, likes)

        setLikes(qnt);
        setCurtiu(novoEstCurtiu);
    }

    return (

        <Fragment>
            <Image source={{ uri: urlFoto }}
                style={estilo.imagem} />
            <Text>{descricao}</Text>

            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={clicouCurtir}>
                    <Image source={imgLike(curtiu)}
                        style={estilo.like} />

                </TouchableOpacity>
                <Text>curtidas {likes}</Text>
            </View>
        
        </Fragment>

    );
};

export default Foto;