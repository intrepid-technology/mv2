// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: tmc24NnB44
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
import * as sty from "./PlasmicNavbarSwitch.module.css"; // plasmic-import: tmc24NnB44/css
import MenuHamburgerIcon from "./icons/PlasmicIcon__MenuHamburger"; // plasmic-import: EoyDB7Q1N/icon
import Icon170Icon from "./icons/PlasmicIcon__Icon170"; // plasmic-import: JricKendl/icon

export const PlasmicNavbarSwitch__VariantProps = new Array("close", "size");

export const PlasmicNavbarSwitch__ArgProps = new Array("target", "trigger");

function PlasmicNavbarSwitch__RenderFunc(props) {
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
        { [sty.root__close]: hasVariant(variants, "close", "close") }
      )}
    >
      <button
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(
          defaultcss.button,
          projectcss.button,
          sty.parent,
          {
            [sty.parent__close]: hasVariant(variants, "close", "close"),
            [sty.parent__size__16]: hasVariant(variants, "size", "_16"),
            [sty.parent__size__18]: hasVariant(variants, "size", "_18"),
            [sty.parent__size__24]: hasVariant(variants, "size", "_24"),
            [sty.parent__size__32]: hasVariant(variants, "size", "_32"),
            [sty.parent__size__36]: hasVariant(variants, "size", "_36"),
            [sty.parent__size__40]: hasVariant(variants, "size", "_40"),
            [sty.parent__size__48]: hasVariant(variants, "size", "_48")
          }
        )}
      >
        <p.PlasmicIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          PlasmicIconType={
            hasVariant(variants, "close", "close")
              ? Icon170Icon
              : MenuHamburgerIcon
          }
          className={classNames(defaultcss.all, projectcss.all, sty.svg, {
            [sty.svg__close]: hasVariant(variants, "close", "close")
          })}
          role={"img"}
        />
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "svg"],
  parent: ["parent", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarSwitch__ArgProps,
      internalVariantPropNames: PlasmicNavbarSwitch__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarSwitch__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarSwitch";
  } else {
    func.displayName = `PlasmicNavbarSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarSwitch = Object.assign(
  // Top-level PlasmicNavbarSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicNavbarSwitch
    internalVariantProps: PlasmicNavbarSwitch__VariantProps,
    internalArgProps: PlasmicNavbarSwitch__ArgProps
  }
);

export default PlasmicNavbarSwitch;
/* prettier-ignore-end */
