// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Wn4V4PrC-K
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicElementRadioPrimary.module.css"; // plasmic-import: Wn4V4PrC-K/css

export const PlasmicElementRadioPrimary__VariantProps = new Array(
  "selected",
  "size"
);

export const PlasmicElementRadioPrimary__ArgProps = new Array();

function PlasmicElementRadioPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"radioBorder"}
        data-plasmic-override={overrides.radioBorder}
        className={classNames(projectcss.all, sty.radioBorder, {
          [sty.radioBorder__selected]: hasVariant(
            variants,
            "selected",
            "selected"
          ),

          [sty.radioBorder__size__12Px]: hasVariant(variants, "size", "_12Px"),
          [sty.radioBorder__size__14Px]: hasVariant(variants, "size", "_14Px"),
          [sty.radioBorder__size__16Px]: hasVariant(variants, "size", "_16Px"),
          [sty.radioBorder__size__18Px]: hasVariant(variants, "size", "_18Px"),
          [sty.radioBorder__size__24Px]: hasVariant(variants, "size", "_24Px"),
          [sty.radioBorder__size__32Px]: hasVariant(variants, "size", "_32Px")
        })}
      >
        <div
          data-plasmic-name={"radioCore"}
          data-plasmic-override={overrides.radioCore}
          className={classNames(projectcss.all, sty.radioCore, {
            [sty.radioCore__selected]: hasVariant(
              variants,
              "selected",
              "selected"
            ),

            [sty.radioCore__size__12Px]: hasVariant(variants, "size", "_12Px"),
            [sty.radioCore__size__14Px]: hasVariant(variants, "size", "_14Px"),
            [sty.radioCore__size__16Px]: hasVariant(variants, "size", "_16Px"),
            [sty.radioCore__size__18Px]: hasVariant(variants, "size", "_18Px"),
            [sty.radioCore__size__24Px]: hasVariant(variants, "size", "_24Px"),
            [sty.radioCore__size__32Px]: hasVariant(variants, "size", "_32Px")
          })}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "radioBorder", "radioCore"],
  radioBorder: ["radioBorder", "radioCore"],
  radioCore: ["radioCore"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementRadioPrimary__ArgProps,
      internalVariantPropNames: PlasmicElementRadioPrimary__VariantProps
    });

    return PlasmicElementRadioPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementRadioPrimary";
  } else {
    func.displayName = `PlasmicElementRadioPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicElementRadioPrimary = Object.assign(
  // Top-level PlasmicElementRadioPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    radioBorder: makeNodeComponent("radioBorder"),
    radioCore: makeNodeComponent("radioCore"),
    // Metadata about props expected for PlasmicElementRadioPrimary
    internalVariantProps: PlasmicElementRadioPrimary__VariantProps,
    internalArgProps: PlasmicElementRadioPrimary__ArgProps
  }
);

export default PlasmicElementRadioPrimary;
/* prettier-ignore-end */
