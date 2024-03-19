import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

 function Onboarding() {
  return (
    <View style={styles.container}>
      
      <View style={styles.minicontainer}>
      <View style={styles.textcontainer}>
      <Text style={styles.wtext}>Welcome To Payless Refferal </Text>
      <Text style={styles.wtext}> Tracker</Text>
      </View>
      <Image style={styles.image}
  source={require('../assets/tracker.jpg')}
  accessibilityLabel="Description of the image for screen readers"
  accessible={true}
/>

      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btext}>Get Started</Text>
      </TouchableOpacity>
      
    </View>
  )
}
export default Onboarding

const styles= StyleSheet.create({
  container:{
    flex:1
  },
  minicontainer:{
    marginTop:40,
    

  },
textcontainer:{
 
  marginTop:40
},
wtext:{
  alignSelf:'center',
  fontSize:20,
  color:'#555'
},
image:{
  width: '100%', 
    height: 450, 
    alignSelf: 'center', 
    marginTop: 40,
    borderRadius: 10,
},
button:{
marginTop:40,
alignSelf:'center',
backgroundColor:'#D00E1F',
width:150,
height:40,
borderRadius:10

},
btext:{
  color:'#fff',
  alignSelf:'center',
  paddingTop:4,
  fontSize:18 
}
})