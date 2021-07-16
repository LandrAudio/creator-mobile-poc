import React, { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const webRef = useRef<WebView>();

  const showModalJs = `
        var event = new CustomEvent('landr-samples-show-pricing-modal', {
            detail: { creditsRequired: 1 },
        });
        window.dispatchEvent(event);
        true;
    `;
  const noModalJs = `
        true;
    `;

  const [showModal, setShowModal] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (showModal) {
      webRef.current.injectJavaScript(showModalJs);
    } else {
      webRef.current.injectJavaScript(noModalJs);
    }
  }, [showModal]);

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Creator clicked {clickCount} times</Text>
      <Button
        title="Show Pricing modal"
        onPress={() => setShowModal(!showModal)}
      >
        Show Pricing modal
      </Button>
      <WebView
        ref={(r) => (webRef.current = r)}
        useWebKit={false}
        source={{
          uri: "https://local.landr.com:3000",
        }}
        onMessage={() => {
          setClickCount(clickCount + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topText: {
    padding: 20,
    paddingTop: 80,
    paddingBottom: 10,
    height: 120,
  },
});
