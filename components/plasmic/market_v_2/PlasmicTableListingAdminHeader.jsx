// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: j0LNFrWCIRj
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ElementRadioPrimary from "../../ElementRadioPrimary"; // plasmic-import: Wn4V4PrC-K/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTableListingAdminHeader.module.css"; // plasmic-import: j0LNFrWCIRj/css

export const PlasmicTableListingAdminHeader__VariantProps = new Array();

export const PlasmicTableListingAdminHeader__ArgProps = new Array();

function PlasmicTableListingAdminHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
      <p.Stack
        as={"div"}
        data-plasmic-name={"listingHeadlineSelectAllParent"}
        data-plasmic-override={overrides.listingHeadlineSelectAllParent}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          sty.listingHeadlineSelectAllParent
        )}
      >
        <ElementRadioPrimary
          data-plasmic-name={"elementRadioPrimary"}
          data-plasmic-override={overrides.elementRadioPrimary}
          className={classNames("__wab_instance", sty.elementRadioPrimary)}
          size={"_14Px"}
        />

        <div
          data-plasmic-name={"listingParent"}
          data-plasmic-override={overrides.listingParent}
          className={classNames(defaultcss.all, sty.listingParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__apx7I
            )}
          >
            {"Listing"}
          </div>
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"statusParent"}
          data-plasmic-override={overrides.statusParent}
          className={classNames(defaultcss.all, sty.statusParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__l0Fer
            )}
          >
            {"Status"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"toDoParent"}
          data-plasmic-override={overrides.toDoParent}
          className={classNames(defaultcss.all, sty.toDoParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox___1JXFg
            )}
          >
            {"To do"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"modifiedDateParent"}
          data-plasmic-override={overrides.modifiedDateParent}
          className={classNames(defaultcss.all, sty.modifiedDateParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__qCh1L
            )}
          >
            {"modified"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"categoryParent"}
          data-plasmic-override={overrides.categoryParent}
          className={classNames(defaultcss.all, sty.categoryParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__mxLqA
            )}
          >
            {"Category"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"priceParent"}
          data-plasmic-override={overrides.priceParent}
          className={classNames(defaultcss.all, sty.priceParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__l0YWm
            )}
          >
            {"Price"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"termParent"}
          data-plasmic-override={overrides.termParent}
          className={classNames(defaultcss.all, sty.termParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__ajruk
            )}
          >
            {"Term"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"expiryParent"}
          data-plasmic-override={overrides.expiryParent}
          className={classNames(defaultcss.all, sty.expiryParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__fob07
            )}
          >
            {"Expiry"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"renewParent"}
          data-plasmic-override={overrides.renewParent}
          className={classNames(defaultcss.all, sty.renewParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox___2RzSd
            )}
          >
            {"Auto-renew"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"cancelParent"}
          data-plasmic-override={overrides.cancelParent}
          className={classNames(defaultcss.all, sty.cancelParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox___2FOl
            )}
          >
            {"Cancel"}
          </div>
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "listingHeadlineSelectAllParent",
    "elementRadioPrimary",
    "listingParent",
    "statusParent",
    "toDoParent",
    "modifiedDateParent",
    "categoryParent",
    "priceParent",
    "termParent",
    "expiryParent",
    "renewParent",
    "cancelParent"
  ],

  listingHeadlineSelectAllParent: [
    "listingHeadlineSelectAllParent",
    "elementRadioPrimary",
    "listingParent"
  ],

  elementRadioPrimary: ["elementRadioPrimary"],
  listingParent: ["listingParent"],
  statusParent: ["statusParent"],
  toDoParent: ["toDoParent"],
  modifiedDateParent: ["modifiedDateParent"],
  categoryParent: ["categoryParent"],
  priceParent: ["priceParent"],
  termParent: ["termParent"],
  expiryParent: ["expiryParent"],
  renewParent: ["renewParent"],
  cancelParent: ["cancelParent"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTableListingAdminHeader__ArgProps,
      internalVariantPropNames: PlasmicTableListingAdminHeader__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTableListingAdminHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableListingAdminHeader";
  } else {
    func.displayName = `PlasmicTableListingAdminHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicTableListingAdminHeader = Object.assign(
  // Top-level PlasmicTableListingAdminHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    listingHeadlineSelectAllParent: makeNodeComponent(
      "listingHeadlineSelectAllParent"
    ),

    elementRadioPrimary: makeNodeComponent("elementRadioPrimary"),
    listingParent: makeNodeComponent("listingParent"),
    statusParent: makeNodeComponent("statusParent"),
    toDoParent: makeNodeComponent("toDoParent"),
    modifiedDateParent: makeNodeComponent("modifiedDateParent"),
    categoryParent: makeNodeComponent("categoryParent"),
    priceParent: makeNodeComponent("priceParent"),
    termParent: makeNodeComponent("termParent"),
    expiryParent: makeNodeComponent("expiryParent"),
    renewParent: makeNodeComponent("renewParent"),
    cancelParent: makeNodeComponent("cancelParent"),
    // Metadata about props expected for PlasmicTableListingAdminHeader
    internalVariantProps: PlasmicTableListingAdminHeader__VariantProps,
    internalArgProps: PlasmicTableListingAdminHeader__ArgProps
  }
);

export default PlasmicTableListingAdminHeader;
/* prettier-ignore-end */
