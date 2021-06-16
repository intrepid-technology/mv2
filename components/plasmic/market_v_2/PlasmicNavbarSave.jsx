// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -GlpTucHU-
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
import * as sty from "./PlasmicNavbarSave.module.css"; // plasmic-import: -GlpTucHU-/css
import BookmarkIcon from "./icons/PlasmicIcon__Bookmark"; // plasmic-import: 2qZ8N9GyOr/icon

export const PlasmicNavbarSave__VariantProps = new Array("color");

export const PlasmicNavbarSave__ArgProps = new Array();

function PlasmicNavbarSave__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color]: hasVariant(variants, "color", "color")
      })}
    >
      <BookmarkIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg, {
          [sty.svg__color]: hasVariant(variants, "color", "color")
        })}
        role={"img"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarSave__ArgProps,
      internalVariantPropNames: PlasmicNavbarSave__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarSave__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarSave";
  } else {
    func.displayName = `PlasmicNavbarSave.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarSave = Object.assign(
  // Top-level PlasmicNavbarSave renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicNavbarSave
    internalVariantProps: PlasmicNavbarSave__VariantProps,
    internalArgProps: PlasmicNavbarSave__ArgProps
  }
);

export default PlasmicNavbarSave;
/* prettier-ignore-end */
