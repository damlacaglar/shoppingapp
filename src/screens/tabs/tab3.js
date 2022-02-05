import React, { Component } from "react";
import {
  View,
  Text,
  ViewBase,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { auth, fireStore } from "../../../firebase";
import DeleteButton from "./components/deleteButton";
export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      cartTotal: 0,
    };
  }

  styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    headerContainer: {
      flex: 1,
      flexDirection: "row",
    },
    rowContainer: {
      flexDirection: "row",
    },
    footerContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      borderColor: "#e0e0e0",
      borderWidth: 2,
      margin: 2,
      backgroundColor: "white",
    },
    cartColumn: {
      borderColor: "#e0e0e0",
      borderWidth: 2,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    },
    bodyContainer: {
      flex: 10,
    },
    orderButton: {
      borderWidth: 1.5,
      borderColor: "#e0e0e0",
      backgroundColor: "white",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 3,
    },
  });

  componentDidMount() {
    var list = [];
    var total = 0;
    fireStore
      .collection("cart")
      .get()
      .then((response) => {
        response.forEach((item) => {

          console.log(item.data());
          list.push({
            docId: item.id,
            cartItem : item.data()
          });
        });

        list.map((satir) => {
          total += satir.cartItem.price * satir.cartItem.quantity;
        });

        this.setState({
          cartItems: list,
          cartTotal: total,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  deleteComplated = (item)=>{
    var total = 0;
    var list = this.state.cartItems.filter(x=>x.docId !== item.docId);
    list.map((satir) => {
      total += satir.cartItem.price * satir.cartItem.quantity;
    });

    this.setState({
      cartItems:list,
      cartTotal:total
    })
  }

  renderItem = ({ item }) => {
    return (
      <View style={this.styles.rowContainer}>
        <View style={[this.styles.cartColumn, { flex: 5 }]}>
          <Text>{item.cartItem.productName}</Text>
        </View>
        <View style={[this.styles.cartColumn, { flex: 1 }]}>
          <Text>{item.cartItem.quantity}</Text>
        </View>
        <View style={[this.styles.cartColumn, { flex: 2 }]}>
          <Text>{item.cartItem.price}</Text>
        </View>
        <View style={[this.styles.cartColumn, { flex: 1,backgroundColor:"#d00f0f" }]}>
          <DeleteButton item={item} deleteConfirm={this.deleteComplated}/>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={this.styles.mainContainer}>
        <View style={this.styles.headerContainer}>
          <View style={[this.styles.cartColumn, { flex: 5 }]}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>
              Urun Adı
            </Text>
          </View>
          <View style={[this.styles.cartColumn, { flex: 1 }]}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>Adet</Text>
          </View>
          <View style={[this.styles.cartColumn, { flex: 2 }]}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>Fiyat</Text>
          </View>
          <View
            style={[this.styles.cartColumn, { flex: 1, backgroundColor: "" }]}
          >
            <Text></Text>
          </View>
        </View>

        <View style={this.styles.bodyContainer}>
          {this.state.cartItems.length <= 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size={"large"} />
            </View>
          ) : (
            <FlatList
              data={this.state.cartItems}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
        <View style={this.styles.footerContainer}>
          <View style={{ marginRight: 5 }}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>Toplam</Text>
          </View>
          <View style={{ marginRight: 5 }}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>
              {this.state.cartTotal}
            </Text>
          </View>
        </View>
        <View style={this.styles.orderButton}>
          <TouchableOpacity onPress={this.saveOrderHandler}>
            <Text style={{ fontWeight: "bold", color: "#c95313" }}>
              Sipariş Ver
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  saveOrderHandler = () => {
    this.state.cartItems.forEach((item) => {
      fireStore
        .collection("order")
        .add(item)
        .then((x) => {
          console.log(item);
          console.log("eklendi");
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };
}