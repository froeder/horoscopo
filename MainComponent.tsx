import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import SwipePicker from "react-native-swipe-picker";
import axios from "react-native-axios";

export default class MainComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { signo: "", resultado: "", loaded: false };
  }

  getSign = async (signo: string) => {
    this.setState({ loaded: true });
    let response = await fetch(`http://babi.hefesto.io/signo/${signo}/dia`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(response);
    let date = response.dataAcesso.date.split("-");
    console.log(date);
    this.setState({
      resultado: response.texto,
      loaded: false,
      data: `${date[2].split(" ")[0]}/${date[1]}/${date[0]}`,
    });
  };

  render() {
    return (
      <View>
        <SwipePicker
          items={[
            {
              value: "Selecione",
              label: "Selecione",
            },
            {
              value: "aquario",
              label: "Aquário",
            },
            {
              value: "peixes",
              label: "Peixes",
            },
            {
              value: "aries",
              label: "Aries",
            },
            {
              value: "touro",
              label: "Touro",
            },
            {
              value: "gemeos",
              label: "Gêmeos",
            },
            {
              value: "cancer",
              label: "Câncer",
            },
            {
              value: "leao",
              label: "Leão",
            },
            {
              value: "virgem",
              label: "Virgem",
            },
            {
              value: "libra",
              label: "Libra",
            },
            {
              value: "escorpiao",
              label: "Escorpião",
            },
            {
              value: "sagitario",
              label: "Sagitário",
            },
            {
              value: "capricornio",
              label: "Capricórnio",
            },
          ]}
          onChange={({ index, item }) => {
            this.getSign(item.value);
          }}
          height={200}
          width={Dimensions.get("window").width}
        />
        {this.state.loaded ? (
          <View style={{ marginTop: 20 }}>
            <ActivityIndicator size={50} />
          </View>
        ) : (
          <ScrollView style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center" }}>{this.state.data}</Text>
            <Text
              style={{
                fontSize: 16,
                padding: 20,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              {this.state.resultado}
            </Text>
          </ScrollView>
        )}
      </View>
    );
  }
}

type State = {
  signo: string;
  resultado: string;
  loaded: boolean;
  data?: any;
};

type Props = {};
