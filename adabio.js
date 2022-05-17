import * as React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const AdaBio = ({ navigation }) => {

    const goBack = () => navigation.goBack()

    return (
        <View style={styles.container}>
            <Text>Ada était la seule fille légitime du poète George Gordon Byron et de
son épouse Annabella Milbanke, une femme intelligente et cultivée,
cousine de Caroline Lamb, dont la liaison avec Byron fut à l'origine
d'un scandale. Le premier prénom d'Ada, Augusta, aurait été choisi en
hommage à Augusta Leigh, la demi-sœur de Byron, avec qui ce dernier
aurait eu des relations incestueusesSwade 2. Le prénom Ada aurait été
choisi par Byron lui-mêmeStein 1, car il était « court, ancien et
vocalique »Wolfram 1. C'est Augusta qui encouragea Byron à se marier
pour éviter un scandale, et il épousa Annabella à contrecœur[réf.
souhaitée], en janvier 1815. Ada naît en décembre de cette même année.
À la suite de quatre tentatives de viol en état d'ivresse de la part
de ByronSwade 2, Annabella quitte Byron le 16 janvier 1816, gardant
Ada avec elle. Le 21 avril, Byron signe l'acte de séparation, puis
quitte le Royaume-Uni pour toujours. Il ne les revit jamais.
Annabella adorait les mathématiques. Byron l’appelait même parfois «
la princesse des parallélogrammesSwade 2 » et fit en sorte que les
tuteurs d'Ada lui donnent une éducation approfondie en mathématiques
et en sciences, ce qui était tout à fait inhabituel à l'époque dans
l'éducation d'une jeune fille de la noblesse. En 1832, Ada rencontre
Mary Somerville, éminente chercheuse et auteur scientifique du XIXe
siècle, qui l'encourage et l'aide à progresser en mathématiques. Le 5
juin 1833, Mary lui présente Charles Babbage, et Ada — alors âgée de
17 ans — est immédiatement fascinée par ses machines à calcul. Ils
deviennent très proches, Ada semblant trouver en Babbage le père
qu'elle n'avait jamais euCollier 1. Parmi ses autres connaissances, on
compte David Brewster, Charles Wheatstone, Charles Dickens et Michael
Faraday.</Text>
            <Button onPress={goBack} title={`Menu`} />
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

export default AdaBio;