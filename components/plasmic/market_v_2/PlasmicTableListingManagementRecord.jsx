// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: -CTzxsSFaeA
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
import IconTextPrimary from "../../IconTextPrimary"; // plasmic-import: 2XsuG8W9wX/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import ButtonLinkPrimary from "../../ButtonLinkPrimary"; // plasmic-import: d7dGAYuRCt/component
import TagBadge from "../../TagBadge"; // plasmic-import: C8K8aavuz-/component
import SwitchPrimary from "../../SwitchPrimary"; // plasmic-import: M6TX-0ESZQ/component
import ButtonCircleDelete from "../../ButtonCircleDelete"; // plasmic-import: nkuQ1X_r6B/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicTableListingManagementRecord.module.css"; // plasmic-import: -CTzxsSFaeA/css
import EditIcon from "./icons/PlasmicIcon__Edit"; // plasmic-import: mbnWFLNOQl/icon
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: yu83kfpl6j/icon
import CircleCheckedIcon from "./icons/PlasmicIcon__CircleChecked"; // plasmic-import: Ebjr5Ebml/icon
import CircleStopIcon from "./icons/PlasmicIcon__CircleStop"; // plasmic-import: QS_bXX3Lhh/icon
import BoostIcon from "./icons/PlasmicIcon__Boost"; // plasmic-import: X0sjJkcBKE/icon

export const PlasmicTableListingManagementRecord__VariantProps = new Array(
  "status",
  "toDo",
  "term"
);

export const PlasmicTableListingManagementRecord__ArgProps = new Array(
  "destination"
);

function PlasmicTableListingManagementRecord__RenderFunc(props) {
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__toDo_finish]: hasVariant(variants, "toDo", "finish")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"listingSelectImageCaptionEditParent"}
        data-plasmic-override={overrides.listingSelectImageCaptionEditParent}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          sty.listingSelectImageCaptionEditParent,
          {
            [sty.listingSelectImageCaptionEditParent__term_annual]: hasVariant(
              variants,
              "term",
              "annual"
            )
          }
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
          data-plasmic-name={"imageCaptionParent"}
          data-plasmic-override={overrides.imageCaptionParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.imageCaptionParent, {
            [sty.imageCaptionParent__term_annual]: hasVariant(
              variants,
              "term",
              "annual"
            )
          })}
        >
          <p.PlasmicLink
            data-plasmic-name={"imageLinkManageListging"}
            data-plasmic-override={overrides.imageLinkManageListging}
            className={classNames(defaultcss.all, sty.imageLinkManageListging)}
            component={Link}
            href={args.destination}
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
                  role={"img"}
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
                  role={"img"}
                  src={
                    "https://craftypixels.com/placeholder-image/70x40/f8f8f8/333333"
                  }
                />
              }
            />
          </p.PlasmicLink>

          <p.Stack
            as={"div"}
            data-plasmic-name={"serviceListingTitleParent"}
            data-plasmic-override={overrides.serviceListingTitleParent}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.serviceListingTitleParent,
              {
                [sty.serviceListingTitleParent__term_annual]: hasVariant(
                  variants,
                  "term",
                  "annual"
                )
              }
            )}
          >
            <p.PlasmicLink
              data-plasmic-name={"serviceListingTitle"}
              data-plasmic-override={overrides.serviceListingTitle}
              className={classNames(defaultcss.all, sty.serviceListingTitle, {
                [sty.serviceListingTitle__term_annual]: hasVariant(
                  variants,
                  "term",
                  "annual"
                )
              })}
              component={Link}
              href={args.destination}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__bWl6W,
                  {
                    [sty.box__term_annual__bWl6WynHaO]: hasVariant(
                      variants,
                      "term",
                      "annual"
                    )
                  }
                )}
              >
                {"Service title"}
              </div>
            </p.PlasmicLink>
          </p.Stack>

          <p.PlasmicLink
            data-plasmic-name={"buttonEditListing"}
            data-plasmic-override={overrides.buttonEditListing}
            className={classNames(defaultcss.all, sty.buttonEditListing, {
              [sty.buttonEditListing__term_annual]: hasVariant(
                variants,
                "term",
                "annual"
              )
            })}
            component={Link}
            href={args.destination}
            platform={"nextjs"}
            title={"Click to edit this listing"}
          >
            <IconPrimary
              className={classNames("__wab_instance", sty.iconPrimary__nGv)}
              size={"_16Px"}
              svgIcon14Px={
                <EditIcon
                  data-plasmic-name={"svgIcon22"}
                  data-plasmic-override={overrides.svgIcon22}
                  className={classNames(defaultcss.all, sty.svgIcon22)}
                  role={"img"}
                />
              }
              svgIcon16Px={
                <EditIcon
                  data-plasmic-name={"editIcon"}
                  data-plasmic-override={overrides.editIcon}
                  className={classNames(defaultcss.all, sty.editIcon, {
                    [sty.editIcon__term_annual]: hasVariant(
                      variants,
                      "term",
                      "annual"
                    )
                  })}
                  role={"img"}
                />
              }
            />
          </p.PlasmicLink>
        </p.Stack>
      </p.Stack>

      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
      ) ? (
        <div
          data-plasmic-name={"statusParent"}
          data-plasmic-override={overrides.statusParent}
          className={classNames(defaultcss.all, sty.statusParent)}
        >
          <IconTextPrimary
            data-plasmic-name={"status"}
            data-plasmic-override={overrides.status}
            className={classNames("__wab_instance", sty.status)}
            elementIcon={
              <IconPrimary
                className={classNames("__wab_instance", sty.iconPrimary__wJuEj)}
                svgIcon={
                  <p.PlasmicIcon
                    data-plasmic-name={"svgIcon23"}
                    data-plasmic-override={overrides.svgIcon23}
                    PlasmicIconType={
                      hasVariant(variants, "status", "unlisted")
                        ? CircleStopIcon
                        : hasVariant(variants, "status", "listed")
                        ? CircleCheckedIcon
                        : PlusBoldIcon
                    }
                    className={classNames(defaultcss.all, sty.svgIcon23, {
                      [sty.svgIcon23__status_inProgress]: hasVariant(
                        variants,
                        "status",
                        "inProgress"
                      ),

                      [sty.svgIcon23__status_listed]: hasVariant(
                        variants,
                        "status",
                        "listed"
                      ),

                      [sty.svgIcon23__status_unlisted]: hasVariant(
                        variants,
                        "status",
                        "unlisted"
                      )
                    })}
                    role={"img"}
                  />
                }
              />
            }
            text={
              hasVariant(variants, "status", "unlisted")
                ? "Un-listed"
                : hasVariant(variants, "status", "listed")
                ? "Listed"
                : "Status"
            }
          />
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
      ) ? (
        <div
          data-plasmic-name={"toDoParent"}
          data-plasmic-override={overrides.toDoParent}
          className={classNames(defaultcss.all, sty.toDoParent, {
            [sty.toDoParent__toDo_finish]: hasVariant(
              variants,
              "toDo",
              "finish"
            )
          })}
        >
          {(hasVariant(variants, "toDo", "finish") ? true : true) ? (
            <ButtonPrimary
              data-plasmic-name={"toDo"}
              data-plasmic-override={overrides.toDo}
              className={classNames("__wab_instance", sty.toDo, {
                [sty.toDo__toDo_activate]: hasVariant(
                  variants,
                  "toDo",
                  "activate"
                ),

                [sty.toDo__toDo_boost]: hasVariant(variants, "toDo", "boost"),
                [sty.toDo__toDo_finish]: hasVariant(variants, "toDo", "finish")
              })}
              color={
                hasVariant(variants, "toDo", "boost")
                  ? "brand"
                  : hasVariant(variants, "toDo", "activate")
                  ? "brand"
                  : hasVariant(variants, "toDo", "finish")
                  ? "success"
                  : undefined
              }
              size={"_90"}
              svgIcon={
                <p.PlasmicIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  PlasmicIconType={
                    hasVariant(variants, "toDo", "boost")
                      ? BoostIcon
                      : PlusBoldIcon
                  }
                  className={classNames(defaultcss.all, sty.svg, {
                    [sty.svg__toDo_boost]: hasVariant(variants, "toDo", "boost")
                  })}
                  role={"img"}
                />
              }
              type={hasVariant(variants, "toDo", "boost") ? "icon" : "ghost"}
            >
              {hasVariant(variants, "toDo", "boost")
                ? "Boost"
                : hasVariant(variants, "toDo", "activate")
                ? "Activate"
                : hasVariant(variants, "toDo", "finish")
                ? "Finish"
                : "Button"}
            </ButtonPrimary>
          ) : null}
          {(hasVariant(variants, "toDo", "finish") ? true : false) ? (
            <ButtonLinkPrimary
              data-plasmic-name={"buttonLinkPrimary"}
              data-plasmic-override={overrides.buttonLinkPrimary}
              className={classNames("__wab_instance", sty.buttonLinkPrimary, {
                [sty.buttonLinkPrimary__toDo_finish]: hasVariant(
                  variants,
                  "toDo",
                  "finish"
                )
              })}
              color={
                hasVariant(variants, "toDo", "finish") ? "green" : undefined
              }
              text={
                hasVariant(variants, "toDo", "finish") ? "Finish" : "Hyper Link"
              }
              type={
                hasVariant(variants, "toDo", "finish") ? "ghost" : undefined
              }
            />
          ) : null}
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
      ) ? (
        <div
          data-plasmic-name={"modifiedDateTimeParent"}
          data-plasmic-override={overrides.modifiedDateTimeParent}
          className={classNames(defaultcss.all, sty.modifiedDateTimeParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__kzo2R
            )}
          >
            {"00/00/00"}
          </div>
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
      ) ? (
        <div
          data-plasmic-name={"categoryParent"}
          data-plasmic-override={overrides.categoryParent}
          className={classNames(defaultcss.all, sty.categoryParent)}
        >
          <TagBadge
            data-plasmic-name={"category"}
            data-plasmic-override={overrides.category}
            className={classNames("__wab_instance", sty.category)}
            textBase10Px={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__rc3Ov
                )}
              >
                {"Category"}
              </div>
            }
            type={["outline"]}
          />
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
      ) ? (
        <div
          data-plasmic-name={"priceParent"}
          data-plasmic-override={overrides.priceParent}
          className={classNames(defaultcss.all, sty.priceParent)}
        >
          <div
            data-plasmic-name={"currencyParent"}
            data-plasmic-override={overrides.currencyParent}
            className={classNames(defaultcss.all, sty.currencyParent)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__fvDkj
              )}
            >
              {"$"}
            </div>
          </div>

          <div
            data-plasmic-name={"valueServicePrice"}
            data-plasmic-override={overrides.valueServicePrice}
            className={classNames(defaultcss.all, sty.valueServicePrice)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__ssxRv
              )}
            >
              {"00,000"}
            </div>
          </div>
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
      ) ? (
        <div
          data-plasmic-name={"termParent"}
          data-plasmic-override={overrides.termParent}
          className={classNames(defaultcss.all, sty.termParent)}
        >
          <TagBadge
            data-plasmic-name={"termSubscription"}
            data-plasmic-override={overrides.termSubscription}
            className={classNames("__wab_instance", sty.termSubscription, {
              [sty.termSubscription__term_annual]: hasVariant(
                variants,
                "term",
                "annual"
              ),

              [sty.termSubscription__term_monthly]: hasVariant(
                variants,
                "term",
                "monthly"
              )
            })}
            textBase10Px={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__mce,
                  {
                    [sty.box__term_annual__mceynHaO]: hasVariant(
                      variants,
                      "term",
                      "annual"
                    ),

                    [sty.box__term_monthly__mceMZlgn]: hasVariant(
                      variants,
                      "term",
                      "monthly"
                    )
                  }
                )}
              >
                {hasVariant(variants, "term", "annual")
                  ? "Annual"
                  : hasVariant(variants, "term", "monthly")
                  ? "Monthly"
                  : "Term"}
              </div>
            }
            type={
              hasVariant(variants, "term", "annual")
                ? []
                : hasVariant(variants, "term", "monthly")
                ? []
                : []
            }
          />
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
      ) ? (
        <div
          data-plasmic-name={"expirationDateTimeParent"}
          data-plasmic-override={overrides.expirationDateTimeParent}
          className={classNames(defaultcss.all, sty.expirationDateTimeParent)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__wbZD
            )}
          >
            {"00/00/00"}
          </div>
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
      ) ? (
        <div
          data-plasmic-name={"autoRenewParent"}
          data-plasmic-override={overrides.autoRenewParent}
          className={classNames(defaultcss.all, sty.autoRenewParent)}
        >
          <SwitchPrimary
            data-plasmic-name={"autoRenew"}
            data-plasmic-override={overrides.autoRenew}
            className={classNames("__wab_instance", sty.autoRenew, {
              [sty.autoRenew__term_annual]: hasVariant(
                variants,
                "term",
                "annual"
              )
            })}
          />
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobileAPrimary") ? true : true
      ) ? (
        <div className={classNames(defaultcss.all, sty.box__lBwk)}>
          <ButtonCircleDelete
            data-plasmic-name={"archiveListing"}
            data-plasmic-override={overrides.archiveListing}
            className={classNames("__wab_instance", sty.archiveListing, {
              [sty.archiveListing__term_annual]: hasVariant(
                variants,
                "term",
                "annual"
              )
            })}
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
    "listingSelectImageCaptionEditParent",
    "elementRadioPrimary",
    "imageCaptionParent",
    "imageLinkManageListging",
    "imagePrimary",
    "img",
    "_70X404",
    "serviceListingTitleParent",
    "serviceListingTitle",
    "buttonEditListing",
    "svgIcon22",
    "editIcon",
    "statusParent",
    "status",
    "svgIcon23",
    "toDoParent",
    "toDo",
    "svg",
    "buttonLinkPrimary",
    "modifiedDateTimeParent",
    "categoryParent",
    "category",
    "priceParent",
    "currencyParent",
    "valueServicePrice",
    "termParent",
    "termSubscription",
    "expirationDateTimeParent",
    "autoRenewParent",
    "autoRenew",
    "archiveListing"
  ],

  listingSelectImageCaptionEditParent: [
    "listingSelectImageCaptionEditParent",
    "elementRadioPrimary",
    "imageCaptionParent",
    "imageLinkManageListging",
    "imagePrimary",
    "img",
    "_70X404",
    "serviceListingTitleParent",
    "serviceListingTitle",
    "buttonEditListing",
    "svgIcon22",
    "editIcon"
  ],

  elementRadioPrimary: ["elementRadioPrimary"],
  imageCaptionParent: [
    "imageCaptionParent",
    "imageLinkManageListging",
    "imagePrimary",
    "img",
    "_70X404",
    "serviceListingTitleParent",
    "serviceListingTitle",
    "buttonEditListing",
    "svgIcon22",
    "editIcon"
  ],

  imageLinkManageListging: [
    "imageLinkManageListging",
    "imagePrimary",
    "img",
    "_70X404"
  ],

  imagePrimary: ["imagePrimary", "img", "_70X404"],
  img: ["img"],
  _70X404: ["_70X404"],
  serviceListingTitleParent: [
    "serviceListingTitleParent",
    "serviceListingTitle"
  ],

  serviceListingTitle: ["serviceListingTitle"],
  buttonEditListing: ["buttonEditListing", "svgIcon22", "editIcon"],
  svgIcon22: ["svgIcon22"],
  editIcon: ["editIcon"],
  statusParent: ["statusParent", "status", "svgIcon23"],
  status: ["status", "svgIcon23"],
  svgIcon23: ["svgIcon23"],
  toDoParent: ["toDoParent", "toDo", "svg", "buttonLinkPrimary"],
  toDo: ["toDo", "svg"],
  svg: ["svg"],
  buttonLinkPrimary: ["buttonLinkPrimary"],
  modifiedDateTimeParent: ["modifiedDateTimeParent"],
  categoryParent: ["categoryParent", "category"],
  category: ["category"],
  priceParent: ["priceParent", "currencyParent", "valueServicePrice"],
  currencyParent: ["currencyParent"],
  valueServicePrice: ["valueServicePrice"],
  termParent: ["termParent", "termSubscription"],
  termSubscription: ["termSubscription"],
  expirationDateTimeParent: ["expirationDateTimeParent"],
  autoRenewParent: ["autoRenewParent", "autoRenew"],
  autoRenew: ["autoRenew"],
  archiveListing: ["archiveListing"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTableListingManagementRecord__ArgProps,
      internalVariantPropNames:
        PlasmicTableListingManagementRecord__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTableListingManagementRecord__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableListingManagementRecord";
  } else {
    func.displayName = `PlasmicTableListingManagementRecord.${nodeName}`;
  }
  return func;
}

export const PlasmicTableListingManagementRecord = Object.assign(
  // Top-level PlasmicTableListingManagementRecord renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    listingSelectImageCaptionEditParent: makeNodeComponent(
      "listingSelectImageCaptionEditParent"
    ),

    elementRadioPrimary: makeNodeComponent("elementRadioPrimary"),
    imageCaptionParent: makeNodeComponent("imageCaptionParent"),
    imageLinkManageListging: makeNodeComponent("imageLinkManageListging"),
    imagePrimary: makeNodeComponent("imagePrimary"),
    img: makeNodeComponent("img"),
    _70X404: makeNodeComponent("_70X404"),
    serviceListingTitleParent: makeNodeComponent("serviceListingTitleParent"),
    serviceListingTitle: makeNodeComponent("serviceListingTitle"),
    buttonEditListing: makeNodeComponent("buttonEditListing"),
    svgIcon22: makeNodeComponent("svgIcon22"),
    editIcon: makeNodeComponent("editIcon"),
    statusParent: makeNodeComponent("statusParent"),
    status: makeNodeComponent("status"),
    svgIcon23: makeNodeComponent("svgIcon23"),
    toDoParent: makeNodeComponent("toDoParent"),
    toDo: makeNodeComponent("toDo"),
    svg: makeNodeComponent("svg"),
    buttonLinkPrimary: makeNodeComponent("buttonLinkPrimary"),
    modifiedDateTimeParent: makeNodeComponent("modifiedDateTimeParent"),
    categoryParent: makeNodeComponent("categoryParent"),
    category: makeNodeComponent("category"),
    priceParent: makeNodeComponent("priceParent"),
    currencyParent: makeNodeComponent("currencyParent"),
    valueServicePrice: makeNodeComponent("valueServicePrice"),
    termParent: makeNodeComponent("termParent"),
    termSubscription: makeNodeComponent("termSubscription"),
    expirationDateTimeParent: makeNodeComponent("expirationDateTimeParent"),
    autoRenewParent: makeNodeComponent("autoRenewParent"),
    autoRenew: makeNodeComponent("autoRenew"),
    archiveListing: makeNodeComponent("archiveListing"),
    // Metadata about props expected for PlasmicTableListingManagementRecord
    internalVariantProps: PlasmicTableListingManagementRecord__VariantProps,
    internalArgProps: PlasmicTableListingManagementRecord__ArgProps
  }
);

export default PlasmicTableListingManagementRecord;
/* prettier-ignore-end */
