import { FormTemplate } from "./FormInterfaces"


const initialResponses = (id: string, chapter: string, qFather: string, idOptResponse: string): FormTemplate => ({
    qId: id,
    surveyId: "2",
    chapterId: chapter,
    qFather: qFather ,
    response: [
        {
            idoptresponse: idOptResponse,
            responseuser: [""],
            subQuestion3Responses: undefined,
            subQuestion1Responses: undefined,
            subQuestion2Responses: undefined,
            subQuestions: [],
            additionalText: ""
        }
    ]
});

export const getInitialValuesPage1 = () => {
    return {
        P1: initialResponses("P1","1","","1"),
        P2: initialResponses("P2","1","","2"),
        P3: initialResponses("P3","1","","3"),
        P4: initialResponses("P4","1","","4"),
        P5: initialResponses("P5","1","","5"),
        P6: initialResponses("P5","1","","6"),
    }
}

export const getInitialValuesPage2 = () => {
    return {
        P7: initialResponses("P7","1","","7"),
        P8: initialResponses("P8","1","","8"),
        P9: initialResponses("P9","1","","9"),
        P10: initialResponses("P10","1","","10"),
        P11: initialResponses("P11","1","10","11"),
        P12: initialResponses("P12","1","","12"),
    }
}

export const getInitialValuesPage3 = () => {
    return {
        P13: initialResponses("P13","1","","13"),
        P14: initialResponses("P14","1","","14"),


    }

    
}

export const getInitialValuesPage4 = () => {
    return {
        P15: initialResponses("P15","2","","15"),
        P16: initialResponses("P16","2","","16"),
        P17: initialResponses("P17","2","","17"),
        P18: initialResponses("P18","2","","18"),
        P19: initialResponses("P19","2","","19"),
        
    }

    
}
export const getInitialValuesPage5 = () => {
    return {
        P20: initialResponses("P20","2","","20"),
        P21: initialResponses("P21","2","","21"),
        
    }

    
}

export const getInitialValuesPage6 = () => {
    return {
        P22a: initialResponses("P22a","5","","22"),
        P22b: initialResponses("P22b","5","","22"),
        P22c: initialResponses("P22c","5","","22"),
        P22d: initialResponses("P22d","5","","22"),
        P22e: initialResponses("P22e","5","","22"),
        P22f: initialResponses("P22f","5","","22"),
        P22g: initialResponses("P22g","5","","22"),
        P22h: initialResponses("P22h","5","","22"),
    }
}

export const getInitialValuesPage8 = () => {
    return {
        P24a: initialResponses("P24a","5","","24"),
        P24b: initialResponses("P24b","5","","24"),
        P24c: initialResponses("P24c","5","","24"),
        P24d: initialResponses("P24d","5","","24"),
        P24e: initialResponses("P24e","5","","24"),
    }

}

export const getInitialValuesPage9 = () => {
    return {
        P30: initialResponses("P30","5","","30"),
        P33: initialResponses("P33","5","","33"),
        P34: initialResponses("P34","5","","34"),

    }

}

export const getInitialValuesPage10 = () => {
    return {
        A1: initialResponses("A1","A","","A1"),
        A2: initialResponses("A2","A","","A2"),
        A3: initialResponses("A3","A","","A3"),
        A4: initialResponses("A4","A","","A4"),
        A5: initialResponses("A5","A","","A5"),

    }

}