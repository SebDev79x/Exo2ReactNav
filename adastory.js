import * as React from 'react';
import { StyleSheet, View,Text, Image,Button } from 'react-native';



const StoryAda = ({navigation}) => {
  const goBack  = () => navigation.goBack()

  return (
    <View     style = {styles.container}>    
  <Text>Ada Wong est un personnage de jeu vidéo de la saga des Resident Evil (« Biohazard » au Japon).
      C'est une belle mercenaire américaine vraisemblablement d'origine chinoise, extrêmement habile en espionnage et redoutable au combat. </Text>
    <Button onPress={goBack} title={`Back to the future`} />

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
  },

});
export default StoryAda;