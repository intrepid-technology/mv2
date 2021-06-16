// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 9_NbJKBtbu
import * as React from "react";
import Link from "next/link";
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
import * as sty from "./PlasmicChipDisplay.module.css"; // plasmic-import: 9_NbJKBtbu/css
import Icon114Icon from "./icons/PlasmicIcon__Icon114"; // plasmic-import: 4sI0jLkpS-/icon
import Icon113Icon from "./icons/PlasmicIcon__Icon113"; // plasmic-import: Bb_iW3yqSt/icon

export const PlasmicChipDisplay__VariantProps = new Array(
  "type",
  "state",
  "color",
  "size"
);

export const PlasmicChipDisplay__ArgProps = new Array(
  "children",
  "root",
  "slot2",
  "light"
);

function PlasmicChipDisplay__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"chipDisplay"}
      data-plasmic-override={overrides.chipDisplay}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.chipDisplay,
        {
          [sty.chipDisplay__color_blue_type_ghost]:
            hasVariant(variants, "color", "blue") &&
            hasVariant(variants, "type", "ghost"),
          [sty.chipDisplay__color_brand]: hasVariant(
            variants,
            "color",
            "brand"
          ),

          [sty.chipDisplay__color_dark]: hasVariant(variants, "color", "dark"),
          [sty.chipDisplay__color_light]: hasVariant(
            variants,
            "color",
            "light"
          ),

          [sty.chipDisplay__size__24]: hasVariant(variants, "size", "_24"),
          [sty.chipDisplay__size__32]: hasVariant(variants, "size", "_32"),
          [sty.chipDisplay__size__36]: hasVariant(variants, "size", "_36"),
          [sty.chipDisplay__size__40]: hasVariant(variants, "size", "_40"),
          [sty.chipDisplay__size__48]: hasVariant(variants, "size", "_48"),
          [sty.chipDisplay__state__delete]: hasVariant(
            variants,
            "state",
            "_delete"
          ),

          [sty.chipDisplay__state_add]: hasVariant(variants, "state", "add"),
          [sty.chipDisplay__state_disabled]: hasVariant(
            variants,
            "state",
            "disabled"
          ),

          [sty.chipDisplay__type_ghost]: hasVariant(variants, "type", "ghost"),
          [sty.chipDisplay__type_ghost_color_brand]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "brand"),
          [sty.chipDisplay__type_ghost_color_green]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "green"),
          [sty.chipDisplay__type_ghost_color_magenta]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "magenta"),
          [sty.chipDisplay__type_ghost_color_pink]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "pink"),
          [sty.chipDisplay__type_link]: hasVariant(variants, "type", "link"),
          [sty.chipDisplay__type_outline]: hasVariant(
            variants,
            "type",
            "outline"
          ),

          [sty.chipDisplay__type_primary]: hasVariant(
            variants,
            "type",
            "primary"
          ),

          [sty.chipDisplay__type_primary_color_green]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "green")
        }
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"chipDisplayLink"}
        data-plasmic-override={overrides.chipDisplayLink}
        className={classNames(defaultcss.all, sty.chipDisplayLink, {
          [sty.chipDisplayLink__state_add]: hasVariant(
            variants,
            "state",
            "add"
          ),

          [sty.chipDisplayLink__type_link]: hasVariant(variants, "type", "link")
        })}
        component={Link}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "badge",
          value: args.children,
          className: classNames(sty.slotChildren, {
            [sty.slotChildren__color_blue_type_ghost]:
              hasVariant(variants, "color", "blue") &&
              hasVariant(variants, "type", "ghost"),
            [sty.slotChildren__color_brand]: hasVariant(
              variants,
              "color",
              "brand"
            ),

            [sty.slotChildren__color_light]: hasVariant(
              variants,
              "color",
              "light"
            ),

            [sty.slotChildren__color_light_state_add]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "state", "add"),
            [sty.slotChildren__size__24]: hasVariant(variants, "size", "_24"),
            [sty.slotChildren__size__32]: hasVariant(variants, "size", "_32"),
            [sty.slotChildren__size__36]: hasVariant(variants, "size", "_36"),
            [sty.slotChildren__size__40]: hasVariant(variants, "size", "_40"),
            [sty.slotChildren__size__48]: hasVariant(variants, "size", "_48"),
            [sty.slotChildren__state_disabled]: hasVariant(
              variants,
              "state",
              "disabled"
            ),

            [sty.slotChildren__type_ghost]: hasVariant(
              variants,
              "type",
              "ghost"
            ),

            [sty.slotChildren__type_ghost_color_brand]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "brand"),
            [sty.slotChildren__type_ghost_color_green]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "green"),
            [sty.slotChildren__type_ghost_color_magenta]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "magenta"),
            [sty.slotChildren__type_ghost_color_pink]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "pink"),
            [sty.slotChildren__type_link]: hasVariant(variants, "type", "link"),
            [sty.slotChildren__type_outline]: hasVariant(
              variants,
              "type",
              "outline"
            ),

            [sty.slotChildren__type_primary]: hasVariant(
              variants,
              "type",
              "primary"
            )
          })
        })}
      </p.PlasmicLink>

      {(
        hasVariant(variants, "state", "disabled")
          ? false
          : hasVariant(variants, "state", "add")
          ? true
          : false
      ) ? (
        <button
          className={classNames(defaultcss.button, sty.button__oLk4P, {
            [sty.button__color_light_state_add__oLk4PsqVbNAuCSy]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "state", "add"),
            [sty.button__state__delete__oLk4Pr52Nh]: hasVariant(
              variants,
              "state",
              "_delete"
            ),

            [sty.button__state_add__oLk4PauCSy]: hasVariant(
              variants,
              "state",
              "add"
            ),

            [sty.button__state_disabled__oLk4PkSubN]: hasVariant(
              variants,
              "state",
              "disabled"
            )
          })}
        >
          {(
            hasVariant(variants, "color", "light") &&
            hasVariant(variants, "state", "add")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Icon114Icon
                    className={classNames(defaultcss.all, sty.svg___96Pbv)}
                    role={"img"}
                  />
                ),

                value: args.root
              })
            : null}
          {(
            hasVariant(variants, "color", "light") &&
            hasVariant(variants, "state", "add")
              ? true
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Icon114Icon
                    className={classNames(defaultcss.all, sty.svg__nFwvm)}
                    role={"img"}
                  />
                ),

                value: args.light
              })
            : null}
        </button>
      ) : null}
      {(
        hasVariant(variants, "state", "disabled")
          ? false
          : hasVariant(variants, "state", "_delete")
          ? true
          : false
      ) ? (
        <button
          className={classNames(defaultcss.button, sty.button__qAdSe, {
            [sty.button__state__delete__qAdSer52Nh]: hasVariant(
              variants,
              "state",
              "_delete"
            ),

            [sty.button__state_add__qAdSeauCSy]: hasVariant(
              variants,
              "state",
              "add"
            ),

            [sty.button__state_disabled__qAdSekSubN]: hasVariant(
              variants,
              "state",
              "disabled"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon113Icon
                className={classNames(defaultcss.all, sty.svg__jasxS)}
                role={"img"}
              />
            ),

            value: args.slot2
          })}
        </button>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  chipDisplay: ["chipDisplay", "chipDisplayLink"],
  chipDisplayLink: ["chipDisplayLink"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicChipDisplay__ArgProps,
      internalVariantPropNames: PlasmicChipDisplay__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicChipDisplay__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "chipDisplay") {
    func.displayName = "PlasmicChipDisplay";
  } else {
    func.displayName = `PlasmicChipDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicChipDisplay = Object.assign(
  // Top-level PlasmicChipDisplay renders the root element
  makeNodeComponent("chipDisplay"),
  {
    // Helper components rendering sub-elements
    chipDisplayLink: makeNodeComponent("chipDisplayLink"),
    // Metadata about props expected for PlasmicChipDisplay
    internalVariantProps: PlasmicChipDisplay__VariantProps,
    internalArgProps: PlasmicChipDisplay__ArgProps
  }
);

export default PlasmicChipDisplay;
/* prettier-ignore-end */
