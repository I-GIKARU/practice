import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container} >
      <View style={[styles.card, styles.cardOne]}>

        <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>

        <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>

        <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardfour]}>

        <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardfive]}>

        <Text>green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 30,
        paddingHorizontal:8,

    },
    container: {
        flexDirection: 'row',

        
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 100,
        height: 100,
    },
        
    cardOne: {
        backgroundColor: 'red',
        
    },
    cardTwo: {
        backgroundColor: 'blue',
    },
    cardThree: {
        backgroundColor: 'green',
    },
    cardfour: {
        backgroundColor: 'yellow',
    },
    cardfive: {
        backgroundColor: 'purple',
    }


})