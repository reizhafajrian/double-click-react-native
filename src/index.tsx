import React, { useEffect } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
export interface data {
  singleTap: Function;
  doubleTap: Function;
  children: JSX.Element;
  delay: Number;
  style: StyleProp<ViewStyle>;
}
export default function DoubleClick(data: data) {
  let delayTime = data.delay ? data.delay : 300;
  let firstPress = true;
  let lastTime: number = new Date().getTime();
  let timer: number = 0;
  const singlePress = (now: number) => {
    firstPress = false;
    timer = setTimeout(() => {
      data.singleTap ? data.singleTap() : null;
      firstPress = true;
    }, delayTime);
    lastTime = now;
  };
  const doublePress = (now: number) => {

    if (now - lastTime < delayTime) {
      timer && clearTimeout(timer);
      data.doubleTap ? data.doubleTap() : null;
      firstPress = true;
    }
  };
  const _onPress = () => {
    let now: number = new Date().getTime();
    firstPress ? singlePress(now) : doublePress(now);
  };
  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  }, [timer]);
  return (
    <TouchableOpacity onPress={_onPress} style={data.style}>
      {data.children}
    </TouchableOpacity>
  );
}
