// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: GNcqDwksoT
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ArrayInputFieldRow from "../../ArrayInputFieldRow"; // plasmic-import: QjWzNF8vNF/component
import TextInput from "../../TextInput"; // plasmic-import: Ss3X7VAgr4Y/component
import TextAreaInput from "../../TextAreaInput"; // plasmic-import: 0ftTMwkv9kS/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicArrayInputFields.module.css"; // plasmic-import: GNcqDwksoT/css
import Icon107Icon from "./icons/PlasmicIcon__Icon107"; // plasmic-import: 1WTBIKS_DU/icon

export const PlasmicArrayInputFields__VariantProps = new Array();

export const PlasmicArrayInputFields__ArgProps = new Array("itemContainer");

function PlasmicArrayInputFields__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"itemContainer"}
        data-plasmic-override={overrides.itemContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.itemContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <ArrayInputFieldRow
                className={classNames(
                  "__wab_instance",
                  sty.arrayInputFieldRow___92Hhv
                )}
              >
                <TextInput />

                <TextAreaInput
                  className={classNames(
                    "__wab_instance",
                    sty.textAreaInput__wB6OF
                  )}
                />
              </ArrayInputFieldRow>

              <ArrayInputFieldRow
                className={classNames(
                  "__wab_instance",
                  sty.arrayInputFieldRow__lacZx
                )}
              >
                <TextInput />

                <TextAreaInput
                  className={classNames(
                    "__wab_instance",
                    sty.textAreaInput__jVvds
                  )}
                />
              </ArrayInputFieldRow>
            </React.Fragment>
          ),

          value: args.itemContainer
        })}
      </p.Stack>

      <div
        data-plasmic-name={"actionsContainer"}
        data-plasmic-override={overrides.actionsContainer}
        className={classNames(projectcss.all, sty.actionsContainer)}
      >
        <div
          data-plasmic-name={"addActionWrapper"}
          data-plasmic-override={overrides.addActionWrapper}
          className={classNames(projectcss.all, sty.addActionWrapper)}
        >
          <Icon107Icon
            data-plasmic-name={"addIcon"}
            data-plasmic-override={overrides.addIcon}
            className={classNames(projectcss.all, sty.addIcon)}
            role={"img"}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "itemContainer",
    "actionsContainer",
    "addActionWrapper",
    "addIcon"
  ],

  itemContainer: ["itemContainer"],
  actionsContainer: ["actionsContainer", "addActionWrapper", "addIcon"],
  addActionWrapper: ["addActionWrapper", "addIcon"],
  addIcon: ["addIcon"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicArrayInputFields__ArgProps,
      internalVariantPropNames: PlasmicArrayInputFields__VariantProps
    });

    return PlasmicArrayInputFields__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArrayInputFields";
  } else {
    func.displayName = `PlasmicArrayInputFields.${nodeName}`;
  }
  return func;
}

export const PlasmicArrayInputFields = Object.assign(
  // Top-level PlasmicArrayInputFields renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    itemContainer: makeNodeComponent("itemContainer"),
    actionsContainer: makeNodeComponent("actionsContainer"),
    addActionWrapper: makeNodeComponent("addActionWrapper"),
    addIcon: makeNodeComponent("addIcon"),
    // Metadata about props expected for PlasmicArrayInputFields
    internalVariantProps: PlasmicArrayInputFields__VariantProps,
    internalArgProps: PlasmicArrayInputFields__ArgProps
  }
);

export default PlasmicArrayInputFields;
/* prettier-ignore-end */
