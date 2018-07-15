import { AsyncStorage } from 'react-native';

export const storeData = async (data) => {
  try {
    await AsyncStorage.setItem(JSON.stringify(data.key), JSON.stringify(data.value));
  } catch (error) {
    console.log(`Error to store: ${data}`);
    console.log(error);
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(JSON.stringify(key));
    if (value) {
      return value;
    }
  } catch (error) {
    console.log(`Error to retrieve: ${key}`);
    console.log(error);
    return null;
  }
};
