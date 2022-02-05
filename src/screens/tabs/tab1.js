import React, { Component } from "react";
import { FlatList, ActivityIndicator, View, ScrollView } from "react-native";
import { fireStore } from "../../../firebase";

import ProductItem from "./components/product-item";

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fireStore
      .collection("product")
      .get()
      .then((response) => {
        var list = [];
        response.forEach((item) => {
          list.push(item.data());
        });

        this.setState({
          products: list,
        });
      })
      .catch((error) => console.log(error.message));
  }

  renderItem = ({ item }) => {
    return <ProductItem product={item} />;
  };

  render() {
    return (
      <ScrollView>
        {this.state.products.length <= 0 ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large"></ActivityIndicator>
          </View>
        ) : (
          <FlatList
            renderItem={this.renderItem}
            data={this.state.products}
            keyExtractor={(item) => item.productId}
          ></FlatList>
        )}
      </ScrollView>
    );
  }
}