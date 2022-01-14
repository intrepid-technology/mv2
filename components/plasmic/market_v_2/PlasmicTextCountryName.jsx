// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: LpckH3-q6t
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicTextCountryName.module.css"; // plasmic-import: LpckH3-q6t/css

export const PlasmicTextCountryName__VariantProps = new Array();

export const PlasmicTextCountryName__ArgProps = new Array("children");

function PlasmicTextCountryName__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Country",
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
      internalArgPropNames: PlasmicTextCountryName__ArgProps,
      internalVariantPropNames: PlasmicTextCountryName__VariantProps
    });

    return PlasmicTextCountryName__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextCountryName";
  } else {
    func.displayName = `PlasmicTextCountryName.${nodeName}`;
  }
  return func;
}

export const PlasmicTextCountryName = Object.assign(
  // Top-level PlasmicTextCountryName renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTextCountryName
    internalVariantProps: PlasmicTextCountryName__VariantProps,
    internalArgProps: PlasmicTextCountryName__ArgProps
  }
);

export default PlasmicTextCountryName;
/* prettier-ignore-end */
