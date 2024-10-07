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
import { subcategories22a, subcategories22b, subcategories22c, subcategories22d, subcategories22e } from '../../../../../utils/cap1/categoriesp22';
import { validationSchemaPage6 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    P22a: FormTemplate;
    P22b: FormTemplate;
    P22c: FormTemplate;
    P22d: FormTemplate;
    P22e: FormTemplate;
}

export const FormPage6 = () => {
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
                <View style={globalStyles.CapTitle}>
                    <Text style={globalStyles.Title}>Capítulo 3. Barreras de acceso a la justicia</Text>
                </View>
                <View>
                    <Text style={globalStyles.Title2}>
                        P22.  Del siguiente listado, a partir de su rol (Rector, Coordinador o líder de convivencia escolar), ¿cuáles considera que son las principales barreras de acceso a la justicia que se le presentan a los estudiantes de su establecimiento educativo?
                    </Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage6}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        try {
                            console.log("Datos a guardar en JSON:", values);
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page7' as never);
                        }
                    }}
                >
                    {({ handleSubmit, values, setFieldValue, errors, touched }) => (
                        <View>
                            <DoubleDropdownSubcat
                                questionTitle="P22.1. Culturales y lingüísticas"
                                subcategoryTitle="Seleccione lo que aplica"
                                subcategories={subcategories22a}
                                selectedCategory={values.P22a.response[0].idoptresponse}
                                selectedSubcategories={values.P22a.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log(`P22a: Category changed to: ${value}`);
                                    setFieldValue('P22a.response[0].idoptresponse', value);

                                    if (value === "no") {
                                        setFieldValue('P22a.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P22a.response[0].responseuser', []);
                                    }
                                    console.log(`P22a: Subcategories reset`);
                                }}
                                onSubcategoryChange={(selectedValues) => {
                                    console.log(`P22a: Subcategories changed to:`, selectedValues);

                                    const currentResponseUser = values.P22a.response[0].responseuser || [];
                                    const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                    selectedValues.forEach((subValue) => {
                                        if (!updatedResponseUser.includes(subValue)) {
                                            updatedResponseUser.push(subValue);
                                        }
                                    });

                                    setFieldValue('P22a.response[0].responseuser', updatedResponseUser);
                                }}
                                onTextChange={(text) => {
                                    console.log(`P22a: Additional text changed to: ${text}`);

                                    const currentResponseUser = values.P22a.response[0].responseuser || [];
                                    const filteredResponseUser = currentResponseUser.filter(item => item !== values.P22a.response[0].additionalText);

                                    if (text) {
                                        filteredResponseUser.push(text);
                                    }

                                    setFieldValue('P22a.response[0].responseuser', filteredResponseUser);
                                    setFieldValue('P22a.response[0].additionalText', text);
                                }}
                                errors={errors.P22a?.response?.[0]}
                                touched={touched.P22a?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P22a" />

                            <DoubleDropdownSubcat
                                questionTitle="P22.2. De género"
                                subcategoryTitle="Seleccione lo que aplica"
                                subcategories={subcategories22b}
                                selectedCategory={values.P22b.response[0].idoptresponse}
                                selectedSubcategories={values.P22b.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log(`P22b: Category changed to: ${value}`);
                                    setFieldValue('P22b.response[0].idoptresponse', value);

                                    if (value === "no") {
                                        setFieldValue('P22b.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P22b.response[0].responseuser', []);
                                    }
                                    console.log(`P22b: Subcategories reset`);
                                }}
                                onSubcategoryChange={(selectedValues) => {
                                    console.log(`P22b: Subcategories changed to:`, selectedValues);

                                    const currentResponseUser = values.P22b.response[0].responseuser || [];
                                    const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                    selectedValues.forEach((subValue) => {
                                        if (!updatedResponseUser.includes(subValue)) {
                                            updatedResponseUser.push(subValue);
                                        }
                                    });

                                    setFieldValue('P22b.response[0].responseuser', updatedResponseUser);
                                }}
                                onTextChange={(text) => {
                                    console.log(`P22b: Additional text changed to: ${text}`);

                                    const currentResponseUser = values.P22b.response[0].responseuser || [];
                                    const filteredResponseUser = currentResponseUser.filter(item => item !== values.P22b.response[0].additionalText);

                                    if (text) {
                                        filteredResponseUser.push(text);
                                    }

                                    setFieldValue('P22b.response[0].responseuser', filteredResponseUser);
                                    setFieldValue('P22b.response[0].additionalText', text);
                                }}
                                errors={errors.P22b?.response?.[0]}
                                touched={touched.P22b?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P22b" />

                            <DoubleDropdownSubcat
                                questionTitle="P22.3.  De seguridad, orden público o asociadas al conflicto armado"
                                subcategoryTitle="Seleccione lo que aplica"
                                subcategories={subcategories22c}
                                selectedCategory={values.P22c.response[0].idoptresponse}
                                selectedSubcategories={values.P22c.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log(`P22c: Category changed to: ${value}`);
                                    setFieldValue('P22c.response[0].idoptresponse', value);

                                    if (value === "no") {
                                        setFieldValue('P22c.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P22c.response[0].responseuser', []);
                                    }
                                    console.log(`P22c: Subcategories reset`);
                                }}
                                onSubcategoryChange={(selectedValues) => {
                                    console.log(`P22c: Subcategories changed to:`, selectedValues);

                                    const currentResponseUser = values.P22c.response[0].responseuser || [];
                                    const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                    selectedValues.forEach((subValue) => {
                                        if (!updatedResponseUser.includes(subValue)) {
                                            updatedResponseUser.push(subValue);
                                        }
                                    });

                                    setFieldValue('P22c.response[0].responseuser', updatedResponseUser);
                                }}
                                onTextChange={(text) => {
                                    console.log(`P22c: Additional text changed to: ${text}`);

                                    const currentResponseUser = values.P22c.response[0].responseuser || [];
                                    const filteredResponseUser = currentResponseUser.filter(item => item !== values.P22c.response[0].additionalText);

                                    if (text) {
                                        filteredResponseUser.push(text);
                                    }

                                    setFieldValue('P22c.response[0].responseuser', filteredResponseUser);
                                    setFieldValue('P22c.response[0].additionalText', text);
                                }}
                                errors={errors.P22c?.response?.[0]}
                                touched={touched.P22c?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P22c" />

                            <DoubleDropdownSubcat
                                questionTitle="P22.4. Discapacidad"
                                subcategoryTitle="Seleccione lo que aplica"
                                subcategories={subcategories22d}
                                selectedCategory={values.P22d.response[0].idoptresponse}
                                selectedSubcategories={values.P22d.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log(`P22d: Category changed to: ${value}`);
                                    setFieldValue('P22d.response[0].idoptresponse', value);

                                    if (value === "no") {
                                        setFieldValue('P22d.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P22d.response[0].responseuser', []);
                                    }
                                    console.log(`P22d: Subcategories reset`);
                                }}
                                onSubcategoryChange={(selectedValues) => {
                                    console.log(`P22d: Subcategories changed to:`, selectedValues);

                                    const currentResponseUser = values.P22d.response[0].responseuser || [];
                                    const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                    selectedValues.forEach((subValue) => {
                                        if (!updatedResponseUser.includes(subValue)) {
                                            updatedResponseUser.push(subValue);
                                        }
                                    });

                                    setFieldValue('P22d.response[0].responseuser', updatedResponseUser);
                                }}
                                onTextChange={(text) => {
                                    console.log(`P22d: Additional text changed to: ${text}`);

                                    const currentResponseUser = values.P22d.response[0].responseuser || [];
                                    const filteredResponseUser = currentResponseUser.filter(item => item !== values.P22d.response[0].additionalText);

                                    if (text) {
                                        filteredResponseUser.push(text);
                                    }

                                    setFieldValue('P22d.response[0].responseuser', filteredResponseUser);
                                    setFieldValue('P22d.response[0].additionalText', text);
                                }}
                                errors={errors.P22d?.response?.[0]}
                                touched={touched.P22d?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P22d" />

                            <DoubleDropdownSubcat
                                questionTitle="P22.5. Económicas"
                                subcategoryTitle="Seleccione lo que aplica"
                                subcategories={subcategories22e}
                                selectedCategory={values.P22e.response[0].idoptresponse}
                                selectedSubcategories={values.P22e.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log(`P22e: Category changed to: ${value}`);
                                    setFieldValue('P22e.response[0].idoptresponse', value);

                                    if (value === "no") {
                                        setFieldValue('P22e.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P22e.response[0].responseuser', []);
                                    }
                                    console.log(`P22e: Subcategories reset`);
                                }}
                                onSubcategoryChange={(selectedValues) => {
                                    console.log(`P22e: Subcategories changed to:`, selectedValues);

                                    const currentResponseUser = values.P22e.response[0].responseuser || [];
                                    const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                    selectedValues.forEach((subValue) => {
                                        if (!updatedResponseUser.includes(subValue)) {
                                            updatedResponseUser.push(subValue);
                                        }
                                    });

                                    setFieldValue('P22e.response[0].responseuser', updatedResponseUser);
                                }}
                                onTextChange={(text) => {
                                    console.log(`P22e: Additional text changed to: ${text}`);

                                    const currentResponseUser = values.P22e.response[0].responseuser || [];
                                    const filteredResponseUser = currentResponseUser.filter(item => item !== values.P22e.response[0].additionalText);

                                    if (text) {
                                        filteredResponseUser.push(text);
                                    }

                                    setFieldValue('P22e.response[0].responseuser', filteredResponseUser);
                                    setFieldValue('P22e.response[0].additionalText', text);
                                }}
                                errors={errors.P22e?.response?.[0]}
                                touched={touched.P22e?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P22e" />


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