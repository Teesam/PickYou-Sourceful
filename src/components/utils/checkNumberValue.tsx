export const isConvertibleToNumber = (value: string): boolean => {

    const numericValue = Number(value);
  
    return !isNaN(numericValue);
}