// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -BSaqEeBIJ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import CardCta from "../../CardCta"; // plasmic-import: sv774W0v3F/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionPartnerDashboardCta.module.css"; // plasmic-import: -BSaqEeBIJ/css

export const PlasmicSectionPartnerDashboardCta__VariantProps = new Array();

export const PlasmicSectionPartnerDashboardCta__ArgProps = new Array();

function PlasmicSectionPartnerDashboardCta__RenderFunc(props) {
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <CardCta
        data-plasmic-name={"cardCta"}
        data-plasmic-override={overrides.cardCta}
        center={
          hasVariant(globalVariants, "screen", "mobile") ? "center" : undefined
        }
        className={classNames("__wab_instance", sty.cardCta)}
        slot={
          hasVariant(globalVariants, "screen", "desktop")
            ? "Gain the insights you need to grow—use a single dashboard to manage orders, projects, collaborators, reviews, and payments from anywhere.\n"
            : "Gain the insights you need to grow—use a single dashboard to manage orders, projects, reviews, and payments from anywhere.\n"
        }
      >
        {hasVariant(globalVariants, "screen", "desktop")
          ? "Automated business management for creative entrepreneurs."
          : "Manage and grow your business like never before"}
      </CardCta>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          src={"/plasmic/market_v_2/images/intrepidDashboardpng.png"}
        />
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "cardCta", "freeBox", "img"],
  cardCta: ["cardCta"],
  freeBox: ["freeBox", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionPartnerDashboardCta__ArgProps,
      internalVariantPropNames: PlasmicSectionPartnerDashboardCta__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSectionPartnerDashboardCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionPartnerDashboardCta";
  } else {
    func.displayName = `PlasmicSectionPartnerDashboardCta.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionPartnerDashboardCta = Object.assign(
  // Top-level PlasmicSectionPartnerDashboardCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cardCta: makeNodeComponent("cardCta"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicSectionPartnerDashboardCta
    internalVariantProps: PlasmicSectionPartnerDashboardCta__VariantProps,
    internalArgProps: PlasmicSectionPartnerDashboardCta__ArgProps
  }
);

export default PlasmicSectionPartnerDashboardCta;
/* prettier-ignore-end */
