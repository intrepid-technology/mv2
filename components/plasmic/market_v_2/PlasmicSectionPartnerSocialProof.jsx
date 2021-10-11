// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: eTGfVAc0pz
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionPartnerSocialProof.module.css"; // plasmic-import: eTGfVAc0pz/css

export const PlasmicSectionPartnerSocialProof__VariantProps = new Array();

export const PlasmicSectionPartnerSocialProof__ArgProps = new Array();

function PlasmicSectionPartnerSocialProof__RenderFunc(props) {
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___8TJh3)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__jdMrM
          )}
        >
          {"Partner Spotlight"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text___4ZfZw
          )}
        >
          {
            "“Intrepid extends our brand awareness to entrepreneurs in cities around the world that wouldn't normally be exposed to us.”"
          }
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__uYzUr
          )}
        >
          {"Diana Robinson, Owner\nPixel Dust Design, Los Angeles\n"}
        </div>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.freeBox__fTqRj)}>
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          src={"/plasmic/market_v_2/images/peopleCreative3Jpg.jpeg"}
        />
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionPartnerSocialProof__ArgProps,
      internalVariantPropNames: PlasmicSectionPartnerSocialProof__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSectionPartnerSocialProof__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionPartnerSocialProof";
  } else {
    func.displayName = `PlasmicSectionPartnerSocialProof.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionPartnerSocialProof = Object.assign(
  // Top-level PlasmicSectionPartnerSocialProof renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicSectionPartnerSocialProof
    internalVariantProps: PlasmicSectionPartnerSocialProof__VariantProps,
    internalArgProps: PlasmicSectionPartnerSocialProof__ArgProps
  }
);

export default PlasmicSectionPartnerSocialProof;
/* prettier-ignore-end */