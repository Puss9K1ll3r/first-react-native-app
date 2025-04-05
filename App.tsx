import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useState } from 'react';
import MainStack from './navigation';

const fonts = () => Font.loadAsync({
  'r-light': require('./assets/fonts/Roboto-Light.ttf'),
  'r-reg': require('./assets/fonts/Roboto-Regular.ttf'),
  'r-bold': require('./assets/fonts/Roboto-SemiBold.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <MainStack />
    );
  } else {
    return (
      <AppLoading 
        startAsync={fonts} 
        onFinish={() => setFont(true)} 
        onError={console.warn} 
      />
    );
  }
}