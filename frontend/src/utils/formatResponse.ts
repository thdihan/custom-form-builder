/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
type TResponse = {
    [key: string]: any;
};
export const formatResponseToDownloadable = (response: TResponse) => {
    const formattedResponse = {
        ...response,
        roomType: JSON.parse(response.roomType),
    };

    console.log("Formatted Response", formattedResponse);
    return formattedResponse;
};
