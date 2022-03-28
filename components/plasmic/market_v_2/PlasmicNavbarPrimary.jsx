// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Wo-euFIot3l
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
import NavbarLogo from "../../NavbarLogo"; // plasmic-import: oDDjpt5lQZ/component
import NavLink from "../../NavLink"; // plasmic-import: jGROxaZ_Hy/component
import NavbarAdminIcons from "../../NavbarAdminIcons"; // plasmic-import: -GlpTucHU-/component
import NavbarNotifications from "../../NavbarNotifications"; // plasmic-import: WoHRRICUYW/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicNavbarPrimary.module.css"; // plasmic-import: Wo-euFIot3l/css

export const PlasmicNavbarPrimary__VariantProps = new Array(
  "color",
  "user",
  "state"
);

export const PlasmicNavbarPrimary__ArgProps = new Array();

function PlasmicNavbarPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor]: hasVariant(variants, "color", "color"),
          [sty.rootuser_buyer]: hasVariant(variants, "user", "buyer")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.column__pLq0K, {
          [sty.columncolor__pLq0KBxq9H]: hasVariant(variants, "color", "color")
        })}
      >
        {(hasVariant(variants, "color", "color") ? false : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__lVy1A, {
              [sty.freeBoxcolor__lVy1ABxq9H]: hasVariant(
                variants,
                "color",
                "color"
              )
            })}
          >
            <NavbarLogo
              data-plasmic-name={"navbarLogo"}
              data-plasmic-override={overrides.navbarLogo}
              className={classNames("__wab_instance", sty.navbarLogo, {
                [sty.navbarLogocolor]: hasVariant(variants, "color", "color")
              })}
            />
          </div>
        ) : null}
        {(hasVariant(variants, "color", "color") ? true : false) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox___5OHj, {
              [sty.freeBoxcolor___5OHjBxq9H]: hasVariant(
                variants,
                "color",
                "color"
              )
            })}
          >
            {(hasVariant(variants, "color", "color") ? true : false) ? (
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link, {
                  [sty.linkcolor]: hasVariant(variants, "color", "color")
                })}
                component={Link}
                platform={"nextjs"}
              >
                {(hasVariant(variants, "color", "color") ? true : false) ? (
                  <img
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img,
                      { [sty.imgcolor]: hasVariant(variants, "color", "color") }
                    )}
                    src={"/plasmic/market_v_2/images/intrepidPrimaryBsvg.svg"}
                  />
                ) : null}
              </p.PlasmicLink>
            ) : null}
          </div>
        ) : null}
      </div>

      {(
        hasVariant(globalVariants, "screen", "iphone12ProMax") ? false : true
      ) ? (
        <div className={classNames(projectcss.all, sty.column__z7N9)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jeKoP, {
              [sty.freeBoxcolor__jeKoPBxq9H]: hasVariant(
                variants,
                "color",
                "color"
              )
            })}
          >
            {(
              hasVariant(globalVariants, "screen", "iphone12ProMax")
                ? false
                : true
            ) ? (
              <NavLink
                className={classNames("__wab_instance", sty.navLink__ook4Q, {
                  [sty.navLinkcolor__ook4QBxq9H]: hasVariant(
                    variants,
                    "color",
                    "color"
                  )
                })}
                color={
                  hasVariant(variants, "color", "color") ? "light" : undefined
                }
                linkText={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5NqCc
                    )}
                  >
                    {"Design"}
                  </div>
                }
              />
            ) : null}

            <NavLink
              className={classNames("__wab_instance", sty.navLink__zLUsd, {
                [sty.navLinkcolor__zLUsdBxq9H]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={
                hasVariant(variants, "color", "color") ? "light" : undefined
              }
              linkText={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zUdj
                  )}
                >
                  {"Web"}
                </div>
              }
            />

            {(
              hasVariant(globalVariants, "screen", "iphone12ProMax")
                ? false
                : true
            ) ? (
              <NavLink
                className={classNames("__wab_instance", sty.navLink__evGaK, {
                  [sty.navLinkcolor__evGaKBxq9H]: hasVariant(
                    variants,
                    "color",
                    "color"
                  )
                })}
                color={
                  hasVariant(variants, "color", "color") ? "light" : undefined
                }
                linkText={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5BIZq
                    )}
                  >
                    {"Mobile"}
                  </div>
                }
              />
            ) : null}

            <NavLink
              className={classNames("__wab_instance", sty.navLink__dKt0D, {
                [sty.navLinkcolor__dKt0DBxq9H]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={
                hasVariant(variants, "color", "color") ? "light" : undefined
              }
              linkText={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__s5XHu
                  )}
                >
                  {"No code"}
                </div>
              }
            />
          </p.Stack>
        </div>
      ) : null}

      <div className={classNames(projectcss.all, sty.column__i04AK)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__oGXjg, {
            [sty.freeBoxcolor__oGXjgBxq9H]: hasVariant(
              variants,
              "color",
              "color"
            )
          })}
        >
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? false
              : true
          ) ? (
            <NavLink
              className={classNames("__wab_instance", sty.navLink__d4A3C, {
                [sty.navLinkcolor__d4A3CBxq9H]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={
                hasVariant(variants, "color", "color") ? "light" : undefined
              }
              destination={"/partner/pricing"}
              linkText={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zfh0N,
                    {
                      [sty.textcolor__zfh0NBxq9H]: hasVariant(
                        variants,
                        "color",
                        "color"
                      )
                    }
                  )}
                >
                  {"Become a seller"}
                </div>
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? false
              : true
          ) ? (
            <NavbarAdminIcons
              data-plasmic-name={"navbarAdminIcons"}
              data-plasmic-override={overrides.navbarAdminIcons}
              className={classNames("__wab_instance", sty.navbarAdminIcons, {
                [sty.navbarAdminIconscolor]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              light={hasVariant(variants, "color", "color") ? true : undefined}
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? false
              : true
          ) ? (
            <NavbarNotifications
              data-plasmic-name={"navbarNotifications"}
              data-plasmic-override={overrides.navbarNotifications}
              className={classNames("__wab_instance", sty.navbarNotifications, {
                [sty.navbarNotificationscolor]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              light={hasVariant(variants, "color", "color") ? true : undefined}
            />
          ) : null}

          <UserAvatar
            data-plasmic-name={"userAvatar"}
            data-plasmic-override={overrides.userAvatar}
            className={classNames("__wab_instance", sty.userAvatar)}
            size={"_40"}
          />
        </p.Stack>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarLogo",
    "link",
    "img",
    "navbarAdminIcons",
    "navbarNotifications",
    "userAvatar"
  ],

  navbarLogo: ["navbarLogo"],
  link: ["link", "img"],
  img: ["img"],
  navbarAdminIcons: ["navbarAdminIcons"],
  navbarNotifications: ["navbarNotifications"],
  userAvatar: ["userAvatar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarPrimary__ArgProps,
      internalVariantPropNames: PlasmicNavbarPrimary__VariantProps
    });

    return PlasmicNavbarPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarPrimary";
  } else {
    func.displayName = `PlasmicNavbarPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarPrimary = Object.assign(
  // Top-level PlasmicNavbarPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarLogo: makeNodeComponent("navbarLogo"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    navbarAdminIcons: makeNodeComponent("navbarAdminIcons"),
    navbarNotifications: makeNodeComponent("navbarNotifications"),
    userAvatar: makeNodeComponent("userAvatar"),
    // Metadata about props expected for PlasmicNavbarPrimary
    internalVariantProps: PlasmicNavbarPrimary__VariantProps,
    internalArgProps: PlasmicNavbarPrimary__ArgProps
  }
);

export default PlasmicNavbarPrimary;
/* prettier-ignore-end */
