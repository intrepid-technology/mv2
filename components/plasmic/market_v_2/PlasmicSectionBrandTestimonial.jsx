// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: mjt7CZropo
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionBrandTestimonial.module.css"; // plasmic-import: mjt7CZropo/css
import ApplesvgIcon from "./icons/PlasmicIcon__Applesvg"; // plasmic-import: J_76r5N89/icon
import TheNorthFace1LogoSvgVectorsvgIcon from "./icons/PlasmicIcon__TheNorthFace1LogoSvgVectorsvg"; // plasmic-import: Anyn124Pr/icon
import MastercardsvgIcon from "./icons/PlasmicIcon__Mastercardsvg"; // plasmic-import: W4hkSJywT/icon
import NikesvgIcon from "./icons/PlasmicIcon__Nikesvg"; // plasmic-import: jNcsRuphk/icon
import LvmhLogosvgIcon from "./icons/PlasmicIcon__LvmhLogosvg"; // plasmic-import: 9MwDlhB7W/icon

export const PlasmicSectionBrandTestimonial__VariantProps = new Array("color");

export const PlasmicSectionBrandTestimonial__ArgProps = new Array(
  "children",
  "slot3"
);

function PlasmicSectionBrandTestimonial__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
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
        [sty.root__color]: hasVariant(variants, "color", "color")
      })}
    >
      <div className={classNames(projectcss.all, sty.freeBox__mj8CM)}>
        <div className={classNames(projectcss.all, sty.freeBox__wDJaS)}>
          {p.renderPlasmicSlot({
            defaultContents: "We're a trusted community to world class teams",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren__color]: hasVariant(
                variants,
                "color",
                "color"
              )
            })
          })}
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rsBuL)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <ApplesvgIcon
                className={classNames(projectcss.all, sty.svg___7MOBz)}
                role={"img"}
              />

              <TheNorthFace1LogoSvgVectorsvgIcon
                className={classNames(projectcss.all, sty.svg__cP3Fi)}
                role={"img"}
              />

              <MastercardsvgIcon
                className={classNames(projectcss.all, sty.svg__aTdJe)}
                role={"img"}
              />

              <NikesvgIcon
                className={classNames(projectcss.all, sty.svg__yx3Za)}
                role={"img"}
              />

              <LvmhLogosvgIcon
                className={classNames(projectcss.all, sty.svg___3Azwk)}
                role={"img"}
              />
            </React.Fragment>
          ),

          value: args.slot3,
          className: classNames(sty.slotTargetSlot3, {
            [sty.slotTargetSlot3__color]: hasVariant(variants, "color", "color")
          })
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionBrandTestimonial__ArgProps,
      internalVariantPropNames: PlasmicSectionBrandTestimonial__VariantProps
    });

    return PlasmicSectionBrandTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionBrandTestimonial";
  } else {
    func.displayName = `PlasmicSectionBrandTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionBrandTestimonial = Object.assign(
  // Top-level PlasmicSectionBrandTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSectionBrandTestimonial
    internalVariantProps: PlasmicSectionBrandTestimonial__VariantProps,
    internalArgProps: PlasmicSectionBrandTestimonial__ArgProps
  }
);

export default PlasmicSectionBrandTestimonial;
/* prettier-ignore-end */
