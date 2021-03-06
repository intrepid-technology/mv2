// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: lPMI0mqyoq
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
import * as sty from "./PlasmicRadioElementB.module.css"; // plasmic-import: lPMI0mqyoq/css

export const PlasmicRadioElementB__VariantProps = new Array("size");

export const PlasmicRadioElementB__ArgProps = new Array(
  "itemText",
  "descriptionText"
);

function PlasmicRadioElementB__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
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

          [sty.elementRadioPrimary__size__14Px]: hasVariant(
            variants,
            "size",
            "_14Px"
          ),

          [sty.elementRadioPrimary__size__16Px]: hasVariant(
            variants,
            "size",
            "_16Px"
          )
        })}
        size={hasVariant(variants, "size", "_12Px") ? "_12Px" : "_14Px"}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"textParent"}
        data-plasmic-override={overrides.textParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.textParent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Item element",
          value: args.itemText,
          className: classNames(sty.slotItemText, {
            [sty.slotItemText__size__12Px]: hasVariant(
              variants,
              "size",
              "_12Px"
            ),

            [sty.slotItemText__size__14Px]: hasVariant(
              variants,
              "size",
              "_14Px"
            ),

            [sty.slotItemText__size__16Px]: hasVariant(
              variants,
              "size",
              "_16Px"
            )
          })
        })}

        {p.renderPlasmicSlot({
          defaultContents: "Description",
          value: args.descriptionText,
          className: classNames(sty.slotDescriptionText, {
            [sty.slotDescriptionText__size__12Px]: hasVariant(
              variants,
              "size",
              "_12Px"
            ),

            [sty.slotDescriptionText__size__14Px]: hasVariant(
              variants,
              "size",
              "_14Px"
            ),

            [sty.slotDescriptionText__size__16Px]: hasVariant(
              variants,
              "size",
              "_16Px"
            )
          })
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "elementRadioPrimary", "textParent"],
  elementRadioPrimary: ["elementRadioPrimary"],
  textParent: ["textParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRadioElementB__ArgProps,
      internalVariantPropNames: PlasmicRadioElementB__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicRadioElementB__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRadioElementB";
  } else {
    func.displayName = `PlasmicRadioElementB.${nodeName}`;
  }
  return func;
}

export const PlasmicRadioElementB = Object.assign(
  // Top-level PlasmicRadioElementB renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    elementRadioPrimary: makeNodeComponent("elementRadioPrimary"),
    textParent: makeNodeComponent("textParent"),
    // Metadata about props expected for PlasmicRadioElementB
    internalVariantProps: PlasmicRadioElementB__VariantProps,
    internalArgProps: PlasmicRadioElementB__ArgProps
  }
);

export default PlasmicRadioElementB;
/* prettier-ignore-end */
