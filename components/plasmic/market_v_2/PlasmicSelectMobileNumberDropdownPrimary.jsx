// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: K33QnfoiGn
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SelectGroupDropdownPrimary from "../../SelectGroupDropdownPrimary"; // plasmic-import: -teiDn_7Z-/component
import InputTextFormSecondary from "../../InputTextFormSecondary"; // plasmic-import: oScI7WCn2r/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSelectMobileNumberDropdownPrimary.module.css"; // plasmic-import: K33QnfoiGn/css

export const PlasmicSelectMobileNumberDropdownPrimary__VariantProps = new Array(
  "width"
);

export const PlasmicSelectMobileNumberDropdownPrimary__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

function PlasmicSelectMobileNumberDropdownPrimary__RenderFunc(props) {
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
          [sty.rootwidth__360]: hasVariant(variants, "width", "_360"),
          [sty.rootwidth__380]: hasVariant(variants, "width", "_380"),
          [sty.rootwidth_stretch]: hasVariant(variants, "width", "stretch")
        }
      )}
    >
      <SelectGroupDropdownPrimary
        data-plasmic-name={"selectGroupDropdownPrimary"}
        data-plasmic-override={overrides.selectGroupDropdownPrimary}
        className={classNames(
          "__wab_instance",
          sty.selectGroupDropdownPrimary,
          {
            [sty.selectGroupDropdownPrimarywidth_stretch]: hasVariant(
              variants,
              "width",
              "stretch"
            )
          }
        )}
        description={true}
        placeholder={p.renderPlasmicSlot({
          defaultContents: "+1",
          value: args.slot2
        })}
        width={"_120"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Country code",
          value: args.children
        })}
      </SelectGroupDropdownPrimary>

      <InputTextFormSecondary
        data-plasmic-name={"inputTextFormSecondary"}
        data-plasmic-override={overrides.inputTextFormSecondary}
        className={classNames("__wab_instance", sty.inputTextFormSecondary)}
        color={"primary"}
        label={p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lqKjq
              )}
            >
              {"Mobile number"}
            </div>
          ),

          value: args.slot
        })}
        size={"stretch"}
        subhead={true}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "selectGroupDropdownPrimary", "inputTextFormSecondary"],
  selectGroupDropdownPrimary: ["selectGroupDropdownPrimary"],
  inputTextFormSecondary: ["inputTextFormSecondary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelectMobileNumberDropdownPrimary__ArgProps,
      internalVariantPropNames:
        PlasmicSelectMobileNumberDropdownPrimary__VariantProps
    });

    return PlasmicSelectMobileNumberDropdownPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelectMobileNumberDropdownPrimary";
  } else {
    func.displayName = `PlasmicSelectMobileNumberDropdownPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectMobileNumberDropdownPrimary = Object.assign(
  // Top-level PlasmicSelectMobileNumberDropdownPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    selectGroupDropdownPrimary: makeNodeComponent("selectGroupDropdownPrimary"),
    inputTextFormSecondary: makeNodeComponent("inputTextFormSecondary"),
    // Metadata about props expected for PlasmicSelectMobileNumberDropdownPrimary
    internalVariantProps:
      PlasmicSelectMobileNumberDropdownPrimary__VariantProps,
    internalArgProps: PlasmicSelectMobileNumberDropdownPrimary__ArgProps
  }
);

export default PlasmicSelectMobileNumberDropdownPrimary;
/* prettier-ignore-end */
