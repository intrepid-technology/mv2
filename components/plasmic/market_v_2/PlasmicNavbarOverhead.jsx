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
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicNavbarOverhead.module.css"; // plasmic-import: 3cGFR-AqsO/css

export const PlasmicNavbarOverhead__VariantProps = new Array("colors");

export const PlasmicNavbarOverhead__ArgProps = new Array(
  "destination",
  "loginMain"
);

function PlasmicNavbarOverhead__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolors_brand]: hasVariant(variants, "colors", "brand"),
          [sty.rootcolors_dark]: hasVariant(variants, "colors", "dark")
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <NavLink
          data-plasmic-name={"memberPricing"}
          data-plasmic-override={overrides.memberPricing}
          className={classNames("__wab_instance", sty.memberPricing, {
            [sty.memberPricingcolors_brand]: hasVariant(
              variants,
              "colors",
              "brand"
            ),

            [sty.memberPricingcolors_dark]: hasVariant(
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
          destination={"/member/pricing"}
          linkText={"Members"}
        />

        <NavLink
          data-plasmic-name={"partnerPricing"}
          data-plasmic-override={overrides.partnerPricing}
          className={classNames("__wab_instance", sty.partnerPricing, {
            [sty.partnerPricingcolors_brand]: hasVariant(
              variants,
              "colors",
              "brand"
            ),

            [sty.partnerPricingcolors_dark]: hasVariant(
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
          destination={"/partner/sell"}
          linkText={"Partners"}
        />

        {(
          hasVariant(globalVariants, "screen", "iphone12ProMax") ? true : true
        ) ? (
          <NavLink
            data-plasmic-name={"loginMain"}
            data-plasmic-override={overrides.loginMain}
            className={classNames("__wab_instance", sty.loginMain, {
              [sty.loginMaincolors_brand]: hasVariant(
                variants,
                "colors",
                "brand"
              ),

              [sty.loginMaincolors_dark]: hasVariant(variants, "colors", "dark")
            })}
            color={
              hasVariant(variants, "colors", "brand")
                ? "light"
                : hasVariant(variants, "colors", "dark")
                ? "light"
                : "primary"
            }
            destination={"/log-in"}
            linkText={"Login"}
          />
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "memberPricing", "partnerPricing", "loginMain"],
  freeBox: ["freeBox", "memberPricing", "partnerPricing", "loginMain"],
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

    return PlasmicNavbarOverhead__RenderFunc({
      variants,
      args,
      overrides,
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
    freeBox: makeNodeComponent("freeBox"),
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
