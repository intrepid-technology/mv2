// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: GkIWBCEvRU
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconStripeLogo from "../../IconStripeLogo"; // plasmic-import: tq01IF7a70/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicButtonStripeConnect.module.css"; // plasmic-import: GkIWBCEvRU/css
import LinkAIcon from "./icons/PlasmicIcon__LinkA"; // plasmic-import: L3JJupG8X-/icon

export const PlasmicButtonStripeConnect__VariantProps = new Array(
  "icon",
  "logo",
  "width"
);

export const PlasmicButtonStripeConnect__ArgProps = new Array("text", "id");

function PlasmicButtonStripeConnect__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.button,
        projectcss.root_reset,
        sty.root,
        "stripe-connect",
        {
          [sty.root__width__180]: hasVariant(variants, "width", "_180"),
          [sty.root__width__270]: hasVariant(variants, "width", "_270"),
          [sty.root__width__360]: hasVariant(variants, "width", "_360")
        }
      )}
      id={args.id}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {(hasVariant(variants, "icon", "icon") ? false : true) ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBox__icon]: hasVariant(variants, "icon", "icon")
          })}
        >
          <LinkAIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"textParent"}
        data-plasmic-override={overrides.textParent}
        hasGap={true}
        className={classNames(projectcss.all, sty.textParent, {
          [sty.textParent__width__270]: hasVariant(variants, "width", "_270")
        })}
      >
        <div
          data-plasmic-name={"textBg"}
          data-plasmic-override={overrides.textBg}
          className={classNames(projectcss.all, sty.textBg)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Connect with",
            value: args.text,
            className: classNames(sty.slotTargetText, {
              [sty.slotTargetText__width__180]: hasVariant(
                variants,
                "width",
                "_180"
              ),

              [sty.slotTargetText__width__360]: hasVariant(
                variants,
                "width",
                "_360"
              )
            })
          })}
        </div>
      </p.Stack>

      {(hasVariant(variants, "logo", "logo") ? false : true) ? (
        <IconStripeLogo
          data-plasmic-name={"iconStripeLogo"}
          data-plasmic-override={overrides.iconStripeLogo}
          className={classNames("__wab_instance", sty.iconStripeLogo, {
            [sty.iconStripeLogo__logo]: hasVariant(variants, "logo", "logo"),
            [sty.iconStripeLogo__width__180]: hasVariant(
              variants,
              "width",
              "_180"
            ),

            [sty.iconStripeLogo__width__270]: hasVariant(
              variants,
              "width",
              "_270"
            )
          })}
          color={triggers.hover_root ? "white" : "burple"}
          size={hasVariant(variants, "width", "_180") ? "_32" : undefined}
        />
      ) : null}
    </button>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg", "textParent", "textBg", "iconStripeLogo"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
  textParent: ["textParent", "textBg"],
  textBg: ["textBg"],
  iconStripeLogo: ["iconStripeLogo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonStripeConnect__ArgProps,
      internalVariantPropNames: PlasmicButtonStripeConnect__VariantProps
    });

    return PlasmicButtonStripeConnect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonStripeConnect";
  } else {
    func.displayName = `PlasmicButtonStripeConnect.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonStripeConnect = Object.assign(
  // Top-level PlasmicButtonStripeConnect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    textParent: makeNodeComponent("textParent"),
    textBg: makeNodeComponent("textBg"),
    iconStripeLogo: makeNodeComponent("iconStripeLogo"),
    // Metadata about props expected for PlasmicButtonStripeConnect
    internalVariantProps: PlasmicButtonStripeConnect__VariantProps,
    internalArgProps: PlasmicButtonStripeConnect__ArgProps
  }
);

export default PlasmicButtonStripeConnect;
/* prettier-ignore-end */
