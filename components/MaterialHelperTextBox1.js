import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
 
} from 'react-native-responsive-screen';
function MaterialHelperTextBox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.nomDuSite}>Nom du Site</Text>
      <TextInput placeholder="Input" style={styles.inputStyle}></TextInput>
      <Text style={styles.helper}>
        Si c&#39;en arabe, tapez le nom en caractères latins
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  nomDuSite: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 6
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    top: hp('-1.5%'),
    flex: 1,
    paddingBottom: 8,
    width: wp("87%")
  },
  helper: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 24
  }
});

export default MaterialHelperTextBox1;
