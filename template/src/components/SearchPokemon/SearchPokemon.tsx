import { getPokemonByName, pokemonApi } from '@services/modules/pokemon/pokemonApi';
import { storeToken } from '@state/user/user.slice';
import React from 'react';
import { ActivityIndicator, Alert, Button, Image, SafeAreaView, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './SearchPokemon.scss';

const SearchPokemon = (): JSX.Element => {
  const dispatch = useDispatch();

  const [getPokemon, { isFetching, data }] = getPokemonByName.useLazyQuery();

  return (
    <SafeAreaView>
      <Button title="Reset" onPress={() => dispatch(pokemonApi.util.resetApiState())} />

      <TextInput
        style={styles.input}
        placeholder="Inserisci nome pokemon"
        onSubmitEditing={async (e) => {
          try {
            const mon = await getPokemon(e.nativeEvent.text.toLowerCase(), true).unwrap();

            dispatch(storeToken(mon.name));
          } catch (error) {
            Alert.alert('Pokemon non esisente, riprova');
          }
        }}
      />

      {isFetching && <ActivityIndicator />}

      {data && !isFetching && (
        <View style={styles.container}>
          <Image source={{ uri: data.sprites.front_default, width: 150, height: 150 }} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchPokemon;
