import { FormSubmission } from './response.model';

const createResponseIntoDB = async (response: any) => {
    const res = await FormSubmission.create(response);
    return res;
};

const getAllResponsesFromDB = async () => {
    const res = await FormSubmission.find();
    return res;
};

const getResponseByIdFromDB = async (id: string) => {
    const res = await FormSubmission.findById(id);
    return res;
};

export const ResponseService = {
    createResponseIntoDB,
    getAllResponsesFromDB,
    getResponseByIdFromDB,
};
