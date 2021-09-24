// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: d5Rau78kDe
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ButtonStripeConnect from "../../ButtonStripeConnect"; // plasmic-import: GkIWBCEvRU/component
import ChipStripeLink from "../../ChipStripeLink"; // plasmic-import: TzNLRNFhlx/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicButtonGroupStripeConnect.module.css"; // plasmic-import: d5Rau78kDe/css

export const PlasmicButtonGroupStripeConnect__VariantProps = new Array();

export const PlasmicButtonGroupStripeConnect__ArgProps = new Array();

function PlasmicButtonGroupStripeConnect__RenderFunc(props) {
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
      <ButtonStripeConnect
        data-plasmic-name={"buttonStripeConnect"}
        data-plasmic-override={overrides.buttonStripeConnect}
        className={classNames("__wab_instance", sty.buttonStripeConnect)}
        text={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__ugz3J
            )}
          >
            {"Connect with"}
          </div>
        }
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"noteLinkParent"}
        data-plasmic-override={overrides.noteLinkParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.noteLinkParent)}
      >
        <div
          data-plasmic-name={"descriptionParent"}
          data-plasmic-override={overrides.descriptionParent}
          className={classNames(defaultcss.all, sty.descriptionParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text___3TJqg
            )}
          >
            {"Verify your team to activate payments and benefits"}
          </div>
        </div>

        <ChipStripeLink
          data-plasmic-name={"chipStripeLink"}
          data-plasmic-override={overrides.chipStripeLink}
          className={classNames("__wab_instance", sty.chipStripeLink)}
        />
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "buttonStripeConnect",
    "noteLinkParent",
    "descriptionParent",
    "chipStripeLink"
  ],

  buttonStripeConnect: ["buttonStripeConnect"],
  noteLinkParent: ["noteLinkParent", "descriptionParent", "chipStripeLink"],
  descriptionParent: ["descriptionParent"],
  chipStripeLink: ["chipStripeLink"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonGroupStripeConnect__ArgProps,
      internalVariantPropNames: PlasmicButtonGroupStripeConnect__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonGroupStripeConnect__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonGroupStripeConnect";
  } else {
    func.displayName = `PlasmicButtonGroupStripeConnect.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonGroupStripeConnect = Object.assign(
  // Top-level PlasmicButtonGroupStripeConnect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonStripeConnect: makeNodeComponent("buttonStripeConnect"),
    noteLinkParent: makeNodeComponent("noteLinkParent"),
    descriptionParent: makeNodeComponent("descriptionParent"),
    chipStripeLink: makeNodeComponent("chipStripeLink"),
    // Metadata about props expected for PlasmicButtonGroupStripeConnect
    internalVariantProps: PlasmicButtonGroupStripeConnect__VariantProps,
    internalArgProps: PlasmicButtonGroupStripeConnect__ArgProps
  }
);

export default PlasmicButtonGroupStripeConnect;
/* prettier-ignore-end */
