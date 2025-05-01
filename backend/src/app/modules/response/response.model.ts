import mongoose, { model, Model, Schema } from 'mongoose';
import { IFormSubmission } from './response.interface';

const formSubmissionSchema = new Schema<IFormSubmission>({
    responses: {
        type: Map,
        of: Schema.Types.Mixed,
        required: true,
    },
});

export const FormSubmission: Model<IFormSubmission> = model<IFormSubmission>(
    'FormSubmission',
    formSubmissionSchema,
);
