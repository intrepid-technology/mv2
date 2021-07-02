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
import Icon97Icon from "./icons/PlasmicIcon__Icon97"; // plasmic-import: 6F_oWsQS7s/icon
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
        className={classNames(defaultcss.all, sty.iconTextParent, {
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

          [sty.iconTextParent__width__90]: hasVariant(variants, "width", "_90")
        })}
      >
        <div
          data-plasmic-name={"svgParent"}
          data-plasmic-override={overrides.svgParent}
          className={classNames(defaultcss.all, sty.svgParent, {
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
            className={classNames(defaultcss.all, sty.svgBg, {
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
                  ? Icon97Icon
                  : hasVariant(variants, "company", "stripe")
                  ? StripeLogoIcon
                  : hasVariant(variants, "company", "google")
                  ? GooglesvgIcon
                  : hasVariant(variants, "company", "facebook")
                  ? FacebookSquareFillIcon
                  : PlusBoldIcon
              }
              className={classNames(defaultcss.all, sty.svg, {
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
          className={classNames(defaultcss.all, sty.box__opxOh, {
            [sty.box__company_facebook__opxOhxT9Qo]: hasVariant(
              variants,
              "company",
              "facebook"
            ),

            [sty.box__company_google__opxOhRq0C0]: hasVariant(
              variants,
              "company",
              "google"
            ),

            [sty.box__company_paypal__opxOhBwH0S]: hasVariant(
              variants,
              "company",
              "paypal"
            ),

            [sty.box__company_stripe__opxOhu5Eip]: hasVariant(
              variants,
              "company",
              "stripe"
            ),

            [sty.box__company_xero__opxOhcG4Xh]: hasVariant(
              variants,
              "company",
              "xero"
            ),

            [sty.box__originalSizes__320Px__opxOhXIqxP]: hasVariant(
              variants,
              "originalSizes",
              "_320Px"
            ),

            [sty.box__width__120__opxOhQyftg]: hasVariant(
              variants,
              "width",
              "_120"
            ),

            [sty.box__width__90__opxOhH55Vq]: hasVariant(
              variants,
              "width",
              "_90"
            )
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__ajHU,
              {
                [sty.box__company_facebook__ajHUxT9Qo]: hasVariant(
                  variants,
                  "company",
                  "facebook"
                ),

                [sty.box__company_facebook_width__120__ajHUxT9QoQyftg]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_120"),
                [sty.box__company_facebook_width__140__ajHUxT9QoFkfiu]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_140"),
                [sty.box__company_facebook_width__160__ajHUxT9QoSxoMs]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_160"),
                [sty.box__company_facebook_width__180__ajHUxT9Qo25PSc]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_180"),
                [sty.box__company_facebook_width__270__ajHUxT9QoTt18T]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_270"),
                [sty.box__company_facebook_width__360__ajHUxT9QoD2Qi]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_360"),
                [sty.box__company_facebook_width__90__ajHUxT9QoH55Vq]:
                  hasVariant(variants, "company", "facebook") &&
                  hasVariant(variants, "width", "_90"),
                [sty.box__company_google__ajHURq0C0]: hasVariant(
                  variants,
                  "company",
                  "google"
                ),

                [sty.box__company_google_width__120__ajHURq0C0Qyftg]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_120"),
                [sty.box__company_google_width__140__ajHURq0C0Fkfiu]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_140"),
                [sty.box__company_google_width__160__ajHURq0C0SxoMs]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_160"),
                [sty.box__company_google_width__180__ajHURq0C025PSc]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_180"),
                [sty.box__company_google_width__270__ajHURq0C0Tt18T]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_270"),
                [sty.box__company_google_width__90__ajHURq0C0H55Vq]:
                  hasVariant(variants, "company", "google") &&
                  hasVariant(variants, "width", "_90"),
                [sty.box__company_paypal__ajHUBwH0S]: hasVariant(
                  variants,
                  "company",
                  "paypal"
                ),

                [sty.box__company_paypal_width__120__ajHUBwH0SQyftg]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_120"),
                [sty.box__company_paypal_width__140__ajHUBwH0SFkfiu]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_140"),
                [sty.box__company_paypal_width__160__ajHUBwH0SSxoMs]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_160"),
                [sty.box__company_paypal_width__180__ajHUBwH0S25PSc]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_180"),
                [sty.box__company_paypal_width__270__ajHUBwH0STt18T]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_270"),
                [sty.box__company_paypal_width__360__ajHUBwH0SD2Qi]:
                  hasVariant(variants, "company", "paypal") &&
                  hasVariant(variants, "width", "_360"),
                [sty.box__company_quickbooks__ajHUAr8Nj]: hasVariant(
                  variants,
                  "company",
                  "quickbooks"
                ),

                [sty.box__company_quickbooks_width__120__ajHUAr8NjQyftg]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_120"),
                [sty.box__company_quickbooks_width__140__ajHUAr8NjFkfiu]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_140"),
                [sty.box__company_quickbooks_width__160__ajHUAr8NjSxoMs]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_160"),
                [sty.box__company_quickbooks_width__180__ajHUAr8Nj25PSc]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_180"),
                [sty.box__company_quickbooks_width__270__ajHUAr8NjTt18T]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_270"),
                [sty.box__company_quickbooks_width__90__ajHUAr8NjH55Vq]:
                  hasVariant(variants, "company", "quickbooks") &&
                  hasVariant(variants, "width", "_90"),
                [sty.box__company_stripe__ajHUu5Eip]: hasVariant(
                  variants,
                  "company",
                  "stripe"
                ),

                [sty.box__company_stripe_width__120__ajHUu5EipQyftg]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_120"),
                [sty.box__company_stripe_width__140__ajHUu5EipFkfiu]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_140"),
                [sty.box__company_stripe_width__160__ajHUu5EipSxoMs]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_160"),
                [sty.box__company_stripe_width__270__ajHUu5EipTt18T]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_270"),
                [sty.box__company_stripe_width__90__ajHUu5EipH55Vq]:
                  hasVariant(variants, "company", "stripe") &&
                  hasVariant(variants, "width", "_90"),
                [sty.box__company_xero__ajHUcG4Xh]: hasVariant(
                  variants,
                  "company",
                  "xero"
                ),

                [sty.box__company_xero_width__120__ajHUcG4XhQyftg]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_120"),
                [sty.box__company_xero_width__140__ajHUcG4XhFkfiu]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_140"),
                [sty.box__company_xero_width__160__ajHUcG4XhSxoMs]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_160"),
                [sty.box__company_xero_width__180__ajHUcG4Xh25PSc]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_180"),
                [sty.box__company_xero_width__270__ajHUcG4XhTt18T]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_270"),
                [sty.box__company_xero_width__360__ajHUcG4XhD2Qi]:
                  hasVariant(variants, "company", "xero") &&
                  hasVariant(variants, "width", "_360"),
                [sty.box__width__120__ajHUQyftg]: hasVariant(
                  variants,
                  "width",
                  "_120"
                ),

                [sty.box__width__140__ajHUFkfiu]: hasVariant(
                  variants,
                  "width",
                  "_140"
                ),

                [sty.box__width__160__ajHUSxoMs]: hasVariant(
                  variants,
                  "width",
                  "_160"
                ),

                [sty.box__width__180__ajHU25PSc]: hasVariant(
                  variants,
                  "width",
                  "_180"
                ),

                [sty.box__width__270__ajHUTt18T]: hasVariant(
                  variants,
                  "width",
                  "_270"
                ),

                [sty.box__width__360__ajHUd2Qi]: hasVariant(
                  variants,
                  "width",
                  "_360"
                ),

                [sty.box__width__360_company_google__ajHUd2QiRq0C0]:
                  hasVariant(variants, "width", "_360") &&
                  hasVariant(variants, "company", "google"),
                [sty.box__width__360_company_quickbooks__ajHUd2QiAr8Nj]:
                  hasVariant(variants, "width", "_360") &&
                  hasVariant(variants, "company", "quickbooks"),
                [sty.box__width__360_company_stripe__ajHUd2QiU5Eip]:
                  hasVariant(variants, "width", "_360") &&
                  hasVariant(variants, "company", "stripe"),
                [sty.box__width__90__ajHUH55Vq]: hasVariant(
                  variants,
                  "width",
                  "_90"
                ),

                [sty.box__width__90_company_paypal__ajHUH55VqBwH0S]:
                  hasVariant(variants, "width", "_90") &&
                  hasVariant(variants, "company", "paypal"),
                [sty.box__width__90_company_xero__ajHUH55VqCG4Xh]:
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
  root: ["root", "iconTextParent", "svgParent", "svgBg", "svg"],
  iconTextParent: ["iconTextParent", "svgParent", "svgBg", "svg"],
  svgParent: ["svgParent", "svgBg", "svg"],
  svgBg: ["svgBg", "svg"],
  svg: ["svg"]
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
    // Metadata about props expected for PlasmicButtonConnectedAccount
    internalVariantProps: PlasmicButtonConnectedAccount__VariantProps,
    internalArgProps: PlasmicButtonConnectedAccount__ArgProps
  }
);

export default PlasmicButtonConnectedAccount;
/* prettier-ignore-end */
