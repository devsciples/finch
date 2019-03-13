import color from "color";

    import { Platform, Dimensions, PixelRatio } from "react-native";
    
    const deviceHeight = Dimensions.get("window").height;
    const deviceWidth = Dimensions.get("window").width;
    const platform = Platform.OS;
    const platformStyle = "material";
    const isIphoneX =
      platform === "ios" && deviceHeight === 812 && deviceWidth === 375;
    
    export default {"platformStyle":"material","platform":"ios","androidRipple":true,"androidRippleColor":"rgba(256, 256, 256, 0.3)","androidRippleColorDark":"rgba(0, 0, 0, 0.15)","btnUppercaseAndroidText":true,"badgeBg":"rgba(123,122,122,1)","badgeColor":"#fff","badgePadding":3,"btnFontFamily":"System","btnDisabledBg":"#b5b5b5","buttonPadding":6,"btnPrimaryBg":"rgba(242,137,111,1)","btnPrimaryColor":"#fff","btnInfoBg":"rgba(126,193,204,1)","btnInfoColor":"#fff","btnSuccessBg":"rgba(118,192,118,1)","btnSuccessColor":"#fff","btnDangerBg":"#d9534f","btnDangerColor":"#fff","btnWarningBg":"#f0ad4e","btnWarningColor":"#fff","btnTextSize":16.5,"btnTextSizeLarge":22.5,"btnTextSizeSmall":12,"borderRadiusLarge":57,"iconSizeLarge":45,"iconSizeSmall":18,"cardDefaultBg":"#fff","cardBorderColor":"rgba(198,198,198,1)","CheckboxRadius":0,"CheckboxBorderWidth":2,"CheckboxPaddingLeft":2,"CheckboxPaddingBottom":0,"CheckboxIconSize":18,"CheckboxFontSize":21,"DefaultFontSize":17,"checkboxBgColor":"rgba(126,193,204,1)","checkboxSize":20,"checkboxTickColor":"#fff","brandPrimary":"#3F51B5","brandInfo":"#3F57D3","brandSuccess":"#5cb85c","brandDanger":"#d9534f","brandWarning":"#f0ad4e","brandDark":"rgba(67,65,65,1)","brandLight":"#f4f4f4","fontFamily":"System","fontSizeBase":15,"fontSizeH1":27,"fontSizeH2":24,"fontSizeH3":21,"footerHeight":55,"footerDefaultBg":"#3F51B5","footerPaddingBottom":0,"tabBarTextColor":"#fff","tabBarTextSize":14,"activeTab":"#fff","sTabBarActiveTextColor":"rgba(242,137,111,1)","tabBarActiveTextColor":"rgba(67,65,65,1)","tabActiveBgColor":"rgba(255,255,255,1)","toolbarBtnColor":"rgba(67,65,65,1)","toolbarDefaultBg":"rgba(255,255,255,1)","toolbarHeight":64,"toolbarSearchIconSize":20,"toolbarInputColor":"#fff","searchBarHeight":30,"searchBarInputHeight":30,"toolbarBtnTextColor":"#fff","toolbarDefaultBorder":"rgba(234,234,234,1)","iosStatusbar":"light-content","statusBarColor":"rgba(242,137,111,1)","darkenHeader":"#F0F0F0","iconFamily":"Ionicons","iconFontSize":30,"iconHeaderSize":29,"inputFontSize":17,"inputBorderColor":"rgba(204,200,207,1)","inputSuccessBorderColor":"rgba(118,192,118,1)","inputErrorBorderColor":"rgba(217,83,79,1)","inputHeightBase":50,"inputColor":"rgba(67,65,65,1)","inputColorPlaceholder":"#575757","btnLineHeight":19,"lineHeightH1":32,"lineHeightH2":27,"lineHeightH3":22,"lineHeight":20,"listBg":"#FFF","listBorderColor":"#c9c9c9","listDividerBg":"#f4f4f4","listBtnUnderlayColor":"#DDD","listItemPadding":10,"listNoteColor":"#808080","listNoteSize":13,"defaultProgressColor":"#E4202D","inverseProgressColor":"#1A191B","radioBtnSize":25,"radioSelectedColorAndroid":"#5067FF","radioBtnLineHeight":29,"segmentBackgroundColor":"#3F51B5","segmentActiveBackgroundColor":"#fff","segmentTextColor":"#fff","segmentActiveTextColor":"#3F51B5","segmentBorderColor":"#fff","segmentBorderColorMain":"#3F51B5","defaultSpinnerColor":"rgba(242,137,111,1)","inverseSpinnerColor":"#1A191B","tabDefaultBg":"rgba(242,137,111,1)","topTabBarTextColor":"rgba(67,65,65,1)","topTabBarActiveTextColor":"#fff","topTabBarBorderColor":"#fff","topTabBarActiveBorderColor":"#fff","tabBgColor":"#F8F8F8","tabFontSize":15,"textColor":"rgba(67,65,65,1)","inverseTextColor":"#fff","noteFontSize":14,"defaultTextColor":"#000","titleFontfamily":"System","titleFontSize":19,"subTitleFontSize":14,"subtitleColor":"#FFF","titleFontColor":"rgba(67,65,65,1)","borderRadiusBase":2,"borderWidth":0.5,"contentPadding":10,"dropdownLinkColor":"#414142","inputLineHeight":24,"deviceWidth":1280,"deviceHeight":578,"isIphoneX":false,"inputGroupRoundedBorderRadius":30}