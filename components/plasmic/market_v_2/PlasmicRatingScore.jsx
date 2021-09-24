// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Us1NtWl4Zs
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
import * as sty from "./PlasmicRatingScore.module.css"; // plasmic-import: Us1NtWl4Zs/css

export const PlasmicRatingScore__VariantProps = new Array();

export const PlasmicRatingScore__ArgProps = new Array("children");

function PlasmicRatingScore__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__csAfR)}>
        <div className={classNames(defaultcss.all, sty.freeBox___41N1L)}>
          {p.renderPlasmicSlot({
            defaultContents: "4.67",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRatingScore__ArgProps,
      internalVariantPropNames: PlasmicRatingScore__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicRatingScore__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatingScore";
  } else {
    func.displayName = `PlasmicRatingScore.${nodeName}`;
  }
  return func;
}

export const PlasmicRatingScore = Object.assign(
  // Top-level PlasmicRatingScore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRatingScore
    internalVariantProps: PlasmicRatingScore__VariantProps,
    internalArgProps: PlasmicRatingScore__ArgProps
  }
);

export default PlasmicRatingScore;
/* prettier-ignore-end */
