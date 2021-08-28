// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: gjyxgsDEI-
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
import * as sty from "./PlasmicInputCardNumberField.module.css"; // plasmic-import: gjyxgsDEI-/css

export const PlasmicInputCardNumberField__VariantProps = new Array(
  "description",
  "state",
  "size"
);

export const PlasmicInputCardNumberField__ArgProps = new Array(
  "children",
  "slot"
);

function PlasmicInputCardNumberField__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__size__180]: hasVariant(variants, "size", "_180"),
        [sty.root__size__270]: hasVariant(variants, "size", "_270")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__mo2A2, {
          [sty.freeBox__size__180__mo2A2Wew5]: hasVariant(
            variants,
            "size",
            "_180"
          ),

          [sty.freeBox__state_success__mo2A2Xndgz]: hasVariant(
            variants,
            "state",
            "success"
          )
        })}
      >
        <p.Stack
          as={"input"}
          data-plasmic-name={"textbox"}
          data-plasmic-override={overrides.textbox}
          hasGap={true}
          className={classNames(defaultcss.input, sty.textbox, {
            [sty.textbox__size__180]: hasVariant(variants, "size", "_180"),
            [sty.textbox__state_success]: hasVariant(
              variants,
              "state",
              "success"
            )
          })}
          placeholder={""}
          size={1}
          type={"text"}
          value={""}
        />

        <div
          className={classNames(defaultcss.all, sty.freeBox__w4B3K, {
            [sty.freeBox__size__180__w4B3KWew5]: hasVariant(
              variants,
              "size",
              "_180"
            ),

            [sty.freeBox__size__270__w4B3KEWntz]: hasVariant(
              variants,
              "size",
              "_270"
            ),

            [sty.freeBox__state_success__w4B3Kxndgz]: hasVariant(
              variants,
              "state",
              "success"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Content",
            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren__size__180]: hasVariant(
                variants,
                "size",
                "_180"
              ),

              [sty.slotChildren__state_success]: hasVariant(
                variants,
                "state",
                "success"
              )
            })
          })}
        </div>
      </p.Stack>

      {(hasVariant(variants, "description", "description") ? false : true) ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox___09Rg3, {
            [sty.freeBox__description___09Rg38YNeE]: hasVariant(
              variants,
              "description",
              "description"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Description",
            value: args.slot,
            className: classNames(sty.slotSlot, {
              [sty.slotSlot__description]: hasVariant(
                variants,
                "description",
                "description"
              ),

              [sty.slotSlot__size__180]: hasVariant(variants, "size", "_180")
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "textbox"],
  textbox: ["textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputCardNumberField__ArgProps,
      internalVariantPropNames: PlasmicInputCardNumberField__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputCardNumberField__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputCardNumberField";
  } else {
    func.displayName = `PlasmicInputCardNumberField.${nodeName}`;
  }
  return func;
}

export const PlasmicInputCardNumberField = Object.assign(
  // Top-level PlasmicInputCardNumberField renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    // Metadata about props expected for PlasmicInputCardNumberField
    internalVariantProps: PlasmicInputCardNumberField__VariantProps,
    internalArgProps: PlasmicInputCardNumberField__ArgProps
  }
);

export default PlasmicInputCardNumberField;
/* prettier-ignore-end */