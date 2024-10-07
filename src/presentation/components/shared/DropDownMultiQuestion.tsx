import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import { globalStyles } from '../../theme/theme';

interface DropDownMultiQuestionProps {
  questionTitle: string;
  subcategoryTitle: string;
  subcategories: { label: string; value: string }[];
  selectedCategory: string;
  selectedSubcategories: string[];
  onCategoryChange: (value: string) => void;
  onSubcategoryChange: (values: string[]) => void;
  onSubQuestionChange: (index: number, subcategoryValue: string, value: string) => void;
  selectedSubQuestions: { [key: string]: string[] };
  errors?: any;
  touched?: any;
}

export const DropDownMultiQuestion = ({
  questionTitle,
  subcategoryTitle,
  subcategories,
  selectedCategory,
  selectedSubcategories,
  onCategoryChange,
  onSubcategoryChange,
  onSubQuestionChange,
  selectedSubQuestions,
  errors,
  touched,
}: DropDownMultiQuestionProps) => {

  const handleCategoryChange = (value: string) => {
    onCategoryChange(value);
    if (value === 'no') {
      onSubcategoryChange(['No']);
    } else {
      onSubcategoryChange([]);
    }
  };

  const handleCheckboxChange = (value: string) => {
    const newSelectedSubcategories = selectedSubcategories.includes(value)
      ? selectedSubcategories.filter(item => item !== value)
      : [...selectedSubcategories, value];

    onSubcategoryChange(newSelectedSubcategories);
  };

  const questionTitles = [
    'P26. ¿En qué zonas del municipio considera usted que se presenta este tipo de problema o conflicto?',
    'P27. ¿Existe alguna ruta o protocolo por parte del establecimiento educativo para el manejo de este tipo de problema o conflicto?',
    'P28. Existe material pedagógico para comunicar la ruta o protocolo que debe seguir el estudiante para atender su caso?',
    'P29. Mensualmente, Cuantos casos de este tipo de problema o conflicto, tiene conocimiento el establecimiento educativo?',
  ];

  const getOptionsForQuestion = (questionIndex: number) => {
    switch (questionIndex) {
      case 0:
        return [
          { label: 'Urbano', value: 'Urbano' },
          { label: 'Rural', value: 'Rural' },
          { label: 'Ambas', value: 'Ambas' }
        ];
      case 1:
        return [
          { label: 'Sí', value: 'Sí' },
          { label: 'No', value: 'No' }
        ];
      case 2:
        return [
          { label: 'Sí', value: 'Sí' },
          { label: 'No', value: 'No' }
        ];
      case 3:
        return [
          { label: 'Sí', value: 'Sí' },
          { label: 'No', value: 'No' }
        ];
      default:
        return [{ label: 'Opción por defecto', value: 'Opción por defecto' }];
    }
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{questionTitle}</Text>
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={handleCategoryChange}
        >
          <Picker.Item label="Seleccione una opción" value="" />
          <Picker.Item label="Sí" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>
      {errors?.category && touched?.category && <Text style={{ color: 'red' }}>{errors.category}</Text>}

      {selectedCategory === 'yes' && (
        <>
          <Text style={globalStyles.questionTitle}>{subcategoryTitle}</Text>
          {subcategories.map((subcategory) => (
            <View key={subcategory.value} style={globalStyles.checkboxContainer}>
              <CheckBox
                value={selectedSubcategories.includes(subcategory.value)}
                onValueChange={() => handleCheckboxChange(subcategory.value)}
              />
              <Text style={globalStyles.checkboxText}>{subcategory.label}</Text>
            </View>
          ))}
          {errors?.subcategory && touched?.subcategory && <Text style={{ color: 'red' }}>{errors.subcategory}</Text>}

          {subcategories.map((subcategory) => (
            selectedSubcategories.includes(subcategory.value) && (
              <View key={subcategory.value}>
                <Text style={globalStyles.Title2}>Subpreguntas para {subcategory.label}</Text>
                
                {/* Primera sub-pregunta */}
                <View >
                  <Text style={globalStyles.questionTitle}>
                    {questionTitles[0]}
                  </Text>
                  <Picker style={globalStyles.picker}
                    selectedValue={selectedSubQuestions[subcategory.value]?.[0] || ''}
                    onValueChange={(value: string) => onSubQuestionChange(0, subcategory.value, value)}
                  >
                    <Picker.Item label={`Seleccione una opción`} value="" />
                    {getOptionsForQuestion(0).map(option => (
                      <Picker.Item key={option.value} label={option.label} value={option.value} />
                    ))}
                  </Picker>
                </View>

                {/* Segunda sub-pregunta */}
                <View>
                  <Text style={globalStyles.questionTitle}>
                    {questionTitles[1]}
                  </Text>
                  <Picker
                    selectedValue={selectedSubQuestions[subcategory.value]?.[1] || ''}
                    onValueChange={(value: string) => onSubQuestionChange(1, subcategory.value, value)}
                  >
                    <Picker.Item label={`Seleccione una opción`} value="" />
                    {getOptionsForQuestion(1).map(option => (
                      <Picker.Item key={option.value} label={option.label} value={option.value} />
                    ))}
                  </Picker>
                </View>

                {/* Mostrar tercera sub-pregunta si se selecciona "Sí" */}
                {selectedSubQuestions[subcategory.value]?.[1] === 'Sí' && (
                  <View>
                    <Text style={globalStyles.questionTitle}>
                      {questionTitles[2]}
                    </Text>
                    <Picker
                      selectedValue={selectedSubQuestions[subcategory.value]?.[2] || ''}
                      onValueChange={(value: string) => onSubQuestionChange(2, subcategory.value, value)}
                    >
                      <Picker.Item label={`Seleccione una opción`} value="" />
                      {getOptionsForQuestion(2).map(option => (
                        <Picker.Item key={option.value} label={option.label} value={option.value} />
                      ))}
                    </Picker>
                  </View>
                )}

                {/* Cuarta sub-pregunta (TextInput) siempre visible */}
                <View>
                  <Text style={globalStyles.questionTitle}>
                    {questionTitles[3]}
                  </Text>
                  <TextInput
                    style={globalStyles.input}
                    value={selectedSubQuestions[subcategory.value]?.[3] || ''}
                    onChangeText={(value: string) => onSubQuestionChange(3, subcategory.value, value)}
                    placeholder="Escriba su respuesta aquí"
                    placeholderTextColor="lightgray"
                  />
                </View>

              </View>
            )
          ))}
        </>
      )}
    </View>
  );
};
