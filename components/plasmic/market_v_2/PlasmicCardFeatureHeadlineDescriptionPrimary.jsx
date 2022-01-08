// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: qwkYbKgKSI
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardFeatureHeadlineDescriptionPrimary.module.css"; // plasmic-import: qwkYbKgKSI/css

export const PlasmicCardFeatureHeadlineDescriptionPrimary__VariantProps =
  new Array("alignment");

export const PlasmicCardFeatureHeadlineDescriptionPrimary__ArgProps = new Array(
  "headlineSlot",
  "bodyTextSlot"
);

function PlasmicCardFeatureHeadlineDescriptionPrimary__RenderFunc(props) {
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
      <div
        className={classNames(projectcss.all, sty.freeBox__jYdaR, {
          [sty.freeBox__alignment_left__jYdaR2HS6]: hasVariant(
            variants,
            "alignment",
            "left"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__dczna, {
            [sty.freeBox__alignment_left__dczna2HS6]: hasVariant(
              variants,
              "alignment",
              "left"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Headline feature description",
            value: args.headlineSlot,
            className: classNames(sty.slotTargetHeadlineSlot, {
              [sty.slotTargetHeadlineSlot__alignment_left]: hasVariant(
                variants,
                "alignment",
                "left"
              )
            })
          })}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__moGa5)}>
        <div className={classNames(projectcss.all, sty.freeBox__nex5S)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "135 characters max and try to keep it to four lines —————————————morning, when Gregor Samsa troubled dreams, he found himself trans in his bed into a horrible ",
            value: args.bodyTextSlot,
            className: classNames(sty.slotTargetBodyTextSlot, {
              [sty.slotTargetBodyTextSlot__alignment_left]: hasVariant(
                variants,
                "alignment",
                "left"
              )
            })
          })}
        </div>
      </div>
    </p.Stack>
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
      internalArgPropNames:
        PlasmicCardFeatureHeadlineDescriptionPrimary__ArgProps,
      internalVariantPropNames:
        PlasmicCardFeatureHeadlineDescriptionPrimary__VariantProps
    });

    return PlasmicCardFeatureHeadlineDescriptionPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardFeatureHeadlineDescriptionPrimary";
  } else {
    func.displayName = `PlasmicCardFeatureHeadlineDescriptionPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicCardFeatureHeadlineDescriptionPrimary = Object.assign(
  // Top-level PlasmicCardFeatureHeadlineDescriptionPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCardFeatureHeadlineDescriptionPrimary
    internalVariantProps:
      PlasmicCardFeatureHeadlineDescriptionPrimary__VariantProps,
    internalArgProps: PlasmicCardFeatureHeadlineDescriptionPrimary__ArgProps
  }
);

export default PlasmicCardFeatureHeadlineDescriptionPrimary;
/* prettier-ignore-end */
