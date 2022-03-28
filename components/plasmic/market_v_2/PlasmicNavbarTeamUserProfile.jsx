// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 6HzrYVr_1ZK
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavLink from "../../NavLink"; // plasmic-import: jGROxaZ_Hy/component
import NavLinkCounter from "../../NavLinkCounter"; // plasmic-import: -OUVGqQU5t/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicNavbarTeamUserProfile.module.css"; // plasmic-import: 6HzrYVr_1ZK/css

export const PlasmicNavbarTeamUserProfile__VariantProps = new Array("selected");

export const PlasmicNavbarTeamUserProfile__ArgProps = new Array();

function PlasmicNavbarTeamUserProfile__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
          [sty.rootselected_about]: hasVariant(variants, "selected", "about"),
          [sty.rootselected_partners]: hasVariant(
            variants,
            "selected",
            "partners"
          )
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parentselected_about]: hasVariant(variants, "selected", "about"),
          [sty.parentselected_partners]: hasVariant(
            variants,
            "selected",
            "partners"
          )
        })}
      >
        <NavLink
          data-plasmic-name={"navLink"}
          data-plasmic-override={overrides.navLink}
          className={classNames("__wab_instance", sty.navLink, {
            [sty.navLinkselected_about]: hasVariant(
              variants,
              "selected",
              "about"
            ),

            [sty.navLinkselected_listings]: hasVariant(
              variants,
              "selected",
              "listings"
            ),

            [sty.navLinkselected_members]: hasVariant(
              variants,
              "selected",
              "members"
            ),

            [sty.navLinkselected_packages]: hasVariant(
              variants,
              "selected",
              "packages"
            ),

            [sty.navLinkselected_partners]: hasVariant(
              variants,
              "selected",
              "partners"
            ),

            [sty.navLinkselected_performance]: hasVariant(
              variants,
              "selected",
              "performance"
            ),

            [sty.navLinkselected_reacts]: hasVariant(
              variants,
              "selected",
              "reacts"
            ),

            [sty.navLinkselected_saves]: hasVariant(
              variants,
              "selected",
              "saves"
            ),

            [sty.navLinkselected_team]: hasVariant(
              variants,
              "selected",
              "team"
            ),

            [sty.navLinkselected_views]: hasVariant(
              variants,
              "selected",
              "views"
            )
          })}
          linkText={"About"}
          state={
            hasVariant(variants, "selected", "members")
              ? undefined
              : hasVariant(variants, "selected", "team")
              ? undefined
              : hasVariant(variants, "selected", "saves")
              ? undefined
              : hasVariant(variants, "selected", "reacts")
              ? undefined
              : hasVariant(variants, "selected", "views")
              ? undefined
              : hasVariant(variants, "selected", "performance")
              ? undefined
              : hasVariant(variants, "selected", "packages")
              ? undefined
              : hasVariant(variants, "selected", "listings")
              ? undefined
              : hasVariant(variants, "selected", "partners")
              ? undefined
              : hasVariant(variants, "selected", "about")
              ? "selected"
              : "selected"
          }
        />

        <NavLinkCounter
          className={classNames("__wab_instance", sty.navLinkCounter___6WKoC, {
            [sty.navLinkCounterselected_listings___6WKoCatZ1V]: hasVariant(
              variants,
              "selected",
              "listings"
            )
          })}
          navLabel={"Listings"}
          numberValue={"9"}
          state={
            hasVariant(variants, "selected", "listings")
              ? "selected"
              : "disabled"
          }
        />

        <NavLinkCounter
          className={classNames("__wab_instance", sty.navLinkCounter__tx7Dj, {
            [sty.navLinkCounterselected_packages__tx7DjkVsPo]: hasVariant(
              variants,
              "selected",
              "packages"
            )
          })}
          navLabel={"Packages"}
          numberValue={"9"}
          state={
            hasVariant(variants, "selected", "packages")
              ? "selected"
              : "disabled"
          }
        />

        <NavLinkCounter
          className={classNames("__wab_instance", sty.navLinkCounter__lRhK, {
            [sty.navLinkCounterselected_performance__lRhKjT9Zy]: hasVariant(
              variants,
              "selected",
              "performance"
            )
          })}
          navLabel={"Performance"}
          numberValue={"12"}
          state={
            hasVariant(variants, "selected", "performance")
              ? "selected"
              : "disabled"
          }
        />

        <NavLinkCounter
          className={classNames("__wab_instance", sty.navLinkCounter___4GqA, {
            [sty.navLinkCounterselected_views___4GqA1AbJk]: hasVariant(
              variants,
              "selected",
              "views"
            )
          })}
          navLabel={"Views"}
          numberValue={"99,999"}
          state={
            hasVariant(variants, "selected", "views") ? "selected" : "disabled"
          }
        />

        <NavLinkCounter
          className={classNames("__wab_instance", sty.navLinkCounter__jlu83, {
            [sty.navLinkCounterselected_reacts__jlu83A9KXd]: hasVariant(
              variants,
              "selected",
              "reacts"
            )
          })}
          navLabel={"Reacts"}
          numberValue={"99,999"}
          state={
            hasVariant(variants, "selected", "reacts") ? "selected" : "disabled"
          }
        />

        <NavLinkCounter
          className={classNames("__wab_instance", sty.navLinkCounter__jsKxc, {
            [sty.navLinkCounterselected_saves__jsKxcioQd7]: hasVariant(
              variants,
              "selected",
              "saves"
            )
          })}
          navLabel={"Saves"}
          numberValue={"9"}
          state={
            hasVariant(variants, "selected", "saves") ? "selected" : "disabled"
          }
        />

        <NavLinkCounter
          className={classNames("__wab_instance", sty.navLinkCounter__dp0Z5, {
            [sty.navLinkCounterselected_team__dp0Z5WIx2]: hasVariant(
              variants,
              "selected",
              "team"
            )
          })}
          navLabel={"Team"}
          numberValue={"9"}
          state={
            hasVariant(variants, "selected", "team") ? "selected" : "disabled"
          }
        />

        <NavLinkCounter
          className={classNames("__wab_instance", sty.navLinkCounter__bsu8U, {
            [sty.navLinkCounterselected_members__bsu8UEaYwc]: hasVariant(
              variants,
              "selected",
              "members"
            )
          })}
          navLabel={"Members"}
          numberValue={"999"}
          state={
            hasVariant(variants, "selected", "members")
              ? "selected"
              : "disabled"
          }
        />

        <NavLinkCounter
          className={classNames("__wab_instance", sty.navLinkCounter__d1Mk9, {
            [sty.navLinkCounterselected_partners__d1Mk9PzLrn]: hasVariant(
              variants,
              "selected",
              "partners"
            )
          })}
          navLabel={"Partners"}
          numberValue={"9"}
          state={
            hasVariant(variants, "selected", "partners")
              ? "selected"
              : "disabled"
          }
        />
      </p.Stack>
    </div>
  );
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
      internalArgPropNames: PlasmicNavbarTeamUserProfile__ArgProps,
      internalVariantPropNames: PlasmicNavbarTeamUserProfile__VariantProps
    });

    return PlasmicNavbarTeamUserProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarTeamUserProfile";
  } else {
    func.displayName = `PlasmicNavbarTeamUserProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarTeamUserProfile = Object.assign(
  // Top-level PlasmicNavbarTeamUserProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    navLink: makeNodeComponent("navLink"),
    // Metadata about props expected for PlasmicNavbarTeamUserProfile
    internalVariantProps: PlasmicNavbarTeamUserProfile__VariantProps,
    internalArgProps: PlasmicNavbarTeamUserProfile__ArgProps
  }
);

export default PlasmicNavbarTeamUserProfile;
/* prettier-ignore-end */
