import React from 'react';
import { WebView } from 'react-native-webview';

export default function Webview(props) {
  return (
    <WebView
      source={{ uri: 'https://www.jhcc.co.jp/company/' }}
      style={{ marginTop: 20 }}
    />
  );
}
