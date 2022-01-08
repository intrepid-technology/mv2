// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: I_BQB8r30F
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicButtonListingPrimary.module.css"; // plasmic-import: I_BQB8r30F/css
import ListingIcon from "./icons/PlasmicIcon__Listing"; // plasmic-import: NNbE63A0Ys/icon

export const PlasmicButtonListingPrimary__VariantProps = new Array();

export const PlasmicButtonListingPrimary__ArgProps = new Array();

function PlasmicButtonListingPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.button, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"navbarListButtonTextParent"}
        data-plasmic-override={overrides.navbarListButtonTextParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.navbarListButtonTextParent)}
      >
        <ListingIcon
          data-plasmic-name={"navbarListButtonSvg"}
          data-plasmic-override={overrides.navbarListButtonSvg}
          className={classNames(projectcss.all, sty.navbarListButtonSvg)}
          role={"img"}
        />

        <div
          data-plasmic-name={"navbarListButtonText"}
          data-plasmic-override={overrides.navbarListButtonText}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.navbarListButtonText
          )}
        >
          {"New listing"}
        </div>
      </p.Stack>
    </button>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarListButtonTextParent",
    "navbarListButtonSvg",
    "navbarListButtonText"
  ],

  navbarListButtonTextParent: [
    "navbarListButtonTextParent",
    "navbarListButtonSvg",
    "navbarListButtonText"
  ],

  navbarListButtonSvg: ["navbarListButtonSvg"],
  navbarListButtonText: ["navbarListButtonText"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonListingPrimary__ArgProps,
      internalVariantPropNames: PlasmicButtonListingPrimary__VariantProps
    });

    return PlasmicButtonListingPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonListingPrimary";
  } else {
    func.displayName = `PlasmicButtonListingPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonListingPrimary = Object.assign(
  // Top-level PlasmicButtonListingPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarListButtonTextParent: makeNodeComponent("navbarListButtonTextParent"),
    navbarListButtonSvg: makeNodeComponent("navbarListButtonSvg"),
    navbarListButtonText: makeNodeComponent("navbarListButtonText"),
    // Metadata about props expected for PlasmicButtonListingPrimary
    internalVariantProps: PlasmicButtonListingPrimary__VariantProps,
    internalArgProps: PlasmicButtonListingPrimary__ArgProps
  }
);

export default PlasmicButtonListingPrimary;
/* prettier-ignore-end */
