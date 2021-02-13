import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Display } from "../../components";

require("./../../lib/swisscalc.lib.format.js");
require("./../../lib/swisscalc.lib.operator.js");
require("./../../lib/swisscalc.lib.operatorCache.js");
require("./../../lib/swisscalc.lib.shuntingYard.js");
require("./../../lib/swisscalc.display.numericDisplay");
require("./../../lib/swisscalc.display.memoryDisplay");
require("./../../lib/swisscalc.calc.calculator.js");

const oc = global.swisscalc.lib.operatorCache;
const calc = new global.swisscalc.calc.calculator();

const CalculatorScreen = () => {
  const [value, setValue] = useState("0");

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "black" },
    displayContainer: { flex: 1, justifyContent: "flex-end" },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonContainer: { paddingBottom: 20 },
  });

  onDigitPress = (digit) => {
    calc.addDigit(digit);
    setValue(calc.getMainDisplay());
  };

  onClearPress = () => {
    calc.clear();
    setValue(calc.getMainDisplay());
  };

  onPlusMinusPress = () => {
    calc.negate();
    setValue(calc.getMainDisplay());
  };

  onBinaryOperatorPress = (operator) => {
    calc.addBinaryOperator(operator);
    setValue(calc.getMainDisplay());
  };

  onUnaryOperatorPress = (operator) => {
    calc.addUnaryOperator(operator);
    setValue(calc.getMainDisplay());
  };

  onEqualsPress = () => {
    calc.equalsPressed();
    setValue(calc.getMainDisplay());
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Display value={value} />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Button
            onPress={onClearPress}
            title="C"
            color="black"
            backgroundColor="#a5a5a5"
          />
          <Button
            onPress={onPlusMinusPress}
            title="+/-"
            color="black"
            backgroundColor="#a5a5a5"
          />
          <Button
            onPress={() => {
              onUnaryOperatorPress(oc.PercentOperator);
            }}
            title="%"
            color="black"
            backgroundColor="#a5a5a5"
          />
          <Button
            onPress={() => {
              onBinaryOperatorPress(oc.DivisionOperator);
            }}
            title="/"
            color="white"
            backgroundColor="#f1a12b"
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            onPress={() => {
              onDigitPress("7");
            }}
            title="7"
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={() => {
              onDigitPress("8");
            }}
            title="8"
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={() => {
              onDigitPress("9");
            }}
            title="9"
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={() => {
              onBinaryOperatorPress(oc.MultiplicationOperator);
            }}
            title="x"
            color="white"
            backgroundColor="#f1a12b"
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            onPress={() => {
              onDigitPress("4");
            }}
            title="4"
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={() => {
              onDigitPress("5");
            }}
            title="5"
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={() => {
              onDigitPress("6");
            }}
            title="6"
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={() => {
              onBinaryOperatorPress(oc.SubtractionOperator);
            }}
            title="-"
            color="white"
            backgroundColor="#f1a12b"
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            onPress={() => {
              onDigitPress("1");
            }}
            title="1"
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={() => {
              onDigitPress("2");
            }}
            title="2"
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={() => {
              onDigitPress("3");
            }}
            title="3"
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={() => {
              onBinaryOperatorPress(oc.AdditionOperator);
            }}
            title="+"
            color="white"
            backgroundColor="#f1a12b"
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            onPress={() => {
              onDigitPress("0");
            }}
            title="0"
            color="white"
            backgroundColor="#333333"
            style={2}
          />
          <Button
            onPress={() => {
              onDigitPress(".");
            }}
            title=","
            color="white"
            backgroundColor="#333333"
          />
          <Button
            onPress={onEqualsPress}
            title="="
            color="white"
            backgroundColor="#f1a12b"
          />
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
