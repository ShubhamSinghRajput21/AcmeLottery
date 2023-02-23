import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import text from "../../utils/text";
import React, { useState } from "react";
import colors from "../../utils/colors";
import { useDispatch } from "react-redux";
import { arrayOfNumbers } from "../../utils/constants";
import { addLottery } from "../../services/Generic/action";
import { Button, Header, NumberCircle } from "../../components";

const Selectables = ({ number, index, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.selectableContainer(index)}
      onPress={onPress}
    >
      <Text style={styles.selectableNumber}>{number}</Text>
    </TouchableOpacity>
  );
};

const AddNumbers = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);

  const _renderItem = ({ item, index }) => (
    <Selectables
      number={item}
      index={index}
      onPress={() => {
        let index = selected?.findIndex((innerItem) => {
          return item === innerItem;
        });
        if (index >= 0) {
          selected.splice(index, 1);
          setSelected([...selected]);
        } else if (selected?.length < 6) {
          setSelected([...selected, item]);
        }
      }}
    />
  );

  const _horizontalRenderItem = ({ item, index }) => (
    <NumberCircle index={index} key={item + index} number={selected[index]} />
  );

  return (
    <View style={styles.container}>
      <Header title={text?.luckyLotto} />
      <View style={styles.row}>
        <FlatList
          horizontal
          data={[...selected, ...new Array(6 - selected?.length)]}
          bounces={false}
          extraData={selected}
          renderItem={_horizontalRenderItem}
        />
      </View>
      <View style={styles.screenContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {text?.picknumbers(6 - selected?.length)}
              </Text>
            </View>
          }
          numColumns={7}
          bounces={false}
          data={arrayOfNumbers}
          renderItem={_renderItem}
        />
        <View style={styles.btnContainer}>
          <Button
            text={text?.playNumbers}
            onPress={() => {
              console.log("onPress");
              dispatch(addLottery(selected));
              setSelected([]);
              navigation.goBack();
            }}
            disabled={selected?.length !== 6}
            btnStyle={[
              selected?.length === 6 ? styles.activeBtn : styles.purchaseBtn,
            ]}
            textStyle={[
              selected?.length === 6 ? styles.activeText : styles.purchaseTxt,
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default AddNumbers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  row: {
    paddingBottom: 33,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.APP_THEME,
  },
  numberContainer: (index) => ({
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.WHITE,
    marginLeft: index === 0 ? 0 : 6,
  }),
  number: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.DARK,
  },
  screenContainer: {
    flex: 1,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectableContainer: (index) => ({
    width: 36,
    height: 36,
    marginTop: 16,
    borderWidth: 2,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.GREY100,
    backgroundColor: colors.WHITE,
    marginLeft: index % 7 === 0 ? 0 : 16,
  }),
  selectableNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.DARK,
  },
  textContainer: {
    width: "100%",
    paddingTop: 17,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.BLACK,
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  purchaseBtn: {
    borderWidth: 0,
    backgroundColor: colors.GREY,
  },
  purchaseTxt: {
    color: colors.DARK,
  },
  activeBtn: {
    borderWidth: 0,
    backgroundColor: colors.APP_THEME,
  },
  activeText: {
    color: colors.WHITE,
  },
});
