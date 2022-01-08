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
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarMemberUserProfile.module.css"; // plasmic-import: pRIPzCF9OFR/css

export const PlasmicNavbarMemberUserProfile__VariantProps = new Array(
  "selected"
);

export const PlasmicNavbarMemberUserProfile__ArgProps = new Array();

function PlasmicNavbarMemberUserProfile__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    hasVariant(globalVariants, "screen", "iphone12ProMax")
      ? true
      : hasVariant(globalVariants, "screen", "desktop")
      ? true
      : true
  ) ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      {(
        hasVariant(globalVariants, "screen", "iphone12ProMax")
          ? true
          : hasVariant(globalVariants, "screen", "desktop")
          ? true
          : true
      ) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"parent"}
          data-plasmic-override={overrides.parent}
          hasGap={true}
          className={classNames(projectcss.all, sty.parent)}
        >
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
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
                hasVariant(globalVariants, "screen", "desktop")
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
                  : hasVariant(globalVariants, "screen", "desktop")
                  ? "selected"
                  : "selected"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
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
                hasVariant(globalVariants, "screen", "desktop")
                  ? "Subscriptions"
                  : "Subscriptions"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktop") ? "3" : "278"
              }
              state={
                hasVariant(variants, "selected", "subscriptions")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
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
                hasVariant(globalVariants, "screen", "desktop")
                  ? "Lists"
                  : "Lists"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktop") ? "12" : "8"
              }
              state={
                hasVariant(variants, "selected", "lists")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
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
                hasVariant(globalVariants, "screen", "desktop")
                  ? "Teams"
                  : "Teams"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktop") ? "12" : "12"
              }
              state={
                hasVariant(variants, "selected", "teams")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
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
                hasVariant(globalVariants, "screen", "desktop")
                  ? "Reviews"
                  : "Reviews"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktop") ? "12" : "162"
              }
              state={
                hasVariant(variants, "selected", "reviews")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
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
                hasVariant(globalVariants, "screen", "desktop")
                  ? "Reacts"
                  : "Reacts"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktop") ? "999" : "24k"
              }
              state={
                hasVariant(variants, "selected", "reacts")
                  ? "selected"
                  : "disabled"
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
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
                hasVariant(globalVariants, "screen", "desktop")
                  ? "Views"
                  : "Views"
              }
              numberValue={
                hasVariant(globalVariants, "screen", "desktop") ? "999" : "100k"
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

    return PlasmicNavbarMemberUserProfile__RenderFunc({
      variants,
      args,
      overrides,
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
