// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: X-GLY42uIL
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTagPartnerB.module.css"; // plasmic-import: X-GLY42uIL/css

export const PlasmicTagPartnerB__VariantProps = new Array("inset");

export const PlasmicTagPartnerB__ArgProps = new Array();

function PlasmicTagPartnerB__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__inset]: hasVariant(variants, "inset", "inset")
      })}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.text__inset]: hasVariant(variants, "inset", "inset")
        })}
      >
        {"studio"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTagPartnerB__ArgProps,
      internalVariantPropNames: PlasmicTagPartnerB__VariantProps
    });

    return PlasmicTagPartnerB__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTagPartnerB";
  } else {
    func.displayName = `PlasmicTagPartnerB.${nodeName}`;
  }
  return func;
}

export const PlasmicTagPartnerB = Object.assign(
  // Top-level PlasmicTagPartnerB renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicTagPartnerB
    internalVariantProps: PlasmicTagPartnerB__VariantProps,
    internalArgProps: PlasmicTagPartnerB__ArgProps
  }
);

export default PlasmicTagPartnerB;
/* prettier-ignore-end */
