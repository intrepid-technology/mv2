// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: CybzTEvXYq
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
import * as sty from "./PlasmicTagMemberC.module.css"; // plasmic-import: CybzTEvXYq/css

export const PlasmicTagMemberC__VariantProps = new Array("inset");

export const PlasmicTagMemberC__ArgProps = new Array();

function PlasmicTagMemberC__RenderFunc(props) {
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
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.text, {
          [sty.text__inset]: hasVariant(variants, "inset", "inset")
        })}
      >
        {"pro"}
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
      internalArgPropNames: PlasmicTagMemberC__ArgProps,
      internalVariantPropNames: PlasmicTagMemberC__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTagMemberC__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTagMemberC";
  } else {
    func.displayName = `PlasmicTagMemberC.${nodeName}`;
  }
  return func;
}

export const PlasmicTagMemberC = Object.assign(
  // Top-level PlasmicTagMemberC renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicTagMemberC
    internalVariantProps: PlasmicTagMemberC__VariantProps,
    internalArgProps: PlasmicTagMemberC__ArgProps
  }
);

export default PlasmicTagMemberC;
/* prettier-ignore-end */