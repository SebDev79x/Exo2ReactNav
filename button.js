import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native';


/* const goTo = ()=>{ 


} */
const ButtonNav = ({ navigation }) => {
/*     const { navigate } = navigation;
 */  return (
      <View>
          <Button
         title="Go to Ada Info"
         onPress={navigation.navigate('Ada')}
       />
          
      </View>
    );
}



const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
 
  }
});
export default ButtonNav;
/* const miscImages = (props) =>{
  const {pics} = props
  return (
    <View style = {styles.container}>
      <Image 
              style={styles.pics}
<Image 
              style={styles.pics}
      source = {require('./assets/ra.png')}/>    </View>
  )
} */
