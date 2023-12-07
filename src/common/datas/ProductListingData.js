const categoryproductpage = ["Apple Watch", "IPhone", "MacBook"];
const { v4: uuidv4 } = require("uuid");

export const dataProductPages = [
  {
    image1: " https://i.ibb.co/ydyJgbc/11111.webp",
    image2: "https://i.ibb.co/fNyrgfV/12.webp",
    image3: "https://i.ibb.co/PxFxRcv/13.webp",
    image4: "https://i.ibb.co/j6WSjbH/14.webp",
    image: "https://i.ibb.co/gZPHspj/i-Phone15-Pro-Blue-Titanium.png",
    name: "IPhone 15 Pro Blue Titanium",
    price: 30000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },

  {
    image1: " https://i.ibb.co/FXZGY0r/16.webp",
    image2: "https://i.ibb.co/w7NFf21/15.webp",
    image3: "https://i.ibb.co/fFSGzpM/17.webp",
    image4: "https://i.ibb.co/1X6yrDG/18.webp",
    image: "https://i.ibb.co/DgfsxCL/i-Phone15-Pro-Natural-Titanium.png",
    name: "IPhone 15 Pro White Titanium",
    price: 27000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },
  {
    image: "https://i.ibb.co/h2ZtxQz/i-Phone15-Pro-Black-Titanium.png",
    image1:
      " https://i.ibb.co/47gx4vX/vn-iphone-15-pro-black-titanium-pdp-image-position-2-design.webp",
    image2: " //i.ibb.co/W0JG2c2/11.webp",
    image3: "https://i.ibb.co/HhZ34n7/111.webp",
    image4: "https://i.ibb.co/tJWSRKD/1111.webp",
    name: "IPhone 15 Pro Black Titanium",
    price: 35000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },

  {
    image1: " https://i.ibb.co/ydyJgbc/11111.webp",
    image2: "https://i.ibb.co/fNyrgfV/12.webp",
    image3: "https://i.ibb.co/PxFxRcv/13.webp",
    image4: "https://i.ibb.co/j6WSjbH/14.webp",
    image: "https://i.ibb.co/gZPHspj/i-Phone15-Pro-Blue-Titanium.png",
    image: "https://i.ibb.co/d4QGWKX/i-Phone15-Pro-Max-Blue-Titanium.png",
    name: "IPhone 15 Pro Max Blue Titanium",
    price: 32000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },
  {
    image1: " https://i.ibb.co/FXZGY0r/16.webp",
    image2: "https://i.ibb.co/w7NFf21/15.webp",
    image3: "https://i.ibb.co/fFSGzpM/17.webp",
    image4: "https://i.ibb.co/1X6yrDG/18.webp",
    image: "https://i.ibb.co/nrmMKQw/i-Phone15-Pro-Max-White-Titanium.png",
    name: "IPhone 15 Pro Max White Titanium",
    price: 29000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },
  {
    image: "https://i.ibb.co/h2ZtxQz/i-Phone15-Pro-Black-Titanium.png",
    image1:
      " https://i.ibb.co/47gx4vX/vn-iphone-15-pro-black-titanium-pdp-image-position-2-design.webp",
    image2: " //i.ibb.co/W0JG2c2/11.webp",
    image3: "https://i.ibb.co/HhZ34n7/111.webp",
    image4: "https://i.ibb.co/tJWSRKD/1111.webp",
    image: "https://i.ibb.co/4KZrVCr/i-Phone15-Pro-Black-Titanium.png",
    name: "IPhone 15 Pro Max Black Titanium",
    price: 33000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },

  {
    image1: " https://i.ibb.co/WPrVK0s/9.jpg",
    image2: "https://i.ibb.co/vhDWSm0/10.jpg",
    image3: "https://i.ibb.co/yPDMqbK/11.jpg",
    image4: "https://i.ibb.co/9rS0qhX/12.jpg",
    image: "https://i.ibb.co/xLPY11Y/i-Phone14-Blue.png",
    name: "IPhone 14 Blue",
    price: 28000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },

  {
    image1: "https://i.ibb.co/yFw2rk7/72.jpg",
    image2: "https://i.ibb.co/yFw2rk7/72.jpg",
    image3: "https://i.ibb.co/7kJtSnB/13.jpg",
    image4: "https://i.ibb.co/SrZ0nDK/31.jpg",
    image: "https://i.ibb.co/jTG6ZPm/i-Phone14-Purple.png",
    name: "IPhone 14 Purple",
    price: 29000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },

  {
    image1: "  https://i.ibb.co/QQm8vC4/29.jpg",
    image2: "https://i.ibb.co/1vwRwpV/30.jpg",
    image3: "https://i.ibb.co/mGW9LYt/31.jpg",
    image4: "https://i.ibb.co/QQm8vC4/29.jpg",
    image: "https://i.ibb.co/qmhQjzz/i-Phone14-Yellow.png",
    name: "IPhone 14 Yellow",
    price: 27000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },

  {
    image1: "  https://i.ibb.co/WyWBzB1/36.jpg",
    image2: "https://i.ibb.co/RNx6k9Z/37.jpg",
    image3: "https://i.ibb.co/BTCYcbK/38.jpg",
    image4: "https://i.ibb.co/4smmyF3/39.jpg",
    image: "https://i.ibb.co/VVrTcNh/i-Phone14-Midnight.png",
    name: "IPhone 14 Midnight",
    price: 33000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },

  {
    image1: "  https://i.ibb.co/gVfqdZM/40.jpg",
    image2: "https://i.ibb.co/dmQrkx5/41.jpg",
    image3: "https://i.ibb.co/2ZyNnY7/42.jpg",
    image4: "  https://i.ibb.co/gVfqdZM/40.jpg",
    image: "https://i.ibb.co/mcmNd2S/i-Phone13-Starlight.png",
    name: "IPhone 14 Starlight",
    price: 26000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },
  {
    image1: " https://i.ibb.co/WPrVK0s/9.jpg",
    image2: "https://i.ibb.co/vhDWSm0/10.jpg",
    image3: "https://i.ibb.co/yPDMqbK/11.jpg",
    image4: "https://i.ibb.co/9rS0qhX/12.jpg",
    image: "https://i.ibb.co/xLPY11Y/i-Phone14-Blue.png",
    name: "IPhone 14 Plus Blue",
    price: 34000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },
  {
    image1: "  https://i.ibb.co/WyWBzB1/36.jpg",
    image2: "https://i.ibb.co/RNx6k9Z/37.jpg",
    image3: "https://i.ibb.co/BTCYcbK/38.jpg",
    image4: "https://i.ibb.co/4smmyF3/39.jpg",
    image: "https://i.ibb.co/VVrTcNh/i-Phone13-Midnight.png",
    name: "IPhone 14 Plus Midnight",
    price: 32000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },
  {
    image1: "https://i.ibb.co/yFw2rk7/72.jpg",
    image2: "https://i.ibb.co/yFw2rk7/72.jpg",
    image3: "https://i.ibb.co/7kJtSnB/13.jpg",
    image4: "https://i.ibb.co/SrZ0nDK/31.jpg",
    image: "https://i.ibb.co/3p37w2K/i-Phone14-Plus-Purple.png",
    name: "IPhone 14 Plus Purple",
    price: 31000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },
  {
    image1: "  https://i.ibb.co/QQm8vC4/29.jpg",
    image2: "https://i.ibb.co/1vwRwpV/30.jpg",
    image3: "https://i.ibb.co/mGW9LYt/31.jpg",
    image4: "https://i.ibb.co/QQm8vC4/29.jpg",
    image: "https://i.ibb.co/tBxkYbv/i-Phone14-Plus-Yellow.png",
    name: "IPhone 14 Plus Yellow",
    price: 29000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },
  {
    image1: "  https://i.ibb.co/gVfqdZM/40.jpg",
    image2: "https://i.ibb.co/dmQrkx5/41.jpg",
    image3: "https://i.ibb.co/2ZyNnY7/42.jpg",
    image4: "  https://i.ibb.co/gVfqdZM/40.jpg",
    image: "https://i.ibb.co/mcmNd2S/i-Phone13-Starlight.png",
    name: "IPhone 13 Blue",
    price: 26000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },

  {
    image1: " https://i.ibb.co/JKGkRS9/25.jpg",
    image2: "https://i.ibb.co/619ygkv/26.jpg",
    image3: "https://i.ibb.co/Fm6Qbv6/27.jpg",
    image4: "https://i.ibb.co/D4YQWrg/28.jpg",
    image: "https://i.ibb.co/cb1b4Tn/i-Phone13-Green.png",
    name: "IPhone 13 Green",
    price: 27000,
    stock: 1,
    discount: 0.25,
    category: "IPhone",
    desc1:
      "Experience the pinnacle of mobile technology with the latest iPhone. Powered by cutting-edge A-series chips, including the powerful A15 Bionic, it delivers unparalleled performance and efficiency. The sleek design, advanced camera system, and stunning Super Retina display redefine what's possible in a smartphone. This iPhone is not just a device; it's a seamless blend of innovation and elegance, offering a user experience like never before.",

    desc2:
      "Pushing the boundaries of mobile computing, the iPhone boasts impressive features such as advanced camera capabilities, AI-driven enhancements, and seamless integration with the expansive App Store. With the latest Neural Engine, enjoy lightning-fast processing, intelligent photography, and immersive augmented reality experiences. Whether you're a professional or a tech enthusiast, the iPhone sets new standards for performance, design, and user satisfaction.",
  },
  {
    image1: "https://i.ibb.co/x5sxsst/54.jpg",
    image2: "https://i.ibb.co/ykXrRjb/55.jpg",
    image3: "https://i.ibb.co/x5sxsst/54.jpg",
    image4: "https://i.ibb.co/ykXrRjb/55.jpg",
    image: "https://i.ibb.co/RQ33JRx/apple-Watch-S8-GPS45mm.png",
    name: "Apple Watch S8 GPS 45mm",
    price: 20000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/M75LT4R/83.jpg",
    image2: "https://i.ibb.co/61nJPgn/00.jpg",
    image3: "https://i.ibb.co/M75LT4R/83.jpg",
    image4: "https://i.ibb.co/61nJPgn/00.jpg",
    image: "https://i.ibb.co/RbHQ9Lv/apple-Watch-S8-LTE41mm.png",
    name: "Apple Watch S8 LTE 41mm",
    price: 10000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/hyfMQFf/14.jpg",
    image2: "https://i.ibb.co/bRhcVCY/15.jpg",
    image3: "https://i.ibb.co/hyfMQFf/14.jpg",
    image4: "https://i.ibb.co/bRhcVCY/15.jpg",
    image: "https://i.ibb.co/2Y3m1S1/apple-Watch-S9-GPS41mm.png",
    name: "Apple Watch S9 GPS 41mm",
    price: 9000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/7jLcFTS/34.jpg",
    image2: "https://i.ibb.co/0F2Tv97/35.jpg",
    image3: "https://i.ibb.co/7jLcFTS/34.jpg",
    image4: "https://i.ibb.co/0F2Tv97/35.jpg",
    image: "https://i.ibb.co/TmLT1fy/apple-Watch-S9-GPS45mm.png",
    name: "Apple Watch S9 GPS 45mm",
    price: 6000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/SyPn5y3/45.jpg",
    image2: "https://i.ibb.co/3pCQgm7/64.jpg",
    image3: "https://i.ibb.co/SyPn5y3/45.jpg",
    image4: "https://i.ibb.co/3pCQgm7/64.jpg",
    image: "https://i.ibb.co/MRVFFvW/apple-Watch-S9-LTE45mm.png",
    name: "Apple Watch S9 LTE 45mm",
    price: 23000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/8x7Qzss/88.jpg",
    image2: "https://i.ibb.co/V3dmcPB/99.jpg",
    image3: "https://i.ibb.co/8x7Qzss/88.jpg",
    image4: "https://i.ibb.co/V3dmcPB/99.jpg",
    image: "https://i.ibb.co/z2PbFN4/apple-Watch-SE2022-LTE44mm.png",
    name: "Apple Watch SE 2022 LTE 44mm",
    price: 22000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/NTPSTG1/66.jpg",
    image2: "https://i.ibb.co/ZzkSbsQ/77.jpg",
    image3: "https://i.ibb.co/NTPSTG1/66.jpg",
    image4: "https://i.ibb.co/ZzkSbsQ/77.jpg",
    image: "https://i.ibb.co/bzbLHdm/apple-Watch-SE2023-LTE40mm.png",
    name: "Apple Watch SE 2023 LTE 40mm",
    price: 25000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/C2n9J7C/44.jpg",
    image2: "https://i.ibb.co/H28YKpK/55.jpg",
    image3: "https://i.ibb.co/C2n9J7C/44.jpg",
    image4: "https://i.ibb.co/H28YKpK/55.jpg",
    image: "https://i.ibb.co/XJqfxgq/apple-Watch-SE202240mm.png",
    name: "Apple Watch SE 2022 40mm",
    price: 28000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/GtwRFTs/4.jpg",
    image2: "https://i.ibb.co/ZSM95Dg/5.jpg",
    image3: "https://i.ibb.co/GtwRFTs/4.jpg",
    image4: "https://i.ibb.co/ZSM95Dg/5.jpg",
    image: "https://i.ibb.co/3Nr2ncP/apple-Watch-SE202244mm.png",
    name: "Apple Watch SE 2022 44mm",
    price: 30000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/9ZxDvtf/22.jpg",
    image2: "https://i.ibb.co/RC93xyh/23.jpg",
    image3: "https://i.ibb.co/9ZxDvtf/22.jpg",
    image4: "https://i.ibb.co/RC93xyh/23.jpg",
    image: "https://i.ibb.co/FwJvL9W/apple-Watch-Ultra2-LTE49mm.png",
    name: "Apple Watch Ultra 2 LTE 49mm",
    price: 29000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/8DHXFzP/2.jpg",
    image2: "https://i.ibb.co/t8SBJpP/3.jpg",
    image3: "https://i.ibb.co/8DHXFzP/2.jpg",
    image4: "https://i.ibb.co/t8SBJpP/3.jpg",
    image: "https://i.ibb.co/nwGQwS1/apple-Watch-Ultra-LTE49mm.png",
    name: "Apple Watch Ultra LTE 49mm",
    price: 28000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/JyY9gpy/52.jpg",
    image2: "https://i.ibb.co/WFx9X0F/53.jpg",
    image3: "https://i.ibb.co/JyY9gpy/52.jpg",
    image4: "https://i.ibb.co/WFx9X0F/53.jpg",
    image: "https://i.ibb.co/k9QcF5w/apple-Watch-Ultra-LTEYL49mm.png",
    name: "Apple Watch Ultra LTE Yellow 49mm",
    price: 27000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/HBjd76N/89.jpg",
    image2: "https://i.ibb.co/X2tJgtY/98.jpg",
    image3: "https://i.ibb.co/HBjd76N/89.jpg",
    image4: "https://i.ibb.co/X2tJgtY/98.jpg",
    image: "https://i.ibb.co/kxxJrcj/apple-Watch-S8-GPS41mm.png",
    name: "Apple Watch S8 GPS 41mm",
    price: 26000,
    stock: 1,
    discount: 0,
    category: "Apple Watch",
    desc1:
      "Introducing the next evolution in wearable technology-the Apple Watch. More than just a timepiece, it's your personal fitness coach, health companion, and a stylish accessory rolled into one. Packed with advanced sensors, the Apple Watch monitors your heart rate, tracks your workouts, and helps you stay connected on the go. With a sleek design and a range of customizable bands, it's the perfect blend of fashion and functionality, making it an essential part of your daily life.",

    desc2:
      "Stay in control and connected with the Apple Watch. Equipped with a powerful S-series chip, it ensures swift performance and smooth navigation through apps. From receiving calls and messages to managing your fitness goals, this smartwatch does it all. The ECG app, Fall Detection, and an ever-expanding array of apps from the App Store make it a versatile companion for a healthier, more connected lifestyle. Elevate your wristwear with the Apple Watch-where innovation meets style.",
  },
  {
    image1: "https://i.ibb.co/VSMFGgD/6.jpg",
    image2: "https://i.ibb.co/rHyXjdS/7.jpg",
    image3: "https://i.ibb.co/M99Ck7P/8.jpg",
    image4: "https://i.ibb.co/VSMFGgD/6.jpg",
    image: "https://i.ibb.co/dpxvvDw/Mac-Book-Air13inch-M120207-core-GPU.png",
    name: "MacBook Air 13 inch M1 2021",
    price: 30000,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  },
  {
    image1: "https://i.ibb.co/QD74rdV/65.jpg",
    image2: "https://i.ibb.co/xsKtDmf/78.jpg",
    image3: "https://i.ibb.co/0jnNLLr/43.jpg",
    image4: "https://i.ibb.co/QD74rdV/65.jpg",
    image: "https://i.ibb.co/LdKQ2XY/Mac-Book-Air13inch-M220228-core-GPU.png",
    name: "MacBook Air 13 inch M2 2022 8GB",
    price: 33000,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  },
  {
    image1: "https://i.ibb.co/mqCKn4Q/41.jpg",
    image2: "https://i.ibb.co/xF9Qjjq/69.jpg",
    image3: "https://i.ibb.co/7z54G6H/71.jpg",
    image4: "https://i.ibb.co/mqCKn4Q/41.jpg",
    image: "https://i.ibb.co/FgL6pQ1/Mac-Book-Air13inch-M2202210-core-GPU.png",
    name: "MacBook Air 13 inch M2 2022 10GB",
    price: 35000,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  },
  {
    image1: "https://i.ibb.co/mDNrCCj/85.jpg",
    image2: "https://i.ibb.co/G7k9Hn7/97.jpg",
    image3: "https://i.ibb.co/0CMPG9X/74.jpg",
    image4: "https://i.ibb.co/mDNrCCj/85.jpg",
    image: "https://i.ibb.co/bK6z2h4/Mac-Book-Air15inch-M2202310-core-GPU.png",
    name: "MacBook Air 15 inch M2 2022 10GB",
    price: 40000,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  },
  {
    image1: "https://i.ibb.co/TMSmmpN/42.jpg",
    image2: "https://i.ibb.co/XtWRCfG/52.jpg",
    image3: "https://i.ibb.co/hFBhCQb/73.jpg",
    image4: "https://i.ibb.co/TMSmmpN/42.jpg",
    image:
      "https://i.ibb.co/BzjgdJf/Mac-Book-Air15inch-M22023256-GB10-core-GPU.png",
    name: "MacBook Air 15 inch M2 2022 16GB",
    price: 43000,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  },
  {
    image1: "https://i.ibb.co/mRYjPvQ/62.jpg",
    image2: "https://i.ibb.co/z8G994r/61.jpg",
    image3: "https://i.ibb.co/0XnC35b/63.jpg",
    image4: "https://i.ibb.co/mRYjPvQ/62.jpg",
    image:
      "https://i.ibb.co/1rJKn8D/Mac-Book-Air15inch-M220232512-GB10-core-GPU.png",
    name: "MacBook Air 15 inch M2 2022 512GB",
    price: 47000,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  },
  {
    image1: "https://i.ibb.co/nML5J5q/49.jpg",
    image2: "https://i.ibb.co/xFS0Hhx/50.jpg",
    image3: "https://i.ibb.co/hMsGSJc/51.jpg",
    image4: "https://i.ibb.co/nML5J5q/49.jpg",
    image:
      "https://i.ibb.co/jgYCNXb/Mac-Book-Pro13inch-M220228-GB10-core-GPU.png",
    name: "MacBook Pro 13 inch M2 2022 8GB",
    price: 14990,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  },
  {
    image1: "https://i.ibb.co/yqgnRQz/46.jpg",
    image2: "https://i.ibb.co/3hnTS1T/48.jpg",
    image3: "https://i.ibb.co/9pS3QHd/47.jpg",
    image4: "https://i.ibb.co/yqgnRQz/46.jpg",
    image:
      "https://i.ibb.co/bmPrsGk/Mac-Book-Pro13inch-M2202216-GB10-core-GPU.png",
    name: "MacBook Pro 13 inch M2 2022 16GB",
    price: 15990,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  },
  {
    image1: "https://i.ibb.co/kQKPZtY/45.jpg",
    image2: "https://i.ibb.co/r5tfjJS/43.jpg",
    image3: "https://i.ibb.co/0BbxZHK/44.jpg",
    image4: "https://i.ibb.co/kQKPZtY/45.jpg",
    image:
      "https://i.ibb.co/TPHX4TF/Mac-Book-Pro16inch-M2-Pro20231-TB19-core-GPU.png",
    name: "MacBook Pro 16 inch M2 Pro 2023 1TB",
    price: 19990,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  },
  {
    image1: "https://i.ibb.co/kQKPZtY/45.jpg",
    image2: "https://i.ibb.co/r5tfjJS/43.jpg",
    image3: "https://i.ibb.co/0BbxZHK/44.jpg",
    image4: "https://i.ibb.co/kQKPZtY/45.jpg",
    image:
      "https://i.ibb.co/z87kccp/Mac-Book-Pro16inch-M2-Pro2023512-GB19-core-GPU.png",
    name: "MacBook Pro 16 inch M2 Pro 2023 512GB",
    price: 21990,
    stock: 1,
    discount: 0,
    category: "MacBook",
    desc2:
      "Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.",
    desc1:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
    
  },
];
