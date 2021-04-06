import React, {useState} from 'react';
import Title from './Title';
import './index.css';
import UploadForm from './UploadForm.js';
import ImageGrid from './ImageGrid.js';
import Modal from './Modal.js';
import ImageSlider from './ImageSlider.js';


function App() {
    const [selectedImg,setSelectedImg]=useState(null);

  return (
    <div className="App">
        <Title/>
      <UploadForm/>
      <ImageSlider/>
      <ImageGrid setSelectedImg ={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg}  setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
