import {
  View,
  Text,
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import text from "../../utils/text";
import colors from "../../utils/colors";
import { routeName } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Header, Button, NumberCircle } from "../../components";
import { deleteLottery } from "../../services/Generic/action";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { lotteries } = useSelector((state) => state);
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          {item?.map((innerItem, index) => {
            return (
              <NumberCircle
                index={index}
                key={item + index}
                number={innerItem}
              />
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(deleteLottery(index));
          }}
          style={styles.deleteBtn}
          activeOpacity={0.5}
        >
          <Text style={styles.delete}>{text?.deleteRow}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header title={text?.yourNumbers} />
      <View style={styles.screenContainer}>
        <View>
          <FlatList bounces={false} data={lotteries} renderItem={_renderItem} />
          <Button
            text={text?.addPlay}
            disabled={lotteries?.length === 3}
            btnStyle={lotteries?.length === 3 && styles.purchaseBtn}
            textStyle={lotteries?.length === 3 && styles.purchaseTxt}
            onPress={() => navigation?.navigate(routeName.ADD_NUMBERS)}
          />
        </View>
        <Button
          text={text?.purchase}
          disabled={lotteries?.length === 0}
          onPress={() => {
            Alert.alert(
              `${text?.yourSelectionsAre}:`,
              `${lotteries?.join("\n")}`,
              [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
          }}
          btnStyle={[
            lotteries?.length > 0 ? styles.activeBtn : styles.purchaseBtn,
          ]}
          textStyle={[
            lotteries?.length > 0 ? styles.activeText : styles.purchaseTxt,
          ]}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  screenContainer: {
    flex: 1,
    paddingTop: 23,
    paddingBottom: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  purchaseBtn: {
    borderWidth: 0,
    backgroundColor: colors.GREY,
  },
  purchaseTxt: {
    color: colors.DARK,
  },
  row: {
    marginBottom: 10,
    flexDirection: "row",
  },
  itemContainer: {
    paddingTop: 28,
    marginBottom: 12,
    paddingBottom: 11,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: colors?.GREY200,
  },
  delete: {
    fontSize: 15,
    color: colors.DARK,
  },
  deleteBtn: {
    width: 125,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.GREY,
  },
  activeBtn: {
    borderWidth: 0,
    backgroundColor: colors.APP_THEME,
  },
  activeText: {
    color: colors.WHITE,
  },
});
