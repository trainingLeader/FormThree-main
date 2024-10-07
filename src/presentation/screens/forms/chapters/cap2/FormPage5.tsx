import React, { useContext } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DoubleDropdownSubcat } from '../../../../components/shared/DoubleDropdownSubcat';
import { categoriesp21} from '../../../../../utils/cap1/CategoriesPage4';
import { getInitialValuesPage5 } from '../../../../../utils/initialValues';
import { fileName } from '../../../../../utils/generateFilename';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { validationSchemaPage5 } from '../../../../../utils/cap1/validationSchemas';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { DoubleDropdownInput } from '../../../../components/shared/DropDownInputComponent';

export interface FormValues {
    P20: FormTemplate;
    P21: FormTemplate;
}

export const FormPage5 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage5();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage5}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        try {
                            console.log('Submitting values for FormPage5:', JSON.stringify(values, null, 2));
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                            console.log('Data saved successfully for FormPage5');
                        } catch (error) {
                            console.error('Error saving data in FormPage5:', error);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page6' as never);
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, setFieldTouched, errors, touched }) => {
                        console.log('Current errors for FormPage5:', errors);

                        return (
                            <View>
                                <DropDownComponent
                                values={values.P20.response[0].responseuser}
                                setFieldValue={(label) => {
                                    console.log('P20 changed to:', label); // Log del cambio en P13
                                    setFieldValue('P20.response[0].responseuser[0]', label);
                                }}
                                qTitle="P20. ¿Las funciones / labores que usted desempeña tiene cobertura?"
                                opValues={[
                                    'Rural',
                                    'Urbana',
                                    'Ambas',
                                ]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P20" />
                                
                                <DoubleDropdownInput
                                    categoryTitle="P21. ¿Cuál es la jornada escolar que brinda el Establecimiento Educativo?"
                                    subcategoryTitle="Ingrese una subcategoría:"
                                    categories={categoriesp21}
                                    selectedCategory={values.P21.response[0].idoptresponse}
                                    selectedSubcategory={values.P21.response[0].responseuser[0]}
                                    onCategoryChange={(value) => {
                                        console.log('P21 category changed to:', value);
                                        setFieldValue('P21.response[0].idoptresponse', value);

                                        const selectedOption = categoriesp21.find(option => option.value === value);
                                        if (selectedOption && value !== '61') {
                                            setFieldValue('P21.response[0].responseuser[0]', selectedOption.label); // Guardar el label
                                            console.log('P21 responseuser updated to:', selectedOption.label); // Log del label guardado
                                        }
                                    }}
                                    onSubcategoryChange={(value) => {
                                        console.log('P21 subcategory changed to:', value);
                                        const currentCategoryValue = values.P21.response[0].idoptresponse;

                                        if (currentCategoryValue === '61') {
                                            // Obtener el array actual de responseuser
                                            const currentResponseUser = values.P21.response[0].responseuser[0] || '';
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
                                            setFieldValue('P21.response[0].responseuser[0]', updatedResponseUser.join(', '));
                                        }
                                    }}
                                    errors={errors.P21?.response?.[0]}
                                    touched={touched.P21?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P21" />
                                
                                <View style={globalStyles.buttonsBanner}>
                                    <Prevcomponent onPrevPressed={() => navigation.navigate('page4' as never)} />
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
