// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 1wS8JpmDTD
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardTitleHeading.module.css"; // plasmic-import: 1wS8JpmDTD/css

export const PlasmicCardTitleHeading__VariantProps = new Array(
  "headings",
  "size"
);

export const PlasmicCardTitleHeading__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

function PlasmicCardTitleHeading__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.parent, {
        [sty.parent__size__1080]: hasVariant(variants, "size", "_1080"),
        [sty.parent__size__270]: hasVariant(variants, "size", "_270"),
        [sty.parent__size__360]: hasVariant(variants, "size", "_360"),
        [sty.parent__size__540]: hasVariant(variants, "size", "_540"),
        [sty.parent__size__720]: hasVariant(variants, "size", "_720")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"titleParent"}
        data-plasmic-override={overrides.titleParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.titleParent, {
          [sty.titleParent__size__1080]: hasVariant(variants, "size", "_1080"),
          [sty.titleParent__size__270]: hasVariant(variants, "size", "_270")
        })}
      >
        <div
          data-plasmic-name={"title"}
          data-plasmic-override={overrides.title}
          className={classNames(defaultcss.all, sty.title, {
            [sty.title__headings_headline]: hasVariant(
              variants,
              "headings",
              "headline"
            ),

            [sty.title__headings_title]: hasVariant(
              variants,
              "headings",
              "title"
            ),

            [sty.title__size__270]: hasVariant(variants, "size", "_270")
          })}
        >
          <div
            className={classNames(defaultcss.all, sty.box__chr, {
              [sty.box__headings_headline__chrkEwo7]: hasVariant(
                variants,
                "headings",
                "headline"
              ),

              [sty.box__headings_title__chrYh4RN]: hasVariant(
                variants,
                "headings",
                "title"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Title",
              value: args.children,
              className: classNames(sty.slotChildren, {
                [sty.slotChildren__headings_headline]: hasVariant(
                  variants,
                  "headings",
                  "headline"
                ),

                [sty.slotChildren__headings_title]: hasVariant(
                  variants,
                  "headings",
                  "title"
                ),

                [sty.slotChildren__size__270]: hasVariant(
                  variants,
                  "size",
                  "_270"
                )
              })
            })}
          </div>
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"headlineSubheadParent"}
          data-plasmic-override={overrides.headlineSubheadParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.headlineSubheadParent, {
            [sty.headlineSubheadParent__size__1080]: hasVariant(
              variants,
              "size",
              "_1080"
            ),

            [sty.headlineSubheadParent__size__360]: hasVariant(
              variants,
              "size",
              "_360"
            )
          })}
        >
          <div
            data-plasmic-name={"headline"}
            data-plasmic-override={overrides.headline}
            className={classNames(defaultcss.all, sty.headline, {
              [sty.headline__headings_headline]: hasVariant(
                variants,
                "headings",
                "headline"
              ),

              [sty.headline__size__1080]: hasVariant(variants, "size", "_1080"),
              [sty.headline__size__270]: hasVariant(variants, "size", "_270")
            })}
          >
            <div
              className={classNames(defaultcss.all, sty.box__zfPi, {
                [sty.box__headings_headline__zfPikEwo7]: hasVariant(
                  variants,
                  "headings",
                  "headline"
                ),

                [sty.box__size__1080__zfPifLghF]: hasVariant(
                  variants,
                  "size",
                  "_1080"
                ),

                [sty.box__size__270__zfPiiWza5]: hasVariant(
                  variants,
                  "size",
                  "_270"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Headline Title",
                value: args.slot,
                className: classNames(sty.slotSlot, {
                  [sty.slotSlot__headings_headline]: hasVariant(
                    variants,
                    "headings",
                    "headline"
                  ),

                  [sty.slotSlot__size__1080]: hasVariant(
                    variants,
                    "size",
                    "_1080"
                  ),

                  [sty.slotSlot__size__270]: hasVariant(
                    variants,
                    "size",
                    "_270"
                  )
                })
              })}
            </div>
          </div>

          <div
            data-plasmic-name={"subhead"}
            data-plasmic-override={overrides.subhead}
            className={classNames(defaultcss.all, sty.subhead, {
              [sty.subhead__headings_headline]: hasVariant(
                variants,
                "headings",
                "headline"
              ),

              [sty.subhead__headings_subhead]: hasVariant(
                variants,
                "headings",
                "subhead"
              ),

              [sty.subhead__size__270]: hasVariant(variants, "size", "_270")
            })}
          >
            <div
              className={classNames(defaultcss.all, sty.box__pYrKy, {
                [sty.box__headings_headline__pYrKykEwo7]: hasVariant(
                  variants,
                  "headings",
                  "headline"
                ),

                [sty.box__headings_subhead__pYrKy2WQYo]: hasVariant(
                  variants,
                  "headings",
                  "subhead"
                ),

                [sty.box__size__270__pYrKyiWza5]: hasVariant(
                  variants,
                  "size",
                  "_270"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Subhead title",
                value: args.slot2,
                className: classNames(sty.slotSlot2, {
                  [sty.slotSlot2__headings_headline]: hasVariant(
                    variants,
                    "headings",
                    "headline"
                  ),

                  [sty.slotSlot2__headings_subhead]: hasVariant(
                    variants,
                    "headings",
                    "subhead"
                  ),

                  [sty.slotSlot2__size__270]: hasVariant(
                    variants,
                    "size",
                    "_270"
                  )
                })
              })}
            </div>
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "titleParent",
    "title",
    "headlineSubheadParent",
    "headline",
    "subhead"
  ],

  titleParent: [
    "titleParent",
    "title",
    "headlineSubheadParent",
    "headline",
    "subhead"
  ],

  title: ["title"],
  headlineSubheadParent: ["headlineSubheadParent", "headline", "subhead"],
  headline: ["headline"],
  subhead: ["subhead"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardTitleHeading__ArgProps,
      internalVariantPropNames: PlasmicCardTitleHeading__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardTitleHeading__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicCardTitleHeading";
  } else {
    func.displayName = `PlasmicCardTitleHeading.${nodeName}`;
  }
  return func;
}

export const PlasmicCardTitleHeading = Object.assign(
  // Top-level PlasmicCardTitleHeading renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    titleParent: makeNodeComponent("titleParent"),
    title: makeNodeComponent("title"),
    headlineSubheadParent: makeNodeComponent("headlineSubheadParent"),
    headline: makeNodeComponent("headline"),
    subhead: makeNodeComponent("subhead"),
    // Metadata about props expected for PlasmicCardTitleHeading
    internalVariantProps: PlasmicCardTitleHeading__VariantProps,
    internalArgProps: PlasmicCardTitleHeading__ArgProps
  }
);

export default PlasmicCardTitleHeading;
/* prettier-ignore-end */
