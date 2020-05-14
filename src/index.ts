export const convert = <T extends object>(cssobject: T): string =>
  (Object.keys(cssobject) as Array<keyof T>)
    .map((key) => {
      const formattedKey = normalizeProperty(key.toString());
      const formattedValue = formatValue(cssobject[key], formattedKey);

      return `${formattedKey}: ${formattedValue};`;
    })
    .join("\n");

const formatValue = (value: unknown, property: string) => {
  if (typeof value === "string") {
    return value;
  } else if (value === 0 || property === "font-weight") {
    return value;
  } else {
    return value + "px";
  }
};

const normalizeProperty = (property: string): string => {
  return property.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
};
