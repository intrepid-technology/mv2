// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: fzhRfAQRK6
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicFormContext.module.css"; // plasmic-import: fzhRfAQRK6/css

export const PlasmicFormContext__VariantProps = new Array();

export const PlasmicFormContext__ArgProps = new Array("children");

function PlasmicFormContext__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <form
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: null,
        value: args.children
      })}
    </form>
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
      internalArgPropNames: PlasmicFormContext__ArgProps,
      internalVariantPropNames: PlasmicFormContext__VariantProps
    });

    return PlasmicFormContext__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFormContext";
  } else {
    func.displayName = `PlasmicFormContext.${nodeName}`;
  }
  return func;
}

export const PlasmicFormContext = Object.assign(
  // Top-level PlasmicFormContext renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFormContext
    internalVariantProps: PlasmicFormContext__VariantProps,
    internalArgProps: PlasmicFormContext__ArgProps
  }
);

export default PlasmicFormContext;
/* prettier-ignore-end */
