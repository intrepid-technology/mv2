// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: XwgjB__2WeM
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ElementRadioPrimary from "../../ElementRadioPrimary"; // plasmic-import: Wn4V4PrC-K/component
import ImagePrimary from "../../ImagePrimary"; // plasmic-import: LP50swkVvv/component
import IconPrimary from "../../IconPrimary"; // plasmic-import: -fEFICkFUf/component
import DisplayIconText from "../../DisplayIconText"; // plasmic-import: 2XsuG8W9wX/component
import UserAvatarButton from "../../UserAvatarButton"; // plasmic-import: w1GnXfIMuv/component
import ButtonIconNotificationBell from "../../ButtonIconNotificationBell"; // plasmic-import: oyQklGfTop/component
import SwitchPrimary from "../../SwitchPrimary"; // plasmic-import: M6TX-0ESZQ/component
import ButtonCircleDelete from "../../ButtonCircleDelete"; // plasmic-import: nkuQ1X_r6B/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTableProjectAdminRecord.module.css"; // plasmic-import: XwgjB__2WeM/css
import CommentReviewCIcon from "./icons/PlasmicIcon__CommentReviewC"; // plasmic-import: gIz1MSBwtg/icon
import CircleTimeIcon from "./icons/PlasmicIcon__CircleTime"; // plasmic-import: 2emi-eIAJb/icon
import CircleCheckedIcon from "./icons/PlasmicIcon__CircleChecked"; // plasmic-import: Ebjr5Ebml/icon
import CircleStopIcon from "./icons/PlasmicIcon__CircleStop"; // plasmic-import: QS_bXX3Lhh/icon
import CircleXIcon from "./icons/PlasmicIcon__CircleX"; // plasmic-import: t9SuDpj6zV/icon
import CommentReviewBIcon from "./icons/PlasmicIcon__CommentReviewB"; // plasmic-import: 4AL9HbEO5/icon

export const PlasmicTableProjectAdminRecord__VariantProps = new Array("status");

export const PlasmicTableProjectAdminRecord__ArgProps = new Array();

function PlasmicTableProjectAdminRecord__RenderFunc(props) {
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
        data-plasmic-name={"orderSelectImageCaptionEditParent"}
        data-plasmic-override={overrides.orderSelectImageCaptionEditParent}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          sty.orderSelectImageCaptionEditParent
        )}
      >
        <ElementRadioPrimary
          data-plasmic-name={"elementRadioPrimary"}
          data-plasmic-override={overrides.elementRadioPrimary}
          className={classNames("__wab_instance", sty.elementRadioPrimary)}
          size={"_14Px"}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"orderImageTitleParent"}
          data-plasmic-override={overrides.orderImageTitleParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.orderImageTitleParent)}
        >
          <p.PlasmicLink
            data-plasmic-name={"imageServiceLink"}
            data-plasmic-override={overrides.imageServiceLink}
            className={classNames(defaultcss.a, sty.imageServiceLink)}
            component={Link}
            platform={"nextjs"}
          >
            <ImagePrimary
              data-plasmic-name={"imagePrimary"}
              data-plasmic-override={overrides.imagePrimary}
              image360X188={
                <img
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(defaultcss.img, sty.img)}
                  src={
                    "https://craftypixels.com/placeholder-image/40x40/f6f6f6/999999"
                  }
                />
              }
              misc={"thumbnail70X40"}
              thumbnail70X40={
                <img
                  data-plasmic-name={"_70X404"}
                  data-plasmic-override={overrides._70X404}
                  alt={""}
                  className={classNames(defaultcss.img, sty._70X404)}
                  src={
                    "https://craftypixels.com/placeholder-image/70x40/f8f8f8/333333"
                  }
                />
              }
            />
          </p.PlasmicLink>

          <p.Stack
            as={"div"}
            data-plasmic-name={"serviceTitleParent"}
            data-plasmic-override={overrides.serviceTitleParent}
            hasGap={true}
            className={classNames(defaultcss.all, sty.serviceTitleParent)}
          >
            <p.PlasmicLink
              data-plasmic-name={"serviceTitleLink"}
              data-plasmic-override={overrides.serviceTitleLink}
              className={classNames(defaultcss.a, sty.serviceTitleLink)}
              component={Link}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__gwoj
                )}
              >
                {"Service title"}
              </div>
            </p.PlasmicLink>
          </p.Stack>

          <button
            data-plasmic-name={"buttonUserOrderContact"}
            data-plasmic-override={overrides.buttonUserOrderContact}
            className={classNames(
              defaultcss.button,
              sty.buttonUserOrderContact
            )}
            title={"Click to edit this listing"}
          >
            <IconPrimary
              className={classNames("__wab_instance", sty.iconPrimary__crldf)}
              size={"_16Px"}
              svgIcon14Px={
                <CommentReviewCIcon
                  data-plasmic-name={"svgIcon22"}
                  data-plasmic-override={overrides.svgIcon22}
                  className={classNames(defaultcss.all, sty.svgIcon22)}
                  role={"img"}
                />
              }
              svgIcon16Px={
                <CommentReviewCIcon
                  data-plasmic-name={"svgIcon3"}
                  data-plasmic-override={overrides.svgIcon3}
                  className={classNames(defaultcss.all, sty.svgIcon3)}
                  role={"img"}
                />
              }
            />
          </button>
        </p.Stack>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"progressParent"}
          data-plasmic-override={overrides.progressParent}
          className={classNames(defaultcss.all, sty.progressParent)}
        >
          <DisplayIconText
            data-plasmic-name={"displayIconText"}
            data-plasmic-override={overrides.displayIconText}
            className={classNames("__wab_instance", sty.displayIconText)}
            elementIcon={
              <IconPrimary
                className={classNames("__wab_instance", sty.iconPrimary__rsUuq)}
                svgIcon={
                  <p.PlasmicIcon
                    data-plasmic-name={"svgIcon23"}
                    data-plasmic-override={overrides.svgIcon23}
                    PlasmicIconType={
                      hasVariant(variants, "status", "cancelled")
                        ? CircleXIcon
                        : hasVariant(variants, "status", "paused")
                        ? CircleStopIcon
                        : hasVariant(variants, "status", "complete")
                        ? CircleCheckedIcon
                        : CircleTimeIcon
                    }
                    className={classNames(defaultcss.all, sty.svgIcon23, {
                      [sty.svgIcon23__status_cancelled]: hasVariant(
                        variants,
                        "status",
                        "cancelled"
                      ),

                      [sty.svgIcon23__status_complete]: hasVariant(
                        variants,
                        "status",
                        "complete"
                      ),

                      [sty.svgIcon23__status_paused]: hasVariant(
                        variants,
                        "status",
                        "paused"
                      )
                    })}
                    role={"img"}
                  />
                }
              />
            }
            text={
              hasVariant(variants, "status", "paused")
                ? "Paused"
                : hasVariant(variants, "status", "complete")
                ? "Complete"
                : "In progress"
            }
          />
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"priceParent"}
          data-plasmic-override={overrides.priceParent}
          className={classNames(defaultcss.all, sty.priceParent)}
        >
          <div
            data-plasmic-name={"currency"}
            data-plasmic-override={overrides.currency}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.currency
            )}
          >
            {"$"}
          </div>

          <div
            data-plasmic-name={"numberValue"}
            data-plasmic-override={overrides.numberValue}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.numberValue
            )}
          >
            {"00,000"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"partnerAvatarParent"}
          data-plasmic-override={overrides.partnerAvatarParent}
          className={classNames(defaultcss.all, sty.partnerAvatarParent)}
        >
          <UserAvatarButton
            data-plasmic-name={"userAvatarButton"}
            data-plasmic-override={overrides.userAvatarButton}
            className={classNames("__wab_instance", sty.userAvatarButton)}
            size={"_24Px"}
          />
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"notificationsParent"}
          data-plasmic-override={overrides.notificationsParent}
          className={classNames(defaultcss.all, sty.notificationsParent)}
        >
          <button
            data-plasmic-name={"orderNotification"}
            data-plasmic-override={overrides.orderNotification}
            className={classNames(defaultcss.button, sty.orderNotification)}
          >
            <ButtonIconNotificationBell
              data-plasmic-name={"buttonIconNotificationBell"}
              data-plasmic-override={overrides.buttonIconNotificationBell}
              size={"_24"}
              state={"silent"}
            />
          </button>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"deliveryDateParent"}
          data-plasmic-override={overrides.deliveryDateParent}
          className={classNames(defaultcss.all, sty.deliveryDateParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__ghdD6
            )}
          >
            {"00/00/00"}
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"reviewParent"}
          data-plasmic-override={overrides.reviewParent}
          className={classNames(defaultcss.all, sty.reviewParent)}
        >
          <button
            data-plasmic-name={"buttonUserOrderReview"}
            data-plasmic-override={overrides.buttonUserOrderReview}
            className={classNames(defaultcss.button, sty.buttonUserOrderReview)}
            title={"Click to edit this listing"}
          >
            <IconPrimary
              className={classNames("__wab_instance", sty.iconPrimary___3MCD)}
              size={"_24Px"}
              svgIcon14Px={
                <CommentReviewCIcon
                  className={classNames(defaultcss.all, sty.svg__sIi0)}
                  role={"img"}
                />
              }
              svgIcon16Px={
                <CommentReviewCIcon
                  className={classNames(defaultcss.all, sty.svg__tt8Tm)}
                  role={"img"}
                />
              }
              svgIcon24Px={
                <CommentReviewBIcon
                  data-plasmic-name={"svgIcon5"}
                  data-plasmic-override={overrides.svgIcon5}
                  className={classNames(defaultcss.all, sty.svgIcon5)}
                  role={"img"}
                />
              }
            />
          </button>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"approvedParent"}
          data-plasmic-override={overrides.approvedParent}
          className={classNames(defaultcss.all, sty.approvedParent)}
        >
          <SwitchPrimary
            data-plasmic-name={"switchPrimary"}
            data-plasmic-override={overrides.switchPrimary}
          />
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "iphone678Plus") ? true : true) ? (
        <div
          data-plasmic-name={"cancelParent"}
          data-plasmic-override={overrides.cancelParent}
          className={classNames(defaultcss.all, sty.cancelParent)}
        >
          <ButtonCircleDelete
            data-plasmic-name={"buttonCircleDelete"}
            data-plasmic-override={overrides.buttonCircleDelete}
            className={classNames("__wab_instance", sty.buttonCircleDelete)}
            size={"_24Px"}
          />
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "orderSelectImageCaptionEditParent",
    "elementRadioPrimary",
    "orderImageTitleParent",
    "imageServiceLink",
    "imagePrimary",
    "img",
    "_70X404",
    "serviceTitleParent",
    "serviceTitleLink",
    "buttonUserOrderContact",
    "svgIcon22",
    "svgIcon3",
    "progressParent",
    "displayIconText",
    "svgIcon23",
    "priceParent",
    "currency",
    "numberValue",
    "partnerAvatarParent",
    "userAvatarButton",
    "notificationsParent",
    "orderNotification",
    "buttonIconNotificationBell",
    "deliveryDateParent",
    "reviewParent",
    "buttonUserOrderReview",
    "svgIcon5",
    "approvedParent",
    "switchPrimary",
    "cancelParent",
    "buttonCircleDelete"
  ],

  orderSelectImageCaptionEditParent: [
    "orderSelectImageCaptionEditParent",
    "elementRadioPrimary",
    "orderImageTitleParent",
    "imageServiceLink",
    "imagePrimary",
    "img",
    "_70X404",
    "serviceTitleParent",
    "serviceTitleLink",
    "buttonUserOrderContact",
    "svgIcon22",
    "svgIcon3"
  ],

  elementRadioPrimary: ["elementRadioPrimary"],
  orderImageTitleParent: [
    "orderImageTitleParent",
    "imageServiceLink",
    "imagePrimary",
    "img",
    "_70X404",
    "serviceTitleParent",
    "serviceTitleLink",
    "buttonUserOrderContact",
    "svgIcon22",
    "svgIcon3"
  ],

  imageServiceLink: ["imageServiceLink", "imagePrimary", "img", "_70X404"],
  imagePrimary: ["imagePrimary", "img", "_70X404"],
  img: ["img"],
  _70X404: ["_70X404"],
  serviceTitleParent: ["serviceTitleParent", "serviceTitleLink"],
  serviceTitleLink: ["serviceTitleLink"],
  buttonUserOrderContact: ["buttonUserOrderContact", "svgIcon22", "svgIcon3"],
  svgIcon22: ["svgIcon22"],
  svgIcon3: ["svgIcon3"],
  progressParent: ["progressParent", "displayIconText", "svgIcon23"],
  displayIconText: ["displayIconText", "svgIcon23"],
  svgIcon23: ["svgIcon23"],
  priceParent: ["priceParent", "currency", "numberValue"],
  currency: ["currency"],
  numberValue: ["numberValue"],
  partnerAvatarParent: ["partnerAvatarParent", "userAvatarButton"],
  userAvatarButton: ["userAvatarButton"],
  notificationsParent: [
    "notificationsParent",
    "orderNotification",
    "buttonIconNotificationBell"
  ],

  orderNotification: ["orderNotification", "buttonIconNotificationBell"],
  buttonIconNotificationBell: ["buttonIconNotificationBell"],
  deliveryDateParent: ["deliveryDateParent"],
  reviewParent: ["reviewParent", "buttonUserOrderReview", "svgIcon5"],
  buttonUserOrderReview: ["buttonUserOrderReview", "svgIcon5"],
  svgIcon5: ["svgIcon5"],
  approvedParent: ["approvedParent", "switchPrimary"],
  switchPrimary: ["switchPrimary"],
  cancelParent: ["cancelParent", "buttonCircleDelete"],
  buttonCircleDelete: ["buttonCircleDelete"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTableProjectAdminRecord__ArgProps,
      internalVariantPropNames: PlasmicTableProjectAdminRecord__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTableProjectAdminRecord__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableProjectAdminRecord";
  } else {
    func.displayName = `PlasmicTableProjectAdminRecord.${nodeName}`;
  }
  return func;
}

export const PlasmicTableProjectAdminRecord = Object.assign(
  // Top-level PlasmicTableProjectAdminRecord renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    orderSelectImageCaptionEditParent: makeNodeComponent(
      "orderSelectImageCaptionEditParent"
    ),

    elementRadioPrimary: makeNodeComponent("elementRadioPrimary"),
    orderImageTitleParent: makeNodeComponent("orderImageTitleParent"),
    imageServiceLink: makeNodeComponent("imageServiceLink"),
    imagePrimary: makeNodeComponent("imagePrimary"),
    img: makeNodeComponent("img"),
    _70X404: makeNodeComponent("_70X404"),
    serviceTitleParent: makeNodeComponent("serviceTitleParent"),
    serviceTitleLink: makeNodeComponent("serviceTitleLink"),
    buttonUserOrderContact: makeNodeComponent("buttonUserOrderContact"),
    svgIcon22: makeNodeComponent("svgIcon22"),
    svgIcon3: makeNodeComponent("svgIcon3"),
    progressParent: makeNodeComponent("progressParent"),
    displayIconText: makeNodeComponent("displayIconText"),
    svgIcon23: makeNodeComponent("svgIcon23"),
    priceParent: makeNodeComponent("priceParent"),
    currency: makeNodeComponent("currency"),
    numberValue: makeNodeComponent("numberValue"),
    partnerAvatarParent: makeNodeComponent("partnerAvatarParent"),
    userAvatarButton: makeNodeComponent("userAvatarButton"),
    notificationsParent: makeNodeComponent("notificationsParent"),
    orderNotification: makeNodeComponent("orderNotification"),
    buttonIconNotificationBell: makeNodeComponent("buttonIconNotificationBell"),
    deliveryDateParent: makeNodeComponent("deliveryDateParent"),
    reviewParent: makeNodeComponent("reviewParent"),
    buttonUserOrderReview: makeNodeComponent("buttonUserOrderReview"),
    svgIcon5: makeNodeComponent("svgIcon5"),
    approvedParent: makeNodeComponent("approvedParent"),
    switchPrimary: makeNodeComponent("switchPrimary"),
    cancelParent: makeNodeComponent("cancelParent"),
    buttonCircleDelete: makeNodeComponent("buttonCircleDelete"),
    // Metadata about props expected for PlasmicTableProjectAdminRecord
    internalVariantProps: PlasmicTableProjectAdminRecord__VariantProps,
    internalArgProps: PlasmicTableProjectAdminRecord__ArgProps
  }
);

export default PlasmicTableProjectAdminRecord;
/* prettier-ignore-end */
