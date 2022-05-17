import * as React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const StoryAda = ({ navigation }) => {

    const goTo = () => navigation.navigate('AdaBio')

    return (
        <View style={styles.container}>
            <Text>Ada Wong est un personnage de jeu vidéo de la saga des Resident Evil (« Biohazard » au Japon).
                C'est une belle mercenaire américaine vraisemblablement d'origine chinoise, extrêmement habile en espionnage et redoutable au combat. </Text>
            <Button onPress={goTo} title={`Go to Ada's Bio ?`} />
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