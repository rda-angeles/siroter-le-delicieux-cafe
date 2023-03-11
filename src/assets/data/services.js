import WifiIcon from "@mui/icons-material/Wifi";
import CoffeeIcon from "@mui/icons-material/Coffee";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import CupCoffee from "../cup-coffee.png";
import CoffeeBean from "../coffee-bean.png";
import CoffeeMachine from "../coffee-machine.png";

export const services = [
  {
    id: 1,
    service: "Wifi",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur amet totam minima? Vitae, nemo quo!",
    icon: (
      <>
        <WifiIcon sx={{ fontSize: "1.5rem", color: "#C5A880" }} />
      </>
    ),
  },
  {
    id: 2,
    service: "Beverages",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur amet totam minima? Vitae, nemo quo!",
    icon: (
      <>
        <CoffeeIcon sx={{ fontSize: "1.5rem", color: "#C5A880" }} />
      </>
    ),
  },
  {
    id: 3,
    service: "Pastries",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur amet totam minima? Vitae, nemo quo!",
    icon: (
      <>
        <BakeryDiningIcon sx={{ fontSize: "1.5rem", color: "#C5A880" }} />
      </>
    ),
  },
  {
    id: 4,
    service: "Food",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur amet totam minima? Vitae, nemo quo!",
    icon: (
      <>
        <LocalDiningIcon sx={{ fontSize: "1.5rem", color: "#C5A880" }} />
      </>
    ),
  },
];

export const servicesQualities = [
  {
    id: 1,
    quality: "Coffee",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, at!",
    icon: CupCoffee,
  },
  {
    id: 2,
    quality: "Machine",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, at!",
    icon: CoffeeMachine,
  },
  {
    id: 3,
    quality: "Coffee Bean",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, at!",
    icon: CoffeeBean,
  },
];
