// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 92nEhkYBKr
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicButtonPowerUpPrimary.module.css"; // plasmic-import: 92nEhkYBKr/css
import BoostIcon from "./icons/PlasmicIcon__Boost"; // plasmic-import: X0sjJkcBKE/icon

export const PlasmicButtonPowerUpPrimary__VariantProps = new Array();

export const PlasmicButtonPowerUpPrimary__ArgProps = new Array();

function PlasmicButtonPowerUpPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.button, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"navbarListButtonTextParent2"}
        data-plasmic-override={overrides.navbarListButtonTextParent2}
        hasGap={true}
        className={classNames(defaultcss.all, sty.navbarListButtonTextParent2)}
      >
        <BoostIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg)}
          role={"img"}
        />

        <div
          data-plasmic-name={"navbarListButtonText2"}
          data-plasmic-override={overrides.navbarListButtonText2}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.navbarListButtonText2
          )}
        >
          {"Power up"}
        </div>
      </p.Stack>
    </button>
  );
}

const PlasmicDescendants = {
  root: ["root", "navbarListButtonTextParent2", "svg", "navbarListButtonText2"],
  navbarListButtonTextParent2: [
    "navbarListButtonTextParent2",
    "svg",
    "navbarListButtonText2"
  ],

  svg: ["svg"],
  navbarListButtonText2: ["navbarListButtonText2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonPowerUpPrimary__ArgProps,
      internalVariantPropNames: PlasmicButtonPowerUpPrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonPowerUpPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonPowerUpPrimary";
  } else {
    func.displayName = `PlasmicButtonPowerUpPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonPowerUpPrimary = Object.assign(
  // Top-level PlasmicButtonPowerUpPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarListButtonTextParent2: makeNodeComponent(
      "navbarListButtonTextParent2"
    ),

    svg: makeNodeComponent("svg"),
    navbarListButtonText2: makeNodeComponent("navbarListButtonText2"),
    // Metadata about props expected for PlasmicButtonPowerUpPrimary
    internalVariantProps: PlasmicButtonPowerUpPrimary__VariantProps,
    internalArgProps: PlasmicButtonPowerUpPrimary__ArgProps
  }
);

export default PlasmicButtonPowerUpPrimary;
/* prettier-ignore-end */