// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -teiDn_7Z-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SelectDropdownPrimary from "../../SelectDropdownPrimary"; // plasmic-import: T_qFWEqz1I6/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSelectGroupDropdownPrimary.module.css"; // plasmic-import: -teiDn_7Z-/css

export const PlasmicSelectGroupDropdownPrimary__VariantProps = new Array(
  "label",
  "description",
  "width"
);

export const PlasmicSelectGroupDropdownPrimary__ArgProps = new Array(
  "children",
  "slot",
  "placeholder"
);

function PlasmicSelectGroupDropdownPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.rootwidth_stretch]: hasVariant(variants, "width", "stretch")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parentwidth__90]: hasVariant(variants, "width", "_90"),
          [sty.parentwidth_stretch]: hasVariant(variants, "width", "stretch")
        })}
      >
        {(hasVariant(variants, "label", "label") ? true : true) ? (
          <label
            data-plasmic-name={"labelParent"}
            data-plasmic-override={overrides.labelParent}
            className={classNames(projectcss.all, sty.labelParent, {
              [sty.labelParentdescription]: hasVariant(
                variants,
                "description",
                "description"
              ),

              [sty.labelParentlabel]: hasVariant(variants, "label", "label")
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox__vyC13)}>
              {p.renderPlasmicSlot({
                defaultContents: "Label",
                value: args.children,
                className: classNames(sty.slotTargetChildren)
              })}
            </div>
          </label>
        ) : null}

        <SelectDropdownPrimary
          data-plasmic-name={"selectDropdownPrimary"}
          data-plasmic-override={overrides.selectDropdownPrimary}
          className={classNames("__wab_instance", sty.selectDropdownPrimary, {
            [sty.selectDropdownPrimarywidth__120]: hasVariant(
              variants,
              "width",
              "_120"
            ),

            [sty.selectDropdownPrimarywidth__144]: hasVariant(
              variants,
              "width",
              "_144"
            ),

            [sty.selectDropdownPrimarywidth__160]: hasVariant(
              variants,
              "width",
              "_160"
            ),

            [sty.selectDropdownPrimarywidth__180]: hasVariant(
              variants,
              "width",
              "_180"
            ),

            [sty.selectDropdownPrimarywidth__270]: hasVariant(
              variants,
              "width",
              "_270"
            ),

            [sty.selectDropdownPrimarywidth__360]: hasVariant(
              variants,
              "width",
              "_360"
            ),

            [sty.selectDropdownPrimarywidth__540]: hasVariant(
              variants,
              "width",
              "_540"
            ),

            [sty.selectDropdownPrimarywidth__720]: hasVariant(
              variants,
              "width",
              "_720"
            ),

            [sty.selectDropdownPrimarywidth__90]: hasVariant(
              variants,
              "width",
              "_90"
            ),

            [sty.selectDropdownPrimarywidth_stretch]: hasVariant(
              variants,
              "width",
              "stretch"
            )
          })}
          placeholder={p.renderPlasmicSlot({
            defaultContents: "Select...",
            value: args.placeholder
          })}
          width={
            hasVariant(variants, "width", "_360")
              ? "_360"
              : hasVariant(variants, "width", "_270")
              ? "_270"
              : hasVariant(variants, "width", "_180")
              ? "_180"
              : hasVariant(variants, "width", "_160")
              ? "_160"
              : hasVariant(variants, "width", "_144")
              ? "_144"
              : hasVariant(variants, "width", "_120")
              ? "_120"
              : hasVariant(variants, "width", "_90")
              ? "_90"
              : hasVariant(variants, "width", "stretch")
              ? "stretch"
              : hasVariant(variants, "width", "_720")
              ? "_720"
              : hasVariant(variants, "width", "_540")
              ? "_540"
              : "stretch"
          }
        />

        {(hasVariant(variants, "description", "description") ? true : true) ? (
          <div
            data-plasmic-name={"descriptionParent"}
            data-plasmic-override={overrides.descriptionParent}
            className={classNames(projectcss.all, sty.descriptionParent, {
              [sty.descriptionParentdescription]: hasVariant(
                variants,
                "description",
                "description"
              ),

              [sty.descriptionParentlabel]: hasVariant(
                variants,
                "label",
                "label"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox___9Iita)}>
              {p.renderPlasmicSlot({
                defaultContents: "Description",
                value: args.slot,
                className: classNames(sty.slotTargetSlot)
              })}
            </div>
          </div>
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "labelParent",
    "selectDropdownPrimary",
    "descriptionParent"
  ],

  parent: [
    "parent",
    "labelParent",
    "selectDropdownPrimary",
    "descriptionParent"
  ],

  labelParent: ["labelParent"],
  selectDropdownPrimary: ["selectDropdownPrimary"],
  descriptionParent: ["descriptionParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelectGroupDropdownPrimary__ArgProps,
      internalVariantPropNames: PlasmicSelectGroupDropdownPrimary__VariantProps
    });

    return PlasmicSelectGroupDropdownPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelectGroupDropdownPrimary";
  } else {
    func.displayName = `PlasmicSelectGroupDropdownPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectGroupDropdownPrimary = Object.assign(
  // Top-level PlasmicSelectGroupDropdownPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    labelParent: makeNodeComponent("labelParent"),
    selectDropdownPrimary: makeNodeComponent("selectDropdownPrimary"),
    descriptionParent: makeNodeComponent("descriptionParent"),
    // Metadata about props expected for PlasmicSelectGroupDropdownPrimary
    internalVariantProps: PlasmicSelectGroupDropdownPrimary__VariantProps,
    internalArgProps: PlasmicSelectGroupDropdownPrimary__ArgProps
  }
);

export default PlasmicSelectGroupDropdownPrimary;
/* prettier-ignore-end */
