import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ResponseService } from './response.service';

const createResponse = catchAsync(async (req, res) => {
    const result = await ResponseService.createResponseIntoDB({
        responses: req.body,
    });

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Response created successfully',
        data: result,
    });
});

const getAllResponses = catchAsync(async (req, res) => {
    const result = await ResponseService.getAllResponsesFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Responses retrieved successfully',
        data: result,
    });
});

const getResponseById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ResponseService.getResponseByIdFromDB(id);
    if (!result) {
        return sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: 'Response not found',
            data: null,
        });
    }
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Response retrieved successfully',
        data: result,
    });
});

export const ResponseController = {
    createResponse,
    getAllResponses,
    getResponseById,
};
