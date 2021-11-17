import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import { PlasmicServicelistingimage } from "../../../components/plasmic/market_v_2/PlasmicServicelistingimage";
import { get } from "lodash";
import { selectServiceListing } from "../../../state/serviceListing/selectors";
import { updateImageListingImage } from "../../../state/serviceListing/serviceListingSlice";

function Servicelistingimage() {
  const serviceListing = useSelector(selectServiceListing);
  const dispatch = useDispatch();

  return (
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
  );
}

export default Servicelistingimage;
