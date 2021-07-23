// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 9aF3UlfvfE
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTagMemberA.module.css"; // plasmic-import: 9aF3UlfvfE/css

export const PlasmicTagMemberA__VariantProps = new Array("inset");

export const PlasmicTagMemberA__ArgProps = new Array();

function PlasmicTagMemberA__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__inset]: hasVariant(variants, "inset", "inset")
      })}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.freeBox,
          { [sty.freeBox__inset]: hasVariant(variants, "inset", "inset") }
        )}
      >
        {"unicorn"}
      </div>
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
      internalArgPropNames: PlasmicTagMemberA__ArgProps,
      internalVariantPropNames: PlasmicTagMemberA__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTagMemberA__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTagMemberA";
  } else {
    func.displayName = `PlasmicTagMemberA.${nodeName}`;
  }
  return func;
}

export const PlasmicTagMemberA = Object.assign(
  // Top-level PlasmicTagMemberA renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicTagMemberA
    internalVariantProps: PlasmicTagMemberA__VariantProps,
    internalArgProps: PlasmicTagMemberA__ArgProps
  }
);

export default PlasmicTagMemberA;
/* prettier-ignore-end */
