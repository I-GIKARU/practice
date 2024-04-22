import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText} >Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container} >
      <View style={styles.container}>
      <View style={[styles.card, styles.cardElevated]}>
        <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Text>😂</Text>
        </View>
      </View>
      </ScrollView>
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
        padding: 8,
        flexDirection: 'row',

        
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 8,
        
    },
    cardElevated: {
        backgroundColor: '#f2f2f2',
        shadowOffset: { width: 1, height: 1 },
        elevation: 4,
        shadowColor: '#333',
        shadowOpacity: 0.3,

    }
})