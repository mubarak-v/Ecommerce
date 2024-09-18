import { createContext, useEffect, useReducer, useState } from "react";

const StoreContext = createContext();
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let alreadyAdded = false;
      let newcart = [];
      state.cart.forEach((item) => {
        if (item.id === action.payload.id) {
          alreadyAdded = true;
          item.quantity++;
        }
        newcart.push(item);
      });
      if (!alreadyAdded) {
        newcart.push({ ...action.payload, quantity: 1 });
      }
      return {
        cart: newcart,
      };
    }

    case "REMOVE_FROM_CART": {
      let newcart = [];
      state.cart.forEach((item) => {
        if (item.id !== action.payload) {
          newcart.push(item);
        }
      });

      return {
        cart: newcart,
      };
    }

    default:
      return state;
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [productList, setProductList] = useState([
    {
      id: 1,
      title: "iPhone 13 Pro",
      price: 999.99,
      description:
        "6.1-inch Super Retina XDR display with ProMotion, A15 Bionic chip, Pro camera system with 12MP cameras, 5G capable",
      category: "mobile",
      image: "/images/iPhone 13 Pro.png",
      rating: { rate: 4.8, count: 1520 },
      offer: 10,
    },
    {
      id: 2,
      title: "Samsung Galaxy S21 Ultra",
      price: 1199.99,
      description:
        "6.8-inch Dynamic AMOLED 2X display, Exynos 2100 chip, Quad camera system with 108MP main camera, 5G support",
      category: "mobile",
      image: "/images/Samsung Galaxy S21 Ultra.jpg",
      rating: { rate: 4.7, count: 1280 },
      offer: 10,
    },
    {
      id: 3,
      title: "Google Pixel 6 Pro",
      price: 899.99,
      description:
        "6.7-inch LTPO OLED display, Google Tensor chip, Triple camera system with 50MP main camera, 5G enabled",
      category: "mobile",
      image: "/images/Google Pixel 6 Pro.jpg",
      rating: { rate: 4.6, count: 890 },
      offer: 12,
    },
    {
      id: 4,
      title: "OnePlus 9 Pro",
      price: 969.99,
      description:
        "6.7-inch Fluid AMOLED display with 120Hz, Snapdragon 888, Quad camera system co-developed with Hasselblad, 5G ready",
      category: "mobile",
      image: "/images/OnePlus 9 Pro.jpg",
      rating: { rate: 4.5, count: 720 },
      offer: 12,
    },
    {
      id: 5,
      title: "Xiaomi Mi 11",
      price: 749.99,
      description:
        "6.81-inch AMOLED display, Snapdragon 888, Triple camera system with 108MP main camera, 5G capability",
      category: "mobile",
      image: "/images/Xiaomi Mi 11.webp",
      rating: { rate: 4.4, count: 650 },
      offer: 20,
    },
    {
      id: 6,
      title: "AirPods Pro",
      price: 249.99,
      description:
        "Active Noise Cancellation, Transparency mode, Adaptive EQ, Spatial Audio with dynamic head tracking",
      category: "mobile accessory",
      image: "/images/AirPods Pro.jpg",
      rating: { rate: 4.7, count: 2100 },
      offer: 5,
    },
    {
      id: 7,
      title: "Samsung Galaxy Buds Pro",
      price: 199.99,
      description:
        "Intelligent Active Noise Cancellation, 360 Audio, IPX7 water resistance, Bixby voice wake-up",
      category: "mobile accessory",
      image: "/images/Samsung Galaxy Buds Pro.jpg",
      rating: { rate: 4.5, count: 1450 },
      offer: 15,
    },
    {
      id: 8,
      title: "Anker PowerCore 26800 Portable Charger",
      price: 65.99,
      description:
        "26800mAh capacity, charges most phones over 6 times, 3 USB output ports, PowerIQ and VoltageBoost technology",
      category: "mobile accessory",
      image: "/images/Anker PowerCore 26800 Portable Charger.jpg",
      rating: { rate: 4.8, count: 3200 },
      offer: 12,
    },
    {
      id: 9,
      title: "PopSockets PopGrip",
      price: 14.99,
      description:
        "Expandable stand and grip, compatible with Qi wireless charging, swappable top",
      category: "mobile accessory",
      image: "/images/PopSockets PopGrip.jpg",
      rating: { rate: 4.6, count: 5500 },
      offer: 5,
    },
    {
      id: 10,
      title: "Belkin Boost Up Wireless Charging Pad",
      price: 39.99,
      description:
        "10W fast charging, Qi-certified, compatible with iPhone and Android devices, LED indicator",
      category: "mobile accessory",
      image: "/images/Belkin Boost Up Wireless Charging Pad.jpg",
      rating: { rate: 4.4, count: 980 },
      offer: 10,
    },
    {
      id: 11,
      title: "OnePlus Nord 2",
      price: 399.99,
      description:
        "6.43-inch Fluid AMOLED display, MediaTek Dimensity 1200-AI, Triple camera system with 50MP main camera, 5G support",
      category: "mobile",
      image: "/images/OnePlus Nord 2.webp",
      rating: { rate: 4.3, count: 580 },
      offer: 7,
    },
    {
      id: 12,
      title: "Motorola Edge 20 Pro",
      price: 699.99,
      description:
        "6.7-inch OLED display with 144Hz refresh rate, Snapdragon 870, Triple camera system with 108MP main camera, 5G enabled",
      category: "mobile",
      image: "/images/Motorola Edge 20 Pro.jpg",
      rating: { rate: 4.2, count: 420 },
      offer: 10,
    },
    {
      id: 13,
      title: "Sony WH-1000XM4 Wireless Headphones",
      price: 349.99,
      description:
        "Industry-leading noise cancellation, 30-hour battery life, Touch Sensor controls, Speak-to-chat technology",
      category: "mobile accessory",
      image: "/images/Sony WH-1000XM4 Wireless Headphones.jpg",
      rating: { rate: 4.8, count: 1890 },
      offer: 40,
    },
    {
      id: 14,
      title: "Otterbox Defender Series Case",
      price: 59.99,
      description:
        "Multi-layer protection, port covers, belt-clip holster, compatible with various smartphone models",
      category: "mobile accessory",
      image: "/images/Otterbox Defender Series Case.jpg",
      rating: { rate: 4.7, count: 3100 },
      offer: 2,
    },
    {
      id: 15,
      title: "Xiaomi Redmi Note 10 Pro",
      price: 279.99,
      description:
        "6.67-inch AMOLED display, Snapdragon 732G, Quad camera system with 108MP main camera, 5020mAh battery",
      category: "mobile",
      image: "/images/Xiaomi Redmi Note 10 Pro.jpg",
      rating: { rate: 4.4, count: 750 },
      offer: 15,
    },
    {
      id: 16,
      title: "Realme GT",
      price: 499.99,
      description:
        "6.43-inch Super AMOLED display, Snapdragon 888, Triple camera system with 64MP main camera, 65W SuperDart charging",
      category: "mobile",
      image: "/images/Realme GT.jpg",
      rating: { rate: 4.3, count: 380 },
      offer: 8,
    },
    {
      id: 17,
      title: "Jabra Elite 75t True Wireless Earbuds",
      price: 149.99,
      description:
        "Active Noise Cancellation, Up to 24 hours battery life with charging case, 4-microphone technology, IP55-rated",
      category: "mobile accessory",
      image: "/images/Jabra Elite 75t True Wireless Earbuds.jpg",
      rating: { rate: 4.5, count: 1670 },
      offer: 5,
    },
    {
      id: 18,
      title: "Spigen Tough Armor Case",
      price: 39.99,
      description:
        "Dual-layer protection, Air Cushion Technology, Built-in kickstand, Compatible with various smartphone models",
      category: "mobile accessory",
      image: "/images/Spigen Tough Armor Case.jpg",
      rating: { rate: 4.6, count: 2800 },
      offer: 20,
    },
    {
      id: 19,
      title: "ASUS ROG Phone 5",
      price: 999.99,
      description:
        "6.78-inch AMOLED display with 144Hz refresh rate, Snapdragon 888, Triple camera system, 6000mAh battery, Gaming-centric features",
      category: "mobile",
      image: "/images/ASUS ROG Phone 5.jpg",
      rating: { rate: 4.5, count: 620 },
      offer: 12,
    },
    {
      id: 20,
      title: "Mophie Powerstation PD",
      price: 59.99,
      description:
        "10000mAh capacity, 18W PD fast charging, USB-C and USB-A ports, Priority+ charging",
      category: "mobile accessory",
      image: "/images/Mophie Powerstation PD.jpg",
      rating: { rate: 4.4, count: 890 },
      offer: 15,
    },
    {
      id: 21,
      title: "Sony Xperia 1 III",
      price: 1299.99,
      description:
        "6.5-inch 4K OLED display, Snapdragon 888, Triple camera system with variable telephoto lens, 5G support",
      category: "mobile",
      image: "/images/Sony Xperia 1 III.jpg",
      rating: { rate: 4.3, count: 410 },
      offer: 10,
    },
    {
      id: 22,
      title: "Razer Kishi Mobile Game Controller",
      price: 99.99,
      description:
        "Universal mobile gaming controller, Low latency USB-C connection, Pass-through charging, Ergonomic design",
      category: "mobile accessory",
      image: "/images/Razer Kishi Mobile Game Controller.jpg",
      rating: { rate: 4.5, count: 720 },
      offer: 18,
    },
    {
      id: 23,
      title: "Samsung Galaxy A52",
      price: 499.99,
      description:
        "6.5-inch Super AMOLED display, Snapdragon 720G, Quad camera system with 64MP main camera, 4500mAh battery",
      category: "mobile",
      image: "/images/Samsung Galaxy A52.jpg",
      rating: { rate: 4.4, count: 950 },
      offer: 15,
    },
    {
      id: 24,
      title: "Anker Nano II 65W GaN Charger",
      price: 54.99,
      description:
        "65W output, GaN II technology for efficient charging, Compact design, Compatible with various devices",
      category: "mobile accessory",
      image: "/images/Anker Nano II 65W GaN Charger.jpg",
      rating: { rate: 4.7, count: 1350 },
      offer: 12,
    },
    {
      id: 25,
      title: "Google Pixel 5a",
      price: 449.99,
      description:
        "6.34-inch OLED display, Snapdragon 765G, Dual camera system with 12.2MP main camera, 5G capability",
      category: "mobile",
      image: "/images/Google Pixel 5a.jpg",
      rating: { rate: 4.5, count: 680 },
      offer: 8,
    },
    {
      id: 26,
      title: "Huawei P40 Pro",
      price: 799.99,
      description:
        "6.58-inch OLED display, Kirin 990 5G, Quad camera system with 50MP main camera, 4200mAh battery",
      category: "mobile",
      image: "/images/Huawei P40 Pro.jpg",
      rating: { rate: 4.4, count: 560 },
      offer: "12 ",
    },
    {
      id: 27,
      title: "Bose QuietComfort Earbuds",
      price: 279.99,
      description:
        "World-class noise cancellation, High-fidelity audio, Sweat and weather resistant, Up to 6 hours battery life",
      category: "mobile accessory",
      image: "/images/Bose QuietComfort Earbuds.jpg",
      rating: { rate: 4.6, count: 1820 },
      offer: "15 ",
    },
    {
      id: 28,
      title: "LG Velvet",
      price: 599.99,
      description:
        "6.8-inch P-OLED display, Snapdragon 765G, Triple camera system with 48MP main camera, 5G support",
      category: "mobile",
      image: "/images/LG Velvet.jpg",
      rating: { rate: 4.2, count: 430 },
      offer: "20 ",
    },
    {
      id: 29,
      title: "Moment Anamorphic Lens",
      price: 149.99,
      description:
        "1.33x anamorphic lens, compatible with various smartphone models, creates widescreen, cinematic footage",
      category: "mobile accessory",
      image: "/images/Moment Anamorphic Lens.jpg",
      rating: { rate: 4.7, count: 890 },
      offer: "10 ",
    },
    {
      id: 30,
      title: "Nokia 8.3 5G",
      price: 699.99,
      description:
        "6.81-inch PureDisplay, Snapdragon 765G, Quad camera system with ZEISS optics, 5G ready",
      category: "mobile",
      image: "/images/Nokia 8.3 5G.jpg",
      rating: { rate: 4.3, count: 520 },
      offer: 18,
    },
    {
      id: 31,
      title: "Anker PowerWave Stand",
      price: 19.99,
      description:
        "10W fast-charging, compatible with iPhone and Android, case friendly, compact design",
      category: "mobile accessory",
      image: "/images/Anker PowerWave Stand.jpg",
      rating: { rate: 4.5, count: 2300 },
      offer: 5,
    },
    {
      id: 32,
      title: "Oppo Find X3 Pro",
      price: 1099.99,
      description:
        "6.7-inch AMOLED display with 120Hz, Snapdragon 888, Quad camera system with 50MP main camera, 5G support",
      category: "mobile",
      image: "/images/Oppo Find X3 Pro.jpg",
      rating: { rate: 4.4, count: 680 },
      offer: 8,
    },
    {
      id: 33,
      title: "DJI OM 4 Smartphone Gimbal",
      price: 149.99,
      description:
        "3-axis stabilization, magnetic phone attachment, ActiveTrack 3.0, foldable design",
      category: "mobile accessory",
      image: "/images/DJI OM 4 Smartphone Gimbal.jpg",
      rating: { rate: 4.6, count: 1100 },
      offer: 15,
    },
    {
      id: 34,
      title: "Vivo X60 Pro",
      price: 749.99,
      description:
        "6.56-inch AMOLED display, Exynos 1080, Triple camera system with ZEISS optics, 5G enabled",
      category: "mobile",
      image: "/images/Vivo X60 Pro.jpg",
      rating: { rate: 4.3, count: 490 },
      offer: 10,
    },
    {
      id: 35,
      title: "Nomad Base Station Pro",
      price: 229.99,
      description:
        "Wireless charging for up to 3 devices, premium leather and aluminum design, 18 coil matrix",
      category: "mobile accessory",
      image: "/images/Nomad Base Station Pro.jpg",
      rating: { rate: 4.5, count: 780 },
      offer: 12,
    },
    {
      id: 36,
      title: "Poco F3",
      price: 349.99,
      description:
        "6.67-inch AMOLED display with 120Hz, Snapdragon 870, Triple camera system with 48MP main camera, 5G support",
      category: "mobile",
      image: "/images/Poco F3.jpg",
      rating: { rate: 4.4, count: 1200 },
      offer: 15,
    },
    {
      id: 37,
      title: "Anker Soundcore Liberty Air 2 Pro",
      price: 129.99,
      description:
        "Targeted Active Noise Cancelling, PureNote driver technology, Up to 26 hours playtime, Wireless charging",
      category: "mobile accessory",
      image: "/images/Anker Soundcore Liberty Air 2 Pro.jpg",
      rating: { rate: 4.5, count: 1650 },
      offer: 20,
    },
    {
      id: 38,
      title: "TCL 20 Pro 5G",
      price: 499.99,
      description:
        "6.67-inch AMOLED display, Snapdragon 750G, Quad camera system with 48MP main camera, 5G capability",
      category: "mobile",
      image: "/images/TCL 20 Pro 5G.jpg",
      rating: { rate: 4.2, count: 380 },
      offer: 10,
    },
    {
      id: 39,
      title: "Twelve South BookBook Vol. 2",
      price: 69.99,
      description:
        "Genuine leather wallet case, holds up to 4 cards, removable shell, compatible with MagSafe",
      category: "mobile accessory",
      image: "/images/Twelve South BookBook Vol. 2.jpg",
      rating: { rate: 4.7, count: 920 },
      offer: 15,
    },
    {
      id: 40,
      title: "Motorola Moto G Power (2021)",
      price: 249.99,
      description:
        "6.6-inch HD+ display, Snapdragon 662, Triple camera system with 48MP main camera, 5000mAh battery",
      category: "mobile",
      image: "/images/Motorola Moto G Power (2021).jpg",
      rating: { rate: 4.3, count: 1500 },
      offer: 18,
    },
    {
      id: 41,
      title: "iOttie Easy One Touch 5",
      price: 24.99,
      description:
        "Universal car mount, one-handed operation, adjustable viewing, strong suction cup",
      category: "mobile accessory",
      image: "/images/iOttie Easy One Touch 5.jpg",
      rating: { rate: 4.6, count: 3200 },
      offer: 22,
    },
    {
      id: 42,
      title: "ZTE Axon 30 Ultra",
      price: 749.99,
      description:
        "6.67-inch AMOLED display with 144Hz, Snapdragon 888, Quad camera system with three 64MP cameras, 5G support",
      category: "mobile",
      image: "/images/ZTE Axon 30 Ultra.jpg",
      rating: { rate: 4.4, count: 410 },
      offer: 10,
    },
    {
      id: 43,
      title: "Logitech K480 Bluetooth Keyboard",
      price: 49.99,
      description:
        "Multi-device keyboard, integrated cradle, Easy-Switch dial for 3 devices, 2-year battery life",
      category: "mobile accessory",
      image: "/images/Logitech K480 Bluetooth Keyboard.jpg",
      rating: { rate: 4.5, count: 2100 },
      offer: 15,
    },
    {
      id: 44,
      title: "Sony Xperia 5 III",
      price: 999.99,
      description:
        "6.1-inch OLED display with 120Hz, Snapdragon 888, Triple camera system with ZEISS optics, 5G enabled",
      category: "mobile",
      image: "/images/Sony Xperia 5 III.jpg",
      rating: { rate: 4.3, count: 350 },
      offer: 8,
    },
    {
      id: 45,
      title: "Mophie 3-in-1 Wireless Charging Pad",
      price: 139.99,
      description:
        "Charges iPhone, AirPods, and Apple Watch simultaneously, Qi-certified, 7.5W fast wireless charging",
      category: "mobile accessory",
      image: "/images/Mophie 3-in-1 Wireless Charging Pad].jpg",
      rating: { rate: 4.6, count: 870 },
      offer: 20,
    },
    {
      id: 46,
      title: "Realme 8 Pro",
      price: 299.99,
      description:
        "6.4-inch Super AMOLED display, Snapdragon 720G, Quad camera system with 108MP main camera, 50W SuperDart charging",
      category: "mobile",
      image: "/images/Realme 8 Pro.jpg",
      rating: { rate: 4.4, count: 980 },
      offer: 12,
    },
    {
      id: 47,
      title: "Tile Pro (2020)",
      price: 34.99,
      description:
        "Bluetooth tracker, 400ft range, loudest ring, water-resistant, 1-year replaceable battery",
      category: "mobile accessory",
      image: "/images/Tile Pro (2020).jpg",
      rating: { rate: 4.7, count: 5600 },
      offer: 15,
    },
    {
      id: 48,
      title: "Asus Zenfone 8",
      price: 699.99,
      description:
        "5.9-inch AMOLED display with 120Hz, Snapdragon 888, Dual camera system with 64MP main camera, 5G support",
      category: "mobile",
      image: "/images/Asus Zenfone 8.jpg",
      rating: { rate: 4.3, count: 420 },
      offer: 10,
    },
    {
      id: 49,
      title: "Anker PowerCore III Elite 25600 87W",
      price: 159.99,
      description:
        "25600mAh capacity, 87W USB-C PD output, charges laptops, tablets, and phones, trickle-charging mode",
      category: "mobile accessory",
      image: "/images/Anker PowerCore III Elite 25600 87W.jpg",
      rating: { rate: 4.8, count: 1100 },
      offer: 15,
    },
    {
      id: 50,
      title: "Xiaomi Poco X3 NFC",
      price: 249.99,
      description:
        "6.67-inch IPS LCD display with 120Hz, Snapdragon 732G, Quad camera system with 64MP main camera, 5160mAh battery",
      category: "mobile",
      image: "/images/Xiaomi Poco X3 NFC.jpg",
      rating: { rate: 4.5, count: 2200 },
      offer: 18,
    },
  ]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <StoreContext.Provider value={{ cart: state.cart, dispatch, productList }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
