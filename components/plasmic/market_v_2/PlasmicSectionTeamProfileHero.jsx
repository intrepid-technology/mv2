// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: HxQLFVQnwjF
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import CardTeamProfileHeroDisplay from "../../CardTeamProfileHeroDisplay"; // plasmic-import: CFL7zSW3US5/component
import ImagePrimary from "../../ImagePrimary"; // plasmic-import: LP50swkVvv/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionTeamProfileHero.module.css"; // plasmic-import: HxQLFVQnwjF/css

export const PlasmicSectionTeamProfileHero__VariantProps = new Array();

export const PlasmicSectionTeamProfileHero__ArgProps = new Array();

function PlasmicSectionTeamProfileHero__RenderFunc(props) {
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
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <CardTeamProfileHeroDisplay
        data-plasmic-name={"cardTeamProfileHeroDisplay"}
        data-plasmic-override={overrides.cardTeamProfileHeroDisplay}
        className={classNames("__wab_instance", sty.cardTeamProfileHeroDisplay)}
      />

      <ImagePrimary
        data-plasmic-name={"imagePrimary"}
        data-plasmic-override={overrides.imagePrimary}
        _32={
          hasVariant(globalVariants, "screen", "iphone678Plus")
            ? "_360X240"
            : "_720X480"
        }
        className={classNames("__wab_instance", sty.imagePrimary)}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "cardTeamProfileHeroDisplay", "imagePrimary"],
  cardTeamProfileHeroDisplay: ["cardTeamProfileHeroDisplay"],
  imagePrimary: ["imagePrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionTeamProfileHero__ArgProps,
      internalVariantPropNames: PlasmicSectionTeamProfileHero__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSectionTeamProfileHero__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionTeamProfileHero";
  } else {
    func.displayName = `PlasmicSectionTeamProfileHero.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionTeamProfileHero = Object.assign(
  // Top-level PlasmicSectionTeamProfileHero renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cardTeamProfileHeroDisplay: makeNodeComponent("cardTeamProfileHeroDisplay"),
    imagePrimary: makeNodeComponent("imagePrimary"),
    // Metadata about props expected for PlasmicSectionTeamProfileHero
    internalVariantProps: PlasmicSectionTeamProfileHero__VariantProps,
    internalArgProps: PlasmicSectionTeamProfileHero__ArgProps
  }
);

export default PlasmicSectionTeamProfileHero;
/* prettier-ignore-end */
