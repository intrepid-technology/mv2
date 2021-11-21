// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: nkuQ1X_r6B
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
import * as sty from "./PlasmicButtonCircleDelete.module.css"; // plasmic-import: nkuQ1X_r6B/css
import CircleXIcon from "./icons/PlasmicIcon__CircleX"; // plasmic-import: t9SuDpj6zV/icon

export const PlasmicButtonCircleDelete__VariantProps = new Array("size");

export const PlasmicButtonCircleDelete__ArgProps = new Array();

function PlasmicButtonCircleDelete__RenderFunc(props) {
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
        sty.root
      )}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(
          defaultcss.button,
          projectcss.button,
          sty.button,
          {
            [sty.button__size__16Px]: hasVariant(variants, "size", "_16Px"),
            [sty.button__size__18Px]: hasVariant(variants, "size", "_18Px"),
            [sty.button__size__24Px]: hasVariant(variants, "size", "_24Px"),
            [sty.button__size__32Px]: hasVariant(variants, "size", "_32Px"),
            [sty.button__size__48Px]: hasVariant(variants, "size", "_48Px")
          }
        )}
      >
        <div
          data-plasmic-name={"svgParent"}
          data-plasmic-override={overrides.svgParent}
          className={classNames(defaultcss.all, projectcss.all, sty.svgParent, {
            [sty.svgParent__size__16Px]: hasVariant(variants, "size", "_16Px"),
            [sty.svgParent__size__18Px]: hasVariant(variants, "size", "_18Px"),
            [sty.svgParent__size__24Px]: hasVariant(variants, "size", "_24Px"),
            [sty.svgParent__size__32Px]: hasVariant(variants, "size", "_32Px"),
            [sty.svgParent__size__48Px]: hasVariant(variants, "size", "_48Px")
          })}
        >
          <CircleXIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, projectcss.all, sty.svg, {
              [sty.svg__size__16Px]: hasVariant(variants, "size", "_16Px"),
              [sty.svg__size__18Px]: hasVariant(variants, "size", "_18Px"),
              [sty.svg__size__24Px]: hasVariant(variants, "size", "_24Px"),
              [sty.svg__size__32Px]: hasVariant(variants, "size", "_32Px")
            })}
            role={"img"}
          />
        </div>
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button", "svgParent", "svg"],
  button: ["button", "svgParent", "svg"],
  svgParent: ["svgParent", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonCircleDelete__ArgProps,
      internalVariantPropNames: PlasmicButtonCircleDelete__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonCircleDelete__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonCircleDelete";
  } else {
    func.displayName = `PlasmicButtonCircleDelete.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonCircleDelete = Object.assign(
  // Top-level PlasmicButtonCircleDelete renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    svgParent: makeNodeComponent("svgParent"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicButtonCircleDelete
    internalVariantProps: PlasmicButtonCircleDelete__VariantProps,
    internalArgProps: PlasmicButtonCircleDelete__ArgProps
  }
);

export default PlasmicButtonCircleDelete;
/* prettier-ignore-end */
