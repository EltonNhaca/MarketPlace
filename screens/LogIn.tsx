import * as React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={[styles.login, { flexGrow: 1 }]}>
      <View style={[styles.loginChild, styles.loginPosition]} />
      <Text style={[styles.theCybermarket, styles.cybermarketFlexBox]}>
        The CyberMarket
      </Text>
    
      <ScrollView style={[styles.loginItem, styles.loginPosition]} />
      <Text style={styles.login1}>{`Login!
`}</Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <View style={styles.loginInner} />
      <View style={styles.lineView} />
      <Text style={[styles.username, styles.usernameTypo]}>{`Username
`}</Text>
      <Text style={[styles.password, styles.usernameTypo]}>{`Password
`}</Text>
      <Text style={[styles.forgotPassword, styles.signUpTypo]}>
        Forgot Password?
      </Text>
      <View style={[styles.roundedRectangle, styles.roundedShadowBox]} />
      <Text style={[styles.signUp, styles.signUpTypo]}>{`Sign Up
`}</Text>
      <Image
        style={[styles.xIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/x-icon.png")}
      />
      <Image
        style={[styles.linkedinIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/linkedin-icon.png")}
      />
      <Image
        style={[styles.instaIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/insta-icon.png")}
      />
      <Image
        style={[styles.fbIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/fb-icon.png")}
      />
      <Text
        style={[styles.cybermarket, styles.cybermarketFlexBox]}
      >{`@2024 CyberMarket All rights reserved  `}</Text>
      <Image
        style={styles.userFreeIconsDesignedByFr}
        contentFit="cover"
        source={require("../assets/user-free-icons-designed-by-freepik-1.png")}
      />
      <Image
        style={styles.lockAndUnlockedVectorIcons}
        contentFit="cover"
        source={require("../assets/lock-and-unlocked-vector-icons-security-padlock-password-privacy-symbol-for-graphic-design-logo-web-site-social-stock-vector--illustration-of-closed-private--145625490-1.png")}
      />
      <View style={[styles.loginChild1, styles.loginChildBorder]} />
      <View style={[styles.loginChild2, styles.loginChildBorder]} />
      <View style={[styles.roundedRectangle1, styles.roundedShadowBox]} />
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.signIn}>{`Sign In
`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPosition: {
    left: 0,
    position: "absolute",
  },
  cybermarketFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  usernameTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.latoRegular,
    left: 119,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  signUpTypo: {
    top: 690,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  roundedShadowBox: {
    height: 38,
    borderRadius: Border.br_xs,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  iconLayout: {
    height: 41,
    borderRadius: Border.br_xl_5,
    top: 755,
    position: "absolute",
  },
  loginChildBorder: {
    borderColor: Color.colorGray,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  loginChild: {
    top: 0,
    width: 393,
    height: 839,
    backgroundColor: Color.colorLightsteelblue,
  },
  theCybermarket: {
    top: 46,
    left: 122,
    fontFamily: FontFamily.spicyRiceRegular,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  loginItem: {
    top: 277,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_10xs,
    borderBottomLeftRadius: Border.br_10xs,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 390,
    height: 567,
  },
  login1: {
    top: 305,
    left: 169,
    width: 80,
    height: 24,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icon: {
    top: 93,
    left: 106,
    borderRadius: 98,
    width: 179,
    height: 148,
    position: "absolute",
  },
  loginInner: {
    top: 369,
    left: 22,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_34xl,
    backgroundColor: Color.colorWhite,
    width: 346,
    height: 274,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  lineView: {
    top: 490,
    left: 28,
    borderColor: "rgba(170, 170, 170, 0.67)",
    width: 341,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  username: {
    top: 424,
  },
  password: {
    top: 527,
  },
  forgotPassword: {
    left: 56,
    color: Color.colorLightsteelblue,
  },
  roundedRectangle: {
    top: 681,
    left: 205,
    width: 114,
    backgroundColor: Color.colorLightsteelblue,
  },
  signUp: {
    left: 244,
    color: Color.colorBlack,
  },
  xIcon: {
    left: 75,
    width: 41,
    height: 41,
    borderRadius: Border.br_xl_5,
    top: 755,
  },
  linkedinIcon: {
    left: 145,
    width: 41,
    height: 41,
    borderRadius: Border.br_xl_5,
    top: 755,
  },
  instaIcon: {
    left: 215,
    width: 44,
    height: 41,
    borderRadius: Border.br_xl_5,
    top: 755,
  },
  fbIcon: {
    left: 278,
    width: 41,
    height: 41,
    borderRadius: Border.br_xl_5,
    top: 755,
  },
  cybermarket: {
    top: 825,
    left: 97,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.notoSansJPRegular,
    color: Color.colorBlack,
  },
  userFreeIconsDesignedByFr: {
    top: 408,
    left: 49,
    borderRadius: Border.br_110xl_5,
    width: 52,
    height: 50,
    position: "absolute",
  },
  lockAndUnlockedVectorIcons: {
    top: 506,
    left: 34,
    borderRadius: Border.br_130xl,
    width: 72,
    height: 70,
    position: "absolute",
  },
  loginChild1: {
    top: 442,
    left: 193,
    width: 140,
  },
  loginChild2: {
    top: 544,
    left: 186,
    width: 144,
  },
  roundedRectangle1: {
    top: 580,
    left: 133,
    backgroundColor: "#ff9390",
    width: 126,
  },
  signIn: {
    top: 591,
    left: 176,
    width: 59,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorPlum,
    flex: 1,
    height: 844,
    width: "100%",
    overflow: "hidden",
  },
});

export default LogIn;
