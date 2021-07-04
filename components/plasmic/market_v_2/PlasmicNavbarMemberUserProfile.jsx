// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: pRIPzCF9OFR
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
import NavLinkCounter from "../../NavLinkCounter"; // plasmic-import: -OUVGqQU5t/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarMemberUserProfile.module.css"; // plasmic-import: pRIPzCF9OFR/css

export const PlasmicNavbarMemberUserProfile__VariantProps = new Array(
  "selected"
);

export const PlasmicNavbarMemberUserProfile__ArgProps = new Array();

function PlasmicNavbarMemberUserProfile__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    hasVariant(globalVariants, "screen", "mobileAPrimary")
      ? true
      : hasVariant(globalVariants, "screen", "desktopPrimary")
      ? true
      : true
  ) ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary")
          ? true
          : hasVariant(globalVariants, "screen", "desktopPrimary")
          ? true
          : true
      ) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"parent"}
          data-plasmic-override={overrides.parent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.parent)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? true
              : hasVariant(globalVariants, "screen", "desktopPrimary")
              ? true
              : true
          ) ? (
            <NavLink
              data-plasmic-name={"navLink"}
              data-plasmic-override={overrides.navLink}
              className={classNames("__wab_instance", sty.navLink, {
                [sty.navLink__selected_lists]: hasVariant(
                  variants,
                  "selected",
                  "lists"
                ),

                [sty.navLink__selected_reacts]: hasVariant(
                  variants,
                  "selected",
                  "reacts"
                ),

                [sty.navLink__selected_reviews]: hasVariant(
                  variants,
                  "selected",
                  "reviews"
                ),

                [sty.navLink__selected_subscriptions]: hasVariant(
                  variants,
                  "selected",
                  "subscriptions"
                ),

                [sty.navLink__selected_teams]: hasVariant(
                  variants,
                  "selected",
                  "teams"
                ),

                [sty.navLink__selected_views]: hasVariant(
                  variants,
                  "selected",
                  "views"
                )
              })}
              linkText={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "About"
                  : "About"
              }
              state={
                hasVariant(variants, "selected", "views")
                  ? undefined
                  : hasVariant(variants, "selected", "reacts")
                  ? undefined
                  : hasVariant(variants, "selected", "reviews")
                  ? undefined
                  : hasVariant(variants, "selected", "teams")
                  ? undefined
                  : hasVariant(variants, "selected", "lists")
                  ? undefined
                  : hasVariant(variants, "selected", "subscriptions")
                  ? undefined
                  : hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "selected"
                  : "selected"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? true
              : hasVariant(globalVariants, "screen", "desktopPrimary")
              ? true
              : true
          ) ? (
            <NavLinkCounter
              className={classNames(
                "__wab_instance",
                sty.navLinkCounter__oHamT,
                {
                  [sty.navLinkCounter__selected_subscriptions__oHamTujdpy]:
                    hasVariant(variants, "selected", "subscriptions")
                }
              )}
              navLabel={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "Subscriptions"
                  : "Subscriptions"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "3"
                  : "3"
              }
              state={
                hasVariant(variants, "selected", "subscriptions")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? true
              : hasVariant(globalVariants, "screen", "desktopPrimary")
              ? true
              : true
          ) ? (
            <NavLinkCounter
              className={classNames(
                "__wab_instance",
                sty.navLinkCounter__riK08,
                {
                  [sty.navLinkCounter__selected_lists__riK08XhjTx]: hasVariant(
                    variants,
                    "selected",
                    "lists"
                  )
                }
              )}
              navLabel={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "Lists"
                  : "Lists"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "12"
                  : "12"
              }
              state={
                hasVariant(variants, "selected", "lists")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? true
              : hasVariant(globalVariants, "screen", "desktopPrimary")
              ? true
              : true
          ) ? (
            <NavLinkCounter
              className={classNames(
                "__wab_instance",
                sty.navLinkCounter__dlrUd,
                {
                  [sty.navLinkCounter__selected_teams__dlrUdVokeS]: hasVariant(
                    variants,
                    "selected",
                    "teams"
                  )
                }
              )}
              navLabel={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "Teams"
                  : "Teams"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "12"
                  : "12"
              }
              state={
                hasVariant(variants, "selected", "teams")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? true
              : hasVariant(globalVariants, "screen", "desktopPrimary")
              ? true
              : true
          ) ? (
            <NavLinkCounter
              className={classNames(
                "__wab_instance",
                sty.navLinkCounter__mw6Hn,
                {
                  [sty.navLinkCounter__selected_reviews__mw6Hn7FUms]:
                    hasVariant(variants, "selected", "reviews")
                }
              )}
              navLabel={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "Reviews"
                  : "Reviews"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "12"
                  : "12"
              }
              state={
                hasVariant(variants, "selected", "reviews")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? true
              : hasVariant(globalVariants, "screen", "desktopPrimary")
              ? true
              : true
          ) ? (
            <NavLinkCounter
              className={classNames(
                "__wab_instance",
                sty.navLinkCounter__e2ZcH,
                {
                  [sty.navLinkCounter__selected_reacts__e2ZcHTlSa9]: hasVariant(
                    variants,
                    "selected",
                    "reacts"
                  )
                }
              )}
              navLabel={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "Reacts"
                  : "Reacts"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "999"
                  : "999"
              }
              state={
                hasVariant(variants, "selected", "reacts")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? true
              : hasVariant(globalVariants, "screen", "desktopPrimary")
              ? true
              : true
          ) ? (
            <NavLinkCounter
              className={classNames(
                "__wab_instance",
                sty.navLinkCounter__hXcX2,
                {
                  [sty.navLinkCounter__selected_views__hXcX2AKc8]: hasVariant(
                    variants,
                    "selected",
                    "views"
                  )
                }
              )}
              navLabel={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "Views"
                  : "Views"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "999"
                  : "999"
              }
              state={
                hasVariant(variants, "selected", "views")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "parent", "navLink"],
  parent: ["parent", "navLink"],
  navLink: ["navLink"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarMemberUserProfile__ArgProps,
      internalVariantPropNames: PlasmicNavbarMemberUserProfile__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarMemberUserProfile__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarMemberUserProfile";
  } else {
    func.displayName = `PlasmicNavbarMemberUserProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarMemberUserProfile = Object.assign(
  // Top-level PlasmicNavbarMemberUserProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    navLink: makeNodeComponent("navLink"),
    // Metadata about props expected for PlasmicNavbarMemberUserProfile
    internalVariantProps: PlasmicNavbarMemberUserProfile__VariantProps,
    internalArgProps: PlasmicNavbarMemberUserProfile__ArgProps
  }
);

export default PlasmicNavbarMemberUserProfile;
/* prettier-ignore-end */
