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
import { getInitialValuesPage6 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DropDownMultiQuestion } from '../../../../components/shared/DropDownMultiQuestion';
import { DoubleDropdownSubcat } from '../../../../components/shared/DoubleDropdownSubcat';
import { subcategories22f, subcategories22g, subcategories22h } from '../../../../../utils/cap1/categoriesp22';
import { validationSchemaPage7 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    P22f: FormTemplate;
    P22g: FormTemplate;
    P22h: FormTemplate;
}

export const FormPage7 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage6();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <View>
                    <Text style={globalStyles.Title2}>
                        P22.  Del siguiente listado, a partir de su rol (Rector, Coordinador o líder de convivencia escolar), ¿cuáles considera que son las principales barreras de acceso a la justicia que se le presentan a los estudiantes de su establecimiento educativo?
                    </Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage7}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        try {
                            console.log("Datos a guardar en JSON:", values);
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page8' as never);
                        }
                    }}
                >
                    {({ handleSubmit, values, setFieldValue, errors, touched }) => (
                        <View>

                            <DoubleDropdownSubcat
                                questionTitle="P22.6. Geográficas"
                                subcategoryTitle="Seleccione lo que aplica"
                                subcategories={subcategories22f}
                                selectedCategory={values.P22f.response[0].idoptresponse}
                                selectedSubcategories={values.P22f.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log(`P22f: Category changed to: ${value}`);
                                    setFieldValue('P22f.response[0].idoptresponse', value);

                                    if (value === "no") {
                                        setFieldValue('P22f.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P22f.response[0].responseuser', []);
                                    }
                                    console.log(`P22f: Subcategories reset`);
                                }}
                                onSubcategoryChange={(selectedValues) => {
                                    console.log(`P22f: Subcategories changed to:`, selectedValues);

                                    const currentResponseUser = values.P22f.response[0].responseuser || [];
                                    const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                    selectedValues.forEach((subValue) => {
                                        if (!updatedResponseUser.includes(subValue)) {
                                            updatedResponseUser.push(subValue);
                                        }
                                    });

                                    setFieldValue('P22f.response[0].responseuser', updatedResponseUser);
                                }}
                                onTextChange={(text) => {
                                    console.log(`P22f: Additional text changed to: ${text}`);

                                    const currentResponseUser = values.P22f.response[0].responseuser || [];
                                    const filteredResponseUser = currentResponseUser.filter(item => item !== values.P22f.response[0].additionalText);

                                    if (text) {
                                        filteredResponseUser.push(text);
                                    }

                                    setFieldValue('P22f.response[0].responseuser', filteredResponseUser);
                                    setFieldValue('P22f.response[0].additionalText', text);
                                }}
                                errors={errors.P22f?.response?.[0]}
                                touched={touched.P22f?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P22f" />

                            <DoubleDropdownSubcat
                                questionTitle="P22.7. Institucionales"
                                subcategoryTitle="Seleccione lo que aplica"
                                subcategories={subcategories22g}
                                selectedCategory={values.P22g.response[0].idoptresponse}
                                selectedSubcategories={values.P22g.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log(`P22g: Category changed to: ${value}`);
                                    setFieldValue('P22g.response[0].idoptresponse', value);

                                    if (value === "no") {
                                        setFieldValue('P22g.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P22g.response[0].responseuser', []);
                                    }
                                    console.log(`P22g: Subcategories reset`);
                                }}
                                onSubcategoryChange={(selectedValues) => {
                                    console.log(`P22g: Subcategories changed to:`, selectedValues);

                                    const currentResponseUser = values.P22g.response[0].responseuser || [];
                                    const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                    selectedValues.forEach((subValue) => {
                                        if (!updatedResponseUser.includes(subValue)) {
                                            updatedResponseUser.push(subValue);
                                        }
                                    });

                                    setFieldValue('P22g.response[0].responseuser', updatedResponseUser);
                                }}
                                onTextChange={(text) => {
                                    console.log(`P22g: Additional text changed to: ${text}`);

                                    const currentResponseUser = values.P22g.response[0].responseuser || [];
                                    const filteredResponseUser = currentResponseUser.filter(item => item !== values.P22g.response[0].additionalText);

                                    if (text) {
                                        filteredResponseUser.push(text);
                                    }

                                    setFieldValue('P22g.response[0].responseuser', filteredResponseUser);
                                    setFieldValue('P22g.response[0].additionalText', text);
                                }}
                                errors={errors.P22g?.response?.[0]}
                                touched={touched.P22g?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P22g" />

                            <DoubleDropdownSubcat
                                questionTitle="P22.8. Tecnológicas"
                                subcategoryTitle="Seleccione lo que aplica"
                                subcategories={subcategories22h}
                                selectedCategory={values.P22h.response[0].idoptresponse}
                                selectedSubcategories={values.P22h.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log(`P22h: Category changed to: ${value}`);
                                    setFieldValue('P22h.response[0].idoptresponse', value);

                                    if (value === "no") {
                                        setFieldValue('P22h.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P22h.response[0].responseuser', []);
                                    }
                                    console.log(`P22h: Subcategories reset`);
                                }}
                                onSubcategoryChange={(selectedValues) => {
                                    console.log(`P22h: Subcategories changed to:`, selectedValues);

                                    const currentResponseUser = values.P22h.response[0].responseuser || [];
                                    const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                    selectedValues.forEach((subValue) => {
                                        if (!updatedResponseUser.includes(subValue)) {
                                            updatedResponseUser.push(subValue);
                                        }
                                    });

                                    setFieldValue('P22h.response[0].responseuser', updatedResponseUser);
                                }}
                                onTextChange={(text) => {
                                    console.log(`P22h: Additional text changed to: ${text}`);

                                    const currentResponseUser = values.P22h.response[0].responseuser || [];
                                    const filteredResponseUser = currentResponseUser.filter(item => item !== values.P22h.response[0].additionalText);

                                    if (text) {
                                        filteredResponseUser.push(text);
                                    }

                                    setFieldValue('P22h.response[0].responseuser', filteredResponseUser);
                                    setFieldValue('P22h.response[0].additionalText', text);
                                }}
                                errors={errors.P22h?.response?.[0]}
                                touched={touched.P22h?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P22h" />

                            <View style={globalStyles.buttonsBanner}>
                                <Prevcomponent onPrevPressed={() => navigation.navigate('page5' as never)} />
                                <NextComponent onNextPress={handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};