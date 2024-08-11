import localFont from "next/font/local";
import { Inter } from 'next/font/google';

type Weight = "Light" | "Bold" | "Medium" | "Black";

// export function generateFont(weight: Weight) {
//   const font = localFont({
//     src: `./../../app/satoshi/Satoshi-${weight}.otf`,
//     display: "swap",
//   });
//   return font;
// }

export const satoshiBold = localFont({
  src: "./../../app/satoshi/Satoshi-Bold.otf",
  display: "swap",
});

// export const satoshiBold = generateFont("Bold");

export const satoshiLight = localFont({
  src: "./../../app/satoshi/Satoshi-Light.otf",
  display: "swap",
});

export const satoshiBlack = localFont({
  src: "./../../app/satoshi/Satoshi-Black.otf",
  display: "swap",
});

export const satoshiRegular = localFont({
  src: "./../../app/satoshi/Satoshi-Regular.otf",
  display: "swap",
});

export const inter = Inter({ subsets: ['latin'] });
