// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: dNsNyn-hp9
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
import * as sty from "./PlasmicSideBarButtonNewListing.module.css"; // plasmic-import: dNsNyn-hp9/css
import ListingIcon from "./icons/PlasmicIcon__Listing"; // plasmic-import: NNbE63A0Ys/icon

export const PlasmicSideBarButtonNewListing__VariantProps = new Array();

export const PlasmicSideBarButtonNewListing__ArgProps = new Array(
  "target",
  "trigger"
);

function PlasmicSideBarButtonNewListing__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <button
        data-plasmic-name={"newListing"}
        data-plasmic-override={overrides.newListing}
        className={classNames(defaultcss.button, sty.newListing)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"sideBarCardLink3"}
          data-plasmic-override={overrides.sideBarCardLink3}
          hasGap={true}
          className={classNames(defaultcss.all, sty.sideBarCardLink3)}
        >
          <ListingIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />

          <div
            data-plasmic-name={"box"}
            data-plasmic-override={overrides.box}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box
            )}
          >
            {"New listing"}
          </div>
        </p.Stack>
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "newListing", "sideBarCardLink3", "svg", "box"],
  newListing: ["newListing", "sideBarCardLink3", "svg", "box"],
  sideBarCardLink3: ["sideBarCardLink3", "svg", "box"],
  svg: ["svg"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSideBarButtonNewListing__ArgProps,
      internalVariantPropNames: PlasmicSideBarButtonNewListing__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSideBarButtonNewListing__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideBarButtonNewListing";
  } else {
    func.displayName = `PlasmicSideBarButtonNewListing.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBarButtonNewListing = Object.assign(
  // Top-level PlasmicSideBarButtonNewListing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    newListing: makeNodeComponent("newListing"),
    sideBarCardLink3: makeNodeComponent("sideBarCardLink3"),
    svg: makeNodeComponent("svg"),
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicSideBarButtonNewListing
    internalVariantProps: PlasmicSideBarButtonNewListing__VariantProps,
    internalArgProps: PlasmicSideBarButtonNewListing__ArgProps
  }
);

export default PlasmicSideBarButtonNewListing;
/* prettier-ignore-end */
