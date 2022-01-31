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
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicTagMemberC.module.css"; // plasmic-import: CybzTEvXYq/css

export const PlasmicTagMemberC__VariantProps = new Array("inset");

export const PlasmicTagMemberC__ArgProps = new Array();

function PlasmicTagMemberC__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.rootinset]: hasVariant(variants, "inset", "inset")
      })}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textinset]: hasVariant(variants, "inset", "inset")
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

    return PlasmicTagMemberC__RenderFunc({
      variants,
      args,
      overrides,
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
