// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: TzNLRNFhlx
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ElementStripeLogoLinkBurple from "../../ElementStripeLogoLinkBurple"; // plasmic-import: EOrI3xKqvN/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicChipStripeLink.module.css"; // plasmic-import: TzNLRNFhlx/css

export const PlasmicChipStripeLink__VariantProps = new Array();

export const PlasmicChipStripeLink__ArgProps = new Array();

function PlasmicChipStripeLink__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.a, projectcss.root_reset, sty.root)}
      component={Link}
      href={"https://stripe.com"}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"textlabelParent"}
        data-plasmic-override={overrides.textlabelParent}
        className={classNames(projectcss.all, sty.textlabelParent)}
      >
        <div
          data-plasmic-name={"poweredByText"}
          data-plasmic-override={overrides.poweredByText}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.poweredByText
          )}
        >
          {"Powered by"}
        </div>
      </div>

      <ElementStripeLogoLinkBurple
        data-plasmic-name={"elementStripeLogoLinkBurple"}
        data-plasmic-override={overrides.elementStripeLogoLinkBurple}
        className={classNames(
          "__wab_instance",
          sty.elementStripeLogoLinkBurple
        )}
        size={"_18"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "textlabelParent",
    "poweredByText",
    "elementStripeLogoLinkBurple"
  ],

  textlabelParent: ["textlabelParent", "poweredByText"],
  poweredByText: ["poweredByText"],
  elementStripeLogoLinkBurple: ["elementStripeLogoLinkBurple"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicChipStripeLink__ArgProps,
      internalVariantPropNames: PlasmicChipStripeLink__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicChipStripeLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChipStripeLink";
  } else {
    func.displayName = `PlasmicChipStripeLink.${nodeName}`;
  }
  return func;
}

export const PlasmicChipStripeLink = Object.assign(
  // Top-level PlasmicChipStripeLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textlabelParent: makeNodeComponent("textlabelParent"),
    poweredByText: makeNodeComponent("poweredByText"),
    elementStripeLogoLinkBurple: makeNodeComponent(
      "elementStripeLogoLinkBurple"
    ),

    // Metadata about props expected for PlasmicChipStripeLink
    internalVariantProps: PlasmicChipStripeLink__VariantProps,
    internalArgProps: PlasmicChipStripeLink__ArgProps
  }
);

export default PlasmicChipStripeLink;
/* prettier-ignore-end */
