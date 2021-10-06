// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 5UV_WbRXrs
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavbarLogo from "../../NavbarLogo"; // plasmic-import: oDDjpt5lQZ/component
import TextLinkUnderlinePrimary from "../../TextLinkUnderlinePrimary"; // plasmic-import: fFeX6kEAMB/component
import ButtonLinkPrimary from "../../ButtonLinkPrimary"; // plasmic-import: d7dGAYuRCt/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarHomeCta.module.css"; // plasmic-import: 5UV_WbRXrs/css

export const PlasmicNavbarHomeCta__VariantProps = new Array("color");

export const PlasmicNavbarHomeCta__ArgProps = new Array();

function PlasmicNavbarHomeCta__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color_dark]: hasVariant(variants, "color", "dark")
      })}
    >
      <NavbarLogo
        data-plasmic-name={"navbarLogo"}
        data-plasmic-override={overrides.navbarLogo}
        className={classNames("__wab_instance", sty.navbarLogo, {
          [sty.navbarLogo__color_dark]: hasVariant(variants, "color", "dark")
        })}
        destination={
          hasVariant(globalVariants, "screen", "iphone678Plus")
            ? "/home"
            : hasVariant(globalVariants, "screen", "desktop")
            ? "/home"
            : "/home"
        }
        light={hasVariant(variants, "color", "dark") ? "light" : undefined}
      />

      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox, {
            [sty.freeBox__color_dark]: hasVariant(variants, "color", "dark")
          })}
        >
          {(
            hasVariant(globalVariants, "screen", "iphone678Plus")
              ? false
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : true
          ) ? (
            <TextLinkUnderlinePrimary
              data-plasmic-name={"textLinkUnderlinePrimary"}
              data-plasmic-override={overrides.textLinkUnderlinePrimary}
              className={classNames(
                "__wab_instance",
                sty.textLinkUnderlinePrimary,
                {
                  [sty.textLinkUnderlinePrimary__color_dark]: hasVariant(
                    variants,
                    "color",
                    "dark"
                  )
                }
              )}
              color={
                hasVariant(variants, "color", "dark") ? "light" : undefined
              }
              destination={
                hasVariant(globalVariants, "screen", "desktop")
                  ? "/member/pricing"
                  : "/member/pricing"
              }
              size={"_14"}
              text={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__hyKmE,
                    {
                      [sty.text__color_dark__hyKmE90H3U]: hasVariant(
                        variants,
                        "color",
                        "dark"
                      )
                    }
                  )}
                >
                  {hasVariant(globalVariants, "screen", "desktop")
                    ? "Become a member"
                    : "Become a member"}
                </div>
              }
            />
          ) : null}
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <ButtonLinkPrimary
              data-plasmic-name={"buttonLinkPrimary"}
              data-plasmic-override={overrides.buttonLinkPrimary}
              className={classNames("__wab_instance", sty.buttonLinkPrimary)}
              color={
                hasVariant(globalVariants, "screen", "desktop")
                  ? "brand"
                  : "brand"
              }
              destination={
                hasVariant(globalVariants, "screen", "iphone678Plus")
                  ? "/partner/pricing"
                  : hasVariant(globalVariants, "screen", "desktop")
                  ? "/partner/pricing"
                  : "/partner/pricing"
              }
              height={
                hasVariant(globalVariants, "screen", "desktop") ? "_36" : "_36"
              }
              text={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__nAyJs
                  )}
                >
                  {hasVariant(globalVariants, "screen", "desktop")
                    ? "Partner"
                    : "Partner"}
                </div>
              }
              type={
                hasVariant(globalVariants, "screen", "desktop")
                  ? "fill"
                  : "fill"
              }
              width={
                hasVariant(globalVariants, "screen", "iphone678Plus")
                  ? "_90"
                  : hasVariant(globalVariants, "screen", "desktop")
                  ? "_140"
                  : "_140"
              }
            />
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarLogo",
    "freeBox",
    "textLinkUnderlinePrimary",
    "buttonLinkPrimary"
  ],

  navbarLogo: ["navbarLogo"],
  freeBox: ["freeBox", "textLinkUnderlinePrimary", "buttonLinkPrimary"],
  textLinkUnderlinePrimary: ["textLinkUnderlinePrimary"],
  buttonLinkPrimary: ["buttonLinkPrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarHomeCta__ArgProps,
      internalVariantPropNames: PlasmicNavbarHomeCta__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarHomeCta";
  } else {
    func.displayName = `PlasmicNavbarHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarHomeCta = Object.assign(
  // Top-level PlasmicNavbarHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarLogo: makeNodeComponent("navbarLogo"),
    freeBox: makeNodeComponent("freeBox"),
    textLinkUnderlinePrimary: makeNodeComponent("textLinkUnderlinePrimary"),
    buttonLinkPrimary: makeNodeComponent("buttonLinkPrimary"),
    // Metadata about props expected for PlasmicNavbarHomeCta
    internalVariantProps: PlasmicNavbarHomeCta__VariantProps,
    internalArgProps: PlasmicNavbarHomeCta__ArgProps
  }
);

export default PlasmicNavbarHomeCta;
/* prettier-ignore-end */
