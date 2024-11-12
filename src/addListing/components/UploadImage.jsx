import { storage } from '@/lib/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {useState } from 'react';
import { IoMdRemoveCircle } from 'react-icons/io';
function UploadImage({setimages , images}) {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      setUploadedImages((prev) => [...prev, file]);
    });
    setimages(uploadedImages)
  };

  const deleteImage = (image) => {
     let result = uploadedImages.filter((item)=> item != image)
     setUploadedImages(result)
  };

  function uploadTofirebase(){
    uploadedImages.forEach((file)=>{
      const filename = Date.now()+'.jpeg'
      const storageRef = ref(storage , 'OwnaCar-images/' + filename)
      const metaData= {
        contentType : 'images/jpeg'
      }
      uploadBytes(storageRef , file , metaData ).then((snapShot)=>{
        console.log('file uploaded')
      }).then( ()=>{
        getDownloadURL(storageRef).then(async(downloadUrl)=>{
          console.log(downloadUrl);
        })
      })
       
    })
  }

  return (
    <>
      <div className="mb-4 text-xl googlehandfontlb">Upload Image</div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-6">
        {uploadedImages.map((image, index) => (
        <div key={index} className='flex '>
            <div className='absolute m-1 cursor-pointer'
            onClick={()=>deleteImage(image)}
            ><IoMdRemoveCircle className='size-5'/></div>
            <img src={URL.createObjectURL(image)} alt="uploaded image" 
            className='w-full h-[108px] border-2 object-scale-down'/>
        </div>
        ))}
        <label htmlFor="uploadImage">
          <div className="px-20 py-10 bg-blue-200 border-2 border-blue-400 rounded text-center">
            +
          </div>
        </label>
        <input
          onChange={handleImageUpload}
          type="file"
          accept="image/*"
          multiple={true}
          className="hidden"
          id="uploadImage"
        />
      </div>
    </>
  );
}

export default UploadImage;