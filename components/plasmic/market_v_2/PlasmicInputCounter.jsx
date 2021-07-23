// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: e0M1tqOpmZ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicInputCounter.module.css"; // plasmic-import: e0M1tqOpmZ/css
import Icon107Icon from "./icons/PlasmicIcon__Icon107"; // plasmic-import: 1WTBIKS_DU/icon
import Icon109Icon from "./icons/PlasmicIcon__Icon109"; // plasmic-import: Vhym3XDs5j/icon

export const PlasmicInputCounter__VariantProps = new Array();

export const PlasmicInputCounter__ArgProps = new Array();

function PlasmicInputCounter__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
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
      <button className={classNames(defaultcss.button, sty.button__kujiS)}>
        <Icon107Icon
          className={classNames(defaultcss.all, sty.svg__lKsQp)}
          role={"img"}
        />
      </button>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.freeBox
        )}
      >
        {"1"}
      </div>

      <button className={classNames(defaultcss.button, sty.button__uAdPd)}>
        <Icon109Icon
          className={classNames(defaultcss.all, sty.svg__ojz8V)}
          role={"img"}
        />
      </button>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputCounter__ArgProps,
      internalVariantPropNames: PlasmicInputCounter__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputCounter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputCounter";
  } else {
    func.displayName = `PlasmicInputCounter.${nodeName}`;
  }
  return func;
}

export const PlasmicInputCounter = Object.assign(
  // Top-level PlasmicInputCounter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicInputCounter
    internalVariantProps: PlasmicInputCounter__VariantProps,
    internalArgProps: PlasmicInputCounter__ArgProps
  }
);

export default PlasmicInputCounter;
/* prettier-ignore-end */
