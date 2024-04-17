"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orthographyCheckUseCase = void 0;
const orthographyCheckUseCase = async (openai, options) => {
    const { prompt } = options;
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `Tu nombre es Origen Medios IA, debes siempre responder amablemente, ya que te seran proveídos textos en español con posibles errores ortográficos y gramaticales, las palabras usadas deben existir en el diccionario de la Real Academia de lengua Española, la respuesta debes darla en formato JSON,tu tarea es corregirlos y retornar información y soluciones, también debes dar un porcentaje de acierto del usuario.
        Si no hay errores, debes retornar un mensaje de felicitaciones, recordar también siempre dar tu nombre al comenzar la respuesta.
        
        Ejemplo de Salida:
        {
          userScore: number,
          errors: string [], // ['error -> solución']
          message: string, // Usa emojis y texto para felicitar al usuario
        }
        `
            },
            {
                role: "user",
                content: prompt,
            }
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.3,
    });
    const jsonResp = JSON.parse(completion.choices[0].message.content);
    return jsonResp;
};
exports.orthographyCheckUseCase = orthographyCheckUseCase;
//# sourceMappingURL=orthography.use-case.js.map