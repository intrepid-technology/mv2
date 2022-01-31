// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: JDi6d9hmkm
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextLinkUnderlinePrimary from "../../TextLinkUnderlinePrimary"; // plasmic-import: fFeX6kEAMB/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicElementListingEditCard.module.css"; // plasmic-import: JDi6d9hmkm/css
import CircleCheckedIcon from "./icons/PlasmicIcon__CircleChecked"; // plasmic-import: Ebjr5Ebml/icon
import Icon176Icon from "./icons/PlasmicIcon__Icon176"; // plasmic-import: OzyxQHcsWW/icon
import Icon177Icon from "./icons/PlasmicIcon__Icon177"; // plasmic-import: 3qiHrElSQf/icon
import Icon111Icon from "./icons/PlasmicIcon__Icon111"; // plasmic-import: fytPd42_r6/icon

export const PlasmicElementListingEditCard__VariantProps = new Array(
  "icon",
  "button",
  "toolTip"
);

export const PlasmicElementListingEditCard__ArgProps = new Array(
  "children",
  "buttonParent",
  "alert",
  "question",
  "check",
  "textLink"
);

function PlasmicElementListingEditCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.rootbutton]: hasVariant(variants, "button", "button"),
        [sty.rooticon]: hasVariant(variants, "icon", "icon"),
        [sty.roottoolTip_check]: hasVariant(variants, "toolTip", "check")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"editHeadlineTitleParent"}
        data-plasmic-override={overrides.editHeadlineTitleParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.editHeadlineTitleParent, {
          [sty.editHeadlineTitleParenttoolTip_check]: hasVariant(
            variants,
            "toolTip",
            "check"
          )
        })}
      >
        <div
          data-plasmic-name={"svgParent"}
          data-plasmic-override={overrides.svgParent}
          className={classNames(projectcss.all, sty.svgParent, {
            [sty.svgParenticon]: hasVariant(variants, "icon", "icon"),
            [sty.svgParenttoolTip_alert]: hasVariant(
              variants,
              "toolTip",
              "alert"
            ),

            [sty.svgParenttoolTip_check]: hasVariant(
              variants,
              "toolTip",
              "check"
            ),

            [sty.svgParenttoolTip_question]: hasVariant(
              variants,
              "toolTip",
              "question"
            )
          })}
        >
          {(
            hasVariant(variants, "toolTip", "check")
              ? false
              : hasVariant(variants, "toolTip", "question")
              ? false
              : hasVariant(variants, "toolTip", "alert")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <CircleCheckedIcon
                    className={classNames(projectcss.all, sty.svg__eGk9V)}
                    role={"img"}
                  />
                ),

                value: args.children
              })
            : null}
          {(hasVariant(variants, "toolTip", "alert") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Icon176Icon
                    className={classNames(projectcss.all, sty.svg__iIye)}
                    role={"img"}
                  />
                ),

                value: args.alert
              })
            : null}
          {(
            hasVariant(variants, "toolTip", "question")
              ? true
              : hasVariant(variants, "toolTip", "alert")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Icon177Icon
                    className={classNames(projectcss.all, sty.svg__llKwg)}
                    role={"img"}
                  />
                ),

                value: args.question
              })
            : null}
          {(
            hasVariant(variants, "toolTip", "check")
              ? true
              : hasVariant(variants, "toolTip", "question")
              ? false
              : hasVariant(variants, "toolTip", "alert")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Icon111Icon
                    className={classNames(projectcss.all, sty.svg__trWqi)}
                    role={"img"}
                  />
                ),

                value: args.check
              })
            : null}
        </div>

        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: <TextLinkUnderlinePrimary size={"_32"} />,
            value: args.textLink
          })}
        </div>
      </p.Stack>

      <div
        data-plasmic-name={"buttonParent"}
        data-plasmic-override={overrides.buttonParent}
        className={classNames(projectcss.all, sty.buttonParent, {
          [sty.buttonParentbutton]: hasVariant(variants, "button", "button"),
          [sty.buttonParenticon]: hasVariant(variants, "icon", "icon")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: true ? (
            <ButtonPrimary
              className={classNames("__wab_instance", sty.buttonPrimary__wghUd)}
              type={"ghost"}
              width={"_90"}
            />
          ) : null,
          value: args.buttonParent
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "editHeadlineTitleParent",
    "svgParent",
    "freeBox",
    "buttonParent"
  ],

  editHeadlineTitleParent: ["editHeadlineTitleParent", "svgParent", "freeBox"],
  svgParent: ["svgParent"],
  freeBox: ["freeBox"],
  buttonParent: ["buttonParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementListingEditCard__ArgProps,
      internalVariantPropNames: PlasmicElementListingEditCard__VariantProps
    });

    return PlasmicElementListingEditCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementListingEditCard";
  } else {
    func.displayName = `PlasmicElementListingEditCard.${nodeName}`;
  }
  return func;
}

export const PlasmicElementListingEditCard = Object.assign(
  // Top-level PlasmicElementListingEditCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editHeadlineTitleParent: makeNodeComponent("editHeadlineTitleParent"),
    svgParent: makeNodeComponent("svgParent"),
    freeBox: makeNodeComponent("freeBox"),
    buttonParent: makeNodeComponent("buttonParent"),
    // Metadata about props expected for PlasmicElementListingEditCard
    internalVariantProps: PlasmicElementListingEditCard__VariantProps,
    internalArgProps: PlasmicElementListingEditCard__ArgProps
  }
);

export default PlasmicElementListingEditCard;
/* prettier-ignore-end */
