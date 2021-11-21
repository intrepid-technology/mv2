// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -iSTU_2K62
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicServiceListingImagesConfirmation.module.css"; // plasmic-import: -iSTU_2K62/css

export const PlasmicServiceListingImagesConfirmation__VariantProps =
  new Array();

export const PlasmicServiceListingImagesConfirmation__ArgProps = new Array();

function PlasmicServiceListingImagesConfirmation__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <img
        data-plasmic-name={"primaryImage"}
        data-plasmic-override={overrides.primaryImage}
        alt={""}
        className={classNames(defaultcss.img, projectcss.img, sty.primaryImage)}
        loading={"lazy"}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox)}
      >
        <img
          data-plasmic-name={"image1"}
          data-plasmic-override={overrides.image1}
          alt={""}
          className={classNames(defaultcss.img, projectcss.img, sty.image1)}
          loading={"lazy"}
        />

        <img
          data-plasmic-name={"image2"}
          data-plasmic-override={overrides.image2}
          alt={""}
          className={classNames(defaultcss.img, projectcss.img, sty.image2)}
          loading={"lazy"}
        />

        <img
          data-plasmic-name={"image3"}
          data-plasmic-override={overrides.image3}
          alt={""}
          className={classNames(defaultcss.img, projectcss.img, sty.image3)}
          loading={"lazy"}
        />

        <img
          data-plasmic-name={"image4"}
          data-plasmic-override={overrides.image4}
          alt={""}
          className={classNames(defaultcss.img, projectcss.img, sty.image4)}
          loading={"lazy"}
        />
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "primaryImage",
    "freeBox",
    "image1",
    "image2",
    "image3",
    "image4"
  ],

  primaryImage: ["primaryImage"],
  freeBox: ["freeBox", "image1", "image2", "image3", "image4"],
  image1: ["image1"],
  image2: ["image2"],
  image3: ["image3"],
  image4: ["image4"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicServiceListingImagesConfirmation__ArgProps,
      internalVariantPropNames:
        PlasmicServiceListingImagesConfirmation__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicServiceListingImagesConfirmation__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServiceListingImagesConfirmation";
  } else {
    func.displayName = `PlasmicServiceListingImagesConfirmation.${nodeName}`;
  }
  return func;
}

export const PlasmicServiceListingImagesConfirmation = Object.assign(
  // Top-level PlasmicServiceListingImagesConfirmation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    primaryImage: makeNodeComponent("primaryImage"),
    freeBox: makeNodeComponent("freeBox"),
    image1: makeNodeComponent("image1"),
    image2: makeNodeComponent("image2"),
    image3: makeNodeComponent("image3"),
    image4: makeNodeComponent("image4"),
    // Metadata about props expected for PlasmicServiceListingImagesConfirmation
    internalVariantProps: PlasmicServiceListingImagesConfirmation__VariantProps,
    internalArgProps: PlasmicServiceListingImagesConfirmation__ArgProps
  }
);

export default PlasmicServiceListingImagesConfirmation;
/* prettier-ignore-end */
