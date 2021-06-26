// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: oScI7WCn2r
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import InputTextPrimary from "../../InputTextPrimary"; // plasmic-import: a2XXnCI4Ss/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputTextFormSecondary.module.css"; // plasmic-import: oScI7WCn2r/css

export const PlasmicInputTextFormSecondary__VariantProps = new Array();

export const PlasmicInputTextFormSecondary__ArgProps = new Array(
  "label",
  "description"
);

function PlasmicInputTextFormSecondary__RenderFunc(props) {
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
        className={classNames(defaultcss.all, sty.parent)}
      >
        <div className={classNames(defaultcss.all, sty.box__lw1Ix)}>
          <div
            data-plasmic-name={"labelParent"}
            data-plasmic-override={overrides.labelParent}
            className={classNames(defaultcss.all, sty.labelParent)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Label",
              value: args.label,
              className: classNames(sty.slotLabel)
            })}
          </div>
        </div>

        <InputTextPrimary
          data-plasmic-name={"inputTextPrimary"}
          data-plasmic-override={overrides.inputTextPrimary}
          className={classNames("__wab_instance", sty.inputTextPrimary)}
          size={"_270"}
          type={"primary"}
        />

        <div className={classNames(defaultcss.all, sty.box__rXvbb)}>
          <div
            data-plasmic-name={"descriptionParent"}
            data-plasmic-override={overrides.descriptionParent}
            className={classNames(defaultcss.all, sty.descriptionParent)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Description",
              value: args.description,
              className: classNames(sty.slotDescription)
            })}
          </div>
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "labelParent",
    "inputTextPrimary",
    "descriptionParent"
  ],

  parent: ["parent", "labelParent", "inputTextPrimary", "descriptionParent"],
  labelParent: ["labelParent"],
  inputTextPrimary: ["inputTextPrimary"],
  descriptionParent: ["descriptionParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputTextFormSecondary__ArgProps,
      internalVariantPropNames: PlasmicInputTextFormSecondary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputTextFormSecondary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextFormSecondary";
  } else {
    func.displayName = `PlasmicInputTextFormSecondary.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextFormSecondary = Object.assign(
  // Top-level PlasmicInputTextFormSecondary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    labelParent: makeNodeComponent("labelParent"),
    inputTextPrimary: makeNodeComponent("inputTextPrimary"),
    descriptionParent: makeNodeComponent("descriptionParent"),
    // Metadata about props expected for PlasmicInputTextFormSecondary
    internalVariantProps: PlasmicInputTextFormSecondary__VariantProps,
    internalArgProps: PlasmicInputTextFormSecondary__ArgProps
  }
);

export default PlasmicInputTextFormSecondary;
/* prettier-ignore-end */
