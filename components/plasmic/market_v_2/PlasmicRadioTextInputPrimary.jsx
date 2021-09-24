// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 1xw4kmw_5l
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ElementRadioPrimary from "../../ElementRadioPrimary"; // plasmic-import: Wn4V4PrC-K/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicRadioTextInputPrimary.module.css"; // plasmic-import: 1xw4kmw_5l/css

export const PlasmicRadioTextInputPrimary__VariantProps = new Array("size");

export const PlasmicRadioTextInputPrimary__ArgProps = new Array("itemText");

function PlasmicRadioTextInputPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__size__12Px]: hasVariant(variants, "size", "_12Px")
        })}
      >
        <ElementRadioPrimary
          data-plasmic-name={"elementRadioPrimary"}
          data-plasmic-override={overrides.elementRadioPrimary}
          className={classNames("__wab_instance", sty.elementRadioPrimary, {
            [sty.elementRadioPrimary__size__12Px]: hasVariant(
              variants,
              "size",
              "_12Px"
            ),

            [sty.elementRadioPrimary__size__16Px]: hasVariant(
              variants,
              "size",
              "_16Px"
            )
          })}
          size={hasVariant(variants, "size", "_12Px") ? "_12Px" : "_14Px"}
        />

        {p.renderPlasmicSlot({
          defaultContents: "Item element",
          value: args.itemText,
          className: classNames(sty.slotTargetItemText, {
            [sty.slotTargetItemText__size__12Px]: hasVariant(
              variants,
              "size",
              "_12Px"
            ),

            [sty.slotTargetItemText__size__14Px]: hasVariant(
              variants,
              "size",
              "_14Px"
            ),

            [sty.slotTargetItemText__size__16Px]: hasVariant(
              variants,
              "size",
              "_16Px"
            )
          })
        })}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "parent", "elementRadioPrimary"],
  parent: ["parent", "elementRadioPrimary"],
  elementRadioPrimary: ["elementRadioPrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRadioTextInputPrimary__ArgProps,
      internalVariantPropNames: PlasmicRadioTextInputPrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicRadioTextInputPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRadioTextInputPrimary";
  } else {
    func.displayName = `PlasmicRadioTextInputPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicRadioTextInputPrimary = Object.assign(
  // Top-level PlasmicRadioTextInputPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    elementRadioPrimary: makeNodeComponent("elementRadioPrimary"),
    // Metadata about props expected for PlasmicRadioTextInputPrimary
    internalVariantProps: PlasmicRadioTextInputPrimary__VariantProps,
    internalArgProps: PlasmicRadioTextInputPrimary__ArgProps
  }
);

export default PlasmicRadioTextInputPrimary;
/* prettier-ignore-end */
