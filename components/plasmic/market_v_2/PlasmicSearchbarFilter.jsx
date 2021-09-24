// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 5wnmDA777-
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
import * as sty from "./PlasmicSearchbarFilter.module.css"; // plasmic-import: 5wnmDA777-/css
import SearchPlusIcon from "./icons/PlasmicIcon__SearchPlus"; // plasmic-import: cKRUhNtQ7/icon
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon

export const PlasmicSearchbarFilter__VariantProps = new Array(
  "width",
  "height"
);

export const PlasmicSearchbarFilter__ArgProps = new Array();

function PlasmicSearchbarFilter__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__height__32]: hasVariant(variants, "height", "_32"),
        [sty.root__height__36]: hasVariant(variants, "height", "_36"),
        [sty.root__height__40]: hasVariant(variants, "height", "_40"),
        [sty.root__height__48]: hasVariant(variants, "height", "_48"),
        [sty.root__width__180]: hasVariant(variants, "width", "_180"),
        [sty.root__width__270]: hasVariant(variants, "width", "_270"),
        [sty.root__width__360]: hasVariant(variants, "width", "_360"),
        [sty.root__width__540]: hasVariant(variants, "width", "_540")
      })}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <SearchPlusIcon
          className={classNames(defaultcss.all, sty.svg__epgKk)}
          role={"img"}
        />
      </div>

      <input
        data-plasmic-name={"textbox"}
        data-plasmic-override={overrides.textbox}
        className={classNames(defaultcss.input, sty.textbox)}
        placeholder={""}
        size={1}
        type={"text"}
        value={""}
      />

      <p.Stack
        as={"button"}
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        hasGap={true}
        className={classNames(defaultcss.button, sty.button)}
      >
        <PlusBoldIcon
          className={classNames(defaultcss.all, sty.svg__hYtaT)}
          role={"img"}
        />

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text
          )}
        >
          {"Add"}
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "textbox", "button", "text"],
  freeBox: ["freeBox"],
  textbox: ["textbox"],
  button: ["button", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSearchbarFilter__ArgProps,
      internalVariantPropNames: PlasmicSearchbarFilter__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSearchbarFilter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearchbarFilter";
  } else {
    func.displayName = `PlasmicSearchbarFilter.${nodeName}`;
  }
  return func;
}

export const PlasmicSearchbarFilter = Object.assign(
  // Top-level PlasmicSearchbarFilter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicSearchbarFilter
    internalVariantProps: PlasmicSearchbarFilter__VariantProps,
    internalArgProps: PlasmicSearchbarFilter__ArgProps
  }
);

export default PlasmicSearchbarFilter;
/* prettier-ignore-end */
