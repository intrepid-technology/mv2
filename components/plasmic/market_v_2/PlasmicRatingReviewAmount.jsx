// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: DQHOPKeiwL
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicRatingReviewAmount.module.css"; // plasmic-import: DQHOPKeiwL/css

export const PlasmicRatingReviewAmount__VariantProps = new Array();

export const PlasmicRatingReviewAmount__ArgProps = new Array("children");

function PlasmicRatingReviewAmount__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox__q5Y0Z)}>
        <div className={classNames(projectcss.all, sty.freeBox___6AahO)}>
          {p.renderPlasmicSlot({
            defaultContents: "(12)",
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
      internalArgPropNames: PlasmicRatingReviewAmount__ArgProps,
      internalVariantPropNames: PlasmicRatingReviewAmount__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicRatingReviewAmount__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatingReviewAmount";
  } else {
    func.displayName = `PlasmicRatingReviewAmount.${nodeName}`;
  }
  return func;
}

export const PlasmicRatingReviewAmount = Object.assign(
  // Top-level PlasmicRatingReviewAmount renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRatingReviewAmount
    internalVariantProps: PlasmicRatingReviewAmount__VariantProps,
    internalArgProps: PlasmicRatingReviewAmount__ArgProps
  }
);

export default PlasmicRatingReviewAmount;
/* prettier-ignore-end */
