// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: nncQa7gC62w
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SelectDropdownPrimary__Option from "../../SelectDropdownPrimary__Option"; // plasmic-import: d0st1V5YiWH/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSelectDropdownPrimary__OptionGroup.module.css"; // plasmic-import: nncQa7gC62w/css
import SUPER__PlasmicSelectDropdownPrimary from "./PlasmicSelectDropdownPrimary"; // plasmic-import: T_qFWEqz1I6/render

export const PlasmicSelectDropdownPrimary__OptionGroup__VariantProps =
  new Array("noTitle", "isFirst");

export const PlasmicSelectDropdownPrimary__OptionGroup__ArgProps = new Array(
  "children",
  "title"
);

function PlasmicSelectDropdownPrimary__OptionGroup__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const superContexts = {
    SelectDropdownPrimary: React.useContext(
      SUPER__PlasmicSelectDropdownPrimary.Context
    )
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(variants, "isFirst", "isFirst") ? false : true) ? (
        <div
          data-plasmic-name={"separator"}
          data-plasmic-override={overrides.separator}
          className={classNames(projectcss.all, sty.separator, {
            [sty.separatorisFirst]: hasVariant(variants, "isFirst", "isFirst")
          })}
        />
      ) : null}
      {(hasVariant(variants, "noTitle", "noTitle") ? false : true) ? (
        <div
          data-plasmic-name={"titleContainer"}
          data-plasmic-override={overrides.titleContainer}
          className={classNames(projectcss.all, sty.titleContainer, {
            [sty.titleContainerisFirst]: hasVariant(
              variants,
              "isFirst",
              "isFirst"
            ),

            [sty.titleContainernoTitle]: hasVariant(
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
        className={classNames(projectcss.all, sty.optionsContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <SelectDropdownPrimary__Option
                className={classNames("__wab_instance", sty.option__zak6K)}
              />

              <SelectDropdownPrimary__Option
                className={classNames("__wab_instance", sty.option__kzSwt)}
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
  return pp.useSelectOptionGroup(
    PlasmicSelectDropdownPrimary__OptionGroup,
    props,
    {
      noTitleVariant: { group: "noTitle", variant: "noTitle" },
      isFirstVariant: { group: "isFirst", variant: "isFirst" },
      optionsSlot: "children",
      titleSlot: "title",
      root: "root",
      separator: "separator",
      titleContainer: "titleContainer",
      optionsContainer: "optionsContainer"
    }
  );
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
      internalArgPropNames: PlasmicSelectDropdownPrimary__OptionGroup__ArgProps,
      internalVariantPropNames:
        PlasmicSelectDropdownPrimary__OptionGroup__VariantProps
    });

    return PlasmicSelectDropdownPrimary__OptionGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelectDropdownPrimary__OptionGroup";
  } else {
    func.displayName = `PlasmicSelectDropdownPrimary__OptionGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectDropdownPrimary__OptionGroup = Object.assign(
  // Top-level PlasmicSelectDropdownPrimary__OptionGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    separator: makeNodeComponent("separator"),
    titleContainer: makeNodeComponent("titleContainer"),
    optionsContainer: makeNodeComponent("optionsContainer"),
    // Metadata about props expected for PlasmicSelectDropdownPrimary__OptionGroup
    internalVariantProps:
      PlasmicSelectDropdownPrimary__OptionGroup__VariantProps,
    internalArgProps: PlasmicSelectDropdownPrimary__OptionGroup__ArgProps,
    useBehavior
  }
);

export default PlasmicSelectDropdownPrimary__OptionGroup;
/* prettier-ignore-end */
