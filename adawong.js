import * as React from 'react';
import { StyleSheet, View, Image,Button,Text } from 'react-native';



const ImageAda = ({navigation}) => {
  const goBack  = () => navigation.goBack()
  const goTo  = () => navigation.navigate('StoryAda')

  return (
    <View     style = {styles.container}>    
    <Image
    style = {styles.pics}
    title = 'Ada'
    source = {require('./assets/ada.jpg')} 
    />
    <Text>Miss Ada Wong</Text>
    <Button onPress={goBack} title={`Back to the future`} />
    <Button onPress={goTo} title={`Go to Ada's story`} />

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
  pics: {
      width: 200,
      height: 200
  }
});
export default ImageAda;