// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: XhB16zaJfQ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextLinkArrow from "../../TextLinkArrow"; // plasmic-import: MlCPfXGkVN/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicFooterServiceListing.module.css"; // plasmic-import: XhB16zaJfQ/css
import Icon120Icon from "./icons/PlasmicIcon__Icon120"; // plasmic-import: xPha1LAmTn/icon

export const PlasmicFooterServiceListing__VariantProps = new Array();

export const PlasmicFooterServiceListing__ArgProps = new Array();

function PlasmicFooterServiceListing__RenderFunc(props) {
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
      <TextLinkArrow
        data-plasmic-name={"textLinkArrow"}
        data-plasmic-override={overrides.textLinkArrow}
        className={classNames("__wab_instance", sty.textLinkArrow)}
        color={"dark"}
        direction={"left"}
        slot2={
          <Icon120Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        }
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__h0Jz
          )}
        >
          {"Back"}
        </div>
      </TextLinkArrow>

      <ButtonPrimary
        data-plasmic-name={"buttonPrimary"}
        data-plasmic-override={overrides.buttonPrimary}
        className={classNames("__wab_instance", sty.buttonPrimary)}
        size={"_120"}
        type={"ghost"}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__dUxCp
          )}
        >
          {"Save & Exit"}
        </div>
      </ButtonPrimary>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "textLinkArrow", "svg", "buttonPrimary"],
  textLinkArrow: ["textLinkArrow", "svg"],
  svg: ["svg"],
  buttonPrimary: ["buttonPrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooterServiceListing__ArgProps,
      internalVariantPropNames: PlasmicFooterServiceListing__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFooterServiceListing__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterServiceListing";
  } else {
    func.displayName = `PlasmicFooterServiceListing.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterServiceListing = Object.assign(
  // Top-level PlasmicFooterServiceListing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textLinkArrow: makeNodeComponent("textLinkArrow"),
    svg: makeNodeComponent("svg"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    // Metadata about props expected for PlasmicFooterServiceListing
    internalVariantProps: PlasmicFooterServiceListing__VariantProps,
    internalArgProps: PlasmicFooterServiceListing__ArgProps
  }
);

export default PlasmicFooterServiceListing;
/* prettier-ignore-end */
