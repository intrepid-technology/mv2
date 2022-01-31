// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ta5dUay7HZW
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavLink from "../../NavLink"; // plasmic-import: jGROxaZ_Hy/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicNavbarPartnerEdit.module.css"; // plasmic-import: ta5dUay7HZW/css

export const PlasmicNavbarPartnerEdit__VariantProps = new Array(
  "navItems",
  "selected"
);

export const PlasmicNavbarPartnerEdit__ArgProps = new Array();

function PlasmicNavbarPartnerEdit__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"nav"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(variants, "navItems", "profile") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink__cz1Za, {
            [sty.navLinknavItems_membership__cz1ZAiXyRt]: hasVariant(
              variants,
              "navItems",
              "membership"
            ),

            [sty.navLinknavItems_profile__cz1ZaYjCyF]: hasVariant(
              variants,
              "navItems",
              "profile"
            ),

            [sty.navLinkselected_membership__cz1ZAbPAk]: hasVariant(
              variants,
              "selected",
              "membership"
            ),

            [sty.navLinkselected_profile__cz1ZaNcC59]: hasVariant(
              variants,
              "selected",
              "profile"
            )
          })}
          linkText={"Profile"}
          state={
            hasVariant(variants, "selected", "profile") ? "selected" : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "membership") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink__ivl4P, {
            [sty.navLinknavItems_membership__ivl4PiXyRt]: hasVariant(
              variants,
              "navItems",
              "membership"
            ),

            [sty.navLinknavItems_team__ivl4PjFsgI]: hasVariant(
              variants,
              "navItems",
              "team"
            ),

            [sty.navLinkselected_membership__ivl4PbPAk]: hasVariant(
              variants,
              "selected",
              "membership"
            ),

            [sty.navLinkselected_team__ivl4P1IcdX]: hasVariant(
              variants,
              "selected",
              "team"
            )
          })}
          linkText={"Membership"}
          state={
            hasVariant(variants, "selected", "membership")
              ? "selected"
              : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "team") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink__dq470, {
            [sty.navLinknavItems_team__dq470JFsgI]: hasVariant(
              variants,
              "navItems",
              "team"
            ),

            [sty.navLinknavItems_wallet__dq470G3QjD]: hasVariant(
              variants,
              "navItems",
              "wallet"
            ),

            [sty.navLinkselected_team__dq4701IcdX]: hasVariant(
              variants,
              "selected",
              "team"
            ),

            [sty.navLinkselected_wallet__dq470Nt4Sm]: hasVariant(
              variants,
              "selected",
              "wallet"
            )
          })}
          linkText={"Team"}
          state={
            hasVariant(variants, "selected", "team") ? "selected" : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "wallet") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink___5FXlO, {
            [sty.navLinknavItems_listings___5FXlO1Ixbv]: hasVariant(
              variants,
              "navItems",
              "listings"
            ),

            [sty.navLinknavItems_wallet___5FXlOg3QjD]: hasVariant(
              variants,
              "navItems",
              "wallet"
            ),

            [sty.navLinkselected_listings___5FXlOFpHaO]: hasVariant(
              variants,
              "selected",
              "listings"
            ),

            [sty.navLinkselected_wallet___5FXlONt4Sm]: hasVariant(
              variants,
              "selected",
              "wallet"
            )
          })}
          linkText={"Wallet"}
          state={
            hasVariant(variants, "selected", "wallet") ? "selected" : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "listings") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink__gf82X, {
            [sty.navLinknavItems_listings__gf82X1Ixbv]: hasVariant(
              variants,
              "navItems",
              "listings"
            ),

            [sty.navLinknavItems_projects__gf82XhjJim]: hasVariant(
              variants,
              "navItems",
              "projects"
            ),

            [sty.navLinkselected_listings__gf82XFpHaO]: hasVariant(
              variants,
              "selected",
              "listings"
            ),

            [sty.navLinkselected_projects__gf82Xut807]: hasVariant(
              variants,
              "selected",
              "projects"
            )
          })}
          linkText={"Listings"}
          state={
            hasVariant(variants, "selected", "listings")
              ? "selected"
              : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "projects") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink__rghSh, {
            [sty.navLinknavItems_performance__rghShuH82I]: hasVariant(
              variants,
              "navItems",
              "performance"
            ),

            [sty.navLinknavItems_projects__rghShhjJim]: hasVariant(
              variants,
              "navItems",
              "projects"
            ),

            [sty.navLinkselected_performance__rghShDNcsn]: hasVariant(
              variants,
              "selected",
              "performance"
            ),

            [sty.navLinkselected_projects__rghShut807]: hasVariant(
              variants,
              "selected",
              "projects"
            )
          })}
          linkText={"Projects"}
          state={
            hasVariant(variants, "selected", "projects")
              ? "selected"
              : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "performance") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink__kpVnm, {
            [sty.navLinknavItems_performance__kpVnMuH82I]: hasVariant(
              variants,
              "navItems",
              "performance"
            ),

            [sty.navLinknavItems_reviews__kpVnMsCk9S]: hasVariant(
              variants,
              "navItems",
              "reviews"
            ),

            [sty.navLinkselected_performance__kpVnmdNcsn]: hasVariant(
              variants,
              "selected",
              "performance"
            )
          })}
          linkText={"Performance"}
          state={
            hasVariant(variants, "selected", "performance")
              ? "selected"
              : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "reviews") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink__lIccw, {
            [sty.navLinknavItems_messages__lIccwypwUc]: hasVariant(
              variants,
              "navItems",
              "messages"
            ),

            [sty.navLinknavItems_reviews__lIccwsCk9S]: hasVariant(
              variants,
              "navItems",
              "reviews"
            ),

            [sty.navLinkselected_messages__lIccwer1Xk]: hasVariant(
              variants,
              "selected",
              "messages"
            ),

            [sty.navLinkselected_performance__lIccwDNcsn]: hasVariant(
              variants,
              "selected",
              "performance"
            ),

            [sty.navLinkselected_reviews__lIccwjVkQg]: hasVariant(
              variants,
              "selected",
              "reviews"
            )
          })}
          linkText={"Reviews"}
          state={
            hasVariant(variants, "selected", "reviews") ? "selected" : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "messages") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink___9Czou, {
            [sty.navLinknavItems_messages___9CzoUypwUc]: hasVariant(
              variants,
              "navItems",
              "messages"
            ),

            [sty.navLinknavItems_notifications___9Czou3Net8]: hasVariant(
              variants,
              "navItems",
              "notifications"
            ),

            [sty.navLinkselected_messages___9CzoUer1Xk]: hasVariant(
              variants,
              "selected",
              "messages"
            ),

            [sty.navLinkselected_notifications___9Czou4Dkdb]: hasVariant(
              variants,
              "selected",
              "notifications"
            )
          })}
          linkText={"Messages"}
          state={
            hasVariant(variants, "selected", "messages")
              ? "selected"
              : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "notifications") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink__ih1Ej, {
            [sty.navLinknavItems_notifications__ih1Ej3Net8]: hasVariant(
              variants,
              "navItems",
              "notifications"
            ),

            [sty.navLinknavItems_settings__ih1Ej0OrXb]: hasVariant(
              variants,
              "navItems",
              "settings"
            ),

            [sty.navLinkselected_notifications__ih1Ej4Dkdb]: hasVariant(
              variants,
              "selected",
              "notifications"
            ),

            [sty.navLinkselected_settings__ih1EjM9NE0]: hasVariant(
              variants,
              "selected",
              "settings"
            )
          })}
          linkText={"Notifications"}
          state={
            hasVariant(variants, "selected", "notifications")
              ? "selected"
              : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "navItems", "settings") ? true : true) ? (
        <NavLink
          className={classNames("__wab_instance", sty.navLink__p3X21, {
            [sty.navLinknavItems_settings__p3X210OrXb]: hasVariant(
              variants,
              "navItems",
              "settings"
            ),

            [sty.navLinkselected_settings__p3X21M9NE0]: hasVariant(
              variants,
              "selected",
              "settings"
            )
          })}
          linkText={"Settings"}
          state={
            hasVariant(variants, "selected", "settings")
              ? "selected"
              : undefined
          }
        />
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarPartnerEdit__ArgProps,
      internalVariantPropNames: PlasmicNavbarPartnerEdit__VariantProps
    });

    return PlasmicNavbarPartnerEdit__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarPartnerEdit";
  } else {
    func.displayName = `PlasmicNavbarPartnerEdit.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarPartnerEdit = Object.assign(
  // Top-level PlasmicNavbarPartnerEdit renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicNavbarPartnerEdit
    internalVariantProps: PlasmicNavbarPartnerEdit__VariantProps,
    internalArgProps: PlasmicNavbarPartnerEdit__ArgProps
  }
);

export default PlasmicNavbarPartnerEdit;
/* prettier-ignore-end */
