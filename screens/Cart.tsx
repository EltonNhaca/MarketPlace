import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Cart = () => {
  return (
    <View style={styles.cart}>
      <View style={[styles.productDetail, styles.productLayout]}>
        <View style={[styles.productDetailChild, styles.productLayout]} />
        <View
          style={[styles.productDetailItem, styles.rectangleViewShadowBox]}
        />
        <View style={[styles.navBar, styles.navBarLayout]}>
          <Image
            style={[styles.lojaIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/loja1.png")}
          />
          <Image
            style={[styles.comprasIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/compras1.png")}
          />
          <Image
            style={[styles.homeIcon, styles.navBarLayout]}
            contentFit="cover"
            source={require("../assets/home1.png")}
          />
          <Image
            style={styles.usersIcon}
            contentFit="cover"
            source={require("../assets/users1.png")}
          />
        </View>
        <View style={styles.productDetailInner} />
        <Text style={[styles.cart1, styles.cart1FlexBox]}>Cart</Text>
        <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
        <Text style={[styles.makePayment, styles.cart1FlexBox]}>
          Make Payment
        </Text>
        <Image
          style={[
            styles.ogoszeniaSprzedamKupiN,
            styles.ogoszeniaSprzedamKupiNLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ogoszenia--sprzedam-kupi-na-olx-pl-1.png")}
        />
        <Image
          style={[
            styles.ma1BomberJacketHeritage,
            styles.ogoszeniaSprzedamKupiNLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ma1-bomber-jacket-heritage--gunmetal---xs-1.png")}
        />
        <Text style={styles.total148}>{`         Total : 
148 500.00Mzn `}</Text>
        <Text
          style={[styles.playstation56000000Container, styles.cart1FlexBox]}
        >
          <Text
            style={[styles.playstation5, styles.textTypo1]}
          >{`Playstation 5       
  `}</Text>
          <Text style={[styles.mzn, styles.mznTypo]}>{`60.000.00 Mzn
`}</Text>
          <Text style={styles.textTypo1}>
            <Text style={styles.text1}>{`

`}</Text>
            <Text style={styles.textTypo}>{` `}</Text>
          </Text>
        </Text>
        <Text
          style={[styles.bomberJacket350000Container, styles.containerLayout]}
        >
          <Text style={styles.bomberJacket}>
            <Text style={styles.textTypo1}>{`      Bomber Jacket       `}</Text>
            <Text style={styles.mznTypo}>{`  
`}</Text>
          </Text>
          <Text style={styles.mznTypo}>
            <Text style={styles.mznTypo1}> 3500.00 Mzn</Text>
          </Text>
          <Text style={[styles.text4, styles.textTypo]}>{`  `}</Text>
        </Text>
        <Image
          style={styles.appleIphone141}
          contentFit="cover"
          source={require("../assets/apple-iphone-14-1.png")}
        />
        <Text style={[styles.appleIphone14Container, styles.containerLayout]}>
          <Text style={styles.bomberJacket}>
            <Text style={styles.textTypo1}>{`      Apple Iphone 14 Pro
       `}</Text>
            <Text style={styles.mznTypo}>{`  `}</Text>
          </Text>
          <Text style={styles.mznTypo}>
            <Text style={styles.mznTypo1}> 85000.00 Mzn</Text>
          </Text>
          <Text style={[styles.text4, styles.textTypo]}>{`  `}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productLayout: {
    width: 390,
    left: 0,
  },
  rectangleViewShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  navBarLayout: {
    height: 64,
    position: "absolute",
  },
  iconLayout: {
    height: 45,
    width: 47,
    top: 10,
    position: "absolute",
  },
  cart1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  ogoszeniaSprzedamKupiNLayout: {
    width: 100,
    left: 43,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mznTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  containerLayout: {
    height: 39,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  productDetailChild: {
    height: 836,
    backgroundColor: Color.colorLightsteelblue,
    top: 0,
    width: 390,
    position: "absolute",
  },
  productDetailItem: {
    bottom: 0,
    shadowRadius: 4,
    elevation: 4,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    height: 78,
    width: 390,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  lojaIcon: {
    left: 88,
  },
  comprasIcon: {
    left: 176,
  },
  homeIcon: {
    width: 65,
    left: 0,
    height: 64,
    top: 0,
  },
  usersIcon: {
    top: 4,
    left: 256,
    width: 64,
    height: 58,
    position: "absolute",
  },
  navBar: {
    top: 772,
    left: 35,
    width: 320,
  },
  productDetailInner: {
    top: 86,
    left: 11,
    borderTopLeftRadius: Border.br_56xl,
    borderBottomRightRadius: Border.br_101xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 369,
    height: 642,
    position: "absolute",
  },
  cart1: {
    top: 17,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 46,
  },
  rectangleView: {
    top: 661,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: Border.br_3xs,
    width: 250,
    height: 57,
    left: 46,
    backgroundColor: Color.colorLightsteelblue,
  },
  makePayment: {
    top: 675,
    left: 80,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  ogoszeniaSprzedamKupiN: {
    top: 144,
    height: 97,
  },
  ma1BomberJacketHeritage: {
    top: 280,
    height: 113,
  },
  total148: {
    top: 595,
    left: 89,
    fontSize: FontSize.size_xl,
    width: 194,
    color: Color.colorLightsteelblue,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  playstation5: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  mzn: {
    fontSize: FontSize.size_2xs,
    color: Color.colorLightsteelblue,
  },
  text1: {
    fontSize: FontSize.size_3xs,
    color: Color.colorPlum,
  },
  playstation56000000Container: {
    top: 168,
    left: 185,
    width: 98,
    height: 48,
  },
  bomberJacket: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
  },
  mznTypo1: {
    fontSize: FontSize.size_2xs,
    color: Color.colorLightsteelblue,
  },
  text4: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  bomberJacket350000Container: {
    top: 324,
    left: 167,
    width: 134,
  },
  appleIphone141: {
    top: 433,
    left: 55,
    width: 76,
    height: 130,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  appleIphone14Container: {
    top: 490,
    left: 159,
    width: 151,
  },
  productDetail: {
    height: 840,
    backgroundColor: Color.colorLightsteelblue,
    top: 0,
    width: 390,
    position: "absolute",
    overflow: "hidden",
  },
  cart: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Cart;
