// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 3Jr3SgQnVV
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicButtonCircle.module.css"; // plasmic-import: 3Jr3SgQnVV/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon

export const PlasmicButtonCircle__VariantProps = new Array("size", "color");

export const PlasmicButtonCircle__ArgProps = new Array("icon");

function PlasmicButtonCircle__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.button,
        projectcss.root_reset,
        sty.root,
        { [sty.root__color_primary]: hasVariant(variants, "color", "primary") }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <PlusBoldIcon
              className={classNames(projectcss.all, sty.svg__kAtOj)}
              role={"img"}
            />
          ),

          value: args.icon
        })}
      </div>
    </button>
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
      internalArgPropNames: PlasmicButtonCircle__ArgProps,
      internalVariantPropNames: PlasmicButtonCircle__VariantProps
    });

    return PlasmicButtonCircle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonCircle";
  } else {
    func.displayName = `PlasmicButtonCircle.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonCircle = Object.assign(
  // Top-level PlasmicButtonCircle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicButtonCircle
    internalVariantProps: PlasmicButtonCircle__VariantProps,
    internalArgProps: PlasmicButtonCircle__ArgProps
  }
);

export default PlasmicButtonCircle;
/* prettier-ignore-end */
