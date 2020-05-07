export const convert = (cssobject: object): string => {
  return Object.keys(cssobject)
    .map(
      (key) =>
        `${normalizeProperty(key)}: ${formatValue(
          cssobject[key],
          normalizeProperty(key)
        )};`
    )
    .join("\n");
};

const formatValue = (value: string | number, property: string) => {
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
