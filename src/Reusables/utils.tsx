export function groupByKeyValue(obj: any, customAttributes?: any) {
  const result: any = [];
  for (const key in obj) {
    try {
      const [keyIndex, keyName] = key.split(':');
      if (result[keyIndex]) {
        result[keyIndex] = { ...result[keyIndex], [keyName]: obj[key] };
      } else if (keyName) {
        result[keyIndex] = { [keyName]: obj[key] };
      }
    } catch (error) {
      return;
    }
  }
  return result
}