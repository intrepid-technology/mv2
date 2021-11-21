// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Ss3X7VAgr4Y
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
import * as sty from "./PlasmicTextInput.module.css"; // plasmic-import: Ss3X7VAgr4Y/css

export const PlasmicTextInput__VariantProps = new Array(
  "type",
  "adornment",
  "showLabel"
);

export const PlasmicTextInput__ArgProps = new Array(
  "startAdornment",
  "endAdornment",
  "name",
  "placeholder",
  "label"
);

function PlasmicTextInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      {(hasVariant(variants, "showLabel", "showLabel") ? true : false) ? (
        <div
          data-plasmic-name={"labelWrapper"}
          data-plasmic-override={overrides.labelWrapper}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.labelWrapper,
            {
              [sty.labelWrapper__showLabel]: hasVariant(
                variants,
                "showLabel",
                "showLabel"
              )
            }
          )}
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
        className={classNames(defaultcss.all, projectcss.all, sty.wrapper, {
          [sty.wrapper__adornment_end]: hasVariant(
            variants,
            "adornment",
            "end"
          ),

          [sty.wrapper__adornment_start]: hasVariant(
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
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.startAdornmentWrapper,
              {
                [sty.startAdornmentWrapper__adornment_end]: hasVariant(
                  variants,
                  "adornment",
                  "end"
                ),

                [sty.startAdornmentWrapper__adornment_start]: hasVariant(
                  variants,
                  "adornment",
                  "start"
                ),

                [sty.startAdornmentWrapper__type_secondary_adornment_start]:
                  hasVariant(variants, "type", "secondary") &&
                  hasVariant(variants, "adornment", "start")
              }
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Text",
              value: args.startAdornment,
              className: classNames(sty.slotTargetStartAdornment, {
                [sty.slotTargetStartAdornment__adornment_end]: hasVariant(
                  variants,
                  "adornment",
                  "end"
                ),

                [sty.slotTargetStartAdornment__adornment_start]: hasVariant(
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
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.inputWrapper
          )}
        >
          <input
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput ?? overrides.textbox}
            className={classNames(
              defaultcss.input,
              projectcss.input,
              sty.textInput,
              {
                [sty.textInput__adornment_end]: hasVariant(
                  variants,
                  "adornment",
                  "end"
                ),

                [sty.textInput__adornment_start]: hasVariant(
                  variants,
                  "adornment",
                  "start"
                ),

                [sty.textInput__adornment_start_adornment_end]:
                  hasVariant(variants, "adornment", "start") &&
                  hasVariant(variants, "adornment", "end"),
                [sty.textInput__showLabel]: hasVariant(
                  variants,
                  "showLabel",
                  "showLabel"
                ),

                [sty.textInput__type_secondary]: hasVariant(
                  variants,
                  "type",
                  "secondary"
                )
              }
            )}
            placeholder={args.placeholder}
            size={1}
            type={"text"}
            value={""}
          />
        </div>

        {(hasVariant(variants, "adornment", "end") ? true : false) ? (
          <div
            data-plasmic-name={"endAdornmentWrapper"}
            data-plasmic-override={overrides.endAdornmentWrapper}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.endAdornmentWrapper,
              {
                [sty.endAdornmentWrapper__adornment_end]: hasVariant(
                  variants,
                  "adornment",
                  "end"
                ),

                [sty.endAdornmentWrapper__adornment_end_type_secondary]:
                  hasVariant(variants, "adornment", "end") &&
                  hasVariant(variants, "type", "secondary")
              }
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Text",
              value: args.endAdornment,
              className: classNames(sty.slotTargetEndAdornment, {
                [sty.slotTargetEndAdornment__adornment_end]: hasVariant(
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
    "textInput",
    "endAdornmentWrapper"
  ],

  labelWrapper: ["labelWrapper"],
  wrapper: [
    "wrapper",
    "startAdornmentWrapper",
    "inputWrapper",
    "textInput",
    "endAdornmentWrapper"
  ],

  startAdornmentWrapper: ["startAdornmentWrapper"],
  inputWrapper: ["inputWrapper", "textInput"],
  textInput: ["textInput"],
  endAdornmentWrapper: ["endAdornmentWrapper"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTextInput__ArgProps,
      internalVariantPropNames: PlasmicTextInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTextInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextInput";
  } else {
    func.displayName = `PlasmicTextInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextInput = Object.assign(
  // Top-level PlasmicTextInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelWrapper: makeNodeComponent("labelWrapper"),
    wrapper: makeNodeComponent("wrapper"),
    startAdornmentWrapper: makeNodeComponent("startAdornmentWrapper"),
    inputWrapper: makeNodeComponent("inputWrapper"),
    textInput: makeNodeComponent("textInput"),
    endAdornmentWrapper: makeNodeComponent("endAdornmentWrapper"),
    // Metadata about props expected for PlasmicTextInput
    internalVariantProps: PlasmicTextInput__VariantProps,
    internalArgProps: PlasmicTextInput__ArgProps
  }
);

export default PlasmicTextInput;
/* prettier-ignore-end */
