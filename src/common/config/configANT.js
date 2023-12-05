const themeConfig = {
    components: {
      Input: {
        activeBg: 'none',
        hoverBg: 'none',
        colorPrimary: 'none',
        colorPrimaryHover: 'none',
        colorText: 'none',
        fontSize: 16,
        colorBgContainer: 'transparent',
        colorTextPlaceholder: '#8B8E99',
        paddingInlineLG: 0,
        paddingInline: 0,
      },
    },
  };
export const dropDown ={
  components:{
    Dropdown:{
      colorPrimary: 'red',
      colorText: 'yellow',
      fontSize: 19

    }
  }
}
export const sideProductConfig = {
  components: {
    Select: {
      selectorBg: " #f9f9fc",
      colorBorder: "none",
      controlOutline: "none"
    },
    Checkbox: {
      colorPrimary: "#3858D6",

      borderRadiusSM: 50,
      handleActiveColor: "#8B8E99",
      railBg: "red",
      handleColor: "red",
    },
    Slider: {
      handleActiveColor: "##3858D6",
      railBg: "#3858D6",
      handleColor: "#3858D6",
      railHoverBg: "#3858D6",
      trackBg: "#8B8E99",
      trackHoverBg: "#8B8E99",
    },
    Rate: {
      colorText: "red",
    },
    Badge: {
      dotSize: 3,
      colorError: "blue",
      indicatorHeight: 13,
      colorBorderBg: "none",
    },
  },
};

  export default themeConfig;
  