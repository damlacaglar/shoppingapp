import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { fireStore } from "../../../../firebase";
export default class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }

  deleteHandler = () => {

    fireStore
      .collection("cart")
      .doc(this.props.item.docId)
      .delete()
      .then((response) => {
        this.props.deleteConfirm(this.props.item);
      })
      .catch((error) => console.log(error.message));
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.deleteHandler}>
          <Text style={{ fontWeight: "500", color: "white" }}>Sil</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
