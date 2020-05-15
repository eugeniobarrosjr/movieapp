import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import { REACTOTRON_IP } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: REACTOTRON_IP,
  })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  console.tron = tron;
}
