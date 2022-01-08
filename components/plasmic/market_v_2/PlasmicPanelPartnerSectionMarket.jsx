// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: i3ai6jIm4VK
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuIconListItem from "../../MenuIconListItem"; // plasmic-import: 61axZSTp8Y/component
import { useLayout } from "./PlasmicGlobalVariant__Layout"; // plasmic-import: yRz57WAHKe/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicPanelPartnerSectionMarket.module.css"; // plasmic-import: i3ai6jIm4VK/css
import ListingIcon from "./icons/PlasmicIcon__Listing"; // plasmic-import: NNbE63A0Ys/icon
import OrdersIcon from "./icons/PlasmicIcon__Orders"; // plasmic-import: SofRHFzOcM/icon
import ChartIcon from "./icons/PlasmicIcon__Chart"; // plasmic-import: -1VBIW_pTX/icon
import CommentReviewBIcon from "./icons/PlasmicIcon__CommentReviewB"; // plasmic-import: 4AL9HbEO5/icon
import CommentReviewIcon from "./icons/PlasmicIcon__CommentReview"; // plasmic-import: ebuPCBFlqJ/icon

export const PlasmicPanelPartnerSectionMarket__VariantProps = new Array();

export const PlasmicPanelPartnerSectionMarket__ArgProps = new Array();

function PlasmicPanelPartnerSectionMarket__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    layout: useLayout()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__global_layout_isSellerView]: hasVariant(
          globalVariants,
          "layout",
          "isSellerView"
        )
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.text__global_layout_isSellerView]: hasVariant(
                globalVariants,
                "layout",
                "isSellerView"
              )
            }
          )}
        >
          {"Market"}
        </div>
      </p.Stack>

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__aLa21, {
          [sty.menuIconListItem__global_layout_isSellerView__aLa21Fw6NW]:
            hasVariant(globalVariants, "layout", "isSellerView")
        })}
        destination={"/partner/manage/listings"}
        navIcon={
          <ListingIcon
            data-plasmic-name={"navImage2"}
            data-plasmic-override={overrides.navImage2}
            className={classNames(projectcss.all, sty.navImage2, {
              [sty.navImage2__global_layout_isSellerView]: hasVariant(
                globalVariants,
                "layout",
                "isSellerView"
              )
            })}
            role={"img"}
          />
        }
        navText={"Listings"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__wdXuy)}
        destination={"/orders"}
        navIcon={
          <OrdersIcon
            data-plasmic-name={"navImage3"}
            data-plasmic-override={overrides.navImage3}
            className={classNames(projectcss.all, sty.navImage3, {
              [sty.navImage3__global_layout_isSellerView]: hasVariant(
                globalVariants,
                "layout",
                "isSellerView"
              )
            })}
            role={"img"}
          />
        }
        navText={"Orders"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__qt1Y6)}
        destination={"/partner/performance"}
        navIcon={
          <ChartIcon
            data-plasmic-name={"navImage4"}
            data-plasmic-override={overrides.navImage4}
            className={classNames(projectcss.all, sty.navImage4, {
              [sty.navImage4__global_layout_isSellerView]: hasVariant(
                globalVariants,
                "layout",
                "isSellerView"
              )
            })}
            role={"img"}
          />
        }
        navText={"Performance"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__j5Km)}
        destination={"/reviews"}
        navIcon={
          <CommentReviewBIcon
            data-plasmic-name={"navImage5"}
            data-plasmic-override={overrides.navImage5}
            className={classNames(projectcss.all, sty.navImage5, {
              [sty.navImage5__global_layout_isSellerView]: hasVariant(
                globalVariants,
                "layout",
                "isSellerView"
              )
            })}
            role={"img"}
          />
        }
        navText={"Reviews"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__jIdBw)}
        destination={"/inbox"}
        navIcon={
          <CommentReviewIcon
            data-plasmic-name={"navImage"}
            data-plasmic-override={overrides.navImage}
            className={classNames(projectcss.all, sty.navImage, {
              [sty.navImage__global_layout_isSellerView]: hasVariant(
                globalVariants,
                "layout",
                "isSellerView"
              )
            })}
            role={"img"}
          />
        }
        navText={"Messages"}
        renderContext={"sidebar"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "text",
    "navImage2",
    "navImage3",
    "navImage4",
    "navImage5",
    "navImage"
  ],

  freeBox: ["freeBox", "text"],
  text: ["text"],
  navImage2: ["navImage2"],
  navImage3: ["navImage3"],
  navImage4: ["navImage4"],
  navImage5: ["navImage5"],
  navImage: ["navImage"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPanelPartnerSectionMarket__ArgProps,
      internalVariantPropNames: PlasmicPanelPartnerSectionMarket__VariantProps
    });

    return PlasmicPanelPartnerSectionMarket__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelPartnerSectionMarket";
  } else {
    func.displayName = `PlasmicPanelPartnerSectionMarket.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelPartnerSectionMarket = Object.assign(
  // Top-level PlasmicPanelPartnerSectionMarket renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    navImage2: makeNodeComponent("navImage2"),
    navImage3: makeNodeComponent("navImage3"),
    navImage4: makeNodeComponent("navImage4"),
    navImage5: makeNodeComponent("navImage5"),
    navImage: makeNodeComponent("navImage"),
    // Metadata about props expected for PlasmicPanelPartnerSectionMarket
    internalVariantProps: PlasmicPanelPartnerSectionMarket__VariantProps,
    internalArgProps: PlasmicPanelPartnerSectionMarket__ArgProps
  }
);

export default PlasmicPanelPartnerSectionMarket;
/* prettier-ignore-end */
