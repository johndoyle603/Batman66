import React from "react";
import "./style.css";

function PictureCard(props) {
  
  const pictureStyle = {
    background: `center / contain no-repeat url(${props.image})`
  }

  return (
    <div style={pictureStyle} onClick ={() => props.shufflePictures(props.id)} className="col-3 card"></div>
  );
}

export default PictureCard;
