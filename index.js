
import { NativeModules } from 'react-native';

const { ReactNativeAndroidScanner } = NativeModules;

export default {
    startScan: function (preference: ?number) {
        ReactNativeAndroidScanner.startScan(preference)
    },
    SCANNED_RESULT: ReactNativeAndroidScanner ? ReactNativeAndroidScanner.SCANNED_RESULT : null,
  };
