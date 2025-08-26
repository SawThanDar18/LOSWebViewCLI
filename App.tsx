import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
  source={{ uri: 'http://dev-momfi-applicant-portal.s3-website-ap-southeast-1.amazonaws.com/login' }}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  startInLoadingState={true}
  userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
  allowsInlineMediaPlayback={true}
  allowsBackForwardNavigationGestures={true}
/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
});

export default App;
