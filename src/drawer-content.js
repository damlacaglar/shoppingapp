import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  signOut = () => {
    auth
      .signOut()
      .then((x) => this.props.navigation.navigate("Login"))
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={this.styles.topPart}>
          <View style={this.styles.txtPart}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("Account");
            }}>
              <Text style={{ fontWeight: "600", fontSize: 20,color:"#8f5d41" }}>Account</Text>
            </TouchableOpacity>
          </View>
          <View style={this.styles.txtPart} >
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("Main");
            }}>
              <Text style={{ fontWeight: "600", fontSize: 20,color:"#8f5d41"}}>Shop</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={this.styles.bottomPart}>
          <TouchableOpacity
            style={this.styles.btnContainer}
            onPress={this.signOut}
          >
            <Text style={this.styles.btnText}>Çıkış</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    topPart: {
      margin: 10,
      backgroundColor: "#FFFFFF",
      flex: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
      borderWidth:3,
      borderColor:"#9d9494"
    },
    txtPart:{
      borderColor: "black",
      borderWidth:1.5,
      backgroundColor: "white",
      borderRadius:20,
      margin:5 ,
      padding:10,
      },

    bottomPart: {
      margin: 10,
      backgroundColor: "#9d9494",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      borderWidth: 1
    },
    btnContainer: {
      flex: 1,
      alignItems: "center",
      height: "100%",
    },
    btnText: {
      fontWeight: "bold",
      color: "black",

    }
  });
}