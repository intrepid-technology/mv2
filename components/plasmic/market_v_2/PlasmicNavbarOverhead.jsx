// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 3cGFR-AqsO
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavLink from "../../NavLink"; // plasmic-import: jGROxaZ_Hy/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarOverhead.module.css"; // plasmic-import: 3cGFR-AqsO/css

export const PlasmicNavbarOverhead__VariantProps = new Array("colors");

export const PlasmicNavbarOverhead__ArgProps = new Array(
  "destination",
  "loginMain"
);

function PlasmicNavbarOverhead__RenderFunc(props) {
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
        [sty.root__colors_brand]: hasVariant(variants, "colors", "brand"),
        [sty.root__colors_dark]: hasVariant(variants, "colors", "dark")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box)}
      >
        <NavLink
          data-plasmic-name={"memberPricing"}
          data-plasmic-override={overrides.memberPricing}
          className={classNames("__wab_instance", sty.memberPricing, {
            [sty.memberPricing__colors_brand]: hasVariant(
              variants,
              "colors",
              "brand"
            ),

            [sty.memberPricing__colors_dark]: hasVariant(
              variants,
              "colors",
              "dark"
            )
          })}
          color={
            hasVariant(variants, "colors", "brand")
              ? "light"
              : hasVariant(variants, "colors", "dark")
              ? "light"
              : "primary"
          }
          linkText={"Members"}
          memberPricing={"/member-pricing"}
        />

        <NavLink
          data-plasmic-name={"partnerPricing"}
          data-plasmic-override={overrides.partnerPricing}
          className={classNames("__wab_instance", sty.partnerPricing, {
            [sty.partnerPricing__colors_brand]: hasVariant(
              variants,
              "colors",
              "brand"
            ),

            [sty.partnerPricing__colors_dark]: hasVariant(
              variants,
              "colors",
              "dark"
            )
          })}
          color={
            hasVariant(variants, "colors", "brand")
              ? "light"
              : hasVariant(variants, "colors", "dark")
              ? "light"
              : "primary"
          }
          linkText={"Partners"}
          partnerPricing={"/partner-pricing"}
        />

        {(
          hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
        ) ? (
          <NavLink
            data-plasmic-name={"loginMain"}
            data-plasmic-override={overrides.loginMain}
            className={classNames("__wab_instance", sty.loginMain, {
              [sty.loginMain__colors_brand]: hasVariant(
                variants,
                "colors",
                "brand"
              ),

              [sty.loginMain__colors_dark]: hasVariant(
                variants,
                "colors",
                "dark"
              )
            })}
            color={
              hasVariant(variants, "colors", "brand")
                ? "light"
                : hasVariant(variants, "colors", "dark")
                ? "light"
                : "primary"
            }
            linkText={"Login"}
            loginMain={
              args.loginMain !== undefined ? args.loginMain : "/log-in"
            }
          />
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "box", "memberPricing", "partnerPricing", "loginMain"],
  box: ["box", "memberPricing", "partnerPricing", "loginMain"],
  memberPricing: ["memberPricing"],
  partnerPricing: ["partnerPricing"],
  loginMain: ["loginMain"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarOverhead__ArgProps,
      internalVariantPropNames: PlasmicNavbarOverhead__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarOverhead__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarOverhead";
  } else {
    func.displayName = `PlasmicNavbarOverhead.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarOverhead = Object.assign(
  // Top-level PlasmicNavbarOverhead renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    memberPricing: makeNodeComponent("memberPricing"),
    partnerPricing: makeNodeComponent("partnerPricing"),
    loginMain: makeNodeComponent("loginMain"),
    // Metadata about props expected for PlasmicNavbarOverhead
    internalVariantProps: PlasmicNavbarOverhead__VariantProps,
    internalArgProps: PlasmicNavbarOverhead__ArgProps
  }
);

export default PlasmicNavbarOverhead;
/* prettier-ignore-end */
