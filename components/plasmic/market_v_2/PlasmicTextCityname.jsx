// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: R9ilR9dEHy
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicTextCityname.module.css"; // plasmic-import: R9ilR9dEHy/css

export const PlasmicTextCityname__VariantProps = new Array();

export const PlasmicTextCityname__ArgProps = new Array();

function PlasmicTextCityname__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {"City"}
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
      internalArgPropNames: PlasmicTextCityname__ArgProps,
      internalVariantPropNames: PlasmicTextCityname__VariantProps
    });

    return PlasmicTextCityname__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextCityname";
  } else {
    func.displayName = `PlasmicTextCityname.${nodeName}`;
  }
  return func;
}

export const PlasmicTextCityname = Object.assign(
  // Top-level PlasmicTextCityname renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTextCityname
    internalVariantProps: PlasmicTextCityname__VariantProps,
    internalArgProps: PlasmicTextCityname__ArgProps
  }
);

export default PlasmicTextCityname;
/* prettier-ignore-end */
