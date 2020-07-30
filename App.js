import React, { Fragment, useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList
} from 'react-native';
import { Cabecalho } from './src/components/cabecalho';
import { Foto } from './src/components/foto';
import lerFotos from './resources/api/feed';
import { Comentarios } from './src/components/comentarios';


export default function App() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  },[])

  return (
    <ScrollView>
      
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) =>

          <Fragment>
            <Cabecalho nomeUsuario={item.userName} 
                        urlImage={item.userURL}
                        />
            <Foto urlFoto={item.url} descricao={item.description} qtdLike = {item.likes} />

            <Comentarios comentarios={item.comentarios}/>
          </Fragment>

        }
      />
    </ScrollView>

  );
}


