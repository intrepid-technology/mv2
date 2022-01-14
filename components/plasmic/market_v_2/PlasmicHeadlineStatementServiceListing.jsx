// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: CFkqhe0NX3
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicHeadlineStatementServiceListing.module.css"; // plasmic-import: CFkqhe0NX3/css

export const PlasmicHeadlineStatementServiceListing__VariantProps = new Array();

export const PlasmicHeadlineStatementServiceListing__ArgProps = new Array(
  "children"
);

function PlasmicHeadlineStatementServiceListing__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox__g9O1R)}>
        <div className={classNames(projectcss.all, sty.freeBox__hF6UG)}>
          {p.renderPlasmicSlot({
            defaultContents: "Lets get started with your listing.",
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
      internalArgPropNames: PlasmicHeadlineStatementServiceListing__ArgProps,
      internalVariantPropNames:
        PlasmicHeadlineStatementServiceListing__VariantProps
    });

    return PlasmicHeadlineStatementServiceListing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeadlineStatementServiceListing";
  } else {
    func.displayName = `PlasmicHeadlineStatementServiceListing.${nodeName}`;
  }
  return func;
}

export const PlasmicHeadlineStatementServiceListing = Object.assign(
  // Top-level PlasmicHeadlineStatementServiceListing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicHeadlineStatementServiceListing
    internalVariantProps: PlasmicHeadlineStatementServiceListing__VariantProps,
    internalArgProps: PlasmicHeadlineStatementServiceListing__ArgProps
  }
);

export default PlasmicHeadlineStatementServiceListing;
/* prettier-ignore-end */
