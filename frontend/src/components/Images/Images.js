import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getImages } from "../../store/image";
import './Images.css'

const Images = () => {
    const dispatch = useDispatch();
    const imagesObj = useSelector(state => state.imageState.entries);
    const images = Object.values(imagesObj);

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch]);

    return (
        <div className="explore-container">
            <div className="explore-hehe">
                <div className="hoho">
                    <p className="sasd">Images</p>
                </div>
                <div>
                    <div className="explore-imagescontainer">
                        {images.map(image => (
                            <NavLink to={`/images/${image.id}`}>
                                <ul key={image.id}>
                                    <img className="explore-images" src={image.imageUrl} alt='unavailable' />
                                </ul>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images;
