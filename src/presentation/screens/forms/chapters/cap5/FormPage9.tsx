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
import { getInitialValuesPage9 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { YesNoInput } from '../../../../components/shared/DoubeTextDrop';
import { InputComponent } from '../../../../components/shared/InputComponent';
import { validationSchemaPage9 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    P30: FormTemplate;
    P33: FormTemplate;
    P34: FormTemplate;
}

export const FormPage9 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage9();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage9}
                    onSubmit={async (values: FormValues, { setSubmitting }) => {
                        console.log('Submitting form with values:', values);
                        setSubmitting(true);
                        try {
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                            console.log('Data saved successfully');
                            // Solo navega si no hay errores
                            navigation.navigate('page10' as never);
                        } catch (error) {
                            console.error('Error saving data:', error);
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ setFieldValue, values, errors, touched, handleSubmit }) => {
                        console.log('Current form values:', values);

                        return (
                            <View>
                                <YesNoInput
                                questionTitle="P30. ¿Existe desde el Establecimiento Educativo alianzas o espacios de coordinación con la institucionalidad u operadores de justicia presentes en el municipio para atender los casos de los estudiantes?"
                                subQuestion1="P31. ¿A qué institución, autoridad o personas particularmente acude el Establecimiento Educativo para atender los casos?"
                                subQuestion2="P32. ¿Por qué no existen esas alianzas o protocolos de coordinación?"
                                selectedAnswer={values.P30.response[0].idoptresponse}
                                onAnswerChange={(value) => {
                                    setFieldValue('P30.response[0].idoptresponse', value);
                                    
                                    // Si se selecciona "Sí", aseguramos que la respuesta de la segunda subpregunta sea vacía
                                    if (value === 'yes') {
                                    setFieldValue('P30.response[0].responseuser', 'Sí');
                                    setFieldValue('P30.response[0].subQuestion1Responses.P26', ''); // Vaciar la respuesta de la segunda subpregunta
                                    } else {
                                    setFieldValue('P30.response[0].responseuser', 'No');
                                    setFieldValue('P30.response[0].subQuestion1Responses.P25', ''); // Vaciar la respuesta de la primera subpregunta
                                    }
                                }}
                                answer1={values.P30.response[0].subQuestion1Responses?.P25 || ""}
                                answer2={values.P30.response[0].subQuestion1Responses?.P26 || ""}
                                onAnswer1Change={(value) => {
                                    const updatedResponses = { ...values.P30.response[0].subQuestion1Responses };
                                    updatedResponses.P25 = value;
                                    setFieldValue('P30.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                onAnswer2Change={(value) => {
                                    const updatedResponses = { ...values.P30.response[0].subQuestion1Responses };
                                    updatedResponses.P26 = value;
                                    setFieldValue('P30.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                errors={errors.P30?.response?.[0]}
                                touched={touched.P30?.response?.[0]}
                                />

                                <ErrorMessage errors={errors} touched={touched} fieldName="P30" />


                                <InputComponent
                                    info='P33' 
                                    textTitle='P33. ¿Qué apoyo o articulación ustedes necesitan con la institucionalidad municipal, departamental o nacional para el manejo de estos casos?'
                                    handleChange={(value: string) => {
                                        console.log('P33 answer changed to:', value);
                                        setFieldValue('P33.response[0].responseuser[0]', value);
                                    }}
                                    handleBlur={() => console.log('P33 input blurred')}
                                    values={values.P33.response[0].responseuser} 
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P33" />

                                <InputComponent
                                    info='P34' 
                                    textTitle='P34. Para finalizar esta encuesta, ¿desearía agregar algún comentario o recomendación?'
                                    handleChange={(value: string) => {
                                        console.log('P34 answer changed to:', value);
                                        setFieldValue('P34.response[0].responseuser[0]', value);
                                    }}
                                    handleBlur={() => console.log('P34 input blurred')}
                                    values={values.P34.response[0].responseuser} 
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P34" />

                                <View style={globalStyles.buttonsBanner}>
                                    <Prevcomponent onPrevPressed={() => navigation.navigate('page8' as never)} />
                                    <NextComponent onNextPress={handleSubmit} />
                                </View>
                            </View>
                        );
                    }}
                </Formik>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};
