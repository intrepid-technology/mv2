// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: NwC_LltBnY
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicIconElementCircle.module.css"; // plasmic-import: NwC_LltBnY/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon

export const PlasmicIconElementCircle__VariantProps = new Array("color");

export const PlasmicIconElementCircle__ArgProps = new Array("iconSlot");

function PlasmicIconElementCircle__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root,
        { [sty.root__color_brand]: hasVariant(variants, "color", "brand") }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox, {
          [sty.freeBox__color_brand]: hasVariant(variants, "color", "brand")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <PlusBoldIcon
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__lMJhj
              )}
              role={"img"}
            />
          ),

          value: args.iconSlot
        })}
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
      internalArgPropNames: PlasmicIconElementCircle__ArgProps,
      internalVariantPropNames: PlasmicIconElementCircle__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicIconElementCircle__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconElementCircle";
  } else {
    func.displayName = `PlasmicIconElementCircle.${nodeName}`;
  }
  return func;
}

export const PlasmicIconElementCircle = Object.assign(
  // Top-level PlasmicIconElementCircle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicIconElementCircle
    internalVariantProps: PlasmicIconElementCircle__VariantProps,
    internalArgProps: PlasmicIconElementCircle__ArgProps
  }
);

export default PlasmicIconElementCircle;
/* prettier-ignore-end */
