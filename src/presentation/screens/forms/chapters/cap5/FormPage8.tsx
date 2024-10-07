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
import { getInitialValuesPage8 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DropDownMultiQuestion } from '../../../../components/shared/DropDownMultiQuestion';
import { subcategories24a, subcategories24b, subcategories24c, subcategories24d, subcategories24e } from '../../../../../utils/cap1/categoriesp24';
import { validationSchemaPage8 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    P24a: FormTemplate;
    P24b: FormTemplate;
    P24c: FormTemplate;
    P24d: FormTemplate;
    P24e: FormTemplate;
}

export const FormPage8 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage8();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <View style={globalStyles.CapTitle}>
                    <Text style={globalStyles.Title}>Capítulo 5. Conflictividades</Text>
                </View>
                <View>
                    <Text style={globalStyles.Title2}>
                        P24. 	Del siguiente listado de problemas / desacuerdos / conflictos y disputas ¿Cuáles considera usted que se presentan con mayor frecuencia a los estudiantes del Establecimiento Educativo?
                    </Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage8}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        console.log("Valores antes de guardar:", values);
                        try {
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                            console.log("Datos guardados con éxito");
                        } catch (error) {
                            console.error("Error al guardar datos:", error);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page9' as never);
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, setFieldTouched, errors, touched }) => (
                        <View>
                            <DropDownMultiQuestion
                                questionTitle="P24.1. Problemas relacionados con familiares como separación o divorcio, paternidad / maternidad o recursos insuficientes para la crianza. "
                                subcategoryTitle="¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories24a}
                                selectedCategory={values.P24a.response[0].idoptresponse}
                                selectedSubcategories={values.P24a.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P24a:", value);
                                    setFieldValue('P24a.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P24a:", value);
                                    setFieldValue('P24a.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P24a.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];

                                    if (index === 2 && updatedResponses[subcategoryValue][1] === 'No') {
                                        updatedResponses[subcategoryValue][index] = "";
                                    } else {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    if (index === 3) {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    setFieldValue('P24a.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P24a.response[0].subQuestion1Responses || {}}
                                errors={errors.P24a?.response?.[0]}
                                touched={touched.P24a?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P24a" />

                            <DropDownMultiQuestion
                                questionTitle="P24.2. Problemas relacionados con el servicio de educación y formación, como el acceso y la calidad. "
                                subcategoryTitle="¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories24b}
                                selectedCategory={values.P24b.response[0].idoptresponse}
                                selectedSubcategories={values.P24b.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P24b:", value);
                                    setFieldValue('P24b.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P24b:", value);
                                    setFieldValue('P24b.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P24b.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];

                                    if (index === 2 && updatedResponses[subcategoryValue][1] === 'No') {
                                        updatedResponses[subcategoryValue][index] = "";
                                    } else {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    if (index === 3) {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    setFieldValue('P24b.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P24b.response[0].subQuestion1Responses || {}}
                                errors={errors.P24b?.response?.[0]}
                                touched={touched.P24b?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P24b" />

                            <DropDownMultiQuestion
                                questionTitle="P24.3. Problemas relacionados con afectaciones, daños o perjuicios causados o derivados de delitos, como hurto, lesiones, calumnias, daños a la propiedad, secuestro, homicidio, ciberdelito, violencia sexual y violencia intrafamiliar."
                                subcategoryTitle="¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories24c}
                                selectedCategory={values.P24c.response[0].idoptresponse}
                                selectedSubcategories={values.P24c.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P24c:", value);
                                    setFieldValue('P24c.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P24c:", value);
                                    setFieldValue('P24c.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P24c.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];

                                    if (index === 2 && updatedResponses[subcategoryValue][1] === 'No') {
                                        updatedResponses[subcategoryValue][index] = "";
                                    } else {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    if (index === 3) {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    setFieldValue('P24c.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P24c.response[0].subQuestion1Responses || {}}
                                errors={errors.P24c?.response?.[0]}
                                touched={touched.P24c?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P24c" />

                            <DropDownMultiQuestion
                                questionTitle="P24.4. Problemas relacionados con afectaciones, daños o perjuicios causados o derivados de desplazamiento y orden público"
                                subcategoryTitle="¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories24d}
                                selectedCategory={values.P24d.response[0].idoptresponse}
                                selectedSubcategories={values.P24d.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P24d:", value);
                                    setFieldValue('P24d.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P24d:", value);
                                    setFieldValue('P24d.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P24d.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];

                                    if (index === 2 && updatedResponses[subcategoryValue][1] === 'No') {
                                        updatedResponses[subcategoryValue][index] = "";
                                    } else {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    if (index === 3) {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    setFieldValue('P24d.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P24d.response[0].subQuestion1Responses || {}}
                                errors={errors.P24d?.response?.[0]}
                                touched={touched.P24d?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P24d" />

                            <DropDownMultiQuestion
                                questionTitle="P24.5. Problemas relacionados con la convivencia escolar"
                                subcategoryTitle="¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories24e}
                                selectedCategory={values.P24e.response[0].idoptresponse}
                                selectedSubcategories={values.P24e.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P24e:", value);
                                    setFieldValue('P24e.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P24e:", value);
                                    setFieldValue('P24e.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P24e.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];

                                    if (index === 2 && updatedResponses[subcategoryValue][1] === 'No') {
                                        updatedResponses[subcategoryValue][index] = "";
                                    } else {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    if (index === 3) {
                                        updatedResponses[subcategoryValue][index] = value;
                                    }

                                    setFieldValue('P24e.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P24e.response[0].subQuestion1Responses || {}}
                                errors={errors.P24e?.response?.[0]}
                                touched={touched.P24e?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P24e" />

                            <View style={globalStyles.buttonsBanner}>
                                <Prevcomponent onPrevPressed={() => navigation.navigate('page7' as never)} />
                                <NextComponent onNextPress={handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};