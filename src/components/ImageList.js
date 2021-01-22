import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
	const images = props.images.map((images) => {
		return <ImageCard key={images.id} image={images} />;
	});

	return <div className="image-list"> {images}</div>;
};

export default ImageList;