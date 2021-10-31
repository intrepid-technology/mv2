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
import NavbarSave from "../../NavbarSave"; // plasmic-import: -GlpTucHU-/component
import NavbarBrief from "../../NavbarBrief"; // plasmic-import: WoHRRICUYW/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarPrimary.module.css"; // plasmic-import: Wo-euFIot3l/css

export const PlasmicNavbarPrimary__VariantProps = new Array(
  "color",
  "user",
  "state"
);

export const PlasmicNavbarPrimary__ArgProps = new Array();

function PlasmicNavbarPrimary__RenderFunc(props) {
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color]: hasVariant(variants, "color", "color"),
        [sty.root__user_buyer]: hasVariant(variants, "user", "buyer")
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.column__pLq0K, {
          [sty.column__color__pLq0KBxq9H]: hasVariant(
            variants,
            "color",
            "color"
          )
        })}
      >
        {(hasVariant(variants, "color", "color") ? false : true) ? (
          <div
            className={classNames(defaultcss.all, sty.freeBox__lVy1A, {
              [sty.freeBox__color__lVy1ABxq9H]: hasVariant(
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
                [sty.navbarLogo__color]: hasVariant(variants, "color", "color")
              })}
              destination={"/home"}
            />
          </div>
        ) : null}
        {(hasVariant(variants, "color", "color") ? true : false) ? (
          <div
            className={classNames(defaultcss.all, sty.freeBox___5OHj, {
              [sty.freeBox__color___5OHjBxq9H]: hasVariant(
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
                className={classNames(defaultcss.a, sty.link, {
                  [sty.link__color]: hasVariant(variants, "color", "color")
                })}
                component={Link}
                platform={"nextjs"}
              >
                {(hasVariant(variants, "color", "color") ? true : false) ? (
                  <img
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(defaultcss.img, sty.img, {
                      [sty.img__color]: hasVariant(variants, "color", "color")
                    })}
                    src={"/plasmic/market_v_2/images/intrepidPrimaryBsvg.svg"}
                  />
                ) : null}
              </p.PlasmicLink>
            ) : null}
          </div>
        ) : null}
      </div>

      {(
        hasVariant(globalVariants, "screen", "iphone678Plus") ? false : true
      ) ? (
        <div className={classNames(defaultcss.all, sty.column__z7N9)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__jeKoP, {
              [sty.freeBox__color__jeKoPBxq9H]: hasVariant(
                variants,
                "color",
                "color"
              )
            })}
          >
            {(
              hasVariant(globalVariants, "screen", "iphone678Plus")
                ? false
                : true
            ) ? (
              <NavLink
                className={classNames("__wab_instance", sty.navLink__ook4Q, {
                  [sty.navLink__color__ook4QBxq9H]: hasVariant(
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
                      defaultcss.all,
                      defaultcss.__wab_text,
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
                [sty.navLink__color__zLUsdBxq9H]: hasVariant(
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
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__zUdj
                  )}
                >
                  {"Web"}
                </div>
              }
            />

            {(
              hasVariant(globalVariants, "screen", "iphone678Plus")
                ? false
                : true
            ) ? (
              <NavLink
                className={classNames("__wab_instance", sty.navLink__evGaK, {
                  [sty.navLink__color__evGaKBxq9H]: hasVariant(
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
                      defaultcss.all,
                      defaultcss.__wab_text,
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
                [sty.navLink__color__dKt0DBxq9H]: hasVariant(
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
                    defaultcss.all,
                    defaultcss.__wab_text,
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

      <div className={classNames(defaultcss.all, sty.column__i04AK)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__oGXjg, {
            [sty.freeBox__color__oGXjgBxq9H]: hasVariant(
              variants,
              "color",
              "color"
            )
          })}
        >
          {(
            hasVariant(globalVariants, "screen", "iphone678Plus") ? false : true
          ) ? (
            <NavLink
              className={classNames("__wab_instance", sty.navLink__d4A3C, {
                [sty.navLink__color__d4A3CBxq9H]: hasVariant(
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
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__zfh0N,
                    {
                      [sty.text__color__zfh0NBxq9H]: hasVariant(
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
            hasVariant(globalVariants, "screen", "iphone678Plus") ? false : true
          ) ? (
            <NavbarSave
              data-plasmic-name={"navbarSave"}
              data-plasmic-override={overrides.navbarSave}
              className={classNames("__wab_instance", sty.navbarSave, {
                [sty.navbarSave__color]: hasVariant(variants, "color", "color")
              })}
              light={
                hasVariant(variants, "color", "color") ? "light" : undefined
              }
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone678Plus") ? false : true
          ) ? (
            <NavbarBrief
              data-plasmic-name={"navbarBrief"}
              data-plasmic-override={overrides.navbarBrief}
              className={classNames("__wab_instance", sty.navbarBrief, {
                [sty.navbarBrief__color]: hasVariant(variants, "color", "color")
              })}
              light={
                hasVariant(variants, "color", "color") ? "light" : undefined
              }
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
    "navbarSave",
    "navbarBrief",
    "userAvatar"
  ],

  navbarLogo: ["navbarLogo"],
  link: ["link", "img"],
  img: ["img"],
  navbarSave: ["navbarSave"],
  navbarBrief: ["navbarBrief"],
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

    const { dataFetches } = props;
    return PlasmicNavbarPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
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
    navbarSave: makeNodeComponent("navbarSave"),
    navbarBrief: makeNodeComponent("navbarBrief"),
    userAvatar: makeNodeComponent("userAvatar"),
    // Metadata about props expected for PlasmicNavbarPrimary
    internalVariantProps: PlasmicNavbarPrimary__VariantProps,
    internalArgProps: PlasmicNavbarPrimary__ArgProps
  }
);

export default PlasmicNavbarPrimary;
/* prettier-ignore-end */
