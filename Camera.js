import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  const handleCameraTypePress = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleTakePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setImage(photo.uri);
    }
  };

  const handleChooseImagePress = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      console.error('Error picking image from library:', error);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.cameraPreview} type={cameraType} ref={cameraRef}>
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCameraTypePress}
          >
            <Text style={styles.buttonText}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
            <Text style={styles.buttonText}>Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleChooseImagePress}
          >
            <Text style={styles.buttonText}>Choose from Library</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraPreview: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default CameraScreen;
