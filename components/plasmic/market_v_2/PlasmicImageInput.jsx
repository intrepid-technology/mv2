// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: lEht_5kSJO
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicImageInput.module.css"; // plasmic-import: lEht_5kSJO/css
import Icon105Icon from "./icons/PlasmicIcon__Icon105"; // plasmic-import: oRZoGOt72t/icon

export const PlasmicImageInput__VariantProps = new Array("imageUrl");

export const PlasmicImageInput__ArgProps = new Array();

function PlasmicImageInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__imageUrl]: hasVariant(variants, "imageUrl", "imageUrl")
      })}
    >
      {(hasVariant(variants, "imageUrl", "imageUrl") ? true : true) ? (
        <label
          data-plasmic-name={"label"}
          data-plasmic-override={overrides.label}
          className={classNames(defaultcss.all, sty.label, {
            [sty.label__imageUrl]: hasVariant(variants, "imageUrl", "imageUrl")
          })}
        >
          {(hasVariant(variants, "imageUrl", "imageUrl") ? true : true) ? (
            <Icon105Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, sty.svg, {
                [sty.svg__imageUrl]: hasVariant(
                  variants,
                  "imageUrl",
                  "imageUrl"
                )
              })}
              role={"img"}
            />
          ) : null}
          {(hasVariant(variants, "imageUrl", "imageUrl") ? true : true) ? (
            <img
              data-plasmic-name={"backgroundImage"}
              data-plasmic-override={overrides.backgroundImage}
              alt={""}
              className={classNames(defaultcss.img, sty.backgroundImage, {
                [sty.backgroundImage__imageUrl]: hasVariant(
                  variants,
                  "imageUrl",
                  "imageUrl"
                )
              })}
              loading={"lazy"}
            />
          ) : null}
        </label>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "label", "svg", "backgroundImage"],
  label: ["label", "svg", "backgroundImage"],
  svg: ["svg"],
  backgroundImage: ["backgroundImage"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicImageInput__ArgProps,
      internalVariantPropNames: PlasmicImageInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicImageInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImageInput";
  } else {
    func.displayName = `PlasmicImageInput.${nodeName}`;
  }
  return func;
}

export const PlasmicImageInput = Object.assign(
  // Top-level PlasmicImageInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    svg: makeNodeComponent("svg"),
    backgroundImage: makeNodeComponent("backgroundImage"),
    // Metadata about props expected for PlasmicImageInput
    internalVariantProps: PlasmicImageInput__VariantProps,
    internalArgProps: PlasmicImageInput__ArgProps
  }
);

export default PlasmicImageInput;
/* prettier-ignore-end */
