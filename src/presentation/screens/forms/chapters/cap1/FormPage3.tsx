import React, { useContext } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { fileName } from '../../../../../utils/generateFilename';
import { getInitialValuesPage3 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { DoubleDropdownInput } from '../../../../components/shared/DropDownInputComponent';
import { categories } from '../../../../../utils/cap1/categoriesPage3';
import { validationSchemaPage3 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
  P13: FormTemplate;
  P14: FormTemplate;
}

export const FormPage3 = () => {
  const navigation = useNavigation();
  const { saveAllData } = UseSaveData();
  const { surveyId } = useContext(SurveyContext);
  const finalSurveyId = surveyId ?? 'defaultSurveyId';
  const initialValues: FormValues = getInitialValuesPage3();

  console.log('Initial values for FormPage3:', initialValues); // Log de los valores iniciales

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={globalStyles.FomsContainer}>


        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaPage3}
          onSubmit={async (values, { setSubmitting }) => {
            console.log('Submitting values for FormPage3:');
            Object.entries(values).forEach(([key, value]) => {
              console.log(` ${key}:`, JSON.stringify(value, null, 2));
            });

            try {
              await saveAllData(`${fileName}.json`, values, finalSurveyId);
              console.log('Data saved successfully for FormPage3'); // Confirmación de que los datos se guardaron
            } catch (error) {
              console.error('Error saving data in FormPage3:', error); // Log de errores al guardar
            } finally {
              setSubmitting(false);
              navigation.navigate('page4' as never);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
            setFieldTouched,
            errors,
            touched,
          }) => {
            console.log('Current form values for FormPage3:', values); // Log de los valores actuales del formulario
            console.log('Current errors for FormPage3:', errors); // Log de los errores actuales del formulario
            
            return (
              <View>
                <DropDownComponent
                  values={values.P13.response[0].responseuser}
                  setFieldValue={(label) => {
                    console.log('P13 changed to:', label); // Log del cambio en P13
                    setFieldValue('P13.response[0].responseuser[0]', label);
                  }}
                  qTitle="P13. De acuerdo con su cultura, pueblo o rasgos físicos... usted se reconoce como:"
                  opValues={[
                    'Indígena',
                    'Gitano / ROM',
                    'Raizal del archipiélago de San Andrés y Providencia',
                    'Palenquero de San Basilio',
                    'Negro, mulato, afrodescendiente o afrocolombiano',
                    'Ninguno de los anteriores',
                  ]}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P13" />

                <DropDownComponent
                  values={values.P14.response[0].responseuser}
                  setFieldValue={(value) => {
                    console.log('P14 changed to:', value); // Log del cambio en P12
                    setFieldValue('P14.response[0].responseuser[0]', value);
                  }}
                  qTitle='P14. ¿Cuál es su nivel educativo más alto alcanzado?'
                  opValues={['Ninguno', 'Preescolar', 'Básica primaria (1-5)', 'Básica secundaria (6-9)', 'Media (10-13)', 'Técnico', 'Tecnólogo', 'Profesional', 'Especialista', 'Magister', 'Doctorado', 'No sabe / No informa']}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P14" />
                {/* <DropDownComponent
                  values={values.P15.response[0].responseuser}
                  setFieldValue={(label) => {
                    console.log('P15 changed to:', label); // Log del cambio en P15
                    setFieldValue('P15.response[0].responseuser[0]', label);
                  }}
                  qTitle="P15. ¿La comunidad a la que usted pertenece es?"
                  opValues={['Urbana', 'Rural', 'Ambas']}
                /> */}
                <ErrorMessage errors={errors} touched={touched} fieldName="P15" />
                <View style={globalStyles.buttonsBanner}>
                  <Prevcomponent onPrevPressed={() => {
                    console.log('Navigating to page1'); // Log al navegar a la página anterior
                    navigation.navigate('page2' as never);
                  }} />
                  <NextComponent onNextPress={() => {
                    console.log('Navigating to page4'); // Log al intentar navegar a la siguiente página
                    handleSubmit();
                  }} />
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
