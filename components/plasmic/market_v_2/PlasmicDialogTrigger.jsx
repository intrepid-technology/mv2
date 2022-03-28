// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: MVW-rzNNsa
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicDialogTrigger.module.css"; // plasmic-import: MVW-rzNNsa/css

export const PlasmicDialogTrigger__VariantProps = new Array();

export const PlasmicDialogTrigger__ArgProps = new Array(
  "children",
  "componentToRender"
);

function PlasmicDialogTrigger__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: null,
        value: args.children
      })}
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
      internalArgPropNames: PlasmicDialogTrigger__ArgProps,
      internalVariantPropNames: PlasmicDialogTrigger__VariantProps
    });

    return PlasmicDialogTrigger__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDialogTrigger";
  } else {
    func.displayName = `PlasmicDialogTrigger.${nodeName}`;
  }
  return func;
}

export const PlasmicDialogTrigger = Object.assign(
  // Top-level PlasmicDialogTrigger renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicDialogTrigger
    internalVariantProps: PlasmicDialogTrigger__VariantProps,
    internalArgProps: PlasmicDialogTrigger__ArgProps
  }
);

export default PlasmicDialogTrigger;
/* prettier-ignore-end */
