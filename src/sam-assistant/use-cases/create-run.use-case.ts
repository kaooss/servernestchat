import OpenAI from "openai";

interface Options {
    threadId: string;
    assistantId?: string;
}

export const createRunUseCase = async (openai: OpenAI, options: Options) => {

    const { threadId, assistantId = 'asst_eLBXmoOG4sAnOAjkTl511FSx' } = options;

    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
        temperature: 0.3,
    });

    console.log({run});

    return run;
    
}