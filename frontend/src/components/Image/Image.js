import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getImage } from "../../store/image";
import Comments from "../Comments";
import CreateComment from "../CreateComments";
// import EditComment from "../EditComments";
import './Image.css'

const Image = () => {
    const sessionUser = useSelector(state => state.session.user);
    const imageObject = useSelector(state => state.imageState);
    const dispatch = useDispatch();
    const history = useHistory();
    const imageId = useParams();
    const image = imageObject.entries[imageId.id];

    useEffect(() => {
        dispatch(getImage(imageId.id));
    }, [dispatch, imageId.id]);

    const handleEdit = (e) => {
        e.preventDefault();
        history.push(`/images/${image?.id}/edit`);
    }

    let sessionButton;
    if (sessionUser?.id === image?.userId) {
        sessionButton = (
            <button className="image-edit" onClick={(e) => handleEdit(e)}>Edit</button>
        )
    } else {
        sessionButton = (
            <></>
        )
    }

    return (
        <div className="image-container">
            <div>
                <div className="image-feed">
                    <img className="image-image" src={image?.imageUrl} alt=''></img>
                </div>
                <div>
                    <CreateComment />
                </div>
                <div className="image-userinfo">
                    <div>
                        <h3>{image?.User?.username}</h3>
                    </div>
                    <div>
                        <p>{image?.content}</p>
                    </div>
                    {sessionButton}
                </div>
                <div>
                    <Comments image={image} />
                </div>
            </div>
        </div>
    );
};

export default Image;
