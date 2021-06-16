// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: cUzl2yx4mn
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
import * as sty from "./PlasmicTagMemberB.module.css"; // plasmic-import: cUzl2yx4mn/css

export const PlasmicTagMemberB__VariantProps = new Array("inset");

export const PlasmicTagMemberB__ArgProps = new Array();

function PlasmicTagMemberB__RenderFunc(props) {
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
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.box, {
          [sty.box__inset]: hasVariant(variants, "inset", "inset")
        })}
      >
        {"startup"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTagMemberB__ArgProps,
      internalVariantPropNames: PlasmicTagMemberB__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTagMemberB__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTagMemberB";
  } else {
    func.displayName = `PlasmicTagMemberB.${nodeName}`;
  }
  return func;
}

export const PlasmicTagMemberB = Object.assign(
  // Top-level PlasmicTagMemberB renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicTagMemberB
    internalVariantProps: PlasmicTagMemberB__VariantProps,
    internalArgProps: PlasmicTagMemberB__ArgProps
  }
);

export default PlasmicTagMemberB;
/* prettier-ignore-end */
