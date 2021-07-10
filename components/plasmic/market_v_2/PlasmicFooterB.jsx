// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: kxeO2gTzwxU
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavbarLogo from "../../NavbarLogo"; // plasmic-import: oDDjpt5lQZ/component
import FooterSocialLinkGroup from "../../FooterSocialLinkGroup"; // plasmic-import: 8gMaB72ItFH/component
import FooterSocialLink from "../../FooterSocialLink"; // plasmic-import: uQNvf8Lt2Y/component
import FooterLink from "../../FooterLink"; // plasmic-import: V79E-hyi-E/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicFooterB.module.css"; // plasmic-import: kxeO2gTzwxU/css
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: EaVXobEXiy/icon

export const PlasmicFooterB__VariantProps = new Array("color");

export const PlasmicFooterB__ArgProps = new Array();

function PlasmicFooterB__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"footer"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color_dark]: hasVariant(variants, "color", "dark"),
        [sty.root__color_light]: hasVariant(variants, "color", "light")
      })}
    >
      <NavbarLogo
        data-plasmic-name={"navbarLogo"}
        data-plasmic-override={overrides.navbarLogo}
        className={classNames("__wab_instance", sty.navbarLogo, {
          [sty.navbarLogo__color_dark]: hasVariant(variants, "color", "dark")
        })}
        destination={"/"}
        light={hasVariant(variants, "color", "dark") ? "light" : undefined}
      />

      <div
        data-plasmic-name={"addressFooter"}
        data-plasmic-override={overrides.addressFooter}
        className={classNames(defaultcss.all, sty.addressFooter)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___4TIqA,
            {
              [sty.box__color_dark___4TIqAsxLuv]: hasVariant(
                variants,
                "color",
                "dark"
              )
            }
          )}
        >
          {"548 Market Street\nSan Francisco, California\n940104, USA"}
        </div>
      </div>

      <FooterSocialLinkGroup
        data-plasmic-name={"footerSocialLinkGroup"}
        data-plasmic-override={overrides.footerSocialLinkGroup}
        className={classNames("__wab_instance", sty.footerSocialLinkGroup, {
          [sty.footerSocialLinkGroup__color_dark]: hasVariant(
            variants,
            "color",
            "dark"
          )
        })}
        color={hasVariant(variants, "color", "dark") ? "dark" : undefined}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"footerLegal"}
        data-plasmic-override={overrides.footerLegal}
        hasGap={true}
        className={classNames(defaultcss.all, sty.footerLegal)}
      >
        {false ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"social2"}
            data-plasmic-override={overrides.social2}
            hasGap={true}
            className={classNames(defaultcss.all, sty.social2)}
          >
            <FooterSocialLink
              className={classNames(
                "__wab_instance",
                sty.footerSocialLink__kcGm7
              )}
            />

            <FooterSocialLink
              className={classNames(
                "__wab_instance",
                sty.footerSocialLink__dqDfw
              )}
            >
              <Icon8Icon
                className={classNames(defaultcss.all, sty.svg__xDKo)}
                role={"img"}
              />
            </FooterSocialLink>

            <FooterSocialLink
              className={classNames(
                "__wab_instance",
                sty.footerSocialLink__pHUhn
              )}
            >
              <Icon8Icon
                className={classNames(defaultcss.all, sty.svg___2HpC)}
                role={"img"}
              />
            </FooterSocialLink>

            <FooterSocialLink
              className={classNames(
                "__wab_instance",
                sty.footerSocialLink__aknuU
              )}
            >
              <Icon8Icon
                className={classNames(defaultcss.all, sty.svg__ppPa)}
                role={"img"}
              />
            </FooterSocialLink>

            <FooterSocialLink
              className={classNames(
                "__wab_instance",
                sty.footerSocialLink___5TUvd
              )}
            >
              <Icon8Icon
                className={classNames(defaultcss.all, sty.svg__dk11L)}
                role={"img"}
              />
            </FooterSocialLink>
          </p.Stack>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__i6J, {
            [sty.box__color_dark__i6JSxLuv]: hasVariant(
              variants,
              "color",
              "dark"
            )
          })}
        >
          <FooterLink
            data-plasmic-name={"privacyPolicyComponent"}
            data-plasmic-override={overrides.privacyPolicyComponent}
            className={classNames(
              "__wab_instance",
              sty.privacyPolicyComponent,
              {
                [sty.privacyPolicyComponent__color_dark]: hasVariant(
                  variants,
                  "color",
                  "dark"
                )
              }
            )}
            color={hasVariant(variants, "color", "dark") ? "light" : "dark"}
            destination={"/privacy"}
            slot={
              hasVariant(variants, "color", "dark")
                ? "Privacy"
                : hasVariant(variants, "color", "light")
                ? "Privacy"
                : "Privacy"
            }
          />

          <FooterLink
            data-plasmic-name={"termsoOfServiceComponent"}
            data-plasmic-override={overrides.termsoOfServiceComponent}
            className={classNames(
              "__wab_instance",
              sty.termsoOfServiceComponent,
              {
                [sty.termsoOfServiceComponent__color_dark]: hasVariant(
                  variants,
                  "color",
                  "dark"
                )
              }
            )}
            color={hasVariant(variants, "color", "dark") ? "light" : "dark"}
            destination={"/terms"}
            slot={
              hasVariant(variants, "color", "dark")
                ? "Terms"
                : hasVariant(variants, "color", "light")
                ? "Terms"
                : "Terms"
            }
          />
        </p.Stack>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__bl0Hs,
            {
              [sty.box__color_dark__bl0HssxLuv]: hasVariant(
                variants,
                "color",
                "dark"
              )
            }
          )}
        >
          {"© Intrepid Financial Technologies, Inc "}
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarLogo",
    "addressFooter",
    "footerSocialLinkGroup",
    "footerLegal",
    "social2",
    "privacyPolicyComponent",
    "termsoOfServiceComponent"
  ],

  navbarLogo: ["navbarLogo"],
  addressFooter: ["addressFooter"],
  footerSocialLinkGroup: ["footerSocialLinkGroup"],
  footerLegal: [
    "footerLegal",
    "social2",
    "privacyPolicyComponent",
    "termsoOfServiceComponent"
  ],

  social2: ["social2"],
  privacyPolicyComponent: ["privacyPolicyComponent"],
  termsoOfServiceComponent: ["termsoOfServiceComponent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooterB__ArgProps,
      internalVariantPropNames: PlasmicFooterB__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFooterB__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterB";
  } else {
    func.displayName = `PlasmicFooterB.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterB = Object.assign(
  // Top-level PlasmicFooterB renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarLogo: makeNodeComponent("navbarLogo"),
    addressFooter: makeNodeComponent("addressFooter"),
    footerSocialLinkGroup: makeNodeComponent("footerSocialLinkGroup"),
    footerLegal: makeNodeComponent("footerLegal"),
    social2: makeNodeComponent("social2"),
    privacyPolicyComponent: makeNodeComponent("privacyPolicyComponent"),
    termsoOfServiceComponent: makeNodeComponent("termsoOfServiceComponent"),
    // Metadata about props expected for PlasmicFooterB
    internalVariantProps: PlasmicFooterB__VariantProps,
    internalArgProps: PlasmicFooterB__ArgProps
  }
);

export default PlasmicFooterB;
/* prettier-ignore-end */
