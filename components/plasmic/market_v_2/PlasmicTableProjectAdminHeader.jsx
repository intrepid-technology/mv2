// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: K0Z1ZWLiupV
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
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTableProjectAdminHeader.module.css"; // plasmic-import: K0Z1ZWLiupV/css

export const PlasmicTableProjectAdminHeader__VariantProps = new Array();

export const PlasmicTableProjectAdminHeader__ArgProps = new Array();

function PlasmicTableProjectAdminHeader__RenderFunc(props) {
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
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"orderHeaderSelectAll"}
        data-plasmic-override={overrides.orderHeaderSelectAll}
        hasGap={true}
        className={classNames(projectcss.all, sty.orderHeaderSelectAll)}
      >
        <ElementRadioPrimary
          data-plasmic-name={"elementRadioPrimary"}
          data-plasmic-override={overrides.elementRadioPrimary}
          className={classNames("__wab_instance", sty.elementRadioPrimary)}
          size={"_14Px"}
        />

        <div
          data-plasmic-name={"order"}
          data-plasmic-override={overrides.order}
          className={classNames(projectcss.all, sty.order)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tv5Wg
            )}
          >
            {"order"}
          </div>
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"status"}
          data-plasmic-override={overrides.status}
          className={classNames(projectcss.all, sty.status)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5MLDi
            )}
          >
            {"Status"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"price"}
          data-plasmic-override={overrides.price}
          className={classNames(projectcss.all, sty.price)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__xucpq
            )}
          >
            {"Price"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"partner"}
          data-plasmic-override={overrides.partner}
          className={classNames(projectcss.all, sty.partner)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rBkQm
            )}
          >
            {"Partner"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"notifications"}
          data-plasmic-override={overrides.notifications}
          className={classNames(projectcss.all, sty.notifications)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__m5Wi9
            )}
          >
            {"Notifications"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"delivery"}
          data-plasmic-override={overrides.delivery}
          className={classNames(projectcss.all, sty.delivery)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pag2Z
            )}
          >
            {"Delivery date"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"review"}
          data-plasmic-override={overrides.review}
          className={classNames(projectcss.all, sty.review)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ovz4R
            )}
          >
            {"review"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"approved"}
          data-plasmic-override={overrides.approved}
          className={classNames(projectcss.all, sty.approved)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yTjqZ
            )}
          >
            {"Approved"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"cancel"}
          data-plasmic-override={overrides.cancel}
          className={classNames(projectcss.all, sty.cancel)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__xYnnr
            )}
          >
            {"cancel"}
          </div>
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "orderHeaderSelectAll",
    "elementRadioPrimary",
    "order",
    "status",
    "price",
    "partner",
    "notifications",
    "delivery",
    "review",
    "approved",
    "cancel"
  ],

  orderHeaderSelectAll: [
    "orderHeaderSelectAll",
    "elementRadioPrimary",
    "order"
  ],

  elementRadioPrimary: ["elementRadioPrimary"],
  order: ["order"],
  status: ["status"],
  price: ["price"],
  partner: ["partner"],
  notifications: ["notifications"],
  delivery: ["delivery"],
  review: ["review"],
  approved: ["approved"],
  cancel: ["cancel"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTableProjectAdminHeader__ArgProps,
      internalVariantPropNames: PlasmicTableProjectAdminHeader__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTableProjectAdminHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableProjectAdminHeader";
  } else {
    func.displayName = `PlasmicTableProjectAdminHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicTableProjectAdminHeader = Object.assign(
  // Top-level PlasmicTableProjectAdminHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    orderHeaderSelectAll: makeNodeComponent("orderHeaderSelectAll"),
    elementRadioPrimary: makeNodeComponent("elementRadioPrimary"),
    order: makeNodeComponent("order"),
    status: makeNodeComponent("status"),
    price: makeNodeComponent("price"),
    partner: makeNodeComponent("partner"),
    notifications: makeNodeComponent("notifications"),
    delivery: makeNodeComponent("delivery"),
    review: makeNodeComponent("review"),
    approved: makeNodeComponent("approved"),
    cancel: makeNodeComponent("cancel"),
    // Metadata about props expected for PlasmicTableProjectAdminHeader
    internalVariantProps: PlasmicTableProjectAdminHeader__VariantProps,
    internalArgProps: PlasmicTableProjectAdminHeader__ArgProps
  }
);

export default PlasmicTableProjectAdminHeader;
/* prettier-ignore-end */
