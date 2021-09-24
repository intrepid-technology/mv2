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
        data-plasmic-name={"serviceProcessTitle"}
        data-plasmic-override={overrides.serviceProcessTitle}
        className={classNames(defaultcss.input, sty.serviceProcessTitle, {
          [sty.serviceProcessTitle__size__540]: hasVariant(
            variants,
            "size",
            "_540"
          )
        })}
        placeholder={"Process title, eg. step 1"}
        size={1}
        type={"text"}
        value={""}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__utVmc)}
      >
        <textarea
          data-plasmic-name={"serviceProcessDescription"}
          data-plasmic-override={overrides.serviceProcessDescription}
          className={classNames(
            defaultcss.textarea,
            sty.serviceProcessDescription,
            {
              [sty.serviceProcessDescription__size__540]: hasVariant(
                variants,
                "size",
                "_540"
              )
            }
          )}
          placeholder={"Describe your process"}
          value={""}
        />

        <div
          className={classNames(defaultcss.all, sty.freeBox__yoYe, {
            [sty.freeBox__add__yoYeqnDpl]: hasVariant(variants, "add", "add")
          })}
        >
          {(hasVariant(variants, "add", "add") ? false : true) ? (
            <div
              className={classNames(defaultcss.all, sty.freeBox__l594M, {
                [sty.freeBox__add__l594MqnDpl]: hasVariant(
                  variants,
                  "add",
                  "add"
                )
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
              className={classNames(defaultcss.all, sty.freeBox__aOiaZ, {
                [sty.freeBox___delete__aOiaZSn8T8]: hasVariant(
                  variants,
                  "_delete",
                  "_delete"
                ),

                [sty.freeBox__add__aOiaZqnDpl]: hasVariant(
                  variants,
                  "add",
                  "add"
                )
              })}
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text,
                  {
                    [sty.text___delete]: hasVariant(
                      variants,
                      "_delete",
                      "_delete"
                    ),

                    [sty.text__add]: hasVariant(variants, "add", "add"),
                    [sty.text__size__540]: hasVariant(variants, "size", "_540")
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
  root: [
    "root",
    "serviceProcessTitle",
    "serviceProcessDescription",
    "svg",
    "text"
  ],

  serviceProcessTitle: ["serviceProcessTitle"],
  serviceProcessDescription: ["serviceProcessDescription"],
  svg: ["svg"],
  text: ["text"]
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
    serviceProcessTitle: makeNodeComponent("serviceProcessTitle"),
    serviceProcessDescription: makeNodeComponent("serviceProcessDescription"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicInputProcess
    internalVariantProps: PlasmicInputProcess__VariantProps,
    internalArgProps: PlasmicInputProcess__ArgProps
  }
);

export default PlasmicInputProcess;
/* prettier-ignore-end */
