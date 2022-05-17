import * as React from 'react';
import { StyleSheet, View, Button,Text } from 'react-native';

const Home = ({navigation}) => {
    const goTo = () => navigation.navigate("ImageAda");

    return (
      <View style={styles.container}>
          <Text>La bienvenue !</Text>
        <Button onPress={goTo} title={`Go to Ada`} />
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
export default Home;