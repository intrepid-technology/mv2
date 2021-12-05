// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 9kU3iljaXN
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicButtonConnectedAccount.module.css"; // plasmic-import: 9kU3iljaXN/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon
import FacebookSquareFillIcon from "./icons/PlasmicIcon__FacebookSquareFill"; // plasmic-import: wOX2gl0oUy/icon
import GooglesvgIcon from "./icons/PlasmicIcon__Googlesvg"; // plasmic-import: XP-psNmhog/icon
import StripeLogoIcon from "./icons/PlasmicIcon__StripeLogo"; // plasmic-import: 5nOWCV9_g/icon
import PaypalIcon from "./icons/PlasmicIcon__Paypal"; // plasmic-import: 6F_oWsQS7s/icon
import XerosvgIcon from "./icons/PlasmicIcon__Xerosvg"; // plasmic-import: X-HNuuBXHS/icon
import Icons8QuickbookssvgIcon from "./icons/PlasmicIcon__Icons8Quickbookssvg"; // plasmic-import: raCIX8pOF/icon

export const PlasmicButtonConnectedAccount__VariantProps = new Array(
  "company",
  "originalSizes",
  "width",
  "height"
);

export const PlasmicButtonConnectedAccount__ArgProps = new Array("id");

function PlasmicButtonConnectedAccount__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.button,
        projectcss.button,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__company_facebook]: hasVariant(
            variants,
            "company",
            "facebook"
          ),

          [sty.root__company_facebook_width__90]:
            hasVariant(variants, "company", "facebook") &&
            hasVariant(variants, "width", "_90"),
          [sty.root__company_google]: hasVariant(variants, "company", "google"),
          [sty.root__company_paypal]: hasVariant(variants, "company", "paypal"),
          [sty.root__company_quickbooks]: hasVariant(
            variants,
            "company",
            "quickbooks"
          ),

          [sty.root__company_stripe]: hasVariant(variants, "company", "stripe"),
          [sty.root__company_xero]: hasVariant(variants, "company", "xero"),
          [sty.root__height__32]: hasVariant(variants, "height", "_32"),
          [sty.root__height__40]: hasVariant(variants, "height", "_40"),
          [sty.root__height__48]: hasVariant(variants, "height", "_48"),
          [sty.root__originalSizes__320Px]: hasVariant(
            variants,
            "originalSizes",
            "_320Px"
          ),

          [sty.root__originalSizes__360X48]: hasVariant(
            variants,
            "originalSizes",
            "_360X48"
          ),

          [sty.root__width__120]: hasVariant(variants, "width", "_120"),
          [sty.root__width__140]: hasVariant(variants, "width", "_140"),
          [sty.root__width__160]: hasVariant(variants, "width", "_160"),
          [sty.root__width__180]: hasVariant(variants, "width", "_180"),
          [sty.root__width__270]: hasVariant(variants, "width", "_270"),
          [sty.root__width__360]: hasVariant(variants, "width", "_360"),
          [sty.root__width__90]: hasVariant(variants, "width", "_90")
        }
      )}
      id={args.id}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"iconTextParent"}
        data-plasmic-override={overrides.iconTextParent}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.iconTextParent,
          {
            [sty.iconTextParent__width__120]: hasVariant(
              variants,
              "width",
              "_120"
            ),

            [sty.iconTextParent__width__140]: hasVariant(
              variants,
              "width",
              "_140"
            ),

            [sty.iconTextParent__width__160]: hasVariant(
              variants,
              "width",
              "_160"
            ),

            [sty.iconTextParent__width__180]: hasVariant(
              variants,
              "width",
              "_180"
            ),

            [sty.iconTextParent__width__270]: hasVariant(
              variants,
              "width",
              "_270"
            ),

            [sty.iconTextParent__width__360]: hasVariant(
              variants,
              "width",
              "_360"
            ),

            [sty.iconTextParent__width__90]: hasVariant(
              variants,
              "width",
              "_90"
            )
          }
        )}
      >
        <div
          data-plasmic-name={"svgParent"}
          data-plasmic-override={overrides.svgParent}
          className={classNames(defaultcss.all, projectcss.all, sty.svgParent, {
            [sty.svgParent__width__120]: hasVariant(variants, "width", "_120"),
            [sty.svgParent__width__140]: hasVariant(variants, "width", "_140"),
            [sty.svgParent__width__160]: hasVariant(variants, "width", "_160"),
            [sty.svgParent__width__180]: hasVariant(variants, "width", "_180"),
            [sty.svgParent__width__270]: hasVariant(variants, "width", "_270"),
            [sty.svgParent__width__360]: hasVariant(variants, "width", "_360"),
            [sty.svgParent__width__90]: hasVariant(variants, "width", "_90")
          })}
        >
          <div
            data-plasmic-name={"svgBg"}
            data-plasmic-override={overrides.svgBg}
            className={classNames(defaultcss.all, projectcss.all, sty.svgBg, {
              [sty.svgBg__width__360]: hasVariant(variants, "width", "_360"),
              [sty.svgBg__width__90]: hasVariant(variants, "width", "_90")
            })}
          >
            <p.PlasmicIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              PlasmicIconType={
                hasVariant(variants, "company", "quickbooks")
                  ? Icons8QuickbookssvgIcon
                  : hasVariant(variants, "company", "xero")
                  ? XerosvgIcon
                  : hasVariant(variants, "company", "paypal")
                  ? PaypalIcon
                  : hasVariant(variants, "company", "stripe")
                  ? StripeLogoIcon
                  : hasVariant(variants, "company", "google")
                  ? GooglesvgIcon
                  : hasVariant(variants, "company", "facebook")
                  ? FacebookSquareFillIcon
                  : PlusBoldIcon
              }
              className={classNames(defaultcss.all, projectcss.all, sty.svg, {
                [sty.svg__company_facebook]: hasVariant(
                  variants,
                  "company",
                  "facebook"
                ),

                [sty.svg__company_google]: hasVariant(
                  variants,
                  "company",
                  "google"
                ),

                [sty.svg__company_paypal]: hasVariant(
                  variants,
                  "company",
                  "paypal"
                ),

                [sty.svg__company_quickbooks]: hasVariant(
                  variants,
                  "company",
                  "quickbooks"
                ),

                [sty.svg__company_stripe]: hasVariant(
                  variants,
                  "company",
                  "stripe"
                ),

                [sty.svg__company_xero]: hasVariant(
                  variants,
                  "company",
                  "xero"
                ),

                [sty.svg__width__120]: hasVariant(variants, "width", "_120"),
                [sty.svg__width__90]: hasVariant(variants, "width", "_90")
              })}
              role={"img"}
            />
          </div>
        </div>

        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(defaultcss.all, projectcss.all, sty.freeBox, {
            [sty.freeBox__company_facebook]: hasVariant(
              variants,
              "company",
              "facebook"
            ),

            [sty.freeBox__company_google]: hasVariant(
              variants,
              "company",
              "google"
            ),

            [sty.freeBox__company_paypal]: hasVariant(
              variants,
              "company",
              "paypal"
            ),

            [sty.freeBox__company_stripe]: hasVariant(
              variants,
              "company",
              "stripe"
            ),

            [sty.freeBox__company_xero]: hasVariant(
              variants,
              "company",
              "xero"
            ),

            [sty.freeBox__originalSizes__320Px]: hasVariant(
              variants,
              "originalSizes",
              "_320Px"
            ),

            [sty.freeBox__width__120]: hasVariant(variants, "width", "_120"),
            [sty.freeBox__width__90]: hasVariant(variants, "width", "_90")
          })}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.text,
              {
                [sty.text__company_facebook]: hasVariant(
                  variants,
                  "company",
                  "facebook"
                ),

                [sty.text__company_facebook_width__120]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_120"),
                [sty.text__company_facebook_width__140]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_140"),
                [sty.text__company_facebook_width__160]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_160"),
                [sty.text__company_facebook_width__180]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_180"),
                [sty.text__company_facebook_width__270]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_270"),
                [sty.text__company_facebook_width__360]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_360"),
                [sty.text__company_facebook_width__90]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_90"),
                [sty.text__company_google]: hasVariant(
                  variants,
                  "company",
                  "google"
                ),

                [sty.text__company_google_width__120]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_120"),
                [sty.text__company_google_width__140]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_140"),
                [sty.text__company_google_width__160]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_160"),
                [sty.text__company_google_width__180]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_180"),
                [sty.text__company_google_width__270]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_270"),
                [sty.text__company_google_width__90]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_90"),
                [sty.text__company_paypal]: hasVariant(
                  variants,
                  "company",
                  "paypal"
                ),

                [sty.text__company_paypal_width__120]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_120"),
                [sty.text__company_paypal_width__140]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_140"),
                [sty.text__company_paypal_width__160]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_160"),
                [sty.text__company_paypal_width__180]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_180"),
                [sty.text__company_paypal_width__270]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_270"),
                [sty.text__company_paypal_width__360]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_360"),
                [sty.text__company_quickbooks]: hasVariant(
                  variants,
                  "company",
                  "quickbooks"
                ),

                [sty.text__company_quickbooks_width__120]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_120"),
                [sty.text__company_quickbooks_width__140]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_140"),
                [sty.text__company_quickbooks_width__160]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_160"),
                [sty.text__company_quickbooks_width__180]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_180"),
                [sty.text__company_quickbooks_width__270]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_270"),
                [sty.text__company_quickbooks_width__90]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_90"),
                [sty.text__company_stripe]: hasVariant(
                  variants,
                  "company",
                  "stripe"
                ),

                [sty.text__company_stripe_width__120]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_120"),
                [sty.text__company_stripe_width__140]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_140"),
                [sty.text__company_stripe_width__160]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_160"),
                [sty.text__company_stripe_width__270]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_270"),
                [sty.text__company_stripe_width__90]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_90"),
                [sty.text__company_xero]: hasVariant(
                  variants,
                  "company",
                  "xero"
                ),

                [sty.text__company_xero_width__120]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_120"),
                [sty.text__company_xero_width__140]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_140"),
                [sty.text__company_xero_width__160]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_160"),
                [sty.text__company_xero_width__180]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_180"),
                [sty.text__company_xero_width__270]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_270"),
                [sty.text__company_xero_width__360]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_360"),
                [sty.text__width__120]: hasVariant(variants, "width", "_120"),
                [sty.text__width__140]: hasVariant(variants, "width", "_140"),
                [sty.text__width__160]: hasVariant(variants, "width", "_160"),
                [sty.text__width__180]: hasVariant(variants, "width", "_180"),
                [sty.text__width__270]: hasVariant(variants, "width", "_270"),
                [sty.text__width__360]: hasVariant(variants, "width", "_360"),
                [sty.text__width__360_company_google]:
                  hasVariant(variants, "width", "_360") &&
                  hasVariant(variants, "company", "google"),
                [sty.text__width__360_company_quickbooks]:
                  hasVariant(variants, "width", "_360") &&
                  hasVariant(variants, "company", "quickbooks"),
                [sty.text__width__360_company_stripe]:
                  hasVariant(variants, "width", "_360") &&
                  hasVariant(variants, "company", "stripe"),
                [sty.text__width__90]: hasVariant(variants, "width", "_90"),
                [sty.text__width__90_company_paypal]:
                  hasVariant(variants, "width", "_90") &&
                  hasVariant(variants, "company", "paypal"),
                [sty.text__width__90_company_xero]:
                  hasVariant(variants, "width", "_90") &&
                  hasVariant(variants, "company", "xero")
              }
            )}
          >
            {hasVariant(variants, "company", "facebook") &&
            hasVariant(variants, "width", "_180")
              ? "Sign in with Facebook"
              : hasVariant(variants, "company", "facebook") &&
                hasVariant(variants, "width", "_160")
              ? "Sign in with Facebook"
              : hasVariant(variants, "company", "facebook") &&
                hasVariant(variants, "width", "_140")
              ? "Sign in with Facebook"
              : hasVariant(variants, "company", "facebook") &&
                hasVariant(variants, "width", "_120")
              ? "Sign in with Facebook"
              : hasVariant(variants, "company", "facebook") &&
                hasVariant(variants, "width", "_90")
              ? "Sign in with Facebook"
              : hasVariant(variants, "company", "quickbooks")
              ? "Sign in with Quickbooks"
              : hasVariant(variants, "company", "xero")
              ? "Sign in with Xero"
              : hasVariant(variants, "company", "paypal")
              ? "Sign in with Paypal"
              : hasVariant(variants, "company", "stripe")
              ? "Sign in with Stripe"
              : hasVariant(variants, "company", "google")
              ? "Sign in with Google"
              : hasVariant(variants, "company", "facebook")
              ? "Sign in with Facebook"
              : "Sign in with..."}
          </div>
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "iconTextParent",
    "svgParent",
    "svgBg",
    "svg",
    "freeBox",
    "text"
  ],

  iconTextParent: [
    "iconTextParent",
    "svgParent",
    "svgBg",
    "svg",
    "freeBox",
    "text"
  ],

  svgParent: ["svgParent", "svgBg", "svg"],
  svgBg: ["svgBg", "svg"],
  svg: ["svg"],
  freeBox: ["freeBox", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonConnectedAccount__ArgProps,
      internalVariantPropNames: PlasmicButtonConnectedAccount__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonConnectedAccount__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonConnectedAccount";
  } else {
    func.displayName = `PlasmicButtonConnectedAccount.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonConnectedAccount = Object.assign(
  // Top-level PlasmicButtonConnectedAccount renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconTextParent: makeNodeComponent("iconTextParent"),
    svgParent: makeNodeComponent("svgParent"),
    svgBg: makeNodeComponent("svgBg"),
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicButtonConnectedAccount
    internalVariantProps: PlasmicButtonConnectedAccount__VariantProps,
    internalArgProps: PlasmicButtonConnectedAccount__ArgProps
  }
);

export default PlasmicButtonConnectedAccount;
/* prettier-ignore-end */
