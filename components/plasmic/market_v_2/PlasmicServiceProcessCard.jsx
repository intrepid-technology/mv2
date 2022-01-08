// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: VPPN2nrcs6
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
import * as sty from "./PlasmicServiceProcessCard.module.css"; // plasmic-import: VPPN2nrcs6/css

export const PlasmicServiceProcessCard__VariantProps = new Array("size");

export const PlasmicServiceProcessCard__ArgProps = new Array(
  "children",
  "slot"
);

function PlasmicServiceProcessCard__RenderFunc(props) {
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
        [sty.root__size__360]: hasVariant(variants, "size", "_360")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pnfW4, {
          [sty.freeBox__size__360__pnfW4KfHaw]: hasVariant(
            variants,
            "size",
            "_360"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__yqk8E, {
            [sty.freeBox__size__360__yqk8EKfHaw]: hasVariant(
              variants,
              "size",
              "_360"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Headline Title",
            value: args.slot,
            className: classNames(sty.slotTargetSlot, {
              [sty.slotTargetSlot__size__360]: hasVariant(
                variants,
                "size",
                "_360"
              )
            })
          })}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: hasVariant(variants, "size", "_360")
            ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"
            : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren__size__360]: hasVariant(
              variants,
              "size",
              "_360"
            )
          })
        })}
      </p.Stack>
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
      internalArgPropNames: PlasmicServiceProcessCard__ArgProps,
      internalVariantPropNames: PlasmicServiceProcessCard__VariantProps
    });

    return PlasmicServiceProcessCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServiceProcessCard";
  } else {
    func.displayName = `PlasmicServiceProcessCard.${nodeName}`;
  }
  return func;
}

export const PlasmicServiceProcessCard = Object.assign(
  // Top-level PlasmicServiceProcessCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicServiceProcessCard
    internalVariantProps: PlasmicServiceProcessCard__VariantProps,
    internalArgProps: PlasmicServiceProcessCard__ArgProps
  }
);

export default PlasmicServiceProcessCard;
/* prettier-ignore-end */
