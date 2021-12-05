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
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputRichTextField.module.css"; // plasmic-import: V-SFFoHu_mr/css

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
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__size__270]: hasVariant(variants, "size", "_270"),
          [sty.root__size__540]: hasVariant(variants, "size", "_540"),
          [sty.root__type_secondary]: hasVariant(variants, "type", "secondary")
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, projectcss.all, sty.parent, {
          [sty.parent__size__180]: hasVariant(variants, "size", "_180"),
          [sty.parent__size__270]: hasVariant(variants, "size", "_270"),
          [sty.parent__size__360]: hasVariant(variants, "size", "_360"),
          [sty.parent__size__540]: hasVariant(variants, "size", "_540")
        })}
      >
        {(hasVariant(variants, "headline", "headline") ? false : true) ? (
          <div
            data-plasmic-name={"headlineLabelParent"}
            data-plasmic-override={overrides.headlineLabelParent}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.headlineLabelParent,
              {
                [sty.headlineLabelParent__description]: hasVariant(
                  variants,
                  "description",
                  "description"
                ),

                [sty.headlineLabelParent__headline]: hasVariant(
                  variants,
                  "headline",
                  "headline"
                )
              }
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Sub Headline",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildren__headline]: hasVariant(
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
            defaultcss.textarea,
            projectcss.textarea,
            sty.description,
            {
              [sty.description__size__180]: hasVariant(
                variants,
                "size",
                "_180"
              ),

              [sty.description__size__270]: hasVariant(
                variants,
                "size",
                "_270"
              ),

              [sty.description__size__360]: hasVariant(
                variants,
                "size",
                "_360"
              ),

              [sty.description__size__540]: hasVariant(
                variants,
                "size",
                "_540"
              ),

              [sty.description__type_primary]: hasVariant(
                variants,
                "type",
                "primary"
              ),

              [sty.description__type_secondary]: hasVariant(
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
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.subheadParent,
              {
                [sty.subheadParent__description]: hasVariant(
                  variants,
                  "description",
                  "description"
                )
              }
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Sub body",
              value: args.subhead,
              className: classNames(sty.slotTargetSubhead, {
                [sty.slotTargetSubhead__description]: hasVariant(
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

    const { dataFetches } = props;
    return PlasmicInputRichTextField__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
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
