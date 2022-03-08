import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/image";

const Images = () => {
    const dispatch = useDispatch();
    const images = useSelector(state => {
        return images.map(imageId => state.images[imageId]);
    });

}

export default Images;
