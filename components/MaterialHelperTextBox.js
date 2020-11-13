import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
 
} from 'react-native-responsive-screen';
function MaterialHelperTextBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.urlDuSite}>Url du Site</Text>
      <TextInput
        placeholder="http://www.hatepage.com"
        style={styles.inputStyle}
      ></TextInput>
      <Text style={styles.helper}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  urlDuSite: {
    fontSize: hp('2%'),
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 1,
    top: hp('-0.5%'),
    flex: 1,
    paddingBottom: 8,
    width: wp("87%")
  },
  helper: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  }
});

export default MaterialHelperTextBox;
