import React, { useEffect, useContext } from 'react';
import { Text, View, Image, ImageStyle } from 'react-native';
import { MainButton } from '../../components/shared/MainButton';
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { generateId } from '../../../utils/generateId';
import { SurveyContext } from '../../../context/SurveyContext';
import { UseSaveData } from '../../hooks/UseSaveData';
import RNFS from 'react-native-fs';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { setSurveyId } = useContext(SurveyContext);
  const { postNewSurvey } = UseSaveData();

  let now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const fileName = `${year}-${month}-${day}`;

  const directoryPath = RNFS.DocumentDirectoryPath;

  const styles = {
    logo: {
      width: 200,
      height: 200,
      resizeMode: 'contain' as 'contain', // Asegúrate de que sea uno de los valores válidos
      alignSelf: 'center' as const, // Usar 'as const' para asegurar que sea del tipo correcto
      marginBottom: 10,
    } as ImageStyle, // Asegúrate de que el estilo cumpla con ImageStyle
  };

  const sendFile = async (filePath: string) => {
    try {
      const fileContent = await RNFS.readFile(filePath);
      const parsedData = JSON.parse(fileContent);
      const response = await axios.post('urlApi', parsedData);
      if (response.status === 200) {
        // await RNFS.unlink(filePath); // Descomentar si se requiere eliminar el archivo después de enviarlo exitosamente
      }
    } catch (error) {
      console.error('Error enviando archivo:', error);
    }
  };

  const checkAndSendFiles = async () => {
    try {
      const files = await RNFS.readDir(directoryPath);
      if (files.length > 0) {
        const netInfo = await NetInfo.fetch();
        if (netInfo.isConnected) {
          for (const file of files) {
            if (file.name.endsWith('.json')) {
              await sendFile(file.path);
            }
          }
        } else {
          console.log('Sin conexión a Internet, no se pueden enviar los archivos.');
        }
      } else {
        console.log('No hay archivos JSON para enviar.');
      }
    } catch (error) {
      console.error('Error revisando archivos locales:', error);
    }
  };

  useEffect(() => {
    checkAndSendFiles();
  }, []);

  const handleNewSurvey = async () => {
    const newSurveyId = generateId();
    setSurveyId(newSurveyId);
    console.log("Generated Survey ID:", newSurveyId);
    await postNewSurvey(`${fileName}.json`, newSurveyId);
    navigation.navigate('page1' as never);
  };

  return (
    <View style={globalStyles.HomeScreenContainer}>
      <Image
        style={styles.logo}
        source={require('../../../assets/OIP.png')}
      />
      <MainButton label='Nueva encuesta' onPress={handleNewSurvey} />
      <MainButton label='Procesar encuestas' onPress={() => navigation.navigate('page1' as never)} />
    </View>
  );
};
