// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: jFfoBtNGGG
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
import * as sty from "./PlasmicProgressBar.module.css"; // plasmic-import: jFfoBtNGGG/css

export const PlasmicProgressBar__VariantProps = new Array("progress");

export const PlasmicProgressBar__ArgProps = new Array();

function PlasmicProgressBar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__progress__100]: hasVariant(variants, "progress", "_100")
      })}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox, {
          [sty.freeBox__progress__100]: hasVariant(
            variants,
            "progress",
            "_100"
          ),

          [sty.freeBox__progress__20]: hasVariant(variants, "progress", "_20"),
          [sty.freeBox__progress__30]: hasVariant(variants, "progress", "_30"),
          [sty.freeBox__progress__40]: hasVariant(variants, "progress", "_40"),
          [sty.freeBox__progress__50]: hasVariant(variants, "progress", "_50"),
          [sty.freeBox__progress__60]: hasVariant(variants, "progress", "_60"),
          [sty.freeBox__progress__70]: hasVariant(variants, "progress", "_70"),
          [sty.freeBox__progress__80]: hasVariant(variants, "progress", "_80"),
          [sty.freeBox__progress__90]: hasVariant(variants, "progress", "_90")
        })}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProgressBar__ArgProps,
      internalVariantPropNames: PlasmicProgressBar__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicProgressBar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProgressBar";
  } else {
    func.displayName = `PlasmicProgressBar.${nodeName}`;
  }
  return func;
}

export const PlasmicProgressBar = Object.assign(
  // Top-level PlasmicProgressBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicProgressBar
    internalVariantProps: PlasmicProgressBar__VariantProps,
    internalArgProps: PlasmicProgressBar__ArgProps
  }
);

export default PlasmicProgressBar;
/* prettier-ignore-end */
