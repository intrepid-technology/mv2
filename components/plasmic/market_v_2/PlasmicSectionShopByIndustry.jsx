// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ua8654-3suB
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ChipCategoryHeader from "../../ChipCategoryHeader"; // plasmic-import: W3C_J23Z38/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionShopByIndustry.module.css"; // plasmic-import: ua8654-3suB/css
import Icon31Icon from "./icons/PlasmicIcon__Icon31"; // plasmic-import: VBNqBhLtYU/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: 1ixWuykQyi/icon
import BlockchainsvgIcon from "./icons/PlasmicIcon__Blockchainsvg"; // plasmic-import: rV_DkTjjca/icon
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: eamZIkpqK/icon
import Icon25Icon from "./icons/PlasmicIcon__Icon25"; // plasmic-import: yNOJgjiS1V/icon
import Icon32Icon from "./icons/PlasmicIcon__Icon32"; // plasmic-import: 105tMWMT6i/icon
import Icon44Icon from "./icons/PlasmicIcon__Icon44"; // plasmic-import: LvhUN64pGz/icon

export const PlasmicSectionShopByIndustry__VariantProps = new Array();

export const PlasmicSectionShopByIndustry__ArgProps = new Array();

function PlasmicSectionShopByIndustry__RenderFunc(props) {
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
      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box__fPuP5
        )}
      >
        {hasVariant(globalVariants, "screen", "mobileAPrimary")
          ? "Find by Industry"
          : hasVariant(globalVariants, "screen", "desktopPrimary")
          ? "Find by Industry"
          : "Shop by Industry"}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__kOiq5)}
      >
        <ChipCategoryHeader
          className={classNames("__wab_instance", sty.chipCategoryHeader__xJ5H)}
          size={
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? "_180"
              : "_270"
          }
          slot={
            hasVariant(globalVariants, "screen", "desktopPrimary")
              ? "E-commerce"
              : "E-commerce development"
          }
        >
          <Icon31Icon
            className={classNames(defaultcss.all, sty.svg__m0Qz1)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames("__wab_instance", sty.chipCategoryHeader__nE9)}
          size={
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? "_180"
              : "_270"
          }
          slot={"Video"}
        >
          <Icon11Icon
            className={classNames(defaultcss.all, sty.svg__gchyK)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader___11Sg
          )}
          size={
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? "_180"
              : "_270"
          }
          slot={"Blockchain"}
        >
          <BlockchainsvgIcon
            className={classNames(defaultcss.all, sty.svg__knR4M)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__on7T8
          )}
          size={
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? "_180"
              : "_270"
          }
          slot={"Health"}
        >
          <Icon18Icon
            className={classNames(defaultcss.all, sty.svg__yaNaK)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__e28QS
          )}
          size={
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? "_180"
              : "_270"
          }
          slot={"FinTech"}
        >
          <Icon25Icon
            className={classNames(defaultcss.all, sty.svg__rBvUc)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader___1BpcX
          )}
          size={
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? "_180"
              : "_270"
          }
          slot={"Insurance"}
        >
          <Icon32Icon
            className={classNames(defaultcss.all, sty.svg___1EjwE)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__sdz9G
          )}
          size={
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? "_180"
              : "_270"
          }
          slot={"Cloud"}
        >
          <Icon44Icon
            className={classNames(defaultcss.all, sty.svg__xAeT)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__zoZeX
          )}
          size={
            hasVariant(globalVariants, "screen", "mobileAPrimary")
              ? "_180"
              : "_270"
          }
          slot={"View all industries"}
        />
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
      internalArgPropNames: PlasmicSectionShopByIndustry__ArgProps,
      internalVariantPropNames: PlasmicSectionShopByIndustry__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSectionShopByIndustry__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionShopByIndustry";
  } else {
    func.displayName = `PlasmicSectionShopByIndustry.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionShopByIndustry = Object.assign(
  // Top-level PlasmicSectionShopByIndustry renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSectionShopByIndustry
    internalVariantProps: PlasmicSectionShopByIndustry__VariantProps,
    internalArgProps: PlasmicSectionShopByIndustry__ArgProps
  }
);

export default PlasmicSectionShopByIndustry;
/* prettier-ignore-end */
