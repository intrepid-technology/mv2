import * as React from "react";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";

import { PlasmicServicelistingimage } from "../../../components/plasmic/market_v_2/PlasmicServicelistingimage";
import { get } from "lodash";
import { selectServiceListing } from "../../../state/serviceListing/selectors";
import { updateImageListingImage } from "../../../state/serviceListing/serviceListingSlice";

function Servicelistingimage() {
  const storage = getStorage();
  const [progress, setProgress] = React.useState(0);
  const [downloadURL, setDownloadURL] = React.useState("");
  const [images, setImages] = React.useState({});

  const serviceListing = useSelector(selectServiceListing);
  const dispatch = useDispatch();

  const handleUpload = (index) => (e) => {
    e.preventDefault();
    console.log(images);
    const image = images[index];
    var storageRef = ref(storage, "images/" + image.name);
    var uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        throw error;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadURL(url);
        });
        document.getElementById(`file${index}`).value = null;
      }
    );
  };

  const handleChange = (index) => (e) => {
    const newImages = { ...images };
    newImages[index] = e.target.files[0];
    if (e.target.files[0]) {
      setImages(newImages);
    }
  };

  React.useEffect(() => {
    console.log(downloadURL);
    if (downloadURL != "") {
      dispatch(
        updateImageListingImage({
          index: 1,
          url: downloadURL,
        })
      );
    }
  }, [downloadURL]);

  console.log("Image ", serviceListing);

  return (
    <>
      <a href="/service/listing/delivery">
        <button>Next</button>
      </a>
      {progress}% uploaded
      <br />
      <br />
      {[0, 1, 2, 3, 4].map((index, _) => (
        <div>
          <label>
            <input
              type="file"
              id={`file${index}`}
              onChange={handleChange(index)}
            />
            <br />
            <br />
            <button className="button" onClick={handleUpload(index)}>
              Upload <b>{index}</b>
            </button>
            <br />
            <br />
            {serviceListing.images[index] &&
              serviceListing.images[index].url != "" && (
                <img
                  className="ref"
                  src={
                    serviceListing.images[index].url ||
                    "https://via.placeholder.com/400x300"
                  }
                  alt="Uploaded Images"
                  height="300"
                  width="400"
                />
              )}
          </label>
          <br />
          <br />
          <br />
        </div>
      ))}
      <PlasmicServicelistingimage
        servicePrimaryImageInput={{
          value: get(serviceListing.images, 0)?.url,
          onFileUploaded: (uploadedFileUrl) => {
            dispatch(
              updateImageListingImage({
                index: 0,
                url: uploadedFileUrl,
              })
            );
          }
        }}
        serviceImageInputOne={{
          value: get(serviceListing.images, 1)?.url,
          onFileUploaded: (uploadedFileUrl) => {
            dispatch(
              updateImageListingImage({
                index: 1,
                url: uploadedFileUrl,
              })
            );
          }
        }}
        serviceImageInputTwo={{
          value: get(serviceListing.images, 2)?.url,
          onFileUploaded: (uploadedFileUrl) => {
            dispatch(
              updateImageListingImage({
                index: 2,
                url: uploadedFileUrl,
              })
            );
          }
        }}
        serviceImageInputThree={{
          value: get(serviceListing.images, 3)?.url,
          onFileUploaded: (uploadedFileUrl) => {
            dispatch(
              updateImageListingImage({
                index: 3,
                url: uploadedFileUrl,
              })
            );
          }
        }}
        serviceImageInputFour={{
          value: get(serviceListing.images, 4)?.url,
          onFileUploaded: (uploadedFileUrl) => {
            dispatch(
              updateImageListingImage({
                index: 4,
                url: uploadedFileUrl,
              })
            );
          }
        }}
      />
    </>
  );
}

export default Servicelistingimage;
