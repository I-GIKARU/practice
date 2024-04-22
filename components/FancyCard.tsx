import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../assets/adaptive-icon.png')} style={styles.cardImage} />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle} >Nyeri</Text>
            <Text style={styles.cardlable} >Nyeri kenya</Text>
            <Text style={styles.cardDescription} >serene environment in nyeri</Text>
            <Text style={styles.cardFooter} >12 minutes away</Text>
        


            </View> 
      </View>
    </View>
  );
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: 300,
      borderRadius: 14,
      margin: 50,
      backgroundColor: '#d2ee82',
      elevation: 5,
    },
    cardElevated: {
      shadowOffset: { width: 0, height: 2 },
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    cardImage: {
      height: 200,
      width: '100%',
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
    },
    cardBody: {
      padding: 16,
    },
    cardTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 8,
    },
    cardlable: {
      fontSize: 14,
      color: '#888',
    },
    cardDescription: {
      fontSize: 14,
      color: '#333',
      marginBottom: 16,
    },
    cardFooter: {
      fontSize: 12,
      color: '#888',
      paddingHorizontal: 16,
      paddingBottom: 16,
      borderTopWidth: 1,
      borderTopColor: '#f2f2f2',
      textAlign: 'center',
    },
});
