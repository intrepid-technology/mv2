// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: qO2RNDhGk4
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextLinkUnderlinePrimary from "../../TextLinkUnderlinePrimary"; // plasmic-import: fFeX6kEAMB/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarAlert.module.css"; // plasmic-import: qO2RNDhGk4/css

export const PlasmicNavbarAlert__VariantProps = new Array("color");

export const PlasmicNavbarAlert__ArgProps = new Array();

function PlasmicNavbarAlert__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color_brandLight]: hasVariant(
          variants,
          "color",
          "brandLight"
        ),

        [sty.root__color_brand]: hasVariant(variants, "color", "brand"),
        [sty.root__color_dark]: hasVariant(variants, "color", "dark")
      })}
    >
      <TextLinkUnderlinePrimary
        data-plasmic-name={"textLinkUnderlinePrimary"}
        data-plasmic-override={overrides.textLinkUnderlinePrimary}
        className={classNames("__wab_instance", sty.textLinkUnderlinePrimary, {
          [sty.textLinkUnderlinePrimary__color_brand]: hasVariant(
            variants,
            "color",
            "brand"
          ),

          [sty.textLinkUnderlinePrimary__color_dark]: hasVariant(
            variants,
            "color",
            "dark"
          )
        })}
        color={
          hasVariant(variants, "color", "brand")
            ? "light"
            : hasVariant(variants, "color", "dark")
            ? "light"
            : "dark"
        }
        size={"_18"}
        text={"Important Update"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textLinkUnderlinePrimary"],
  textLinkUnderlinePrimary: ["textLinkUnderlinePrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarAlert__ArgProps,
      internalVariantPropNames: PlasmicNavbarAlert__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarAlert__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarAlert";
  } else {
    func.displayName = `PlasmicNavbarAlert.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarAlert = Object.assign(
  // Top-level PlasmicNavbarAlert renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textLinkUnderlinePrimary: makeNodeComponent("textLinkUnderlinePrimary"),
    // Metadata about props expected for PlasmicNavbarAlert
    internalVariantProps: PlasmicNavbarAlert__VariantProps,
    internalArgProps: PlasmicNavbarAlert__ArgProps
  }
);

export default PlasmicNavbarAlert;
/* prettier-ignore-end */
