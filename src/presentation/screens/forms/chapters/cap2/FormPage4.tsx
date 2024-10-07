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
import { getInitialValuesPage4 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DoubleDropdownSubcat } from '../../../../components/shared/DoubleDropdownSubcat';
import { subcategories16a, subcategories16b, subcategories16c, subcategories16d } from '../../../../../utils/cap1/categoriesp16';
import { validationSchemaPage4 } from '../../../../../utils/cap1/validationSchemas';
import { InputComponent } from '../../../../components/shared/InputComponent';
import { DoubleDropdownInput } from '../../../../components/shared/DropDownInputComponent';
import { categoriesp16, categoriesp17 } from '../../../../../utils/cap1/CategoriesPage4';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';

export interface FormValues {
    P15: FormTemplate;
    P16: FormTemplate;
    P17: FormTemplate;
    P18: FormTemplate;
    P19: FormTemplate;
}

export const FormPage4 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage4();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <View style={globalStyles.CapTitle}>
                    <Text style={globalStyles.Title}>Capítulo 2. Información del Establecimiento Educativo</Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage4}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        try {
                            console.log('Submitting values for FormPage4:', JSON.stringify(values, null, 2));
                            // Log la estructura de valores antes de guardarlos
                            console.log('Values structure before saving:', values);

                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                            console.log('Data saved successfully for FormPage4');
                        } catch (error) {
                            console.error('Error saving data in FormPage4:', error);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page5' as never);
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, setFieldTouched, errors, touched }) => {
                        console.log('Current errors for FormPage4:', errors);

                        return (
                            <View>

                                <InputComponent
                                    info='P15'
                                    textTitle='P15. ¿Cual es el nombre completo del establecimiento educativo en que usted trabaja?:'
                                    handleChange={(value: string) => {
                                        console.log('P15 changed to:', value); // Log del cambio en P15
                                        setFieldValue('P15.response[0].responseuser[0]', value);
                                    }}
                                    handleBlur={() => {
                                        console.log('P15 blurred'); // Log cuando P15 pierde el foco
                                        setFieldTouched('P15.response[0].responseuser[0]');
                                    }}
                                    values={values.P15.response[0].responseuser}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P15" />

                                <DoubleDropdownInput
                                    categoryTitle="P16. ¿Cuál es el nivel más alto ofertado por el Establecimiento Educativo? "
                                    subcategoryTitle="Ingrese una subcategoría:"
                                    categories={categoriesp16}
                                    selectedCategory={values.P16.response[0].idoptresponse}
                                    selectedSubcategory={values.P16.response[0].responseuser[0]}
                                    onCategoryChange={(value) => {
                                        console.log('P16 category changed to:', value);
                                        setFieldValue('P16.response[0].idoptresponse', value);

                                        const selectedOption = categoriesp16.find(option => option.value === value);
                                        if (selectedOption && value !== '61') {
                                            setFieldValue('P16.response[0].responseuser[0]', selectedOption.label); // Guardar el label
                                            console.log('P16 responseuser updated to:', selectedOption.label); // Log del label guardado
                                        }
                                    }}
                                    onSubcategoryChange={(value) => {
                                        console.log('P16 subcategory changed to:', value);
                                        const currentCategoryValue = values.P16.response[0].idoptresponse;

                                        if (currentCategoryValue === '61') {
                                            // Obtener el array actual de responseuser
                                            const currentResponseUser = values.P16.response[0].responseuser[0] || '';
                                            let updatedResponseUser = currentResponseUser.split(',').map(item => item.trim());

                                            // Verificar si el valor no está vacío y no está ya en el array
                                            if (value && !updatedResponseUser.includes(value)) {
                                                updatedResponseUser = [value]; // Reemplazar con el nuevo valor
                                                console.log('Updated responseuser:', updatedResponseUser.join(', ')); // Log de la respuesta actualizada
                                            } else {
                                                // Si ya existe, actualizamos la respuesta eliminando duplicados
                                                updatedResponseUser = [...new Set(updatedResponseUser)];
                                                console.log('Responseuser after removing duplicates:', updatedResponseUser.join(', ')); // Log después de eliminar duplicados
                                            }

                                            // Guardar el valor formateado
                                            setFieldValue('P16.response[0].responseuser[0]', updatedResponseUser.join(', '));
                                        }
                                    }}
                                    errors={errors.P16?.response?.[0]}
                                    touched={touched.P16?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P16" />
                              
                                <DoubleDropdownInput
                                    categoryTitle="P17. ¿Cuál es la jornada escolar que brinda el Establecimiento Educativo?"
                                    subcategoryTitle="Ingrese una subcategoría:"
                                    categories={categoriesp17}
                                    selectedCategory={values.P17.response[0].idoptresponse}
                                    selectedSubcategory={values.P17.response[0].responseuser[0]}
                                    onCategoryChange={(value) => {
                                        console.log('P17 category changed to:', value);
                                        setFieldValue('P17.response[0].idoptresponse', value);

                                        const selectedOption = categoriesp17.find(option => option.value === value);
                                        if (selectedOption && value !== '61') {
                                            setFieldValue('P17.response[0].responseuser[0]', selectedOption.label); // Guardar el label
                                            console.log('P17 responseuser updated to:', selectedOption.label); // Log del label guardado
                                        }
                                    }}
                                    onSubcategoryChange={(value) => {
                                        console.log('P17 subcategory changed to:', value);
                                        const currentCategoryValue = values.P17.response[0].idoptresponse;

                                        if (currentCategoryValue === '61') {
                                            // Obtener el array actual de responseuser
                                            const currentResponseUser = values.P17.response[0].responseuser[0] || '';
                                            let updatedResponseUser = currentResponseUser.split(',').map(item => item.trim());

                                            // Verificar si el valor no está vacío y no está ya en el array
                                            if (value && !updatedResponseUser.includes(value)) {
                                                updatedResponseUser = [value]; // Reemplazar con el nuevo valor
                                                console.log('Updated responseuser:', updatedResponseUser.join(', ')); // Log de la respuesta actualizada
                                            } else {
                                                // Si ya existe, actualizamos la respuesta eliminando duplicados
                                                updatedResponseUser = [...new Set(updatedResponseUser)];
                                                console.log('Responseuser after removing duplicates:', updatedResponseUser.join(', ')); // Log después de eliminar duplicados
                                            }

                                            // Guardar el valor formateado
                                            setFieldValue('P17.response[0].responseuser[0]', updatedResponseUser.join(', '));
                                        }
                                    }}
                                    errors={errors.P17?.response?.[0]}
                                    touched={touched.P17?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P17" />
                                
                                <DropDownComponent
                                values={values.P18.response[0].responseuser}
                                setFieldValue={(label) => {
                                    console.log('P18 changed to:', label); // Log del cambio en P13
                                    setFieldValue('P18.response[0].responseuser[0]', label);
                                }}
                                qTitle="P18. ¿A cuál sector pertenece el Establecimiento Educativo?"
                                opValues={[
                                    'Oficial',
                                    'Privado',
                                ]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P18" />
                                
                                <DropDownComponent
                                values={values.P19.response[0].responseuser}
                                setFieldValue={(label) => {
                                    console.log('P19 changed to:', label); // Log del cambio en P13
                                    setFieldValue('P19.response[0].responseuser[0]', label);
                                }}
                                qTitle="P19. ¿Cuántos años de experiencia tiene en este cargo u ocupación? "
                                opValues={[
                                    'Menor de 1 año',
                                    'Entre 1 a 3 años',
                                    'Entre 4 a 6 años',
                                    'Entre 7 a 9 años',
                                    '10 años o mayor',
                                ]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P19" />

                                <View style={globalStyles.buttonsBanner}>
                                    <Prevcomponent onPrevPressed={() => navigation.navigate('page3' as never)} />
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
