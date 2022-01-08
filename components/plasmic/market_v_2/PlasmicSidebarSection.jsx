// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 09ZmCZkG7z
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSidebarSection.module.css"; // plasmic-import: 09ZmCZkG7z/css

export const PlasmicSidebarSection__VariantProps = new Array();

export const PlasmicSidebarSection__ArgProps = new Array("children", "title");

function PlasmicSidebarSection__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox___7Qh4)}>
        {p.renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__kwS7R)}>
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.children
        })}
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
      internalArgPropNames: PlasmicSidebarSection__ArgProps,
      internalVariantPropNames: PlasmicSidebarSection__VariantProps
    });

    return PlasmicSidebarSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebarSection";
  } else {
    func.displayName = `PlasmicSidebarSection.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebarSection = Object.assign(
  // Top-level PlasmicSidebarSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSidebarSection
    internalVariantProps: PlasmicSidebarSection__VariantProps,
    internalArgProps: PlasmicSidebarSection__ArgProps
  }
);

export default PlasmicSidebarSection;
/* prettier-ignore-end */
