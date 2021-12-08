// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: ftJnovScMuV
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicButton.module.css"; // plasmic-import: ftJnovScMuV/css

export const PlasmicButton__VariantProps = new Array(
  "type",
  "color",
  "state",
  "rounded",
  "hasShadow",
  "noPadding"
);

export const PlasmicButton__ArgProps = new Array(
  "children",
  "id",
  "destination",
  "preventDefault"
);

function PlasmicButton__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color_alert]: hasVariant(variants, "color", "alert"),
        [sty.root__color_blue]: hasVariant(variants, "color", "blue"),
        [sty.root__color_brand]: hasVariant(variants, "color", "brand"),
        [sty.root__color_brand_rounded]:
          hasVariant(variants, "color", "brand") &&
          hasVariant(variants, "rounded", "rounded"),
        [sty.root__color_caution]: hasVariant(variants, "color", "caution"),
        [sty.root__color_light]: hasVariant(variants, "color", "light"),
        [sty.root__color_light_type_link]:
          hasVariant(variants, "color", "light") &&
          hasVariant(variants, "type", "link"),
        [sty.root__color_magenta]: hasVariant(variants, "color", "magenta"),
        [sty.root__color_success]: hasVariant(variants, "color", "success"),
        [sty.root__color_warning]: hasVariant(variants, "color", "warning"),
        [sty.root__hasShadow]: hasVariant(variants, "hasShadow", "hasShadow"),
        [sty.root__hasShadow_color_brand]:
          hasVariant(variants, "hasShadow", "hasShadow") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__noPadding]: hasVariant(variants, "noPadding", "noPadding"),
        [sty.root__rounded]: hasVariant(variants, "rounded", "rounded"),
        [sty.root__state_disabled]: hasVariant(variants, "state", "disabled"),
        [sty.root__state_error]: hasVariant(variants, "state", "error"),
        [sty.root__state_success]: hasVariant(variants, "state", "success"),
        [sty.root__state_success_type_ghost]:
          hasVariant(variants, "state", "success") &&
          hasVariant(variants, "type", "ghost"),
        [sty.root__state_warning]: hasVariant(variants, "state", "warning"),
        [sty.root__type_dark]: hasVariant(variants, "type", "dark"),
        [sty.root__type_ghost]: hasVariant(variants, "type", "ghost"),
        [sty.root__type_ghost_color_alert]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "alert"),
        [sty.root__type_ghost_color_blue]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_ghost_color_brand]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_ghost_color_caution]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "caution"),
        [sty.root__type_ghost_color_magenta]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_ghost_color_success]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "success"),
        [sty.root__type_ghost_color_warning]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "warning"),
        [sty.root__type_ghost_state_error]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "state", "error"),
        [sty.root__type_ghost_state_warning]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "state", "warning"),
        [sty.root__type_icon]: hasVariant(variants, "type", "icon"),
        [sty.root__type_light]: hasVariant(variants, "type", "light"),
        [sty.root__type_light_color_alert]:
          hasVariant(variants, "type", "light") &&
          hasVariant(variants, "color", "alert"),
        [sty.root__type_light_color_blue]:
          hasVariant(variants, "type", "light") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_light_color_brand]:
          hasVariant(variants, "type", "light") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_light_color_caution]:
          hasVariant(variants, "type", "light") &&
          hasVariant(variants, "color", "caution"),
        [sty.root__type_light_color_magenta]:
          hasVariant(variants, "type", "light") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_light_color_success]:
          hasVariant(variants, "type", "light") &&
          hasVariant(variants, "color", "success"),
        [sty.root__type_light_color_warning]:
          hasVariant(variants, "type", "light") &&
          hasVariant(variants, "color", "warning"),
        [sty.root__type_link]: hasVariant(variants, "type", "link"),
        [sty.root__type_link_color_alert]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "color", "alert"),
        [sty.root__type_link_color_blue]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_link_color_brand]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_link_color_caution]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "color", "caution"),
        [sty.root__type_link_color_magenta]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_link_color_success]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "color", "success"),
        [sty.root__type_link_color_warning]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "color", "warning"),
        [sty.root__type_link_state_error]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "state", "error"),
        [sty.root__type_link_state_success]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "state", "success"),
        [sty.root__type_link_state_warning]:
          hasVariant(variants, "type", "link") &&
          hasVariant(variants, "state", "warning"),
        [sty.root__type_outline]: hasVariant(variants, "type", "outline"),
        [sty.root__type_outline_color_brand]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_outline_color_success]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "success"),
        [sty.root__type_outline_color_warning]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "warning"),
        [sty.root__type_primary]: hasVariant(variants, "type", "primary"),
        [sty.root__type_primary_color_brand]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_primary_state_disabled]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "state", "disabled"),
        [sty.root__type_secondary]: hasVariant(variants, "type", "secondary"),
        [sty.root__type_secondary_color_alert]:
          hasVariant(variants, "type", "secondary") &&
          hasVariant(variants, "color", "alert"),
        [sty.root__type_secondary_color_blue]:
          hasVariant(variants, "type", "secondary") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_secondary_color_brand]:
          hasVariant(variants, "type", "secondary") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_secondary_color_caution]:
          hasVariant(variants, "type", "secondary") &&
          hasVariant(variants, "color", "caution"),
        [sty.root__type_secondary_color_magenta]:
          hasVariant(variants, "type", "secondary") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_secondary_color_success]:
          hasVariant(variants, "type", "secondary") &&
          hasVariant(variants, "color", "success"),
        [sty.root__type_secondary_color_warning]:
          hasVariant(variants, "type", "secondary") &&
          hasVariant(variants, "color", "warning")
      })}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(projectcss.button, sty.button, {
          [sty.button__color_alert]: hasVariant(variants, "color", "alert"),
          [sty.button__color_blue]: hasVariant(variants, "color", "blue"),
          [sty.button__color_brand]: hasVariant(variants, "color", "brand"),
          [sty.button__color_brand_rounded]:
            hasVariant(variants, "color", "brand") &&
            hasVariant(variants, "rounded", "rounded"),
          [sty.button__color_caution]: hasVariant(variants, "color", "caution"),
          [sty.button__color_light]: hasVariant(variants, "color", "light"),
          [sty.button__color_light_type_link]:
            hasVariant(variants, "color", "light") &&
            hasVariant(variants, "type", "link"),
          [sty.button__color_magenta]: hasVariant(variants, "color", "magenta"),
          [sty.button__color_success]: hasVariant(variants, "color", "success"),
          [sty.button__color_warning]: hasVariant(variants, "color", "warning"),
          [sty.button__hasShadow]: hasVariant(
            variants,
            "hasShadow",
            "hasShadow"
          ),

          [sty.button__hasShadow_color_brand]:
            hasVariant(variants, "hasShadow", "hasShadow") &&
            hasVariant(variants, "color", "brand"),
          [sty.button__noPadding]: hasVariant(
            variants,
            "noPadding",
            "noPadding"
          ),

          [sty.button__rounded]: hasVariant(variants, "rounded", "rounded"),
          [sty.button__state_disabled]: hasVariant(
            variants,
            "state",
            "disabled"
          ),

          [sty.button__state_error]: hasVariant(variants, "state", "error"),
          [sty.button__state_success]: hasVariant(variants, "state", "success"),
          [sty.button__state_success_type_ghost]:
            hasVariant(variants, "state", "success") &&
            hasVariant(variants, "type", "ghost"),
          [sty.button__state_warning]: hasVariant(variants, "state", "warning"),
          [sty.button__type_dark]: hasVariant(variants, "type", "dark"),
          [sty.button__type_ghost]: hasVariant(variants, "type", "ghost"),
          [sty.button__type_ghost_color_alert]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "alert"),
          [sty.button__type_ghost_color_blue]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "blue"),
          [sty.button__type_ghost_color_brand]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "brand"),
          [sty.button__type_ghost_color_caution]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "caution"),
          [sty.button__type_ghost_color_magenta]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "magenta"),
          [sty.button__type_ghost_color_success]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "success"),
          [sty.button__type_ghost_color_warning]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "warning"),
          [sty.button__type_ghost_state_error]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "state", "error"),
          [sty.button__type_ghost_state_warning]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "state", "warning"),
          [sty.button__type_icon]: hasVariant(variants, "type", "icon"),
          [sty.button__type_light]: hasVariant(variants, "type", "light"),
          [sty.button__type_light_color_alert]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "alert"),
          [sty.button__type_light_color_blue]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "blue"),
          [sty.button__type_light_color_brand]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "brand"),
          [sty.button__type_light_color_caution]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "caution"),
          [sty.button__type_light_color_magenta]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "magenta"),
          [sty.button__type_light_color_success]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "success"),
          [sty.button__type_light_color_warning]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "warning"),
          [sty.button__type_link]: hasVariant(variants, "type", "link"),
          [sty.button__type_link_color_alert]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "alert"),
          [sty.button__type_link_color_blue]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "blue"),
          [sty.button__type_link_color_brand]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "brand"),
          [sty.button__type_link_color_caution]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "caution"),
          [sty.button__type_link_color_magenta]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "magenta"),
          [sty.button__type_link_color_success]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "success"),
          [sty.button__type_link_color_warning]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "warning"),
          [sty.button__type_link_state_error]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "state", "error"),
          [sty.button__type_link_state_success]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "state", "success"),
          [sty.button__type_link_state_warning]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "state", "warning"),
          [sty.button__type_outline]: hasVariant(variants, "type", "outline"),
          [sty.button__type_outline_color_brand]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "brand"),
          [sty.button__type_outline_color_success]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "success"),
          [sty.button__type_outline_color_warning]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "warning"),
          [sty.button__type_primary]: hasVariant(variants, "type", "primary"),
          [sty.button__type_primary_color_brand]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "color", "brand"),
          [sty.button__type_primary_state_disabled]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "state", "disabled"),
          [sty.button__type_secondary]: hasVariant(
            variants,
            "type",
            "secondary"
          ),

          [sty.button__type_secondary_color_alert]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "alert"),
          [sty.button__type_secondary_color_blue]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "blue"),
          [sty.button__type_secondary_color_brand]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "brand"),
          [sty.button__type_secondary_color_caution]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "caution"),
          [sty.button__type_secondary_color_magenta]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "magenta"),
          [sty.button__type_secondary_color_success]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "success"),
          [sty.button__type_secondary_color_warning]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "warning")
        })}
        id={args.id !== undefined ? args.id : ""}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren__color_brand]: hasVariant(
              variants,
              "color",
              "brand"
            ),

            [sty.slotTargetChildren__color_brand_rounded]:
              hasVariant(variants, "color", "brand") &&
              hasVariant(variants, "rounded", "rounded"),
            [sty.slotTargetChildren__color_light]: hasVariant(
              variants,
              "color",
              "light"
            ),

            [sty.slotTargetChildren__color_light_type_light]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "type", "light"),
            [sty.slotTargetChildren__color_light_type_link]:
              hasVariant(variants, "color", "light") &&
              hasVariant(variants, "type", "link"),
            [sty.slotTargetChildren__state_disabled]: hasVariant(
              variants,
              "state",
              "disabled"
            ),

            [sty.slotTargetChildren__state_success_type_ghost]:
              hasVariant(variants, "state", "success") &&
              hasVariant(variants, "type", "ghost"),
            [sty.slotTargetChildren__type_dark]: hasVariant(
              variants,
              "type",
              "dark"
            ),

            [sty.slotTargetChildren__type_ghost]: hasVariant(
              variants,
              "type",
              "ghost"
            ),

            [sty.slotTargetChildren__type_ghost_color_alert]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "alert"),
            [sty.slotTargetChildren__type_ghost_color_blue]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "blue"),
            [sty.slotTargetChildren__type_ghost_color_brand]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "brand"),
            [sty.slotTargetChildren__type_ghost_color_caution]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "caution"),
            [sty.slotTargetChildren__type_ghost_color_magenta]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "magenta"),
            [sty.slotTargetChildren__type_ghost_color_success]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "success"),
            [sty.slotTargetChildren__type_ghost_color_warning]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "warning"),
            [sty.slotTargetChildren__type_ghost_state_error]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "state", "error"),
            [sty.slotTargetChildren__type_ghost_state_warning]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "state", "warning"),
            [sty.slotTargetChildren__type_icon]: hasVariant(
              variants,
              "type",
              "icon"
            ),

            [sty.slotTargetChildren__type_light]: hasVariant(
              variants,
              "type",
              "light"
            ),

            [sty.slotTargetChildren__type_light_color_alert]:
              hasVariant(variants, "type", "light") &&
              hasVariant(variants, "color", "alert"),
            [sty.slotTargetChildren__type_light_color_blue]:
              hasVariant(variants, "type", "light") &&
              hasVariant(variants, "color", "blue"),
            [sty.slotTargetChildren__type_light_color_brand]:
              hasVariant(variants, "type", "light") &&
              hasVariant(variants, "color", "brand"),
            [sty.slotTargetChildren__type_light_color_caution]:
              hasVariant(variants, "type", "light") &&
              hasVariant(variants, "color", "caution"),
            [sty.slotTargetChildren__type_light_color_magenta]:
              hasVariant(variants, "type", "light") &&
              hasVariant(variants, "color", "magenta"),
            [sty.slotTargetChildren__type_light_color_success]:
              hasVariant(variants, "type", "light") &&
              hasVariant(variants, "color", "success"),
            [sty.slotTargetChildren__type_light_color_warning]:
              hasVariant(variants, "type", "light") &&
              hasVariant(variants, "color", "warning"),
            [sty.slotTargetChildren__type_link]: hasVariant(
              variants,
              "type",
              "link"
            ),

            [sty.slotTargetChildren__type_link_color_alert]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "color", "alert"),
            [sty.slotTargetChildren__type_link_color_blue]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "color", "blue"),
            [sty.slotTargetChildren__type_link_color_brand]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "color", "brand"),
            [sty.slotTargetChildren__type_link_color_caution]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "color", "caution"),
            [sty.slotTargetChildren__type_link_color_magenta]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "color", "magenta"),
            [sty.slotTargetChildren__type_link_color_success]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "color", "success"),
            [sty.slotTargetChildren__type_link_color_warning]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "color", "warning"),
            [sty.slotTargetChildren__type_link_state_error]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "state", "error"),
            [sty.slotTargetChildren__type_link_state_success]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "state", "success"),
            [sty.slotTargetChildren__type_link_state_warning]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "state", "warning"),
            [sty.slotTargetChildren__type_outline]: hasVariant(
              variants,
              "type",
              "outline"
            ),

            [sty.slotTargetChildren__type_outline_color_alert]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "alert"),
            [sty.slotTargetChildren__type_outline_color_blue]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "blue"),
            [sty.slotTargetChildren__type_outline_color_brand]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "brand"),
            [sty.slotTargetChildren__type_outline_color_caution]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "caution"),
            [sty.slotTargetChildren__type_outline_color_magenta]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "magenta"),
            [sty.slotTargetChildren__type_outline_color_success]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "success"),
            [sty.slotTargetChildren__type_outline_color_warning]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "warning"),
            [sty.slotTargetChildren__type_primary]: hasVariant(
              variants,
              "type",
              "primary"
            ),

            [sty.slotTargetChildren__type_primary_color_brand]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "brand"),
            [sty.slotTargetChildren__type_primary_state_disabled]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "state", "disabled"),
            [sty.slotTargetChildren__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            ),

            [sty.slotTargetChildren__type_secondary_color_alert]:
              hasVariant(variants, "type", "secondary") &&
              hasVariant(variants, "color", "alert"),
            [sty.slotTargetChildren__type_secondary_color_blue]:
              hasVariant(variants, "type", "secondary") &&
              hasVariant(variants, "color", "blue"),
            [sty.slotTargetChildren__type_secondary_color_brand]:
              hasVariant(variants, "type", "secondary") &&
              hasVariant(variants, "color", "brand"),
            [sty.slotTargetChildren__type_secondary_color_caution]:
              hasVariant(variants, "type", "secondary") &&
              hasVariant(variants, "color", "caution"),
            [sty.slotTargetChildren__type_secondary_color_magenta]:
              hasVariant(variants, "type", "secondary") &&
              hasVariant(variants, "color", "magenta"),
            [sty.slotTargetChildren__type_secondary_color_success]:
              hasVariant(variants, "type", "secondary") &&
              hasVariant(variants, "color", "success"),
            [sty.slotTargetChildren__type_secondary_color_warning]:
              hasVariant(variants, "type", "secondary") &&
              hasVariant(variants, "color", "warning")
          })
        })}
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
