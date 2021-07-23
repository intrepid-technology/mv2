// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 3UeLqCywG7
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import CardSignUp from "../../CardSignUp"; // plasmic-import: kpT4G-q2jGd/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionSignUp.module.css"; // plasmic-import: 3UeLqCywG7/css
import Icon43Icon from "./icons/PlasmicIcon__Icon43"; // plasmic-import: naG0WWoBul/icon

export const PlasmicSectionSignUp__VariantProps = new Array();

export const PlasmicSectionSignUp__ArgProps = new Array();

function PlasmicSectionSignUp__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
        <div
          data-plasmic-name={"signUpFormContainerDiv"}
          data-plasmic-override={overrides.signUpFormContainerDiv}
          className={classNames(defaultcss.all, sty.signUpFormContainerDiv)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"signUpHeadlineDiv"}
            data-plasmic-override={overrides.signUpHeadlineDiv}
            hasGap={true}
            className={classNames(defaultcss.all, sty.signUpHeadlineDiv)}
          >
            <p.PlasmicLink
              data-plasmic-name={"svgLinkDiv"}
              data-plasmic-override={overrides.svgLinkDiv}
              className={classNames(defaultcss.all, sty.svgLinkDiv)}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              <Icon43Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(defaultcss.all, sty.svg)}
                role={"img"}
              />
            </p.PlasmicLink>

            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox
              )}
            >
              {"Sign up"}
            </div>

            <CardSignUp
              data-plasmic-name={"cardSignUp"}
              data-plasmic-override={overrides.cardSignUp}
              className={classNames("__wab_instance", sty.cardSignUp)}
            />
          </p.Stack>
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "signUpFormContainerDiv",
    "signUpHeadlineDiv",
    "svgLinkDiv",
    "svg",
    "freeBox",
    "cardSignUp"
  ],

  signUpFormContainerDiv: [
    "signUpFormContainerDiv",
    "signUpHeadlineDiv",
    "svgLinkDiv",
    "svg",
    "freeBox",
    "cardSignUp"
  ],

  signUpHeadlineDiv: [
    "signUpHeadlineDiv",
    "svgLinkDiv",
    "svg",
    "freeBox",
    "cardSignUp"
  ],

  svgLinkDiv: ["svgLinkDiv", "svg"],
  svg: ["svg"],
  freeBox: ["freeBox"],
  cardSignUp: ["cardSignUp"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionSignUp__ArgProps,
      internalVariantPropNames: PlasmicSectionSignUp__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSectionSignUp__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionSignUp";
  } else {
    func.displayName = `PlasmicSectionSignUp.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionSignUp = Object.assign(
  // Top-level PlasmicSectionSignUp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    signUpFormContainerDiv: makeNodeComponent("signUpFormContainerDiv"),
    signUpHeadlineDiv: makeNodeComponent("signUpHeadlineDiv"),
    svgLinkDiv: makeNodeComponent("svgLinkDiv"),
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),
    cardSignUp: makeNodeComponent("cardSignUp"),
    // Metadata about props expected for PlasmicSectionSignUp
    internalVariantProps: PlasmicSectionSignUp__VariantProps,
    internalArgProps: PlasmicSectionSignUp__ArgProps
  }
);

export default PlasmicSectionSignUp;
/* prettier-ignore-end */
