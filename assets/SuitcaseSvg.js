import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar,Dimensions, ImageBackground,Image } from "react-native";
import Svg, { Path,G } from 'react-native-svg';
const { height, width } = Dimensions.get('screen') 
const SuitcaseSvg = ({ width, height }) => {
  return (
    <Svg id="bold" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15" >
        <Path fill="grey" d="m15 6.5c-.552 0-1-.448-1-1v-1.5h-4v1.5c0 .552-.448 1-1 1s-1-.448-1-1v-1.5c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v1.5c0 .552-.448 1-1 1z"/>
        <Path fill="grey" d="m12.71 15.38c-.18.07-.44.12-.71.12s-.53-.05-.77-.14l-11.23-3.74v7.63c0 1.52 1.23 2.75 2.75 2.75h18.5c1.52 0 2.75-1.23 2.75-2.75v-7.63z"/>
        <Path fill="grey" d="m24 7.75v2.29l-11.76 3.92c-.08.03-.16.04-.24.04s-.16-.01-.24-.04l-11.76-3.92v-2.29c0-1.52 1.23-2.75 2.75-2.75h18.5c1.52 0 2.75 1.23 2.75 2.75z"/></Svg>
   
  )}
  export default SuitcaseSvg;






