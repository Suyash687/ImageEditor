import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import './style.css';

function Cropper() {


  const [src, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({});
  console.log(crop);
  return (
    <div className="container">
      <div className="row rinpu">
            <div className="col-8">
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <div>
                   {image && ( <h3>-x: {crop.x}, y: {crop.y}, height: {crop.height}, width: {crop.width}</h3>)}
                </div>
                
            </div>
            <div className="col-6 imgview">
                {src && (
                    <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop}/>
                   
                )}
                
            </div>
      </div>
    </div>
  );
}

export default Cropper;
