// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -OUVGqQU5t
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicNavLinkCounter.module.css"; // plasmic-import: -OUVGqQU5t/css

export const PlasmicNavLinkCounter__VariantProps = new Array("state");

export const PlasmicNavLinkCounter__ArgProps = new Array(
  "navLabel",
  "numberValue",
  "id",
  "destination"
);

function PlasmicNavLinkCounter__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        sty.root,
        { [sty.rootstate_selected]: hasVariant(variants, "state", "selected") }
      )}
      component={Link}
      href={args.destination}
      id={args.id}
      platform={"nextjs"}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parentstate_selected]: hasVariant(variants, "state", "selected")
        })}
      >
        <div
          data-plasmic-name={"linkParent"}
          data-plasmic-override={overrides.linkParent}
          className={classNames(projectcss.all, sty.linkParent)}
        >
          <div
            data-plasmic-name={"linkBg"}
            data-plasmic-override={overrides.linkBg}
            className={classNames(projectcss.all, sty.linkBg)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Counter Nav",
              value: args.navLabel,
              className: classNames(sty.slotTargetNavLabel, {
                [sty.slotTargetNavLabelstate_selected]: hasVariant(
                  variants,
                  "state",
                  "selected"
                )
              })
            })}
          </div>
        </div>

        <div
          data-plasmic-name={"numberParent"}
          data-plasmic-override={overrides.numberParent}
          className={classNames(projectcss.all, sty.numberParent)}
        >
          <div
            data-plasmic-name={"numberBg"}
            data-plasmic-override={overrides.numberBg}
            className={classNames(projectcss.all, sty.numberBg)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "######",
              value: args.numberValue,
              className: classNames(sty.slotTargetNumberValue, {
                [sty.slotTargetNumberValuestate_selected]: hasVariant(
                  variants,
                  "state",
                  "selected"
                )
              })
            })}
          </div>
        </div>
      </p.Stack>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "linkParent", "linkBg", "numberParent", "numberBg"],
  parent: ["parent", "linkParent", "linkBg", "numberParent", "numberBg"],
  linkParent: ["linkParent", "linkBg"],
  linkBg: ["linkBg"],
  numberParent: ["numberParent", "numberBg"],
  numberBg: ["numberBg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavLinkCounter__ArgProps,
      internalVariantPropNames: PlasmicNavLinkCounter__VariantProps
    });

    return PlasmicNavLinkCounter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavLinkCounter";
  } else {
    func.displayName = `PlasmicNavLinkCounter.${nodeName}`;
  }
  return func;
}

export const PlasmicNavLinkCounter = Object.assign(
  // Top-level PlasmicNavLinkCounter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    linkParent: makeNodeComponent("linkParent"),
    linkBg: makeNodeComponent("linkBg"),
    numberParent: makeNodeComponent("numberParent"),
    numberBg: makeNodeComponent("numberBg"),
    // Metadata about props expected for PlasmicNavLinkCounter
    internalVariantProps: PlasmicNavLinkCounter__VariantProps,
    internalArgProps: PlasmicNavLinkCounter__ArgProps
  }
);

export default PlasmicNavLinkCounter;
/* prettier-ignore-end */
