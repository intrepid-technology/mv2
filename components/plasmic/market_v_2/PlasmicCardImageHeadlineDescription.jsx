// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Kht0-rt2fI1
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ImagePrimary from "../../ImagePrimary"; // plasmic-import: LP50swkVvv/component
import TextLinkUnderlinePrimary from "../../TextLinkUnderlinePrimary"; // plasmic-import: fFeX6kEAMB/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicCardImageHeadlineDescription.module.css"; // plasmic-import: Kht0-rt2fI1/css

export const PlasmicCardImageHeadlineDescription__VariantProps = new Array(
  "description",
  "size"
);

export const PlasmicCardImageHeadlineDescription__ArgProps = new Array(
  "textLinkHeadlineParent",
  "subheadParent",
  "_360X360",
  "_270X270"
);

function PlasmicCardImageHeadlineDescription__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootsize__270X270]: hasVariant(variants, "size", "_270X270"),
          [sty.rootsize__360X360]: hasVariant(variants, "size", "_360X360")
        }
      )}
    >
      <div
        data-plasmic-name={"imageParent"}
        data-plasmic-override={overrides.imageParent}
        className={classNames(projectcss.all, sty.imageParent, {
          [sty.imageParentsize__270X270]: hasVariant(
            variants,
            "size",
            "_270X270"
          )
        })}
      >
        <ImagePrimary
          data-plasmic-name={"imagePrimary"}
          data-plasmic-override={overrides.imagePrimary}
          _11={
            hasVariant(variants, "size", "_270X270") ? "_270X270" : "_360X360"
          }
          _270X270={
            <React.Fragment>
              {false ? (
                <img
                  alt={""}
                  className={classNames(
                    projectcss.all,
                    projectcss.img,
                    sty.img__f30B9
                  )}
                  src={
                    "https://craftypixels.com/placeholder-image/40x40/f8f8f8/333333"
                  }
                />
              ) : null}
              {p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__tkgid
                    )}
                    src={
                      "https://craftypixels.com/placeholder-image/270x270/f8f8f8/333333"
                    }
                  />
                ),

                value: args._270X270
              })}
            </React.Fragment>
          }
          _360X360={
            <React.Fragment>
              {false ? (
                <img
                  alt={""}
                  className={classNames(
                    projectcss.all,
                    projectcss.img,
                    sty.img__xV2M8
                  )}
                  src={
                    "https://craftypixels.com/placeholder-image/40x40/f8f8f8/333333"
                  }
                />
              ) : null}
              {p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__tAiFn
                    )}
                    src={
                      "https://craftypixels.com/placeholder-image/360x360/f8f8f8/333333"
                    }
                  />
                ),

                value: args._360X360
              })}
            </React.Fragment>
          }
        />
      </div>

      <div
        data-plasmic-name={"textLinkHeadlineParent"}
        data-plasmic-override={overrides.textLinkHeadlineParent}
        className={classNames(projectcss.all, sty.textLinkHeadlineParent, {
          [sty.textLinkHeadlineParentsize__270X270]: hasVariant(
            variants,
            "size",
            "_270X270"
          ),

          [sty.textLinkHeadlineParentsize__360X360]: hasVariant(
            variants,
            "size",
            "_360X360"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <TextLinkUnderlinePrimary
              color={"headline"}
              size={"_24"}
              text={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ntFG
                  )}
                >
                  {"Text link Headline"}
                </div>
              }
            />
          ),

          value: args.textLinkHeadlineParent
        })}
      </div>

      <div
        data-plasmic-name={"subheadParent"}
        data-plasmic-override={overrides.subheadParent}
        className={classNames(projectcss.all, sty.subheadParent, {
          [sty.subheadParentdescription]: hasVariant(
            variants,
            "description",
            "description"
          ),

          [sty.subheadParentsize__270X270]: hasVariant(
            variants,
            "size",
            "_270X270"
          ),

          [sty.subheadParentsize__360X360]: hasVariant(
            variants,
            "size",
            "_360X360"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7ErTm
              )}
            >
              {"Subhead description"}
            </div>
          ),

          value: args.subheadParent
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "imageParent",
    "imagePrimary",
    "textLinkHeadlineParent",
    "subheadParent"
  ],

  imageParent: ["imageParent", "imagePrimary"],
  imagePrimary: ["imagePrimary"],
  textLinkHeadlineParent: ["textLinkHeadlineParent"],
  subheadParent: ["subheadParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardImageHeadlineDescription__ArgProps,
      internalVariantPropNames:
        PlasmicCardImageHeadlineDescription__VariantProps
    });

    return PlasmicCardImageHeadlineDescription__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardImageHeadlineDescription";
  } else {
    func.displayName = `PlasmicCardImageHeadlineDescription.${nodeName}`;
  }
  return func;
}

export const PlasmicCardImageHeadlineDescription = Object.assign(
  // Top-level PlasmicCardImageHeadlineDescription renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    imageParent: makeNodeComponent("imageParent"),
    imagePrimary: makeNodeComponent("imagePrimary"),
    textLinkHeadlineParent: makeNodeComponent("textLinkHeadlineParent"),
    subheadParent: makeNodeComponent("subheadParent"),
    // Metadata about props expected for PlasmicCardImageHeadlineDescription
    internalVariantProps: PlasmicCardImageHeadlineDescription__VariantProps,
    internalArgProps: PlasmicCardImageHeadlineDescription__ArgProps
  }
);

export default PlasmicCardImageHeadlineDescription;
/* prettier-ignore-end */
