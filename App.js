import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MainStack from './navigate'

const loadFonts = async () => {
  await Font.loadAsync({ 
    'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'), 
    'mt-light': require('./assets/fonts/Montserrat-Light.ttf') 
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false); 

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainStack />
  ); 
}

const styles = StyleSheet.create({
});