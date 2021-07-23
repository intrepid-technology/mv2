// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: PUBVQZa84u
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LogoHeader from "../../LogoHeader"; // plasmic-import: 9wNFT5FYWe/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicNavbarServiceListing.module.css"; // plasmic-import: PUBVQZa84u/css

export const PlasmicNavbarServiceListing__VariantProps = new Array(
  "color",
  "state"
);

export const PlasmicNavbarServiceListing__ArgProps = new Array("children");

function PlasmicNavbarServiceListing__RenderFunc(props) {
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
        [sty.root__color]: hasVariant(variants, "color", "color")
      })}
    >
      <LogoHeader
        data-plasmic-name={"logoHeader"}
        data-plasmic-override={overrides.logoHeader}
        className={classNames("__wab_instance", sty.logoHeader)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img, {
            [sty.img__color]: hasVariant(variants, "color", "color")
          })}
          role={"img"}
          src={
            hasVariant(variants, "color", "color")
              ? "/plasmic/market_v_2/images/intrepidPrimaryBsvg.svg"
              : "/plasmic/market_v_2/images/intrepidLogo2021V2Darksvg.svg"
          }
        />
      </LogoHeader>

      {(hasVariant(globalVariants, "screen", "mobile") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Section Title",
            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren__color]: hasVariant(variants, "color", "color")
            })
          })
        : null}

      <ButtonPrimary
        data-plasmic-name={"buttonPrimary"}
        data-plasmic-override={overrides.buttonPrimary}
        className={classNames("__wab_instance", sty.buttonPrimary)}
        color={"brand"}
        size={"_120"}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox,
            {
              [sty.freeBox__state_checkout]: hasVariant(
                variants,
                "state",
                "checkout"
              )
            }
          )}
        >
          {hasVariant(variants, "state", "checkout") ? "Place Order" : "Next"}
        </div>
      </ButtonPrimary>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "logoHeader", "img", "buttonPrimary", "freeBox"],
  logoHeader: ["logoHeader", "img"],
  img: ["img"],
  buttonPrimary: ["buttonPrimary", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbarServiceListing__ArgProps,
      internalVariantPropNames: PlasmicNavbarServiceListing__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbarServiceListing__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarServiceListing";
  } else {
    func.displayName = `PlasmicNavbarServiceListing.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarServiceListing = Object.assign(
  // Top-level PlasmicNavbarServiceListing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logoHeader: makeNodeComponent("logoHeader"),
    img: makeNodeComponent("img"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicNavbarServiceListing
    internalVariantProps: PlasmicNavbarServiceListing__VariantProps,
    internalArgProps: PlasmicNavbarServiceListing__ArgProps
  }
);

export default PlasmicNavbarServiceListing;
/* prettier-ignore-end */
