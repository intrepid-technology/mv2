// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Ixqb_1Xdrz
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTagMemberD.module.css"; // plasmic-import: Ixqb_1Xdrz/css

export const PlasmicTagMemberD__VariantProps = new Array("inset");

export const PlasmicTagMemberD__ArgProps = new Array();

function PlasmicTagMemberD__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.parent, {
        [sty.parent__inset]: hasVariant(variants, "inset", "inset")
      })}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.text__inset]: hasVariant(variants, "inset", "inset")
        })}
      >
        {"creator"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  parent: ["parent", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTagMemberD__ArgProps,
      internalVariantPropNames: PlasmicTagMemberD__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTagMemberD__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicTagMemberD";
  } else {
    func.displayName = `PlasmicTagMemberD.${nodeName}`;
  }
  return func;
}

export const PlasmicTagMemberD = Object.assign(
  // Top-level PlasmicTagMemberD renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicTagMemberD
    internalVariantProps: PlasmicTagMemberD__VariantProps,
    internalArgProps: PlasmicTagMemberD__ArgProps
  }
);

export default PlasmicTagMemberD;
/* prettier-ignore-end */
