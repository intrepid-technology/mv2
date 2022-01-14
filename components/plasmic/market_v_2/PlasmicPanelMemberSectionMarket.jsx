// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 8_xnKrMMUML
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import MenuIconListItem from "../../MenuIconListItem"; // plasmic-import: 61axZSTp8Y/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicPanelMemberSectionMarket.module.css"; // plasmic-import: 8_xnKrMMUML/css
import MarketIcon from "./icons/PlasmicIcon__Market"; // plasmic-import: 6YZyz-5czi/icon
import RecommendationsIcon from "./icons/PlasmicIcon__Recommendations"; // plasmic-import: wWVEzr7B1/icon
import BookmarkIcon from "./icons/PlasmicIcon__Bookmark"; // plasmic-import: 2qZ8N9GyOr/icon
import OrdersIcon from "./icons/PlasmicIcon__Orders"; // plasmic-import: SofRHFzOcM/icon
import CommentReviewBIcon from "./icons/PlasmicIcon__CommentReviewB"; // plasmic-import: 4AL9HbEO5/icon
import CommentReviewIcon from "./icons/PlasmicIcon__CommentReview"; // plasmic-import: ebuPCBFlqJ/icon

export const PlasmicPanelMemberSectionMarket__VariantProps = new Array();

export const PlasmicPanelMemberSectionMarket__ArgProps = new Array();

function PlasmicPanelMemberSectionMarket__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
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
            sty.text
          )}
        >
          {"Market"}
        </div>
      </p.Stack>

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__e7Dob)}
        destination={"/market"}
        navIcon={
          <MarketIcon
            data-plasmic-name={"navImage2"}
            data-plasmic-override={overrides.navImage2}
            className={classNames(projectcss.all, sty.navImage2)}
            role={"img"}
          />
        }
        navText={"Home"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__fgRr)}
        destination={"/recommendations"}
        navIcon={
          <RecommendationsIcon
            data-plasmic-name={"navImage3"}
            data-plasmic-override={overrides.navImage3}
            className={classNames(projectcss.all, sty.navImage3)}
            role={"img"}
          />
        }
        navText={"Recommendations"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__il9Fd)}
        destination={"/bookmarks"}
        navIcon={
          <BookmarkIcon
            data-plasmic-name={"navImage4"}
            data-plasmic-override={overrides.navImage4}
            className={classNames(projectcss.all, sty.navImage4)}
            role={"img"}
          />
        }
        navText={"Bookmarks"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__bjWxX)}
        destination={"/orders"}
        navIcon={
          <OrdersIcon
            data-plasmic-name={"navImage5"}
            data-plasmic-override={overrides.navImage5}
            className={classNames(projectcss.all, sty.navImage5)}
            role={"img"}
          />
        }
        navText={"Orders"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__iVsEj)}
        destination={"/reviews"}
        navIcon={
          <CommentReviewBIcon
            data-plasmic-name={"navImage6"}
            data-plasmic-override={overrides.navImage6}
            className={classNames(projectcss.all, sty.navImage6)}
            role={"img"}
          />
        }
        navText={"Reviews"}
        renderContext={"sidebar"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__y6VHc)}
        destination={"/inbox"}
        navIcon={
          <CommentReviewIcon
            data-plasmic-name={"navImage"}
            data-plasmic-override={overrides.navImage}
            className={classNames(projectcss.all, sty.navImage)}
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
    "navImage6",
    "navImage"
  ],

  freeBox: ["freeBox", "text"],
  text: ["text"],
  navImage2: ["navImage2"],
  navImage3: ["navImage3"],
  navImage4: ["navImage4"],
  navImage5: ["navImage5"],
  navImage6: ["navImage6"],
  navImage: ["navImage"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPanelMemberSectionMarket__ArgProps,
      internalVariantPropNames: PlasmicPanelMemberSectionMarket__VariantProps
    });

    return PlasmicPanelMemberSectionMarket__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelMemberSectionMarket";
  } else {
    func.displayName = `PlasmicPanelMemberSectionMarket.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelMemberSectionMarket = Object.assign(
  // Top-level PlasmicPanelMemberSectionMarket renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    navImage2: makeNodeComponent("navImage2"),
    navImage3: makeNodeComponent("navImage3"),
    navImage4: makeNodeComponent("navImage4"),
    navImage5: makeNodeComponent("navImage5"),
    navImage6: makeNodeComponent("navImage6"),
    navImage: makeNodeComponent("navImage"),
    // Metadata about props expected for PlasmicPanelMemberSectionMarket
    internalVariantProps: PlasmicPanelMemberSectionMarket__VariantProps,
    internalArgProps: PlasmicPanelMemberSectionMarket__ArgProps
  }
);

export default PlasmicPanelMemberSectionMarket;
/* prettier-ignore-end */
