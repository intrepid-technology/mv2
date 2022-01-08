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
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicChipBadgeDisplay.module.css"; // plasmic-import: 9_NbJKBtbu/css
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon
import Icon114Icon from "./icons/PlasmicIcon__Icon114"; // plasmic-import: 4sI0jLkpS-/icon
import Icon170Icon from "./icons/PlasmicIcon__Icon170"; // plasmic-import: JricKendl/icon

export const PlasmicChipBadgeDisplay__VariantProps = new Array(
  "disabled",
  "trigger",
  "type",
  "color",
  "size"
);

export const PlasmicChipBadgeDisplay__ArgProps = new Array(
  "children",
  "addIcon",
  "deleteIcon",
  "light"
);

function PlasmicChipBadgeDisplay__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"chipDisplay"}
      data-plasmic-override={overrides.chipDisplay}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
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

          [sty.chipDisplay__disabled]: hasVariant(
            variants,
            "disabled",
            "disabled"
          ),

          [sty.chipDisplay__size__24]: hasVariant(variants, "size", "_24"),
          [sty.chipDisplay__size__32]: hasVariant(variants, "size", "_32"),
          [sty.chipDisplay__size__36]: hasVariant(variants, "size", "_36"),
          [sty.chipDisplay__size__40]: hasVariant(variants, "size", "_40"),
          [sty.chipDisplay__size__48]: hasVariant(variants, "size", "_48"),
          [sty.chipDisplay__trigger__delete]: hasVariant(
            variants,
            "trigger",
            "_delete"
          ),

          [sty.chipDisplay__trigger_add]: hasVariant(
            variants,
            "trigger",
            "add"
          ),

          [sty.chipDisplay__trigger_disabled]: hasVariant(
            variants,
            "trigger",
            "disabled"
          ),

          [sty.chipDisplay__type_ghost]: hasVariant(variants, "type", "ghost"),
          [sty.chipDisplay__type_ghost_color_brand]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "brand"),
          [sty.chipDisplay__type_ghost_color_brand_trigger__delete]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "brand") &&
            hasVariant(variants, "trigger", "_delete"),
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
            hasVariant(variants, "color", "green"),
          [sty.chipDisplay__type_secondary]: hasVariant(
            variants,
            "type",
            "secondary"
          )
        }
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"chipDisplayLink"}
        data-plasmic-override={overrides.chipDisplayLink}
        className={classNames(projectcss.a, sty.chipDisplayLink, {
          [sty.chipDisplayLink__trigger_add]: hasVariant(
            variants,
            "trigger",
            "add"
          ),

          [sty.chipDisplayLink__type_ghost_color_brand_trigger__delete]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "brand") &&
            hasVariant(variants, "trigger", "_delete"),
          [sty.chipDisplayLink__type_link]: hasVariant(variants, "type", "link")
        })}
        component={Link}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "badge",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren__color_blue_type_ghost]:
              hasVariant(variants, "color", "blue") &&
              hasVariant(variants, "type", "ghost"),
            [sty.slotTargetChildren__color_brand]: hasVariant(
              variants,
              "color",
              "brand"
            ),

            [sty.slotTargetChildren__color_light]: hasVariant(
              variants,
              "color",
              "light"
            ),

            [sty.slotTargetChildren__color_light_trigger_add]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "trigger", "add"),
            [sty.slotTargetChildren__disabled]: hasVariant(
              variants,
              "disabled",
              "disabled"
            ),

            [sty.slotTargetChildren__size__24]: hasVariant(
              variants,
              "size",
              "_24"
            ),

            [sty.slotTargetChildren__size__32]: hasVariant(
              variants,
              "size",
              "_32"
            ),

            [sty.slotTargetChildren__size__36]: hasVariant(
              variants,
              "size",
              "_36"
            ),

            [sty.slotTargetChildren__size__40]: hasVariant(
              variants,
              "size",
              "_40"
            ),

            [sty.slotTargetChildren__size__48]: hasVariant(
              variants,
              "size",
              "_48"
            ),

            [sty.slotTargetChildren__trigger__delete_color_brand]:
              hasVariant(variants, "trigger", "_delete") &&
              hasVariant(variants, "color", "brand"),
            [sty.slotTargetChildren__trigger_add]: hasVariant(
              variants,
              "trigger",
              "add"
            ),

            [sty.slotTargetChildren__trigger_disabled]: hasVariant(
              variants,
              "trigger",
              "disabled"
            ),

            [sty.slotTargetChildren__type_ghost]: hasVariant(
              variants,
              "type",
              "ghost"
            ),

            [sty.slotTargetChildren__type_ghost_color_brand]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "brand"),
            [sty.slotTargetChildren__type_ghost_color_green]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "green"),
            [sty.slotTargetChildren__type_ghost_color_magenta]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "magenta"),
            [sty.slotTargetChildren__type_ghost_color_pink]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "pink"),
            [sty.slotTargetChildren__type_link]: hasVariant(
              variants,
              "type",
              "link"
            ),

            [sty.slotTargetChildren__type_outline]: hasVariant(
              variants,
              "type",
              "outline"
            ),

            [sty.slotTargetChildren__type_primary]: hasVariant(
              variants,
              "type",
              "primary"
            )
          })
        })}
      </p.PlasmicLink>

      {(
        hasVariant(variants, "trigger", "disabled")
          ? false
          : hasVariant(variants, "trigger", "add")
          ? true
          : false
      ) ? (
        <button
          data-plasmic-name={"addTrigger"}
          data-plasmic-override={overrides.addTrigger}
          className={classNames(projectcss.button, sty.addTrigger, {
            [sty.addTrigger__color_light_trigger_add]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "trigger", "add"),
            [sty.addTrigger__trigger__delete]: hasVariant(
              variants,
              "trigger",
              "_delete"
            ),

            [sty.addTrigger__trigger_add]: hasVariant(
              variants,
              "trigger",
              "add"
            ),

            [sty.addTrigger__trigger_disabled]: hasVariant(
              variants,
              "trigger",
              "disabled"
            )
          })}
        >
          {(
            hasVariant(variants, "color", "light") &&
            hasVariant(variants, "trigger", "add")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <PlusBoldIcon
                    className={classNames(projectcss.all, sty.svg___96Pbv)}
                    role={"img"}
                  />
                ),

                value: args.addIcon
              })
            : null}
          {(
            hasVariant(variants, "color", "light") &&
            hasVariant(variants, "trigger", "add")
              ? true
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Icon114Icon
                    className={classNames(projectcss.all, sty.svg__nFwvm)}
                    role={"img"}
                  />
                ),

                value: args.light
              })
            : null}
        </button>
      ) : null}
      {(
        hasVariant(variants, "trigger", "disabled")
          ? false
          : hasVariant(variants, "trigger", "_delete")
          ? true
          : false
      ) ? (
        <button
          data-plasmic-name={"deleteTrigger"}
          data-plasmic-override={overrides.deleteTrigger}
          className={classNames(projectcss.button, sty.deleteTrigger, {
            [sty.deleteTrigger__trigger__delete]: hasVariant(
              variants,
              "trigger",
              "_delete"
            ),

            [sty.deleteTrigger__trigger_add]: hasVariant(
              variants,
              "trigger",
              "add"
            ),

            [sty.deleteTrigger__trigger_disabled]: hasVariant(
              variants,
              "trigger",
              "disabled"
            ),

            [sty.deleteTrigger__type_ghost_color_brand_trigger__delete]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "brand") &&
              hasVariant(variants, "trigger", "_delete")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon170Icon
                className={classNames(projectcss.all, sty.svg__jasxS)}
                role={"img"}
              />
            ),

            value: args.deleteIcon,
            className: classNames(sty.slotTargetDeleteIcon, {
              [sty.slotTargetDeleteIcon__trigger__delete]: hasVariant(
                variants,
                "trigger",
                "_delete"
              ),

              [sty.slotTargetDeleteIcon__trigger__delete_color_brand]:
                hasVariant(variants, "trigger", "_delete") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotTargetDeleteIcon__type_ghost_color_brand_trigger__delete]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "brand") &&
                hasVariant(variants, "trigger", "_delete")
            })
          })}
        </button>
      ) : null}
      {false ? (
        <button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames(projectcss.button, sty.button, {
            [sty.button__trigger_add]: hasVariant(variants, "trigger", "add")
          })}
        >
          {false ? (
            <svg
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg, {
                [sty.svg__trigger__delete]: hasVariant(
                  variants,
                  "trigger",
                  "_delete"
                )
              })}
              role={"img"}
            />
          ) : null}
        </button>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  chipDisplay: [
    "chipDisplay",
    "chipDisplayLink",
    "addTrigger",
    "deleteTrigger",
    "button",
    "svg"
  ],

  chipDisplayLink: ["chipDisplayLink"],
  addTrigger: ["addTrigger"],
  deleteTrigger: ["deleteTrigger"],
  button: ["button", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicChipBadgeDisplay__ArgProps,
      internalVariantPropNames: PlasmicChipBadgeDisplay__VariantProps
    });

    return PlasmicChipBadgeDisplay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "chipDisplay") {
    func.displayName = "PlasmicChipBadgeDisplay";
  } else {
    func.displayName = `PlasmicChipBadgeDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicChipBadgeDisplay = Object.assign(
  // Top-level PlasmicChipBadgeDisplay renders the root element
  makeNodeComponent("chipDisplay"),
  {
    // Helper components rendering sub-elements
    chipDisplayLink: makeNodeComponent("chipDisplayLink"),
    addTrigger: makeNodeComponent("addTrigger"),
    deleteTrigger: makeNodeComponent("deleteTrigger"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicChipBadgeDisplay
    internalVariantProps: PlasmicChipBadgeDisplay__VariantProps,
    internalArgProps: PlasmicChipBadgeDisplay__ArgProps
  }
);

export default PlasmicChipBadgeDisplay;
/* prettier-ignore-end */
