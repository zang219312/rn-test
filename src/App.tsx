/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  TouchableOpacity,
} from 'react-native';

/* import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; */

import Request from './hooks/useRequest';

const Alert = NativeModules.AlertModule;

function App(): JSX.Element {
  const isDark = useColorScheme() === 'dark';
  console.log('isDark: ', isDark);

  const _toast = () => {
    Alert.toast('调用原生toast方式');
  };

  const _alert = () => {
    Alert.alert('标题', '调用了原生的Alert方法');
  };

  return (
    <SafeAreaView style={[styles.flexCenter, styles.bgColor]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}></StatusBar>
      <View>
        <TouchableOpacity onPress={_toast} style={styles.toast}>
          <Text style={styles.text}>原生toast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_alert}
          style={[styles.toast, {marginTop: 30}]}>
          <Text style={styles.text}>原生alert</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  highlight: {
    fontWeight: '700',
    color: '#fc0',
  },
  text: {
    fontSize: 14,
    color: '#f00',
    textAlign: 'center',
    lineHeight: 40,
  },
  bgColor: {
    backgroundColor: '#f2f2f2',
  },
  toast: {
    width: 200,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'skyblue',
  },
});

export default App;
