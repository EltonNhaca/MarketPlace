import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <ScrollView style={[styles.homeChild, styles.homePosition]} />
      <ScrollView style={[styles.homeItem, styles.homePosition]} />
      <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
      <ScrollView style={styles.homeInner} />
      <ScrollView style={[styles.navBar, styles.navBarLayout]}>
        <Image
          style={[styles.lojaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/loja.png")}
        />
        <Image
          style={[styles.comprasIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/compras.png")}
        />
        <Image
          style={[styles.homeIcon, styles.navBarLayout]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
        <Image
          style={styles.usersIcon}
          contentFit="cover"
          source={require("../assets/users.png")}
        />
      </ScrollView>
      <Image
        style={[
          styles.sofaCouchLineIconOutline,
          styles.homeApplianceArkiLayout,
        ]}
        contentFit="cover"
        source={require("../assets/sofa-couch-line-icon-outline-vector-sign-stock-vector--illustration-of-decoration-vector--88293740-1-1.png")}
      />
      <Image
        style={[styles.clothingStudioLogo1, styles.homeApplianceArkiLayout]}
        contentFit="cover"
        source={require("../assets/clothing-studio-logo-1.png")}
      />
      <Text style={[styles.forniture, styles.foodTypo]}>Forniture</Text>
      <Text style={[styles.clothes, styles.foodTypo]}>clothes</Text>
      <Image
        style={[styles.fastFoodFreeVectorIconsDe, styles.pumaLayout]}
        contentFit="cover"
        source={require("../assets/fast-food-free-vector-icons-designed-by-wanicon-1.png")}
      />
      <Text style={[styles.food, styles.foodTypo]}>Food</Text>
      <Image
        style={[styles.homeApplianceArki, styles.homeApplianceArkiLayout]}
        contentFit="cover"
        source={require("../assets/--home-appliance--arkinasi-1.png")}
      />
      <Text style={[styles.appliances, styles.foodTypo]}>Appliances</Text>
      <Image
        style={[styles.joalheriaConesGratuitosCri, styles.pumaLayout]}
        contentFit="cover"
        source={require("../assets/joalheria-cones-gratuitos-criados-por-eucalyp-1.png")}
      />
      <Text style={[styles.acess, styles.foodTypo]}>Acess</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.cc0020eb84cb4ea6869a8f10fbIcon}
          contentFit="cover"
          source={require("../assets/cc0020eb84cb4ea6869a8f10fb76b41d-1.png")}
        />
        <Text style={[styles.get30Off, styles.get30OffTypo]}>{`Get 30% off 
         on 
your first buy!
`}</Text>
      </View>
      <Text style={[styles.newProductsHere, styles.home1Typo]}>
        New Products here
      </Text>
      <Image
        style={[styles.pumaShoesPumaSmashV2Men, styles.pumaLayout]}
        contentFit="cover"
        source={require("../assets/puma-shoes---puma-smash-v2-mens-leather-sneaker-black---color--black-white---size--various-1.png")}
      />
      <Image
        style={[
          styles.ogoszeniaSprzedamKupiN,
          styles.ogoszeniaSprzedamKupiNLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ogoszenia--sprzedam-kupi-na-olx-pl-1.png")}
      />
      <Text style={[styles.playstation56000000Container, styles.containerTypo]}>
        <Text style={styles.get30OffTypo}>{`Playstation 5
  
`}</Text>
        <Text style={styles.mzn}>{`60.000.00 Mzn
`}</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Text style={[styles.shoesPumaSmashContainer, styles.containerTypo]}>
        <Text style={styles.shoesPumaSmashV2}>
          <Text style={styles.text1}>{`     `}</Text>
          <Text style={styles.shoesPuma}>{`      Shoes 
 Puma Smash v2
`}</Text>
          <Text style={styles.text1}>{`    `}</Text>
        </Text>
        <Text style={styles.mzn}>5.200.00 Mzn</Text>
        <Text style={styles.text}>{`  `}</Text>
      </Text>
      <Image
        style={[
          styles.ma1BomberJacketHeritage,
          styles.ogoszeniaSprzedamKupiNLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ma1-bomber-jacket-heritage--gunmetal---xs-1.png")}
      />
      <Text style={[styles.bomberJacket350000Container, styles.home1Typo]}>
        <Text style={styles.shoesPumaSmashV2}>
          <Text style={styles.shoesPuma}>{`      Bomber Jacket
`}</Text>
          <Text style={styles.text1}>{`       `}</Text>
        </Text>
        <Text style={styles.mzn}>3500.00 Mzn</Text>
        <Text style={styles.text}>{`  `}</Text>
      </Text>
      <Image
        style={styles.yourShoppingCart1}
        contentFit="cover"
        source={require("../assets/your-shopping-cart-1.png")}
      />
      <View style={[styles.rectangleView, styles.homeChildShadowBox]} />
      <View style={[styles.addToCartWrapper, styles.addLayout]}>
        <Text style={[styles.addToCart, styles.addLayout]}>add to cart</Text>
      </View>
      <View style={[styles.homeChild1, styles.homeChildShadowBox]} />
      <View style={[styles.homeChild2, styles.homeChildShadowBox]} />
      <View style={[styles.addToCartContainer, styles.addLayout]}>
        <Text style={[styles.addToCart, styles.addLayout]}>add to cart</Text>
      </View>
      <View style={[styles.addToCartFrame, styles.images1IconPosition]}>
        <Text style={[styles.addToCart, styles.addLayout]}>add to cart</Text>
      </View>
      <Image
        style={styles.specialOfferClipartPngImag}
        contentFit="cover"
        source={require("../assets/special-offer-clipart-png-images-special-offer-poster-special-offer-special-offer-png-image-for-free-download-1.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <Image
        style={[styles.images1Icon, styles.images1IconPosition]}
        contentFit="cover"
        source={require("../assets/images-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  home1Typo: {
    textAlign: "left",
    fontWeight: "700",
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
  homeApplianceArkiLayout: {
    height: 60,
    top: 67,
  },
  foodTypo: {
    fontFamily: FontFamily.spectralRegular,
    top: 136,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  pumaLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  groupChildLayout: {
    height: 127,
    width: 219,
    position: "absolute",
  },
  get30OffTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  ogoszeniaSprzedamKupiNLayout: {
    width: 100,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  containerTypo: {
    height: 48,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  homeChildShadowBox: {
    height: 22,
    width: 85,
    borderRadius: Border.br_3xs,
    elevation: 2,
    shadowRadius: 2,
    top: 624,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorLightsteelblue,
  },
  addLayout: {
    height: 17,
    width: 69,
  },
  images1IconPosition: {
    left: 275,
    position: "absolute",
  },
  homeChild: {
    height: 844,
    top: 0,
    width: 390,
    backgroundColor: Color.colorLightsteelblue,
  },
  homeItem: {
    top: 164,
    borderTopLeftRadius: Border.br_56xl,
    borderTopRightRadius: Border.br_56xl,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 680,
  },
  home1: {
    top: 18,
    left: 42,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
  },
  homeInner: {
    bottom: 0,
    shadowRadius: 4,
    elevation: 4,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    height: 78,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 390,
    left: 0,
    position: "absolute",
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
    width: 320,
    left: 27,
  },
  sofaCouchLineIconOutline: {
    borderRadius: 30,
    width: 60,
    height: 60,
    top: 67,
    left: 19,
    position: "absolute",
  },
  clothingStudioLogo1: {
    left: 98,
    borderRadius: 31,
    width: 60,
    height: 60,
    top: 67,
    position: "absolute",
  },
  forniture: {
    left: 19,
  },
  clothes: {
    left: 106,
  },
  fastFoodFreeVectorIconsDe: {
    left: 265,
    height: 60,
    top: 67,
    width: 60,
  },
  food: {
    left: 279,
  },
  homeApplianceArki: {
    left: 186,
    borderRadius: 35,
    width: 60,
    height: 60,
    top: 67,
    position: "absolute",
  },
  appliances: {
    left: 181,
  },
  joalheriaConesGratuitosCri: {
    left: 344,
    width: 62,
    height: 60,
    top: 67,
    borderRadius: Border.br_11xl,
  },
  acess: {
    left: 358,
  },
  groupChild: {
    borderRadius: 44,
    left: 0,
    top: 0,
    backgroundColor: Color.colorLightsteelblue,
  },
  cc0020eb84cb4ea6869a8f10fbIcon: {
    left: 112,
    borderRadius: Border.br_26xl,
    width: 101,
    height: 115,
    top: 10,
    position: "absolute",
  },
  get30Off: {
    top: 28,
    left: 17,
    fontFamily: FontFamily.spectralBold,
    width: 97,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  rectangleParent: {
    top: 239,
    left: 151,
  },
  newProductsHere: {
    top: 410,
    left: 37,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
  },
  pumaShoesPumaSmashV2Men: {
    left: 130,
    height: 100,
    width: 105,
    top: 456,
  },
  ogoszeniaSprzedamKupiN: {
    height: 97,
    left: 9,
    top: 456,
  },
  mzn: {
    fontSize: FontSize.size_3xs,
    color: Color.colorLightsteelblue,
  },
  text: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  playstation56000000Container: {
    top: 563,
    width: 90,
    left: 9,
  },
  text1: {
    fontSize: FontSize.size_mini,
  },
  shoesPuma: {
    fontSize: FontSize.size_smi,
  },
  shoesPumaSmashV2: {
    color: Color.colorBlack,
  },
  shoesPumaSmashContainer: {
    top: 558,
    left: 124,
    width: 105,
  },
  ma1BomberJacketHeritage: {
    top: 449,
    height: 113,
    left: 265,
  },
  bomberJacket350000Container: {
    top: 572,
    left: 248,
    width: 126,
    height: 39,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
  },
  yourShoppingCart1: {
    top: 6,
    left: 336,
    borderRadius: Border.br_6xl,
    width: 44,
    height: 43,
    position: "absolute",
  },
  rectangleView: {
    left: 9,
  },
  addToCart: {
    fontSize: FontSize.size_xs,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
    fontFamily: FontFamily.interBold,
    left: 0,
    top: 0,
  },
  addToCartWrapper: {
    top: 629,
    width: 69,
    left: 19,
    position: "absolute",
  },
  homeChild1: {
    left: 134,
  },
  homeChild2: {
    left: 265,
  },
  addToCartContainer: {
    left: 144,
    top: 629,
    width: 69,
    position: "absolute",
  },
  addToCartFrame: {
    height: 17,
    width: 69,
    top: 629,
  },
  specialOfferClipartPngImag: {
    top: 255,
    borderRadius: 48,
    width: 109,
    height: 95,
    left: 27,
    position: "absolute",
  },
  lineIcon: {
    top: 207,
    left: 60,
    height: 1,
    width: 219,
    position: "absolute",
  },
  images1Icon: {
    top: 182,
    width: 31,
    height: 31,
  },
  home: {
    flex: 1,
    width: "100%",
    height: 836,
    overflow: "hidden",
    backgroundColor: Color.colorLightsteelblue,
  },
});

export default Home;
