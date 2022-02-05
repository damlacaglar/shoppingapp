import React, { Component } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";
import { auth } from "../../firebase";
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   email: "",
    //   password: "",
    // };
  }

  // componentDidMount(){
  //     auth.onAuthStateChanged((user)=>{
  //         if (user){
  //           this.props.navigation.navigate("Home", {
  //               user: user
  //           })
  //         }
  //     })
  // }

  // loginHandler = () => {

   
  //   auth
  //     .signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then((response) => {
  //         if (response.user){
  //             this.props.navigation.navigate("Home", {
  //                 user: response.user
  //             })
  //         }
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  // registerHandler = () => {
  //   auth
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then((uc) => {
  //       if (uc.user) {
  //         console.log(uc.user.email);
  //         console.log("Kişi kaydı yapıldı.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  render() {
    return (<View style={this.styles.container}>
        <View style={this.styles.header}>
            <Text style={this.styles.txt}>Hello</Text>
        </View>
        <View style={this.styles.footer}>
            <View style={{ flex: 1 }}>
                <Text style={this.styles.txt_footer} > Email</Text>
                <TextInput style={this.styles.txtInput} ></TextInput>
                <Text style={this.styles.txt_footer}>Password</Text>
                <TextInput style={this.styles.txtInput}></TextInput>
            </View>
            <View style={this.styles.btnPanel}>
                <TouchableOpacity style={this.styles.btnContainer}>
                    <Text style={this.styles.btnText}>Kayıt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={this.styles.btnContainer}>
                    <Text style={this.styles.btnText}>Giriş</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>);
}
styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4a572a",
        margin: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 100,

    },
    header: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    footer: {
        borderColor:"#8f5d41",
        borderWidth:5,
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 200,
        borderTopRightRadius: 40,
        paddingVertical: 100,
        paddingHorizontal: 30,
    },
    txt: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#f1f4eb"

    },
    txtInput: {
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "white",
        borderRadius: 30,
        margin:5,
},
    txt_footer: {
        fontWeight: "bold",
        height: 20,
        weight: 20,
        marginLeft: 10,
       
       
    },
    btnPanel: {
        flexDirection: "row"

    },
    btnContainer: {
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "#8f5d41",
        borderRadius: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin:40,    
        
    },
    btnText: {
        fontWeight: "bold"

    }

});
}