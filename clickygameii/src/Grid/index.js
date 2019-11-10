import React from "react";
import "./Grid.css";
import characters from "../characters.js"

// Create one row, map function, 50 rows. 

function Grid() {
    return (

        <div className="div1">
            <div className="row " >
                    {characters.map(character => {
                return (
                <div className="col-3-md imageGrid">
                        <img src={character.img}></img>
                </div>
                )
                    })

                    }
                {/* <div className="col-3-md imageGrid">
                <img src="/images/batmobile.jpg"></img>
                </div>
                <div className="col-3-md imageGrid">
                <img src="/images/batusi.jpg"></img>
                </div>
                <div className="col-3-md imageGrid">
                <img src="/images/catwomankitt.jpg"></img>
                </div> */}
            </div>
            
            {/* <div className="row ">
                <div className="col-3-md imageGrid">
                <img src="/images/catwomannewmar.jpg"></img>
                </div>
                <div className="col-3-md imageGrid">
                <img src="/images/egghead.jpg"></img>
                </div>
                <div className="col-3-md imageGrid">
                <img src="/images/joker.jpg"></img>
                </div>
                <div className="col-3-md imageGrid">
                <img src="/images/kapow.jpg"></img>
                </div>
            </div>

            <div className="row ">
                <div className="col-3-md imageGrid">
                <img src="/images/kingtut.jpg"></img>
                </div>
                <div className="col-3-md imageGrid">
                <img src="/images/penguin.jpg"></img>
                </div>
                <div className="col-3-md imageGrid">
                <img src="/images/riddler.jpg"></img>
                </div>
                <div className="col-3-md imageGrid">
                <img src="/images/robin.jpg"></img>
                </div>
            </div> */}
        </div >
    );
}

export default Grid