import { StyleSheet, Image, Button } from 'react-native';
import { Text, View} from '@/components/Themed';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default function TabOneScreen() {
  const openShareDialogAsync = async () => {
    // Download the image to share
    const { uri } = await FileSystem.downloadAsync(
      'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      FileSystem.documentDirectory + 'small.jpg'
    );
    console.log('Finished downloading to ', uri);

    try {
      console.log('Finished downloading to ', uri);
      await Sharing.shareAsync(uri, {
        dialogTitle: "Share this awesome photo",
        mimeType: 'image/jpeg',
        UTI: 'public.jpeg'
      })
    } catch (e) {
      console.error('Error', e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Image source={{ uri: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"}} style={{ width: 400, height: 400}} />
      <Button 
        title='Share'
        onPress={openShareDialogAsync}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
