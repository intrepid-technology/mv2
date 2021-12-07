// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: g0j2UvLSvh
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardFeatureDescription.module.css"; // plasmic-import: g0j2UvLSvh/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon

export const PlasmicCardFeatureDescription__VariantProps = new Array(
  "border",
  "size"
);

export const PlasmicCardFeatureDescription__ArgProps = new Array(
  "text",
  "headline",
  "iconParent"
);

function PlasmicCardFeatureDescription__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__size__360]: hasVariant(variants, "size", "_360")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"cardParent"}
        data-plasmic-override={overrides.cardParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.cardParent, {
          [sty.cardParent__border]: hasVariant(variants, "border", "border"),
          [sty.cardParent__size__160]: hasVariant(variants, "size", "_160"),
          [sty.cardParent__size__360]: hasVariant(variants, "size", "_360")
        })}
      >
        <div
          data-plasmic-name={"iconParent"}
          data-plasmic-override={overrides.iconParent}
          className={classNames(projectcss.all, sty.iconParent, {
            [sty.iconParent__size__360]: hasVariant(variants, "size", "_360")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div className={classNames(projectcss.all, sty.freeBox__mdvci)}>
                <PlusBoldIcon
                  className={classNames(projectcss.all, sty.svg___8Asoz)}
                  role={"img"}
                />
              </div>
            ),

            value: args.iconParent
          })}
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"headlineBodyTextParent"}
          data-plasmic-override={overrides.headlineBodyTextParent}
          hasGap={true}
          className={classNames(projectcss.all, sty.headlineBodyTextParent, {
            [sty.headlineBodyTextParent__size__160]: hasVariant(
              variants,
              "size",
              "_160"
            ),

            [sty.headlineBodyTextParent__size__360]: hasVariant(
              variants,
              "size",
              "_360"
            )
          })}
        >
          <div
            data-plasmic-name={"headlineDiv"}
            data-plasmic-override={overrides.headlineDiv}
            className={classNames(projectcss.all, sty.headlineDiv)}
          >
            <div
              data-plasmic-name={"headline"}
              data-plasmic-override={overrides.headline}
              className={classNames(projectcss.all, sty.headline, {
                [sty.headline__size__160]: hasVariant(variants, "size", "_160")
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Headline feature desription",
                value: args.headline,
                className: classNames(sty.slotTargetHeadline, {
                  [sty.slotTargetHeadline__size__160]: hasVariant(
                    variants,
                    "size",
                    "_160"
                  ),

                  [sty.slotTargetHeadline__size__360]: hasVariant(
                    variants,
                    "size",
                    "_360"
                  )
                })
              })}
            </div>
          </div>

          <div
            data-plasmic-name={"textParent"}
            data-plasmic-override={overrides.textParent}
            className={classNames(projectcss.all, sty.textParent, {
              [sty.textParent__size__360]: hasVariant(variants, "size", "_360")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents:
                "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in.",
              value: args.text,
              className: classNames(sty.slotTargetText, {
                [sty.slotTargetText__size__160]: hasVariant(
                  variants,
                  "size",
                  "_160"
                ),

                [sty.slotTargetText__size__360]: hasVariant(
                  variants,
                  "size",
                  "_360"
                )
              })
            })}
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "cardParent",
    "iconParent",
    "headlineBodyTextParent",
    "headlineDiv",
    "headline",
    "textParent"
  ],

  cardParent: [
    "cardParent",
    "iconParent",
    "headlineBodyTextParent",
    "headlineDiv",
    "headline",
    "textParent"
  ],

  iconParent: ["iconParent"],
  headlineBodyTextParent: [
    "headlineBodyTextParent",
    "headlineDiv",
    "headline",
    "textParent"
  ],

  headlineDiv: ["headlineDiv", "headline"],
  headline: ["headline"],
  textParent: ["textParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardFeatureDescription__ArgProps,
      internalVariantPropNames: PlasmicCardFeatureDescription__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardFeatureDescription__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardFeatureDescription";
  } else {
    func.displayName = `PlasmicCardFeatureDescription.${nodeName}`;
  }
  return func;
}

export const PlasmicCardFeatureDescription = Object.assign(
  // Top-level PlasmicCardFeatureDescription renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cardParent: makeNodeComponent("cardParent"),
    iconParent: makeNodeComponent("iconParent"),
    headlineBodyTextParent: makeNodeComponent("headlineBodyTextParent"),
    headlineDiv: makeNodeComponent("headlineDiv"),
    headline: makeNodeComponent("headline"),
    textParent: makeNodeComponent("textParent"),
    // Metadata about props expected for PlasmicCardFeatureDescription
    internalVariantProps: PlasmicCardFeatureDescription__VariantProps,
    internalArgProps: PlasmicCardFeatureDescription__ArgProps
  }
);

export default PlasmicCardFeatureDescription;
/* prettier-ignore-end */
