// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: hAog-BJq-d
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicCardQuestionServiceListing.module.css"; // plasmic-import: hAog-BJq-d/css

export const PlasmicCardQuestionServiceListing__VariantProps = new Array(
  "overline",
  "subhead"
);

export const PlasmicCardQuestionServiceListing__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

function PlasmicCardQuestionServiceListing__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__subhead]: hasVariant(variants, "subhead", "subhead")
      })}
    >
      {(hasVariant(variants, "overline", "overline") ? false : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__a1RRl, {
            [sty.freeBox__overline__a1RRl6KuDi]: hasVariant(
              variants,
              "overline",
              "overline"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__jUhaa, {
              [sty.freeBox__overline__jUhaa6KuDi]: hasVariant(
                variants,
                "overline",
                "overline"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Step 1",
              value: args.slot,
              className: classNames(sty.slotTargetSlot, {
                [sty.slotTargetSlot__overline]: hasVariant(
                  variants,
                  "overline",
                  "overline"
                )
              })
            })}
          </div>
        </div>
      ) : null}

      <div className={classNames(projectcss.all, sty.freeBox__dddfs)}>
        <div className={classNames(projectcss.all, sty.freeBox__ibtEe)}>
          {p.renderPlasmicSlot({
            defaultContents: "Question for user",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      </div>

      {(hasVariant(variants, "subhead", "subhead") ? false : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__lIIbI, {
            [sty.freeBox__subhead__lIIbIrfWuK]: hasVariant(
              variants,
              "subhead",
              "subhead"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Subhead",
            value: args.slot2,
            className: classNames(sty.slotTargetSlot2, {
              [sty.slotTargetSlot2__subhead]: hasVariant(
                variants,
                "subhead",
                "subhead"
              )
            })
          })}
        </div>
      ) : null}
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
      internalArgPropNames: PlasmicCardQuestionServiceListing__ArgProps,
      internalVariantPropNames: PlasmicCardQuestionServiceListing__VariantProps
    });

    return PlasmicCardQuestionServiceListing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardQuestionServiceListing";
  } else {
    func.displayName = `PlasmicCardQuestionServiceListing.${nodeName}`;
  }
  return func;
}

export const PlasmicCardQuestionServiceListing = Object.assign(
  // Top-level PlasmicCardQuestionServiceListing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCardQuestionServiceListing
    internalVariantProps: PlasmicCardQuestionServiceListing__VariantProps,
    internalArgProps: PlasmicCardQuestionServiceListing__ArgProps
  }
);

export default PlasmicCardQuestionServiceListing;
/* prettier-ignore-end */
