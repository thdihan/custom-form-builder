import { Document } from 'mongoose';

export type FormFieldValue = string | boolean | string[] | number | null;

export interface FormResponse {
    [fieldName: string]: FormFieldValue;
}

export interface IFormSubmission extends Document {
    responses: FormResponse;
}
