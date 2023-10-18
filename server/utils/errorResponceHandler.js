export const responce = (res, message , status) => {
    res.status(status);
    throw Error(message);
}