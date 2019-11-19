import React from "react";
import "./Grid.css";
import characters from "../characters.js"
import PictureCard from "../PictureCard"

// import {Row} from "react-bootstrap"

function Grid(props) {
    return (
        <div>
            <div className="row">
                    {characters.map((character, index) => {
                return (
                    <PictureCard className="col-md-3"
                    shufflePictures={props.shufflePictures}
                    id={character.id}
                    name={character.name}
                    image={character.img}
                  />
                )})}
            </div>
        </div >
    );
}

export default Grid;