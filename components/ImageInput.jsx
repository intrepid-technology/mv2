import * as React from "react";

import {
  ref as firebaseRef,
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";

import { PlasmicImageInput } from "./plasmic/market_v_2/PlasmicImageInput";
import { randomString } from "../utils/common";
import slugify from "slugify";
import {v4 as uuidv4} from "uuid"

function ImageInput_({value, onFileChange, onFileUploaded, uploadToFirebase=true, ...props}, ref) {
  const [uploadProgress, setUploadProgress] = React.useState(0)
  const [fileUrl, setFileUrl] = React.useState("");

  const firebaseStorage = getStorage();

  const handleOnChange = files => {
    const file = files[0]
    onFileChange && onFileChange(file)

    if(uploadToFirebase){
      handleUploadToFirebase(file)
    }
  }
  const handleUploadToFirebase = (file) => {
    const fileName = `${slugify(file.name)-uuidv4()}`
    var storageRef = firebaseRef(firebaseStorage, `images/${fileName}`);
    var uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        throw error;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setFileUrl(url);
          onFileUploaded && onFileUploaded(url)
        });
        
      }
    );
  };

  const fileInputId = `file-input-${randomString(10)}`

  React.useEffect(() => {
    setFileUrl(value)
  }, [value])

  return (
    <PlasmicImageInput
      root={{ 
        wrapChildren: (children) => (
          <>
            {children}
            <input
              type="file"
              name={fileInputId}
              id={fileInputId}
              style={{ display: "none" }}
              onChange={e => handleOnChange(e.target.files)}
            />
          </>
        )
       }}
      {...props}
      imageUrl={Boolean(fileUrl)}
      backgroundImage={{
        src: fileUrl
      }}
      overrides={{
        label: {
          props: {
            for: fileInputId,
          }
        }
      }}
    />
  );
}

const ImageInput = React.forwardRef(ImageInput_);

export default ImageInput;
