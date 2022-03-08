import { csrfFetch } from "./csrf";

const LOAD_IMAGES = "images/loadImages";
const LOAD_ONE = "images/loadOne";
const ADD_IMAGES = "images/addImages";

const loadImages = (images) => ({
    type: LOAD_IMAGES,
    images
});

const loadImage = (image) => ({
    type: LOAD_ONE,
    image
});

const addImages = (newImage) => ({
    type: ADD_IMAGES,
    newImage
});

export const getImages = () => async dispatch => {
    const response = await fetch("/api/images");

    if (response.ok) {
        const images = await response.json();
        dispatch(loadImages(images));
        return images;
    };
}

export const getImage = imageId => async dispatch => {
    const response = await fetch(`/api/images/${imageId}`);

    if (response.ok) {
        const image = await response.json();
        dispatch(loadImage(image));
        return image;
    }
}

export const addImage = data => async dispatch => {
    const response = await csrfFetch(`/api/images/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const newImage = await response.json();
        dispatch(addImages(newImage));
        return newImage;
    };
};

// export const editImage = (imageId) => async dispatch => {
//     const response = await fetch(`/api/images/${imageId.id}/edit`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(imageId)
//     });
//     if (response.ok) {
//         const editImage = await response.json();
//         dispatch(addImages(editImage));
//         return editImage;
//     };
// }

const initialState = {
    entries: {},
    isLoading: true
};

const imageReducer = (state = initialState, action) => {
    let newState;
    let newEntries;
    switch (action.type) {
        case LOAD_IMAGES:
            newState = { ...state };
            newEntries = {};
            action.images.forEach(image => {
                newEntries[image.id] = image;
            });
            newState.entries = newEntries;
            return newState;
        case LOAD_ONE:
            newState = { ...state };
            newEntries = {};
            newEntries[action.image?.id] = action.image;
            newState.entries = newEntries;
            return newState;
        case ADD_IMAGES:
            if (!state[action.pokemon.id]) {
                const newState = {
                    ...state,
                    [action.newImage.id]: action.newImage
                };
                return newState;
            };
            return {
                ...state,
                [action.newImage.id]: {
                    ...state[action.newImage.id],
                    ...action.newImage
                }
            };
        default:
            return state;
    };
};

export default imageReducer;
