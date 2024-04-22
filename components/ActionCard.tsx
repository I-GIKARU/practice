import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                whats new
            </Text>
        </View>
        <Image source={require('../assets/splash.png')} style={styles.cardImage} />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} >
                whats new in 2024
                whats new in 2024
                whats new in 2024
                whats new in 2024
                whats new in 2024
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
                <Text style={styles.footerText}>Read More</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
                <Text style={styles.footerText}> follow me</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      overflow: 'hidden',
      elevation: 5,
    },
    elevatedCard: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    headingContainer: {
      backgroundColor: '#f2f2f2',
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardImage: {
      width: '100%',
      height: 200,
    },
    bodyContainer: {
      padding: 16,
    },
    bodyText: {
      fontSize: 16,
      color: '#555',
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      padding: 16,
    },
    footerText: {
      fontSize: 16,
      color: '#007bff',
      fontWeight: 'bold',
      textDecorationColor: '#007bff',
      textDecorationStyle: 'solid',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      backgroundColor: '#f2f2f2',
      overflow: 'hidden',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,  
      }
    },
  });
    