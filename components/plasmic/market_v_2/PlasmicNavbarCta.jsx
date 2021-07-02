// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: J5QAJR3-82-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LogoHeader from "../../LogoHeader"; // plasmic-import: 9wNFT5FYWe/component
import NavLink from "../../NavLink"; // plasmic-import: jGROxaZ_Hy/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarCta.module.css"; // plasmic-import: J5QAJR3-82-/css

export const PlasmicNavbarCta__VariantProps = new Array("color", "persona");

export const PlasmicNavbarCta__ArgProps = new Array();

function PlasmicNavbarCta__RenderFunc(props) {
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
        [sty.root__color_persona_member]:
          hasVariant(variants, "color", "color") &&
          hasVariant(variants, "persona", "member"),
        [sty.root__color_persona_partner]:
          hasVariant(variants, "color", "color") &&
          hasVariant(variants, "persona", "partner"),
        [sty.root__persona_member]: hasVariant(variants, "persona", "member"),
        [sty.root__persona_partner]: hasVariant(variants, "persona", "partner")
      })}
    >
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(defaultcss.all, sty.columns)}
      >
        <div className={classNames(defaultcss.all, sty.column__z4Gl)}>
          <LogoHeader
            data-plasmic-name={"logoHeader"}
            data-plasmic-override={overrides.logoHeader}
            className={classNames("__wab_instance", sty.logoHeader, {
              [sty.logoHeader__persona_member]: hasVariant(
                variants,
                "persona",
                "member"
              )
            })}
          />
        </div>

        {(
          hasVariant(globalVariants, "screen", "mobileAPrimary") ? false : false
        ) ? (
          <div className={classNames(defaultcss.all, sty.column__g2M7Q)}>
            {(
              hasVariant(globalVariants, "screen", "mobileAPrimary")
                ? false
                : false
            ) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__kbtrj, {
                  [sty.box__color__kbtrJncUjG]: hasVariant(
                    variants,
                    "color",
                    "color"
                  )
                })}
              >
                {false ? (
                  <NavLink
                    className={classNames(
                      "__wab_instance",
                      sty.navLink__gAgnA,
                      {
                        [sty.navLink__color__gAgnAncUjG]: hasVariant(
                          variants,
                          "color",
                          "color"
                        )
                      }
                    )}
                    color={
                      hasVariant(variants, "color", "color")
                        ? "light"
                        : undefined
                    }
                    linkText={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__fu5Me,
                          {
                            [sty.box__color__fu5MencUjG]: hasVariant(
                              variants,
                              "color",
                              "color"
                            )
                          }
                        )}
                      >
                        {"Design"}
                      </div>
                    }
                  />
                ) : null}
                {false ? (
                  <NavLink
                    className={classNames(
                      "__wab_instance",
                      sty.navLink__fpcJz,
                      {
                        [sty.navLink__color__fpcJZncUjG]: hasVariant(
                          variants,
                          "color",
                          "color"
                        ),

                        [sty.navLink__persona_member__fpcJzDtKy1]: hasVariant(
                          variants,
                          "persona",
                          "member"
                        ),

                        [sty.navLink__persona_partner__fpcJz9HLiC]: hasVariant(
                          variants,
                          "persona",
                          "partner"
                        )
                      }
                    )}
                    color={
                      hasVariant(variants, "color", "color")
                        ? "light"
                        : undefined
                    }
                    linkText={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__qfmI4
                        )}
                      >
                        {"Mobile"}
                      </div>
                    }
                  />
                ) : null}

                <NavLink
                  className={classNames("__wab_instance", sty.navLink__zTpu0, {
                    [sty.navLink__color__zTpu0NcUjG]: hasVariant(
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
                        sty.box__rZjHv
                      )}
                    >
                      {"Web"}
                    </div>
                  }
                />

                <NavLink
                  className={classNames("__wab_instance", sty.navLink___5Pct6, {
                    [sty.navLink__color___5Pct6NcUjG]: hasVariant(
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
                        sty.box__pEnZm,
                        {
                          [sty.box__color__pEnZMncUjG]: hasVariant(
                            variants,
                            "color",
                            "color"
                          )
                        }
                      )}
                    >
                      {"No code"}
                    </div>
                  }
                />
              </p.Stack>
            ) : null}
          </div>
        ) : null}

        <div className={classNames(defaultcss.all, sty.column__mXhVi)}>
          <ButtonPrimary
            data-plasmic-name={"buttonPrimary"}
            data-plasmic-override={overrides.buttonPrimary}
            className={classNames("__wab_instance", sty.buttonPrimary, {
              [sty.buttonPrimary__color]: hasVariant(
                variants,
                "color",
                "color"
              ),

              [sty.buttonPrimary__color_persona_partner]:
                hasVariant(variants, "color", "color") &&
                hasVariant(variants, "persona", "partner"),
              [sty.buttonPrimary__persona_member]: hasVariant(
                variants,
                "persona",
                "member"
              ),

              [sty.buttonPrimary__persona_member_color]:
                hasVariant(variants, "persona", "member") &&
                hasVariant(variants, "color", "color"),
              [sty.buttonPrimary__persona_partner]: hasVariant(
                variants,
                "persona",
                "partner"
              )
            })}
            color={
              hasVariant(variants, "persona", "member") &&
              hasVariant(globalVariants, "screen", "mobileAPrimary")
                ? "brand"
                : hasVariant(variants, "persona", "partner") &&
                  hasVariant(globalVariants, "screen", "mobileAPrimary")
                ? "brand"
                : hasVariant(variants, "color", "color")
                ? "brand"
                : hasVariant(globalVariants, "screen", "mobileAPrimary")
                ? "brand"
                : hasVariant(globalVariants, "screen", "desktopPrimary")
                ? "brand"
                : "brand"
            }
            size={
              hasVariant(variants, "color", "color")
                ? "_140"
                : hasVariant(globalVariants, "screen", "desktopPrimary")
                ? "_140"
                : undefined
            }
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__uwHg0,
                {
                  [sty.box__color__uwHg0NcUjG]: hasVariant(
                    variants,
                    "color",
                    "color"
                  ),

                  [sty.box__color_persona_member__uwHg0NcUjGDtKy1]:
                    hasVariant(variants, "color", "color") &&
                    hasVariant(variants, "persona", "member"),
                  [sty.box__color_persona_partner__uwHg0NcUjG9HLiC]:
                    hasVariant(variants, "color", "color") &&
                    hasVariant(variants, "persona", "partner"),
                  [sty.box__persona_member__uwHg0DtKy1]: hasVariant(
                    variants,
                    "persona",
                    "member"
                  ),

                  [sty.box__persona_partner__uwHg09HLiC]: hasVariant(
                    variants,
                    "persona",
                    "partner"
                  )
                }
              )}
            >
              {hasVariant(variants, "color", "color") &&
              hasVariant(variants, "persona", "member")
                ? "Request access"
                : hasVariant(variants, "persona", "member")
                ? "Request"
                : hasVariant(variants, "persona", "partner") &&
                  hasVariant(globalVariants, "screen", "mobileAPrimary")
                ? "Apply"
                : hasVariant(variants, "persona", "partner")
                ? "Apply"
                : hasVariant(globalVariants, "screen", "mobileAPrimary")
                ? "Request"
                : hasVariant(globalVariants, "screen", "desktopPrimary")
                ? "Request access"
                : "Request access"}
            </div>
          </ButtonPrimary>
        </div>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "logoHeader", "buttonPrimary"],
  columns: ["columns", "logoHeader", "buttonPrimary"],
  logoHeader: ["logoHeader"],
  buttonPrimary: ["buttonPrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarCta__ArgProps,
      internalVariantPropNames: PlasmicNavbarCta__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarCta";
  } else {
    func.displayName = `PlasmicNavbarCta.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarCta = Object.assign(
  // Top-level PlasmicNavbarCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    logoHeader: makeNodeComponent("logoHeader"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    // Metadata about props expected for PlasmicNavbarCta
    internalVariantProps: PlasmicNavbarCta__VariantProps,
    internalArgProps: PlasmicNavbarCta__ArgProps
  }
);

export default PlasmicNavbarCta;
/* prettier-ignore-end */
