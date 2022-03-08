import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/image";
import Image from "../Image/Image";
import './Images.css'

const Images = () => {
    const dispatch = useDispatch();
    const imagesObj = useSelector(state => state.imageState.entries);
    const images = Object.values(imagesObj)
    console.log("-------", images)

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch]);

    return (
        <div>
            <p className="sasd">Images</p>
            {images.map(({ id, imageUrl }) => (
                <Image key={id} id={id} content={imageUrl} />
            ))}
        </div>
    )
}

export default Images;
