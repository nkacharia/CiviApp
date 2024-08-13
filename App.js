// IMPORTING things we need!
// View, Text, Image, and StyleSheet are core building blocks for React Native apps.
// SafeAreaView is used to ensure the app positions content appropriately around notches and other OS interface elements.
import { View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

// EXPORTING something we build!
// Remember, UI Components are functions under the hood and they return JSX (UI). This App component returns a "SafeAreaView" with more components nested underneath.
export default function App() {
  // Feel free to edit anything inside here!

  const welcomeMessage = "Civi"

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{welcomeMessage}</Text>
      <Text style={styles.paragraph}>
        Random Message
      </Text>

    </View>
  );
}

// STYLING for our app!

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#ecf0f1', 
    padding: 8, 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  },
});
