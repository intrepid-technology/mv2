// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: MLcKt4EI0Y
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
import TextLinkArrow from "../../TextLinkArrow"; // plasmic-import: MlCPfXGkVN/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicAlertRedirectUser.module.css"; // plasmic-import: MLcKt4EI0Y/css
import Icon42Icon from "./icons/PlasmicIcon__Icon42"; // plasmic-import: FJS3sBVuft/icon
import Icon118Icon from "./icons/PlasmicIcon__Icon118"; // plasmic-import: bdrqtZUAe/icon

export const PlasmicAlertRedirectUser__VariantProps = new Array(
  "partner",
  "color"
);

export const PlasmicAlertRedirectUser__ArgProps = new Array();

function PlasmicAlertRedirectUser__RenderFunc(props) {
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
        [sty.root__color_brand]: hasVariant(variants, "color", "brand"),
        [sty.root__color_dark]: hasVariant(variants, "color", "dark"),
        [sty.root__color_light]: hasVariant(variants, "color", "light"),
        [sty.root__partner]: hasVariant(variants, "partner", "partner")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__hd4C)}
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
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__i0Yy5)}
          >
            <Icon42Icon
              className={classNames(defaultcss.all, sty.svg__on4Gg, {
                [sty.svg__color_light__on4GgVn8Xk]: hasVariant(
                  variants,
                  "color",
                  "light"
                )
              })}
              role={"img"}
            />

            {(
              hasVariant(globalVariants, "screen", "mobileAPrimary")
                ? true
                : false
            ) ? (
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__zsyYr,
                  {
                    [sty.box__color_light__zsyYrVn8Xk]: hasVariant(
                      variants,
                      "color",
                      "light"
                    ),

                    [sty.box__partner__zsyYrwYrcz]: hasVariant(
                      variants,
                      "partner",
                      "partner"
                    )
                  }
                )}
              >
                {hasVariant(variants, "partner", "partner") ? (
                  <span>
                    <React.Fragment>{"Do you want to "}</React.Fragment>
                    <span style={{ textDecoration: "underline" }}>
                      {"sell"}
                    </span>
                    <React.Fragment>
                      {" technology and creative services to our members?"}
                    </React.Fragment>
                  </span>
                ) : (
                  <span>
                    <React.Fragment>{"Do you want to "}</React.Fragment>
                    <span style={{ textDecoration: "underline" }}>
                      {"find"}
                    </span>
                    <React.Fragment>
                      {" technology and creative services for your business?"}
                    </React.Fragment>
                  </span>
                )}
              </div>
            ) : null}
          </p.Stack>
        ) : null}
        {(
          hasVariant(globalVariants, "screen", "mobileAPrimary") ? false : true
        ) ? (
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___20Bn,
              {
                [sty.box__color_light___20BnVn8Xk]: hasVariant(
                  variants,
                  "color",
                  "light"
                ),

                [sty.box__partner___20BNwYrcz]: hasVariant(
                  variants,
                  "partner",
                  "partner"
                )
              }
            )}
          >
            {hasVariant(variants, "partner", "partner") ? (
              <span>
                <React.Fragment>{"Do you want to "}</React.Fragment>
                <span style={{ textDecoration: "underline" }}>{"sell"}</span>
                <React.Fragment>
                  {" technology and creative services to our members?"}
                </React.Fragment>
              </span>
            ) : (
              <span>
                <React.Fragment>{"Do you want to "}</React.Fragment>
                <span style={{ textDecoration: "underline" }}>{"find"}</span>
                <React.Fragment>
                  {" technology and creative services for your business?"}
                </React.Fragment>
              </span>
            )}
          </div>
        ) : null}

        <TextLinkArrow
          data-plasmic-name={"textLinkArrow"}
          data-plasmic-override={overrides.textLinkArrow}
          className={classNames("__wab_instance", sty.textLinkArrow, {
            [sty.textLinkArrow__color_light]: hasVariant(
              variants,
              "color",
              "light"
            )
          })}
          color={hasVariant(variants, "color", "light") ? "brand" : "light"}
          direction={"right"}
          svgRight={
            <Icon118Icon
              className={classNames(defaultcss.all, sty.svg__lhcBs, {
                [sty.svg__color_light__lhcBsVn8Xk]: hasVariant(
                  variants,
                  "color",
                  "light"
                )
              })}
              role={"img"}
            />
          }
        >
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link,
              {
                [sty.link__color_brand]: hasVariant(variants, "color", "brand"),
                [sty.link__color_dark]: hasVariant(variants, "color", "dark"),
                [sty.link__color_light]: hasVariant(variants, "color", "light"),
                [sty.link__partner]: hasVariant(variants, "partner", "partner"),
                [sty.link__partner_color_brand]:
                  hasVariant(variants, "partner", "partner") &&
                  hasVariant(variants, "color", "brand"),
                [sty.link__partner_color_dark]:
                  hasVariant(variants, "partner", "partner") &&
                  hasVariant(variants, "color", "dark"),
                [sty.link__partner_color_light]:
                  hasVariant(variants, "partner", "partner") &&
                  hasVariant(variants, "color", "light")
              }
            )}
            component={Link}
            platform={"nextjs"}
          >
            {hasVariant(variants, "partner", "partner")
              ? "Sell services"
              : "Find services"}
          </p.PlasmicLink>
        </TextLinkArrow>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "textLinkArrow", "link"],
  textLinkArrow: ["textLinkArrow", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAlertRedirectUser__ArgProps,
      internalVariantPropNames: PlasmicAlertRedirectUser__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicAlertRedirectUser__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAlertRedirectUser";
  } else {
    func.displayName = `PlasmicAlertRedirectUser.${nodeName}`;
  }
  return func;
}

export const PlasmicAlertRedirectUser = Object.assign(
  // Top-level PlasmicAlertRedirectUser renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textLinkArrow: makeNodeComponent("textLinkArrow"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicAlertRedirectUser
    internalVariantProps: PlasmicAlertRedirectUser__VariantProps,
    internalArgProps: PlasmicAlertRedirectUser__ArgProps
  }
);

export default PlasmicAlertRedirectUser;
/* prettier-ignore-end */
