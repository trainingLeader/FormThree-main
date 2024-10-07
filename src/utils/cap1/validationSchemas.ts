import * as Yup from 'yup';

export const validationSchemaPage1 = Yup.object().shape({
    P1: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P2: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P3: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P4: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P5: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P6: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
});

export const validationSchemaPage2 = Yup.object().shape({
  P7: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P8: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P9: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(
          Yup.string().required('Campo obligatorio')
          .notOneOf([""], "Seleccionar una Opción válida")
        )
      })
    )
  }),
  P10: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(
          Yup.string().required('Campo obligatorio')
          .notOneOf([""], "Seleccionar una Opción válida")
          .notOneOf(["No"], "Debe aceptar si desea continuar la encuesta")
        )
      })
    )
  }),
  P11: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P12: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
});

export const validationSchemaPage3 = Yup.object().shape({
  P13: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P14: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
});
export const validationSchemaPage4 = Yup.object().shape({
  P15: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P16: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P17: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["17"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P18: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf([""], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P19: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf([""], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().required("Seleccione una categoría")
          .notOneOf([""], "Seleccionar una Opción válida"), // No obligatorio
        )
      })
    )
  }),
  
});
export const validationSchemaPage5 = Yup.object().shape({
  P20: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P21: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","21"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage6 = Yup.object().shape({
  P22a: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","22"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P22b: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","22"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P22c: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","22"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P22d: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","22"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P22e: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","22"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage7 = Yup.object().shape({
  P22f: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","22"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P22g: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","22"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P22h: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","22"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage8 = Yup.object().shape({
  P24a: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","24"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P24b: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","24"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P24c: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","24"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P24d: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","24"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P24e: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","24"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage9 = Yup.object().shape({
  P30: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              idoptresponse: Yup.string(), // No obligatorio
              responseuser: Yup.string(), // Puede ser opcional
              subQuestion1Responses: Yup.object().shape({
                  P31: Yup.string(), // Puede ser opcional
                  P32: Yup.string(), // Puede ser opcional
              }),
          })
      ),
  }),
  P33: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P34: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
});
export const validationSchemaPage10 = Yup.object().shape({
  A1: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('Este campo es obligatorio'))
          })
      )
  }),
  A2: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('La fecha es obligatoria'))
          })
      )
  }),
  A3: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('La hora de inicio es obligatoria'))
          })
      )
  }),
  A4: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('La hora de finalización es obligatoria'))
          })
      )
  }),
  A5: Yup.object().shape({
      response: Yup.array().of(
          Yup.object().shape({
              responseuser: Yup.array().of(Yup.string().required('Selecciona una opción'))
          })
      )
  }),
});