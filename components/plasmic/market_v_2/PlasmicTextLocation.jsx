// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: O1CbetC3Kf
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextCityname from "../../TextCityname"; // plasmic-import: R9ilR9dEHy/component
import TextCountryName from "../../TextCountryName"; // plasmic-import: LpckH3-q6t/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTextLocation.module.css"; // plasmic-import: O1CbetC3Kf/css

export const PlasmicTextLocation__VariantProps = new Array();

export const PlasmicTextLocation__ArgProps = new Array("children", "slot");

function PlasmicTextLocation__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <TextCityname
            className={classNames("__wab_instance", sty.textCityname___6Taul)}
          />
        ),

        value: args.children
      })}

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          defaultcss.__wab_text,
          sty.text
        )}
      >
        {"|"}
      </div>

      {p.renderPlasmicSlot({
        defaultContents: (
          <TextCountryName
            className={classNames("__wab_instance", sty.textCountryName__zeYbf)}
          />
        ),

        value: args.slot
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTextLocation__ArgProps,
      internalVariantPropNames: PlasmicTextLocation__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTextLocation__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextLocation";
  } else {
    func.displayName = `PlasmicTextLocation.${nodeName}`;
  }
  return func;
}

export const PlasmicTextLocation = Object.assign(
  // Top-level PlasmicTextLocation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicTextLocation
    internalVariantProps: PlasmicTextLocation__VariantProps,
    internalArgProps: PlasmicTextLocation__ArgProps
  }
);

export default PlasmicTextLocation;
/* prettier-ignore-end */
