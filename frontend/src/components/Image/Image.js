import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImage } from "../../store/image";

const Image = () => {
    const dispatch = useDispatch();
    const imageId = useParams();
    const imageObject = useSelector(state => state.imageState.entries);
    const image = imageObject[imageId.id];

    useEffect(() => {
        dispatch(getImage(imageId.id));
    }, [dispatch]);

    return (
        <div>
            <p>NUIODGSNIOGDSAGDSANIJO</p>
        </div>
    );
};

export default Image;
