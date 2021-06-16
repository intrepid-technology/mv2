// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: HMzH-BWbGW_
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
import * as sty from "./PlasmicInputProcess.module.css"; // plasmic-import: HMzH-BWbGW_/css
import Icon107Icon from "./icons/PlasmicIcon__Icon107"; // plasmic-import: 1WTBIKS_DU/icon

export const PlasmicInputProcess__VariantProps = new Array(
  "add",
  "_delete",
  "size"
);

export const PlasmicInputProcess__ArgProps = new Array();

function PlasmicInputProcess__RenderFunc(props) {
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
        [sty.root__size__540]: hasVariant(variants, "size", "_540")
      })}
    >
      <input
        data-plasmic-name={"textbox"}
        data-plasmic-override={overrides.textbox}
        className={classNames(defaultcss.input, sty.textbox, {
          [sty.textbox__size__540]: hasVariant(variants, "size", "_540")
        })}
        placeholder={"Process title, eg. step 1"}
        size={1}
        type={"text"}
        value={""}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__utVmc)}
      >
        <textarea
          data-plasmic-name={"textarea"}
          data-plasmic-override={overrides.textarea}
          className={classNames(defaultcss.textarea, sty.textarea, {
            [sty.textarea__size__540]: hasVariant(variants, "size", "_540")
          })}
          placeholder={"Describe your process"}
          value={""}
        />

        <div
          className={classNames(defaultcss.all, sty.box__yoYe, {
            [sty.box__add__yoYeqnDpl]: hasVariant(variants, "add", "add")
          })}
        >
          {(hasVariant(variants, "add", "add") ? false : true) ? (
            <div
              className={classNames(defaultcss.all, sty.box__l594M, {
                [sty.box__add__l594MqnDpl]: hasVariant(variants, "add", "add")
              })}
            >
              <Icon107Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(defaultcss.all, sty.svg, {
                  [sty.svg__add]: hasVariant(variants, "add", "add"),
                  [sty.svg__size__540]: hasVariant(variants, "size", "_540")
                })}
                role={"img"}
              />
            </div>
          ) : null}
          {(hasVariant(variants, "_delete", "_delete") ? false : true) ? (
            <div
              className={classNames(defaultcss.all, sty.box__aOiaZ, {
                [sty.box___delete__aOiaZSn8T8]: hasVariant(
                  variants,
                  "_delete",
                  "_delete"
                ),

                [sty.box__add__aOiaZqnDpl]: hasVariant(variants, "add", "add")
              })}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__ipqFh,
                  {
                    [sty.box___delete__ipqFhSn8T8]: hasVariant(
                      variants,
                      "_delete",
                      "_delete"
                    ),

                    [sty.box__add__ipqFhqnDpl]: hasVariant(
                      variants,
                      "add",
                      "add"
                    ),

                    [sty.box__size__540__ipqFhg8DmW]: hasVariant(
                      variants,
                      "size",
                      "_540"
                    )
                  }
                )}
              >
                {"Delete"}
              </div>
            </div>
          ) : null}
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "textbox", "textarea", "svg"],
  textbox: ["textbox"],
  textarea: ["textarea"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputProcess__ArgProps,
      internalVariantPropNames: PlasmicInputProcess__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputProcess__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputProcess";
  } else {
    func.displayName = `PlasmicInputProcess.${nodeName}`;
  }
  return func;
}

export const PlasmicInputProcess = Object.assign(
  // Top-level PlasmicInputProcess renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    textarea: makeNodeComponent("textarea"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicInputProcess
    internalVariantProps: PlasmicInputProcess__VariantProps,
    internalArgProps: PlasmicInputProcess__ArgProps
  }
);

export default PlasmicInputProcess;
/* prettier-ignore-end */
