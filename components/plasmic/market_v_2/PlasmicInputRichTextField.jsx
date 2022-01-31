// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: V-SFFoHu_mr
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicInputRichTextField.module.css"; // plasmic-import: V-SFFoHu_mr/css

export const PlasmicInputRichTextField__VariantProps = new Array(
  "headline",
  "description",
  "type",
  "size"
);

export const PlasmicInputRichTextField__ArgProps = new Array(
  "children",
  "subhead"
);

function PlasmicInputRichTextField__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.rootsize__270]: hasVariant(variants, "size", "_270"),
        [sty.rootsize__540]: hasVariant(variants, "size", "_540"),
        [sty.roottype_secondary]: hasVariant(variants, "type", "secondary")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parentsize__180]: hasVariant(variants, "size", "_180"),
          [sty.parentsize__270]: hasVariant(variants, "size", "_270"),
          [sty.parentsize__360]: hasVariant(variants, "size", "_360"),
          [sty.parentsize__540]: hasVariant(variants, "size", "_540")
        })}
      >
        {(hasVariant(variants, "headline", "headline") ? false : true) ? (
          <div
            data-plasmic-name={"headlineLabelParent"}
            data-plasmic-override={overrides.headlineLabelParent}
            className={classNames(projectcss.all, sty.headlineLabelParent, {
              [sty.headlineLabelParentdescription]: hasVariant(
                variants,
                "description",
                "description"
              ),

              [sty.headlineLabelParentheadline]: hasVariant(
                variants,
                "headline",
                "headline"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Sub Headline",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildrenheadline]: hasVariant(
                  variants,
                  "headline",
                  "headline"
                )
              })
            })}
          </div>
        ) : null}

        <textarea
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames(
            projectcss.all,
            projectcss.textarea,
            sty.description,
            {
              [sty.descriptionsize__180]: hasVariant(variants, "size", "_180"),
              [sty.descriptionsize__270]: hasVariant(variants, "size", "_270"),
              [sty.descriptionsize__360]: hasVariant(variants, "size", "_360"),
              [sty.descriptionsize__540]: hasVariant(variants, "size", "_540"),
              [sty.descriptiontype_primary]: hasVariant(
                variants,
                "type",
                "primary"
              ),

              [sty.descriptiontype_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              )
            }
          )}
          placeholder={"Describe"}
          value={""}
        />

        {(hasVariant(variants, "description", "description") ? false : true) ? (
          <div
            data-plasmic-name={"subheadParent"}
            data-plasmic-override={overrides.subheadParent}
            className={classNames(projectcss.all, sty.subheadParent, {
              [sty.subheadParentdescription]: hasVariant(
                variants,
                "description",
                "description"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Sub body",
              value: args.subhead,
              className: classNames(sty.slotTargetSubhead, {
                [sty.slotTargetSubheaddescription]: hasVariant(
                  variants,
                  "description",
                  "description"
                )
              })
            })}
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
    "headlineLabelParent",
    "description",
    "subheadParent"
  ],

  parent: ["parent", "headlineLabelParent", "description", "subheadParent"],
  headlineLabelParent: ["headlineLabelParent"],
  description: ["description"],
  subheadParent: ["subheadParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputRichTextField__ArgProps,
      internalVariantPropNames: PlasmicInputRichTextField__VariantProps
    });

    return PlasmicInputRichTextField__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputRichTextField";
  } else {
    func.displayName = `PlasmicInputRichTextField.${nodeName}`;
  }
  return func;
}

export const PlasmicInputRichTextField = Object.assign(
  // Top-level PlasmicInputRichTextField renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    headlineLabelParent: makeNodeComponent("headlineLabelParent"),
    description: makeNodeComponent("description"),
    subheadParent: makeNodeComponent("subheadParent"),
    // Metadata about props expected for PlasmicInputRichTextField
    internalVariantProps: PlasmicInputRichTextField__VariantProps,
    internalArgProps: PlasmicInputRichTextField__ArgProps
  }
);

export default PlasmicInputRichTextField;
/* prettier-ignore-end */
