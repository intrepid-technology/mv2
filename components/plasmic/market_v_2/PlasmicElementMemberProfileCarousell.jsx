// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Ip2eQQfcFG
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ChipUserProfile from "../../ChipUserProfile"; // plasmic-import: 0x8Ex9CEDPX/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicElementMemberProfileCarousell.module.css"; // plasmic-import: Ip2eQQfcFG/css

export const PlasmicElementMemberProfileCarousell__VariantProps = new Array();

export const PlasmicElementMemberProfileCarousell__ArgProps = new Array(
  "headlineLabel"
);

function PlasmicElementMemberProfileCarousell__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"parent"}
          data-plasmic-override={overrides.parent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.parent)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobile")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : true
          ) ? (
            <div
              data-plasmic-name={"headlineLabelParent"}
              data-plasmic-override={overrides.headlineLabelParent}
              className={classNames(defaultcss.all, sty.headlineLabelParent)}
            >
              {(
                hasVariant(globalVariants, "screen", "desktop") ? true : true
              ) ? (
                <div className={classNames(defaultcss.all, sty.box___4RlGc)}>
                  <div className={classNames(defaultcss.all, sty.box__vtm)}>
                    {p.renderPlasmicSlot({
                      defaultContents: "Headline label",
                      value: args.headlineLabel,
                      className: classNames(sty.slotHeadlineLabel)
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobile")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : true
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"memberCarousel"}
              data-plasmic-override={overrides.memberCarousel}
              hasGap={true}
              className={classNames(defaultcss.all, sty.memberCarousel)}
            >
              {(
                hasVariant(globalVariants, "screen", "desktop") ? true : true
              ) ? (
                <ChipUserProfile
                  className={classNames(
                    "__wab_instance",
                    sty.chipUserProfile__bsvA6
                  )}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "desktop") ? true : true
              ) ? (
                <ChipUserProfile
                  className={classNames(
                    "__wab_instance",
                    sty.chipUserProfile___8KFb7
                  )}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "desktop") ? true : true
              ) ? (
                <ChipUserProfile
                  className={classNames(
                    "__wab_instance",
                    sty.chipUserProfile___1I8G
                  )}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "desktop") ? true : true
              ) ? (
                <ChipUserProfile
                  className={classNames(
                    "__wab_instance",
                    sty.chipUserProfile__ok35
                  )}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "desktop") ? true : true
              ) ? (
                <ChipUserProfile
                  className={classNames(
                    "__wab_instance",
                    sty.chipUserProfile__pPgt8
                  )}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "desktop") ? true : true
              ) ? (
                <ChipUserProfile
                  className={classNames(
                    "__wab_instance",
                    sty.chipUserProfile__ks5Sk
                  )}
                />
              ) : null}
            </p.Stack>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "headlineLabelParent", "memberCarousel"],
  parent: ["parent", "headlineLabelParent", "memberCarousel"],
  headlineLabelParent: ["headlineLabelParent"],
  memberCarousel: ["memberCarousel"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementMemberProfileCarousell__ArgProps,
      internalVariantPropNames:
        PlasmicElementMemberProfileCarousell__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicElementMemberProfileCarousell__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementMemberProfileCarousell";
  } else {
    func.displayName = `PlasmicElementMemberProfileCarousell.${nodeName}`;
  }
  return func;
}

export const PlasmicElementMemberProfileCarousell = Object.assign(
  // Top-level PlasmicElementMemberProfileCarousell renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    headlineLabelParent: makeNodeComponent("headlineLabelParent"),
    memberCarousel: makeNodeComponent("memberCarousel"),
    // Metadata about props expected for PlasmicElementMemberProfileCarousell
    internalVariantProps: PlasmicElementMemberProfileCarousell__VariantProps,
    internalArgProps: PlasmicElementMemberProfileCarousell__ArgProps
  }
);

export default PlasmicElementMemberProfileCarousell;
/* prettier-ignore-end */
