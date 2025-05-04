// set response type to key pair => value
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
