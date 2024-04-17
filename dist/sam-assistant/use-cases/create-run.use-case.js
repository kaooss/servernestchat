"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRunUseCase = void 0;
const createRunUseCase = async (openai, options) => {
    const { threadId, assistantId = 'asst_eLBXmoOG4sAnOAjkTl511FSx' } = options;
    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
        temperature: 0.3,
    });
    console.log({ run });
    return run;
};
exports.createRunUseCase = createRunUseCase;
//# sourceMappingURL=create-run.use-case.js.map