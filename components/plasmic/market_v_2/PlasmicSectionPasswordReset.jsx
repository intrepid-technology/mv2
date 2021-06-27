// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Olpj-oqQtA
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicSectionPasswordReset.module.css"; // plasmic-import: Olpj-oqQtA/css
import Icon43Icon from "./icons/PlasmicIcon__Icon43"; // plasmic-import: naG0WWoBul/icon

export const PlasmicSectionPasswordReset__VariantProps = new Array();

export const PlasmicSectionPasswordReset__ArgProps = new Array("textSlot");

function PlasmicSectionPasswordReset__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
      <p.Stack
        as={"form"}
        data-plasmic-name={"form"}
        data-plasmic-override={overrides.form}
        hasGap={true}
        className={classNames(defaultcss.all, sty.form)}
      >
        <p.PlasmicLink
          data-plasmic-name={"svgLinkDiv"}
          data-plasmic-override={overrides.svgLinkDiv}
          className={classNames(defaultcss.all, sty.svgLinkDiv)}
          component={Link}
          href={"/log-in"}
          platform={"nextjs"}
        >
          <Icon43Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        </p.PlasmicLink>

        <div
          data-plasmic-name={"headlineText"}
          data-plasmic-override={overrides.headlineText}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.headlineText
          )}
        >
          {"Password reset?"}
        </div>

        <div className={classNames(defaultcss.all, sty.box__c85Ly)}>
          <div
            data-plasmic-name={"textParent"}
            data-plasmic-override={overrides.textParent}
            className={classNames(defaultcss.all, sty.textParent)}
          >
            {p.renderPlasmicSlot({
              defaultContents:
                "Enter your registered email below to receive your password recovery link.",
              value: args.textSlot,
              className: classNames(sty.slotTextSlot)
            })}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__fuGbB)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__wk5IJ
            )}
          >
            {"Email"}
          </div>

          <input
            data-plasmic-name={"textbox"}
            data-plasmic-override={overrides.textbox}
            className={classNames(defaultcss.input, sty.textbox)}
            placeholder={"enter your registered email address"}
            size={1}
            type={"text"}
            value={""}
          />
        </p.Stack>

        <button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames(
            defaultcss.button,
            defaultcss.__wab_text,
            sty.button
          )}
        >
          {"Send recovery link"}
        </button>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "form",
    "svgLinkDiv",
    "svg",
    "headlineText",
    "textParent",
    "textbox",
    "button"
  ],

  form: [
    "form",
    "svgLinkDiv",
    "svg",
    "headlineText",
    "textParent",
    "textbox",
    "button"
  ],

  svgLinkDiv: ["svgLinkDiv", "svg"],
  svg: ["svg"],
  headlineText: ["headlineText"],
  textParent: ["textParent"],
  textbox: ["textbox"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionPasswordReset__ArgProps,
      internalVariantPropNames: PlasmicSectionPasswordReset__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSectionPasswordReset__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionPasswordReset";
  } else {
    func.displayName = `PlasmicSectionPasswordReset.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionPasswordReset = Object.assign(
  // Top-level PlasmicSectionPasswordReset renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    svgLinkDiv: makeNodeComponent("svgLinkDiv"),
    svg: makeNodeComponent("svg"),
    headlineText: makeNodeComponent("headlineText"),
    textParent: makeNodeComponent("textParent"),
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicSectionPasswordReset
    internalVariantProps: PlasmicSectionPasswordReset__VariantProps,
    internalArgProps: PlasmicSectionPasswordReset__ArgProps
  }
);

export default PlasmicSectionPasswordReset;
/* prettier-ignore-end */