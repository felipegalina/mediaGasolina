import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Estilos from "./style";

const result = ({ route }) => {
  const km = route.params?.quilometragem;
  const litros = route.params?.litros;
  const calcular = () => {
    let media = 0.0;
    media = km / litros;
    return media;
  };
  const media = calcular();
  const consumo = () => {
    if (media > 12) {
      return "Consumo nível A";
    } else if (media <= 12 && media > 10) {
      return "Consumo nível B";
    } else if (media <= 10 && media > 8) {
      return "Consumo nível C";
    } else if (media <= 8 && media > 4) {
      return "Consumo nível D";
    } else {
      return "Consumo nível E";
    }
  };

  return (
    <SafeAreaView style={Estilos.background}>
      <View style={Estilos.boxResult}>
        <View style={{ padding: 5 }}>
          <Text style={{color:"white", fontSize: 25 }}>Quilometragem percorrida: {km}</Text>
          <Text style={{color:"white", fontSize: 25 }}>
            Litros de gasolina consumidos: {litros}
          </Text>
        </View>
        <Text style={{color:"white", fontSize: 24, marginTop: 15 }}>
          Média: {media.toFixed(2).replace(".", ",")} Km/L
        </Text>
        <Text style={{color:"white", fontSize: 22 }}>{consumo()}</Text>
      </View>
    </SafeAreaView>
  );
};
export default result;
