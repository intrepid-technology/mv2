// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: cwyuvAY7ua
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPanelButtonPowerUp.module.css"; // plasmic-import: cwyuvAY7ua/css
import BoostIcon from "./icons/PlasmicIcon__Boost"; // plasmic-import: X0sjJkcBKE/icon

export const PlasmicPanelButtonPowerUp__VariantProps = new Array();

export const PlasmicPanelButtonPowerUp__ArgProps = new Array(
  "target",
  "trigger",
  "destination"
);

function PlasmicPanelButtonPowerUp__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        data-plasmic-name={"powerUp"}
        data-plasmic-override={overrides.powerUp}
        className={classNames(defaultcss.a, sty.powerUp)}
        component={Link}
        href={args.destination}
        platform={"nextjs"}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"sideBarCardLink"}
          data-plasmic-override={overrides.sideBarCardLink}
          hasGap={true}
          className={classNames(defaultcss.all, sty.sideBarCardLink)}
        >
          <BoostIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text
            )}
          >
            {"Power up"}
          </div>
        </p.Stack>
      </p.PlasmicLink>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "powerUp", "sideBarCardLink", "svg", "text"],
  powerUp: ["powerUp", "sideBarCardLink", "svg", "text"],
  sideBarCardLink: ["sideBarCardLink", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPanelButtonPowerUp__ArgProps,
      internalVariantPropNames: PlasmicPanelButtonPowerUp__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPanelButtonPowerUp__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelButtonPowerUp";
  } else {
    func.displayName = `PlasmicPanelButtonPowerUp.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelButtonPowerUp = Object.assign(
  // Top-level PlasmicPanelButtonPowerUp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    powerUp: makeNodeComponent("powerUp"),
    sideBarCardLink: makeNodeComponent("sideBarCardLink"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicPanelButtonPowerUp
    internalVariantProps: PlasmicPanelButtonPowerUp__VariantProps,
    internalArgProps: PlasmicPanelButtonPowerUp__ArgProps
  }
);

export default PlasmicPanelButtonPowerUp;
/* prettier-ignore-end */
