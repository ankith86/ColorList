import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

const ColorButton =({backgroundColor, onSelect=f=>f }) => (

  <TouchableHighlight style={styles.button} onPress={()=> onSelect(backgroundColor)} underlayColor='orange'>

    <View style={styles.row}>
      <View style={[styles.indicator,{backgroundColor}]}/>
      <Text style={styles.text}>{backgroundColor}</Text>
    </View>

  </TouchableHighlight>

)

const styles =StyleSheet.create({

  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius:15,
    alignSelf:'stretch',
    backgroundColor:'rgba(255,255,255,.8)'


  },

  row: {
    flexDirection:'row',
    alignItems:'center'
  },

  indicator:{
    height:20,
    width:20,
    borderRadius:15,
    margin:5,
    backgroundColor:'white'
  },

  text:{
    fontSize:30,
    margin:5
  }
  })

  export default ColorButton
