// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: hIka2k2fkY
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicCardHeaderTitlePrimary.module.css"; // plasmic-import: hIka2k2fkY/css

export const PlasmicCardHeaderTitlePrimary__VariantProps = new Array();

export const PlasmicCardHeaderTitlePrimary__ArgProps = new Array(
  "children",
  "slot"
);

function PlasmicCardHeaderTitlePrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"hgroup"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <h5
        data-plasmic-name={"headlineLabel"}
        data-plasmic-override={overrides.headlineLabel}
        className={classNames(projectcss.all, projectcss.h5, sty.headlineLabel)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__xnfZf)}>
          {p.renderPlasmicSlot({
            defaultContents: "Headline Title",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      </h5>

      <div
        data-plasmic-name={"subhead"}
        data-plasmic-override={overrides.subhead}
        className={classNames(projectcss.all, sty.subhead)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__jIxRh)}>
          {p.renderPlasmicSlot({
            defaultContents: "Subhead",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "headlineLabel", "subhead"],
  headlineLabel: ["headlineLabel"],
  subhead: ["subhead"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardHeaderTitlePrimary__ArgProps,
      internalVariantPropNames: PlasmicCardHeaderTitlePrimary__VariantProps
    });

    return PlasmicCardHeaderTitlePrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardHeaderTitlePrimary";
  } else {
    func.displayName = `PlasmicCardHeaderTitlePrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicCardHeaderTitlePrimary = Object.assign(
  // Top-level PlasmicCardHeaderTitlePrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headlineLabel: makeNodeComponent("headlineLabel"),
    subhead: makeNodeComponent("subhead"),
    // Metadata about props expected for PlasmicCardHeaderTitlePrimary
    internalVariantProps: PlasmicCardHeaderTitlePrimary__VariantProps,
    internalArgProps: PlasmicCardHeaderTitlePrimary__ArgProps
  }
);

export default PlasmicCardHeaderTitlePrimary;
/* prettier-ignore-end */
