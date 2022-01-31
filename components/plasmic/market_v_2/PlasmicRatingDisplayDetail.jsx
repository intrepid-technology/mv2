// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: e_QdjWvrde
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import RatingScore from "../../RatingScore"; // plasmic-import: Us1NtWl4Zs/component
import RatingReviewAmount from "../../RatingReviewAmount"; // plasmic-import: DQHOPKeiwL/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicRatingDisplayDetail.module.css"; // plasmic-import: e_QdjWvrde/css
import SuperpowerIcon from "./icons/PlasmicIcon__Superpower"; // plasmic-import: ntMd1ebAoa/icon

export const PlasmicRatingDisplayDetail__VariantProps = new Array(
  "reviews",
  "color",
  "size"
);

export const PlasmicRatingDisplayDetail__ArgProps = new Array(
  "children",
  "slot"
);

function PlasmicRatingDisplayDetail__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <SuperpowerIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgsize__14]: hasVariant(variants, "size", "_14"),
          [sty.svgsize__16]: hasVariant(variants, "size", "_16")
        })}
        role={"img"}
      />

      <RatingScore
        data-plasmic-name={"ratingScore"}
        data-plasmic-override={overrides.ratingScore}
        className={classNames("__wab_instance", sty.ratingScore)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "4.67",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrencolor_primaryB]: hasVariant(
              variants,
              "color",
              "primaryB"
            ),

            [sty.slotTargetChildrensize__14]: hasVariant(
              variants,
              "size",
              "_14"
            ),

            [sty.slotTargetChildrensize__16]: hasVariant(
              variants,
              "size",
              "_16"
            )
          })
        })}
      </RatingScore>

      {(hasVariant(variants, "reviews", "reviews") ? false : true) ? (
        <RatingReviewAmount
          data-plasmic-name={"ratingReviewAmount"}
          data-plasmic-override={overrides.ratingReviewAmount}
          className={classNames("__wab_instance", sty.ratingReviewAmount, {
            [sty.ratingReviewAmountreviews]: hasVariant(
              variants,
              "reviews",
              "reviews"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "(12)",
            value: args.slot,
            className: classNames(sty.slotTargetSlot, {
              [sty.slotTargetSlotcolor_primaryB]: hasVariant(
                variants,
                "color",
                "primaryB"
              ),

              [sty.slotTargetSlotreviews]: hasVariant(
                variants,
                "reviews",
                "reviews"
              ),

              [sty.slotTargetSlotsize__14]: hasVariant(variants, "size", "_14"),
              [sty.slotTargetSlotsize__16]: hasVariant(variants, "size", "_16")
            })
          })}
        </RatingReviewAmount>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg", "ratingScore", "ratingReviewAmount"],
  svg: ["svg"],
  ratingScore: ["ratingScore"],
  ratingReviewAmount: ["ratingReviewAmount"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRatingDisplayDetail__ArgProps,
      internalVariantPropNames: PlasmicRatingDisplayDetail__VariantProps
    });

    return PlasmicRatingDisplayDetail__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatingDisplayDetail";
  } else {
    func.displayName = `PlasmicRatingDisplayDetail.${nodeName}`;
  }
  return func;
}

export const PlasmicRatingDisplayDetail = Object.assign(
  // Top-level PlasmicRatingDisplayDetail renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    ratingScore: makeNodeComponent("ratingScore"),
    ratingReviewAmount: makeNodeComponent("ratingReviewAmount"),
    // Metadata about props expected for PlasmicRatingDisplayDetail
    internalVariantProps: PlasmicRatingDisplayDetail__VariantProps,
    internalArgProps: PlasmicRatingDisplayDetail__ArgProps
  }
);

export default PlasmicRatingDisplayDetail;
/* prettier-ignore-end */
