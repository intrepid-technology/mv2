// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: LSa-7jXRXt
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
import * as sty from "./PlasmicCityCountry.module.css"; // plasmic-import: LSa-7jXRXt/css
import LocationIcon from "./icons/PlasmicIcon__Location"; // plasmic-import: XbuUvkV9FO/icon

export const PlasmicCityCountry__VariantProps = new Array();

export const PlasmicCityCountry__ArgProps = new Array();

function PlasmicCityCountry__RenderFunc(props) {
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
      <LocationIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg)}
        role={"img"}
      />

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box__fhleb
        )}
      >
        {"City"}
      </div>

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box__hnqVs
        )}
      >
        {"|"}
      </div>

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box__l4VOp
        )}
      >
        {"Country"}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCityCountry__ArgProps,
      internalVariantPropNames: PlasmicCityCountry__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCityCountry__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCityCountry";
  } else {
    func.displayName = `PlasmicCityCountry.${nodeName}`;
  }
  return func;
}

export const PlasmicCityCountry = Object.assign(
  // Top-level PlasmicCityCountry renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicCityCountry
    internalVariantProps: PlasmicCityCountry__VariantProps,
    internalArgProps: PlasmicCityCountry__ArgProps
  }
);

export default PlasmicCityCountry;
/* prettier-ignore-end */
