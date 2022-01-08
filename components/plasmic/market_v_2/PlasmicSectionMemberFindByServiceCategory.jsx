// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: yOH-Bx6ijkp
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
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionMemberFindByServiceCategory.module.css"; // plasmic-import: yOH-Bx6ijkp/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: W-rzROj7A_/icon
import Icon127Icon from "./icons/PlasmicIcon__Icon127"; // plasmic-import: BQQVqyM_WP/icon
import BlockchainsvgIcon from "./icons/PlasmicIcon__Blockchainsvg"; // plasmic-import: rV_DkTjjca/icon
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: tH8bGPssFL/icon
import Icon35Icon from "./icons/PlasmicIcon__Icon35"; // plasmic-import: -2THcNqYp5/icon
import Icon36Icon from "./icons/PlasmicIcon__Icon36"; // plasmic-import: XIZAHxIdCF/icon
import Icon37Icon from "./icons/PlasmicIcon__Icon37"; // plasmic-import: Fv8NIIvWvH/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: rAiA7uYbVo/icon
import Icon39Icon from "./icons/PlasmicIcon__Icon39"; // plasmic-import: 0orO0zuatq/icon

export const PlasmicSectionMemberFindByServiceCategory__VariantProps =
  new Array();

export const PlasmicSectionMemberFindByServiceCategory__ArgProps = new Array();

function PlasmicSectionMemberFindByServiceCategory__RenderFunc(props) {
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
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__wbMTc
        )}
      >
        {hasVariant(globalVariants, "screen", "desktop")
          ? "Find by service"
          : "Shop by service category"}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__zecKu
          )}
          color={"bgLightB"}
          size={
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? "_180"
              : hasVariant(globalVariants, "screen", "desktop")
              ? "_270"
              : "_270"
          }
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__u0Iru
              )}
            >
              {hasVariant(globalVariants, "screen", "desktop")
                ? "No code"
                : "Software development"}
            </div>
          }
        >
          <p.PlasmicIcon
            PlasmicIconType={
              hasVariant(globalVariants, "screen", "desktop")
                ? Icon127Icon
                : IconIcon
            }
            className={classNames(projectcss.all, sty.svg__z6IaD)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__e9ZuA
          )}
          color={"bgLightB"}
          size={
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? "_180"
              : hasVariant(globalVariants, "screen", "desktop")
              ? "_270"
              : "_270"
          }
          slot={
            hasVariant(globalVariants, "screen", "desktop")
              ? "Blockchain"
              : "blockchain development"
          }
        >
          <BlockchainsvgIcon
            className={classNames(projectcss.all, sty.svg__ikJ57)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__ogDdO
          )}
          color={"bgLightB"}
          size={
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? "_180"
              : hasVariant(globalVariants, "screen", "desktop")
              ? "_270"
              : "_270"
          }
          slot={
            hasVariant(globalVariants, "screen", "desktop")
              ? "UX design"
              : "UX design & prototypes"
          }
        >
          <Icon16Icon
            className={classNames(projectcss.all, sty.svg__hKeL8)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames("__wab_instance", sty.chipCategoryHeader__p8K)}
          color={"bgLightB"}
          size={
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? "_180"
              : hasVariant(globalVariants, "screen", "desktop")
              ? "_270"
              : "_270"
          }
          slot={
            hasVariant(globalVariants, "screen", "desktop")
              ? "Mobile apps"
              : "Mobile app development"
          }
        >
          <Icon35Icon
            className={classNames(projectcss.all, sty.svg__jw5N)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__xcYrv
          )}
          color={"bgLightB"}
          size={
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? "_180"
              : hasVariant(globalVariants, "screen", "desktop")
              ? "_270"
              : "_270"
          }
          slot={"Web development"}
        >
          <Icon36Icon
            className={classNames(projectcss.all, sty.svg__w2G27)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__tqXkC
          )}
          color={"bgLightB"}
          size={
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? "_180"
              : hasVariant(globalVariants, "screen", "desktop")
              ? "_270"
              : "_270"
          }
          slot={"Digital marketing"}
        >
          <Icon37Icon
            className={classNames(projectcss.all, sty.svg__qzafu)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__zdO05
          )}
          color={"bgLightB"}
          size={
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? "_180"
              : hasVariant(globalVariants, "screen", "desktop")
              ? "_270"
              : "_270"
          }
          slot={
            hasVariant(globalVariants, "screen", "desktop")
              ? "Gaming"
              : "Game development"
          }
        >
          <Icon38Icon
            className={classNames(projectcss.all, sty.svg__w9HRi)}
            role={"img"}
          />
        </ChipCategoryHeader>

        <ChipCategoryHeader
          className={classNames(
            "__wab_instance",
            sty.chipCategoryHeader__btgm4
          )}
          color={"bgLightB"}
          size={
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? "_180"
              : hasVariant(globalVariants, "screen", "desktop")
              ? "_270"
              : "_270"
          }
          slot={
            hasVariant(globalVariants, "screen", "desktop")
              ? "View all categories"
              : "View all service categories"
          }
        >
          <p.PlasmicIcon
            PlasmicIconType={
              hasVariant(globalVariants, "screen", "desktop")
                ? IconIcon
                : Icon39Icon
            }
            className={classNames(projectcss.all, sty.svg__rHhcp)}
            role={"img"}
          />
        </ChipCategoryHeader>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionMemberFindByServiceCategory__ArgProps,
      internalVariantPropNames:
        PlasmicSectionMemberFindByServiceCategory__VariantProps
    });

    return PlasmicSectionMemberFindByServiceCategory__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionMemberFindByServiceCategory";
  } else {
    func.displayName = `PlasmicSectionMemberFindByServiceCategory.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionMemberFindByServiceCategory = Object.assign(
  // Top-level PlasmicSectionMemberFindByServiceCategory renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicSectionMemberFindByServiceCategory
    internalVariantProps:
      PlasmicSectionMemberFindByServiceCategory__VariantProps,
    internalArgProps: PlasmicSectionMemberFindByServiceCategory__ArgProps
  }
);

export default PlasmicSectionMemberFindByServiceCategory;
/* prettier-ignore-end */
