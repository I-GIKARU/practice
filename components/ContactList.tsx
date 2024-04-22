import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts =[
        {
            uid:1,
            name:'John',
            status:'Online offfline away online offline', 
            imageUrl:'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid:2,
            name:'Joe',
            status:'Online offfline away online offline', 

            imageUrl:'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid:3,
            name:'Job',
            status:'Online offfline away online offline', 
            imageUrl:'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid:4,
            name:'Joy',
            status:'Online offfline away online offline', 
            imageUrl:'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
        >
            {contacts.map(({uid, name, status, imageUrl}) => (
                <View key={uid} style={styles.userCard}>
                    <Image source={{uri:imageUrl}} style={{width:50, height:50, borderRadius:25}} />
                    <Text>{name}</Text>
                    <Text>{status}</Text>
                    </View>
            ))}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    scrollViewContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    userCard: {
      width: 150,
      height: 200,
      borderRadius: 10,
      backgroundColor: 'blue', // Background color changed to blue
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      padding: 10,
      position: 'relative', // Added position relative to the user card
    },
    userImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    overlayContainer: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white', // Name color changed to white
      textAlign: 'center',
    },
    userStatus: {
      fontSize: 14,
      color: 'white', // Status color changed to white
    },
  
})