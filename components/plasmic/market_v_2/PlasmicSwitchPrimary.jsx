// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: M6TX-0ESZQ
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSwitchPrimary.module.css"; // plasmic-import: M6TX-0ESZQ/css

export const PlasmicSwitchPrimary__VariantProps = new Array(
  "_switch",
  "disabled",
  "color"
);

export const PlasmicSwitchPrimary__ArgProps = new Array();

function PlasmicSwitchPrimary__RenderFunc(props) {
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
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.root_switch]: hasVariant(variants, "_switch", "_switch"),
          [sty.root_switch_color_black]:
            hasVariant(variants, "color", "black") &&
            hasVariant(variants, "_switch", "_switch"),
          [sty.rootcolor_black_disabled_closed]:
            hasVariant(variants, "color", "black") &&
            hasVariant(variants, "disabled", "closed"),
          [sty.rootcolor_black_disabled_open]:
            hasVariant(variants, "disabled", "open") &&
            hasVariant(variants, "color", "black"),
          [sty.rootdisabled_closed]: hasVariant(variants, "disabled", "closed"),
          [sty.rootdisabled_open]: hasVariant(variants, "disabled", "open")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBox_switch]: hasVariant(variants, "_switch", "_switch"),
          [sty.freeBoxcolor_black_disabled_closed]:
            hasVariant(variants, "color", "black") &&
            hasVariant(variants, "disabled", "closed"),
          [sty.freeBoxcolor_black_disabled_open]:
            hasVariant(variants, "disabled", "open") &&
            hasVariant(variants, "color", "black"),
          [sty.freeBoxdisabled_closed]: hasVariant(
            variants,
            "disabled",
            "closed"
          ),

          [sty.freeBoxdisabled_open]: hasVariant(variants, "disabled", "open")
        })}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSwitchPrimary__ArgProps,
      internalVariantPropNames: PlasmicSwitchPrimary__VariantProps
    });

    return PlasmicSwitchPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSwitchPrimary";
  } else {
    func.displayName = `PlasmicSwitchPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitchPrimary = Object.assign(
  // Top-level PlasmicSwitchPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicSwitchPrimary
    internalVariantProps: PlasmicSwitchPrimary__VariantProps,
    internalArgProps: PlasmicSwitchPrimary__ArgProps
  }
);

export default PlasmicSwitchPrimary;
/* prettier-ignore-end */
