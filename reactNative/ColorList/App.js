import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import ColorButton from './components/ColorButton'

export default class ColorList extends Component {

  constructor() {
    super()
    this.state ={
      backgroundColor: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  render(){
    const { backgroundColor} = this.state
    return (
      <ScrollView style ={[styles.container, {backgroundColor}]}>

        <ColorButton backgroundColor='red' onSelect={ this.changeColor}/>
        <ColorButton backgroundColor='green' onSelect={ this.changeColor}/>
        <ColorButton backgroundColor='yellow' onSelect={ this.changeColor}/>
        <ColorButton backgroundColor='salmon' onSelect={ this.changeColor}/>
        <ColorButton backgroundColor='blue' onSelect={ this.changeColor}/>
        <ColorButton backgroundColor='#00FF00' onSelect={ this.changeColor}/>
        <ColorButton backgroundColor='rgb(255,0,255)' onSelect={ this.changeColor}/>
        <ColorButton backgroundColor='rgb(25,77,51)' onSelect={ this.changeColor}/>
        <ColorButton backgroundColor='#D9E3F0' onSelect={ this.changeColor}/>
        <ColorButton backgroundColor='#F47373' onSelect={ this.changeColor}/>

      </ScrollView>
      )
  }
}
const styles =StyleSheet.create({

  container: {
    flex:1,
    paddingTop:20
  }


  })
  AppRegistry.registerComponent('ColorList',() =>ColorList)
