// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: D70VD4gl3mo
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconPrimary from "../../IconPrimary"; // plasmic-import: -fEFICkFUf/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicElementLocationPrimary.module.css"; // plasmic-import: D70VD4gl3mo/css
import LocationIcon from "./icons/PlasmicIcon__Location"; // plasmic-import: XbuUvkV9FO/icon

export const PlasmicElementLocationPrimary__VariantProps = new Array();

export const PlasmicElementLocationPrimary__ArgProps = new Array();

function PlasmicElementLocationPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    hasVariant(globalVariants, "screen", "desktopPrimary") ? true : true
  ) ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(
        hasVariant(globalVariants, "screen", "desktopPrimary") ? true : true
      ) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"parent"}
          data-plasmic-override={overrides.parent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.parent)}
        >
          {(
            hasVariant(globalVariants, "screen", "desktopPrimary") ? true : true
          ) ? (
            <IconPrimary
              data-plasmic-name={"locationPin"}
              data-plasmic-override={overrides.locationPin}
              className={classNames("__wab_instance", sty.locationPin)}
              size={
                hasVariant(globalVariants, "screen", "desktopPrimary")
                  ? "_16Px"
                  : "_16Px"
              }
              svgIcon={
                <LocationIcon
                  data-plasmic-name={"svgIcon"}
                  data-plasmic-override={overrides.svgIcon}
                  className={classNames(defaultcss.all, sty.svgIcon)}
                  role={"img"}
                />
              }
              svgIcon16Px={
                <p.PlasmicIcon
                  data-plasmic-name={"svgIcon3"}
                  data-plasmic-override={overrides.svgIcon3}
                  PlasmicIconType={
                    hasVariant(globalVariants, "screen", "desktopPrimary")
                      ? LocationIcon
                      : LocationIcon
                  }
                  className={classNames(defaultcss.all, sty.svgIcon3)}
                  role={"img"}
                />
              }
              svgIcon18Px={
                <LocationIcon
                  data-plasmic-name={"svgIcon4"}
                  data-plasmic-override={overrides.svgIcon4}
                  className={classNames(defaultcss.all, sty.svgIcon4)}
                  role={"img"}
                />
              }
            />
          ) : null}

          <div
            data-plasmic-name={"cityTextParent"}
            data-plasmic-override={overrides.cityTextParent}
            className={classNames(defaultcss.all, sty.cityTextParent)}
          >
            <div
              data-plasmic-name={"cityName"}
              data-plasmic-override={overrides.cityName}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.cityName
              )}
            >
              {"City"}
            </div>

            <div
              data-plasmic-name={"box"}
              data-plasmic-override={overrides.box}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box
              )}
            >
              {","}
            </div>
          </div>

          <div
            data-plasmic-name={"countryTextParent"}
            data-plasmic-override={overrides.countryTextParent}
            className={classNames(defaultcss.all, sty.countryTextParent)}
          >
            <div
              data-plasmic-name={"countryName"}
              data-plasmic-override={overrides.countryName}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.countryName
              )}
            >
              {"Country"}
            </div>
          </div>
        </p.Stack>
      ) : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "locationPin",
    "svgIcon",
    "svgIcon3",
    "svgIcon4",
    "cityTextParent",
    "cityName",
    "box",
    "countryTextParent",
    "countryName"
  ],

  parent: [
    "parent",
    "locationPin",
    "svgIcon",
    "svgIcon3",
    "svgIcon4",
    "cityTextParent",
    "cityName",
    "box",
    "countryTextParent",
    "countryName"
  ],

  locationPin: ["locationPin", "svgIcon", "svgIcon3", "svgIcon4"],
  svgIcon: ["svgIcon"],
  svgIcon3: ["svgIcon3"],
  svgIcon4: ["svgIcon4"],
  cityTextParent: ["cityTextParent", "cityName", "box"],
  cityName: ["cityName"],
  box: ["box"],
  countryTextParent: ["countryTextParent", "countryName"],
  countryName: ["countryName"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementLocationPrimary__ArgProps,
      internalVariantPropNames: PlasmicElementLocationPrimary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicElementLocationPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementLocationPrimary";
  } else {
    func.displayName = `PlasmicElementLocationPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicElementLocationPrimary = Object.assign(
  // Top-level PlasmicElementLocationPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    locationPin: makeNodeComponent("locationPin"),
    svgIcon: makeNodeComponent("svgIcon"),
    svgIcon3: makeNodeComponent("svgIcon3"),
    svgIcon4: makeNodeComponent("svgIcon4"),
    cityTextParent: makeNodeComponent("cityTextParent"),
    cityName: makeNodeComponent("cityName"),
    box: makeNodeComponent("box"),
    countryTextParent: makeNodeComponent("countryTextParent"),
    countryName: makeNodeComponent("countryName"),
    // Metadata about props expected for PlasmicElementLocationPrimary
    internalVariantProps: PlasmicElementLocationPrimary__VariantProps,
    internalArgProps: PlasmicElementLocationPrimary__ArgProps
  }
);

export default PlasmicElementLocationPrimary;
/* prettier-ignore-end */
