// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: cwyuvAY7ua
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
import { useLayout } from "./PlasmicGlobalVariant__Layout"; // plasmic-import: yRz57WAHKe/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPanelButtonSecondary.module.css"; // plasmic-import: cwyuvAY7ua/css
import BoostIcon from "./icons/PlasmicIcon__Boost"; // plasmic-import: X0sjJkcBKE/icon
import MemberPartnerAddIcon from "./icons/PlasmicIcon__MemberPartnerAdd"; // plasmic-import: FGYq1z2nvF/icon
import CommentReviewBIcon from "./icons/PlasmicIcon__CommentReviewB"; // plasmic-import: 4AL9HbEO5/icon

export const PlasmicPanelButtonSecondary__VariantProps = new Array(
  "alternates"
);

export const PlasmicPanelButtonSecondary__ArgProps = new Array(
  "target",
  "trigger",
  "destination"
);

function PlasmicPanelButtonSecondary__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    layout: useLayout()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        data-plasmic-name={"powerUp"}
        data-plasmic-override={overrides.powerUp}
        className={classNames(projectcss.a, sty.powerUp, {
          [sty.powerUp__alternates_addPartner]: hasVariant(
            variants,
            "alternates",
            "addPartner"
          ),

          [sty.powerUp__alternates_requestReview]: hasVariant(
            variants,
            "alternates",
            "requestReview"
          )
        })}
        component={Link}
        href={args.destination}
        platform={"nextjs"}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"sideBarCardLink"}
          data-plasmic-override={overrides.sideBarCardLink}
          hasGap={true}
          className={classNames(projectcss.all, sty.sideBarCardLink, {
            [sty.sideBarCardLink__alternates_addPartner]: hasVariant(
              variants,
              "alternates",
              "addPartner"
            ),

            [sty.sideBarCardLink__alternates_requestReview]: hasVariant(
              variants,
              "alternates",
              "requestReview"
            )
          })}
        >
          <p.PlasmicIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            PlasmicIconType={
              hasVariant(variants, "alternates", "requestReview")
                ? CommentReviewBIcon
                : hasVariant(variants, "alternates", "addPartner")
                ? MemberPartnerAddIcon
                : BoostIcon
            }
            className={classNames(projectcss.all, sty.svg, {
              [sty.svg__alternates_addPartner]: hasVariant(
                variants,
                "alternates",
                "addPartner"
              ),

              [sty.svg__alternates_requestReview]: hasVariant(
                variants,
                "alternates",
                "requestReview"
              )
            })}
            role={"img"}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.text__alternates_addPartner]: hasVariant(
                  variants,
                  "alternates",
                  "addPartner"
                ),

                [sty.text__alternates_requestReview]: hasVariant(
                  variants,
                  "alternates",
                  "requestReview"
                ),

                [sty.text__global_layout_isSellerView]: hasVariant(
                  globalVariants,
                  "layout",
                  "isSellerView"
                )
              }
            )}
          >
            {hasVariant(variants, "alternates", "requestReview")
              ? "Request review"
              : hasVariant(variants, "alternates", "addPartner")
              ? "Add Partner"
              : "Power up"}
          </div>
        </p.Stack>
      </p.PlasmicLink>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "powerUp", "sideBarCardLink", "svg", "text"],
  powerUp: ["powerUp", "sideBarCardLink", "svg", "text"],
  sideBarCardLink: ["sideBarCardLink", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPanelButtonSecondary__ArgProps,
      internalVariantPropNames: PlasmicPanelButtonSecondary__VariantProps
    });

    return PlasmicPanelButtonSecondary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelButtonSecondary";
  } else {
    func.displayName = `PlasmicPanelButtonSecondary.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelButtonSecondary = Object.assign(
  // Top-level PlasmicPanelButtonSecondary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    powerUp: makeNodeComponent("powerUp"),
    sideBarCardLink: makeNodeComponent("sideBarCardLink"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicPanelButtonSecondary
    internalVariantProps: PlasmicPanelButtonSecondary__VariantProps,
    internalArgProps: PlasmicPanelButtonSecondary__ArgProps
  }
);

export default PlasmicPanelButtonSecondary;
/* prettier-ignore-end */
