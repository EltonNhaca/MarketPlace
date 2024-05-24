import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signup}>
      <View style={[styles.signupChild, styles.signupPosition]} />
      <View style={[styles.signupItem, styles.signupPosition]} />
      <Text style={[styles.wellcome, styles.wellcomeTypo]}>Wellcome!</Text>
      <Text style={[styles.signup1, styles.signup1Clr]}>{`SignUp!
`}</Text>
      <View style={styles.signupInner} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Image
        style={[styles.userFreeIconsDesignedByFr, styles.freeLayout]}
        contentFit="cover"
        source={require("../assets/user-free-icons-designed-by-freepik-11.png")}
      />
      <Image
        style={[
          styles.freeNavigateIconDownload,
          styles.freeNavigateIconDownloadPosition,
        ]}
        contentFit="cover"
        source={require("../assets/free-navigate--icon--download-in-glyph-style-1.png")}
      />
      <Text style={[styles.country, styles.countryTypo]}>Country</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
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
        style={[styles.instaIcon, styles.instaIconLayout]}
        contentFit="cover"
        source={require("../assets/insta-icon.png")}
      />
      <Image
        style={[styles.fbIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/fb-icon.png")}
      />
      <Text
        style={[styles.cybermarket, styles.signup1Clr]}
      >{`@2024 CyberMarket All rights reserved  `}</Text>
      <Image
        style={[
          styles.coneDeEnvelopeDeEMailPng,
          styles.freeNavigateIconDownloadPosition,
        ]}
        contentFit="cover"
        source={require("../assets/cone-de-envelope-de-e-mail-png--cones-de-e-mail-cones-de-envelope-correio-clipart-imagem-png-e-vetor-para-download-gratuito-1.png")}
      />
      <Text style={[styles.eMail, styles.nameTypo]}>E-mail</Text>
      <View style={[styles.lineView, styles.signupChildBorder]} />
      <View style={[styles.signupChild1, styles.signupChildBorder]} />
      <View style={[styles.signupChild2, styles.signupChildBorder]} />
      <Image
        style={[styles.lockAndUnlockedVectorIcons, styles.instaIconLayout]}
        contentFit="cover"
        source={require("../assets/lock-and-unlocked-vector-icons-security-padlock-password-privacy-symbol-for-graphic-design-logo-web-site-social-stock-vector--illustration-of-closed-private--145625490-11.png")}
      />
      <Text style={[styles.password, styles.countryTypo]}>Password</Text>
      <View style={[styles.signupChild3, styles.signupChildBorder]} />
      <Text style={[styles.confirmPassword, styles.nameTypo]}>
        Confirm Password
      </Text>
      <View style={[styles.signupChild4, styles.signupChildBorder]} />
      <View style={[styles.rectangleView, styles.signupChild5ShadowBox]} />
      <View style={[styles.signupChild5, styles.signupChild5ShadowBox]} />
      <Text style={[styles.confirm, styles.cancelTypo]}>Confirm</Text>
      <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
      <Text style={[styles.signUpOur, styles.wellcomeTypo]}>
        Sign up our marketplace
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signupPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  wellcomeTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  signup1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  nameTypo: {
    height: 19,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  freeLayout: {
    height: 41,
    width: 41,
  },
  freeNavigateIconDownloadPosition: {
    left: 39,
    position: "absolute",
  },
  countryTypo: {
    left: 91,
    height: 19,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_xl_5,
    top: 766,
    height: 41,
  },
  instaIconLayout: {
    width: 44,
    position: "absolute",
  },
  signupChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray,
    borderStyle: "solid",
    position: "absolute",
  },
  signupChild5ShadowBox: {
    height: 30,
    width: 104,
    borderRadius: Border.br_3xs,
    top: 693,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
    position: "absolute",
  },
  cancelTypo: {
    top: 699,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  signupChild: {
    top: 0,
    backgroundColor: Color.colorLightsteelblue,
    width: 390,
    left: 0,
    height: 844,
  },
  signupItem: {
    top: 189,
    borderTopLeftRadius: 51,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 655,
    width: 390,
    left: 0,
  },
  wellcome: {
    top: 35,
    fontFamily: FontFamily.spicyRiceRegular,
    left: 151,
  },
  signup1: {
    top: 216,
    left: 155,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    width: 80,
    height: 24,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  signupInner: {
    top: 256,
    left: 15,
    borderRadius: Border.br_34xl,
    width: 357,
    height: 488,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  name: {
    top: 355,
    width: 57,
    left: 96,
    height: 19,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_sm,
  },
  userFreeIconsDesignedByFr: {
    top: 349,
    left: 40,
    borderRadius: Border.br_110xl_5,
    position: "absolute",
  },
  freeNavigateIconDownload: {
    top: 504,
    borderRadius: 81,
    height: 41,
    width: 41,
  },
  country: {
    top: 515,
    width: 57,
  },
  ellipseIcon: {
    top: 540,
    left: 488,
    width: 100,
    height: 100,
    position: "absolute",
  },
  xIcon: {
    left: 71,
    width: 41,
    top: 766,
    position: "absolute",
  },
  linkedinIcon: {
    left: 133,
    width: 41,
    top: 766,
    position: "absolute",
  },
  instaIcon: {
    left: 193,
    borderRadius: Border.br_xl_5,
    top: 766,
    height: 41,
  },
  fbIcon: {
    left: 265,
    width: 41,
    top: 766,
    position: "absolute",
  },
  cybermarket: {
    top: 830,
    left: 106,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.notoSansJPRegular,
  },
  coneDeEnvelopeDeEMailPng: {
    top: 424,
    width: 42,
    height: 42,
  },
  eMail: {
    top: 435,
    width: 57,
    left: 96,
    height: 19,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_sm,
  },
  lineView: {
    top: 374,
    width: 165,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray,
    borderStyle: "solid",
    left: 148,
  },
  signupChild1: {
    top: 449,
    width: 165,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray,
    borderStyle: "solid",
    left: 148,
  },
  signupChild2: {
    top: 529,
    width: 165,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray,
    borderStyle: "solid",
    left: 151,
  },
  lockAndUnlockedVectorIcons: {
    top: 567,
    left: 37,
    borderRadius: Border.br_130xl,
    height: 46,
  },
  password: {
    top: 580,
    width: 89,
  },
  signupChild3: {
    top: 594,
    left: 158,
    width: 155,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray,
    borderStyle: "solid",
  },
  confirmPassword: {
    top: 630,
    width: 127,
    left: 81,
  },
  signupChild4: {
    top: 644,
    left: 201,
    width: 115,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray,
    borderStyle: "solid",
  },
  rectangleView: {
    left: 60,
  },
  signupChild5: {
    left: 211,
  },
  confirm: {
    left: 237,
  },
  cancel: {
    left: 81,
  },
  signUpOur: {
    top: 116,
    left: 85,
    fontFamily: FontFamily.spectralRegular,
  },
  signup: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
