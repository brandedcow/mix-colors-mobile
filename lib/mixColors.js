import decToHex from "./decToHex.js";
import parseHexCode from "./parseHexColor";

export default function mixColors(...colors) {
  if (colors.length > 1) {
    return colors.reduce(mixTwoWeighted);
  } else if (colors.length === 1) {
    return colors[0];
  }
  return null;
}

function mixTwoWeighted(color1, color2) {
  const { hex: hex1, weight: weight1 } = color1;
  const { hex: hex2, weight: weight2 } = color2;
  const totalWeight = weight1 + weight2;

  const [dec1R, dec1G, dec1B] = parseHexCode(hex1).map(
    (value) => value * weight1
  );
  const [dec2R, dec2G, dec2B] = parseHexCode(hex2).map(
    (value) => value * weight2
  );

  const r = decToHex(Math.floor((dec1R + dec2R) / totalWeight)).padStart(
    2,
    "0"
  );
  const g = decToHex(Math.floor((dec1G + dec2G) / totalWeight)).padStart(
    2,
    "0"
  );
  const b = decToHex(Math.floor((dec1B + dec2B) / totalWeight)).padStart(
    2,
    "0"
  );

  return {
    hex: `${r}${g}${b}`,
    weight: totalWeight,
  };
}