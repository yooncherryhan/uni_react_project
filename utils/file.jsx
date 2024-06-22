export const getFile = ({ payload }) => {
    return (
        'http://localhost:5000/upload/' + payload.originalname
    )
};