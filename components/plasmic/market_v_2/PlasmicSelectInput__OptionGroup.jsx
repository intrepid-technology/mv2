// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: JVp-cWrthsf
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SelectInput__Option from "../../SelectInput__Option"; // plasmic-import: t56z-AA9Ffy/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSelectInput__OptionGroup.module.css"; // plasmic-import: JVp-cWrthsf/css
import SUPER__PlasmicSelectInput from "./PlasmicSelectInput"; // plasmic-import: 6gReGypE5kO/render

export const PlasmicSelectInput__OptionGroup__VariantProps = new Array(
  "noTitle",
  "isFirst"
);

export const PlasmicSelectInput__OptionGroup__ArgProps = new Array(
  "children",
  "title"
);

function PlasmicSelectInput__OptionGroup__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const superContexts = {
    SelectInput: React.useContext(SUPER__PlasmicSelectInput.Context)
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(variants, "isFirst", "isFirst") ? false : true) ? (
        <div
          data-plasmic-name={"separator"}
          data-plasmic-override={overrides.separator}
          className={classNames(defaultcss.all, sty.separator, {
            [sty.separator__isFirst]: hasVariant(variants, "isFirst", "isFirst")
          })}
        />
      ) : null}
      {(hasVariant(variants, "noTitle", "noTitle") ? false : true) ? (
        <div
          data-plasmic-name={"titleContainer"}
          data-plasmic-override={overrides.titleContainer}
          className={classNames(defaultcss.all, sty.titleContainer, {
            [sty.titleContainer__isFirst]: hasVariant(
              variants,
              "isFirst",
              "isFirst"
            ),

            [sty.titleContainer__noTitle]: hasVariant(
              variants,
              "noTitle",
              "noTitle"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Group Name",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"optionsContainer"}
        data-plasmic-override={overrides.optionsContainer}
        className={classNames(defaultcss.all, sty.optionsContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <SelectInput__Option
                className={classNames("__wab_instance", sty.option___1Yi0A)}
              />

              <SelectInput__Option
                className={classNames("__wab_instance", sty.option__be7C6)}
              />
            </React.Fragment>
          ),

          value: args.children
        })}
      </div>
    </div>
  );
}

function useBehavior(props) {
  return pp.useSelectOptionGroup(PlasmicSelectInput__OptionGroup, props, {
    noTitleVariant: { group: "noTitle", variant: "noTitle" },
    isFirstVariant: { group: "isFirst", variant: "isFirst" },
    optionsSlot: "children",
    titleSlot: "title",
    root: "root",
    separator: "separator",
    titleContainer: "titleContainer",
    optionsContainer: "optionsContainer"
  });
}

const PlasmicDescendants = {
  root: ["root", "separator", "titleContainer", "optionsContainer"],
  separator: ["separator"],
  titleContainer: ["titleContainer"],
  optionsContainer: ["optionsContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelectInput__OptionGroup__ArgProps,
      internalVariantPropNames: PlasmicSelectInput__OptionGroup__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSelectInput__OptionGroup__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelectInput__OptionGroup";
  } else {
    func.displayName = `PlasmicSelectInput__OptionGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectInput__OptionGroup = Object.assign(
  // Top-level PlasmicSelectInput__OptionGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    separator: makeNodeComponent("separator"),
    titleContainer: makeNodeComponent("titleContainer"),
    optionsContainer: makeNodeComponent("optionsContainer"),
    // Metadata about props expected for PlasmicSelectInput__OptionGroup
    internalVariantProps: PlasmicSelectInput__OptionGroup__VariantProps,
    internalArgProps: PlasmicSelectInput__OptionGroup__ArgProps,
    useBehavior
  }
);

export default PlasmicSelectInput__OptionGroup;
/* prettier-ignore-end */
