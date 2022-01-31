// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 0ftTMwkv9kS
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
import sty from "./PlasmicTextAreaInput.module.css"; // plasmic-import: 0ftTMwkv9kS/css

export const PlasmicTextAreaInput__VariantProps = new Array(
  "type",
  "adornment",
  "showLabel"
);

export const PlasmicTextAreaInput__ArgProps = new Array(
  "startAdornment",
  "endAdornment",
  "name",
  "placeholder",
  "label"
);

function PlasmicTextAreaInput__RenderFunc(props) {
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
        [sty.rootshowLabel]: hasVariant(variants, "showLabel", "showLabel")
      })}
    >
      {(hasVariant(variants, "showLabel", "showLabel") ? true : false) ? (
        <div
          data-plasmic-name={"labelWrapper"}
          data-plasmic-override={overrides.labelWrapper}
          className={classNames(projectcss.all, sty.labelWrapper, {
            [sty.labelWrappershowLabel]: hasVariant(
              variants,
              "showLabel",
              "showLabel"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.label
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"wrapper"}
        data-plasmic-override={overrides.wrapper}
        className={classNames(projectcss.all, sty.wrapper, {
          [sty.wrapperadornment_end]: hasVariant(variants, "adornment", "end"),
          [sty.wrapperadornment_start]: hasVariant(
            variants,
            "adornment",
            "start"
          )
        })}
      >
        {(hasVariant(variants, "adornment", "start") ? true : false) ? (
          <div
            data-plasmic-name={"startAdornmentWrapper"}
            data-plasmic-override={overrides.startAdornmentWrapper}
            className={classNames(projectcss.all, sty.startAdornmentWrapper, {
              [sty.startAdornmentWrapperadornment_end]: hasVariant(
                variants,
                "adornment",
                "end"
              ),

              [sty.startAdornmentWrapperadornment_start]: hasVariant(
                variants,
                "adornment",
                "start"
              ),

              [sty.startAdornmentWrappertype_secondary_adornment_start]:
                hasVariant(variants, "type", "secondary") &&
                hasVariant(variants, "adornment", "start")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Text",
              value: args.startAdornment,
              className: classNames(sty.slotTargetStartAdornment, {
                [sty.slotTargetStartAdornmentadornment_end]: hasVariant(
                  variants,
                  "adornment",
                  "end"
                ),

                [sty.slotTargetStartAdornmentadornment_start]: hasVariant(
                  variants,
                  "adornment",
                  "start"
                )
              })
            })}
          </div>
        ) : null}

        <div
          data-plasmic-name={"inputWrapper"}
          data-plasmic-override={overrides.inputWrapper}
          className={classNames(projectcss.all, sty.inputWrapper)}
        >
          <textarea
            data-plasmic-name={"textarea"}
            data-plasmic-override={overrides.textarea}
            className={classNames(
              projectcss.all,
              projectcss.textarea,
              sty.textarea,
              {
                [sty.textareatype_primary]: hasVariant(
                  variants,
                  "type",
                  "primary"
                ),

                [sty.textareatype_secondary]: hasVariant(
                  variants,
                  "type",
                  "secondary"
                )
              }
            )}
            placeholder={args.placeholder}
            value={""}
          />
        </div>

        {(hasVariant(variants, "adornment", "end") ? true : false) ? (
          <div
            data-plasmic-name={"endAdornmentWrapper"}
            data-plasmic-override={overrides.endAdornmentWrapper}
            className={classNames(projectcss.all, sty.endAdornmentWrapper, {
              [sty.endAdornmentWrapperadornment_end]: hasVariant(
                variants,
                "adornment",
                "end"
              ),

              [sty.endAdornmentWrapperadornment_end_type_secondary]:
                hasVariant(variants, "adornment", "end") &&
                hasVariant(variants, "type", "secondary")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Text",
              value: args.endAdornment,
              className: classNames(sty.slotTargetEndAdornment, {
                [sty.slotTargetEndAdornmentadornment_end]: hasVariant(
                  variants,
                  "adornment",
                  "end"
                )
              })
            })}
          </div>
        ) : null}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "labelWrapper",
    "wrapper",
    "startAdornmentWrapper",
    "inputWrapper",
    "textarea",
    "endAdornmentWrapper"
  ],

  labelWrapper: ["labelWrapper"],
  wrapper: [
    "wrapper",
    "startAdornmentWrapper",
    "inputWrapper",
    "textarea",
    "endAdornmentWrapper"
  ],

  startAdornmentWrapper: ["startAdornmentWrapper"],
  inputWrapper: ["inputWrapper", "textarea"],
  textarea: ["textarea"],
  endAdornmentWrapper: ["endAdornmentWrapper"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTextAreaInput__ArgProps,
      internalVariantPropNames: PlasmicTextAreaInput__VariantProps
    });

    return PlasmicTextAreaInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextAreaInput";
  } else {
    func.displayName = `PlasmicTextAreaInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextAreaInput = Object.assign(
  // Top-level PlasmicTextAreaInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelWrapper: makeNodeComponent("labelWrapper"),
    wrapper: makeNodeComponent("wrapper"),
    startAdornmentWrapper: makeNodeComponent("startAdornmentWrapper"),
    inputWrapper: makeNodeComponent("inputWrapper"),
    textarea: makeNodeComponent("textarea"),
    endAdornmentWrapper: makeNodeComponent("endAdornmentWrapper"),
    // Metadata about props expected for PlasmicTextAreaInput
    internalVariantProps: PlasmicTextAreaInput__VariantProps,
    internalArgProps: PlasmicTextAreaInput__ArgProps
  }
);

export default PlasmicTextAreaInput;
/* prettier-ignore-end */
