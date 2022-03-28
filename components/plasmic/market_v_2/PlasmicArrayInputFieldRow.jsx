// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: QjWzNF8vNF
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: ftJnovScMuV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicArrayInputFieldRow.module.css"; // plasmic-import: QjWzNF8vNF/css

export const PlasmicArrayInputFieldRow__VariantProps = new Array();

export const PlasmicArrayInputFieldRow__ArgProps = new Array("children");

function PlasmicArrayInputFieldRow__RenderFunc(props) {
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
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: null,
        value: args.children
      })}

      {true ? (
        <div
          data-plasmic-name={"deleteIconWrapper"}
          data-plasmic-override={overrides.deleteIconWrapper}
          className={classNames(projectcss.all, sty.deleteIconWrapper)}
        >
          <Button
            data-plasmic-name={"removeButton"}
            data-plasmic-override={overrides.removeButton}
            className={classNames("__wab_instance", sty.removeButton)}
            color={"caution"}
            rounded={true}
            type={"light"}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Remove"}
            </div>
          </Button>
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "deleteIconWrapper", "removeButton", "text"],
  deleteIconWrapper: ["deleteIconWrapper", "removeButton", "text"],
  removeButton: ["removeButton", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicArrayInputFieldRow__ArgProps,
      internalVariantPropNames: PlasmicArrayInputFieldRow__VariantProps
    });

    return PlasmicArrayInputFieldRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArrayInputFieldRow";
  } else {
    func.displayName = `PlasmicArrayInputFieldRow.${nodeName}`;
  }
  return func;
}

export const PlasmicArrayInputFieldRow = Object.assign(
  // Top-level PlasmicArrayInputFieldRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    deleteIconWrapper: makeNodeComponent("deleteIconWrapper"),
    removeButton: makeNodeComponent("removeButton"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicArrayInputFieldRow
    internalVariantProps: PlasmicArrayInputFieldRow__VariantProps,
    internalArgProps: PlasmicArrayInputFieldRow__ArgProps
  }
);

export default PlasmicArrayInputFieldRow;
/* prettier-ignore-end */
