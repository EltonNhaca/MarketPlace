import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ProductDetail = () => {
  return (
    <View style={styles.productDetail}>
      <View style={[styles.productDetailChild, styles.productLayout]} />
      <View style={[styles.productDetailItem, styles.rectangleViewShadowBox]} />
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
      <Image
        style={styles.yourShoppingCart1}
        contentFit="cover"
        source={require("../assets/your-shopping-cart-1.png")}
      />
      <Text style={[styles.playstation5Details, styles.addToCartTypo]}>
        Playstation 5 details
      </Text>
      <Image
        style={styles.ogoszeniaSprzedamKupiN}
        contentFit="cover"
        source={require("../assets/ogoszenia--sprzedam-kupi-na-olx-pl-2.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.addToCart, styles.addToCartTypo]}>Add to cart</Text>
      <Text style={[styles.mznExperimenteOContainer, styles.addToCartTypo]}>
        <Text style={styles.text}>{`                    `}</Text>
        <Text style={styles.mzn}>{` 60.000.00 Mzn
`}</Text>
        <Text style={styles.text}>{`
Experimente o futuro dos videogames com o PlayStation 5 (PS5). Equipado com uma arquitetura de última geração, o PS5 oferece desempenho incomparável e recursos inovadores para levar sua experiência de jogo a novos patamares.`}</Text>
      </Text>
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
  addToCartTypo: {
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  productDetailChild: {
    backgroundColor: Color.colorLightsteelblue,
    top: 0,
    width: 390,
    position: "absolute",
    height: 836,
  },
  productDetailItem: {
    bottom: 0,
    shadowRadius: 4,
    elevation: 4,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    height: 78,
    width: 390,
    left: 0,
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
    left: 9,
    borderTopLeftRadius: Border.br_56xl,
    borderTopRightRadius: Border.br_56xl,
    borderBottomRightRadius: Border.br_101xl,
    borderBottomLeftRadius: Border.br_101xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 368,
    height: 655,
    position: "absolute",
  },
  yourShoppingCart1: {
    top: 5,
    left: 333,
    borderRadius: Border.br_6xl,
    width: 44,
    height: 43,
    position: "absolute",
  },
  playstation5Details: {
    top: 51,
    left: 113,
    fontSize: 16,
    width: 164,
    height: 18,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
  },
  ogoszeniaSprzedamKupiN: {
    top: 100,
    left: 70,
    borderRadius: Border.br_26xl,
    width: 263,
    height: 340,
    position: "absolute",
  },
  rectangleView: {
    top: 661,
    left: 90,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: Border.br_3xs,
    width: 210,
    height: 57,
    backgroundColor: Color.colorLightsteelblue,
  },
  addToCart: {
    top: 675,
    left: 123,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
  },
  text: {
    color: Color.colorBlack,
  },
  mzn: {
    color: Color.colorLightsteelblue,
  },
  mznExperimenteOContainer: {
    top: 449,
    left: 74,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.spectralBold,
    width: 298,
    height: 29,
    textAlign: "left",
    fontWeight: "700",
  },
  productDetail: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 836,
  },
});

export default ProductDetail;
