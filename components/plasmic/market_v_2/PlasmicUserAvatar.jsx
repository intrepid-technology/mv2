// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: KmwWxjrE8L
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TagBadgeVerification from "../../TagBadgeVerification"; // plasmic-import: jKGLXJ6-Gl/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicUserAvatar.module.css"; // plasmic-import: KmwWxjrE8L/css

export const PlasmicUserAvatar__VariantProps = new Array(
  "partner",
  "size",
  "verified"
);

export const PlasmicUserAvatar__ArgProps = new Array(
  "navUserAvatar16",
  "navUserAvatar24",
  "navUserAvatar32",
  "partnerAvatar24",
  "partnerAvatar18",
  "partnerAvatar32",
  "navUserAvatar40",
  "navUserAvatar48",
  "navUserAvatar64",
  "navUserAvatar80",
  "navUserAvatar18"
);

function PlasmicUserAvatar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"parentRoot"}
      data-plasmic-override={overrides.parentRoot}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.parentRoot,
        {
          [sty.parentRoot__partner]: hasVariant(variants, "partner", "partner"),
          [sty.parentRoot__partner_size__24]:
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_24"),
          [sty.parentRoot__size__18]: hasVariant(variants, "size", "_18"),
          [sty.parentRoot__size__24]: hasVariant(variants, "size", "_24"),
          [sty.parentRoot__size__32]: hasVariant(variants, "size", "_32"),
          [sty.parentRoot__size__40]: hasVariant(variants, "size", "_40")
        }
      )}
    >
      <div
        data-plasmic-name={"badgeParent"}
        data-plasmic-override={overrides.badgeParent}
        className={classNames(defaultcss.all, sty.badgeParent, {
          [sty.badgeParent__size__24]: hasVariant(variants, "size", "_24")
        })}
      >
        <div
          data-plasmic-name={"avatarparent"}
          data-plasmic-override={overrides.avatarparent}
          className={classNames(defaultcss.all, sty.avatarparent, {
            [sty.avatarparent__partner]: hasVariant(
              variants,
              "partner",
              "partner"
            ),

            [sty.avatarparent__partner_size__18]:
              hasVariant(variants, "partner", "partner") &&
              hasVariant(variants, "size", "_18"),
            [sty.avatarparent__partner_size__24]:
              hasVariant(variants, "partner", "partner") &&
              hasVariant(variants, "size", "_24"),
            [sty.avatarparent__partner_size__32]:
              hasVariant(variants, "partner", "partner") &&
              hasVariant(variants, "size", "_32"),
            [sty.avatarparent__size__18]: hasVariant(variants, "size", "_18"),
            [sty.avatarparent__size__24]: hasVariant(variants, "size", "_24"),
            [sty.avatarparent__size__32]: hasVariant(variants, "size", "_32"),
            [sty.avatarparent__size__40]: hasVariant(variants, "size", "_40"),
            [sty.avatarparent__size__48]: hasVariant(variants, "size", "_48"),
            [sty.avatarparent__size__64]: hasVariant(variants, "size", "_64"),
            [sty.avatarparent__size__80]: hasVariant(variants, "size", "_80")
          })}
        >
          {(
            hasVariant(variants, "size", "_80")
              ? false
              : hasVariant(variants, "size", "_64")
              ? false
              : hasVariant(variants, "size", "_48")
              ? false
              : hasVariant(variants, "size", "_40")
              ? false
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "size", "_18")
              ? false
              : hasVariant(variants, "partner", "partner")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___3LdP7)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/image4.png"}
                  />
                ),

                value: args.navUserAvatar16,
                className: classNames(sty.slotNavUserAvatar16, {
                  [sty.slotNavUserAvatar16__partner]: hasVariant(
                    variants,
                    "partner",
                    "partner"
                  ),

                  [sty.slotNavUserAvatar16__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotNavUserAvatar16__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotNavUserAvatar16__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotNavUserAvatar16__size__40]: hasVariant(
                    variants,
                    "size",
                    "_40"
                  ),

                  [sty.slotNavUserAvatar16__size__48]: hasVariant(
                    variants,
                    "size",
                    "_48"
                  ),

                  [sty.slotNavUserAvatar16__size__64]: hasVariant(
                    variants,
                    "size",
                    "_64"
                  ),

                  [sty.slotNavUserAvatar16__size__80]: hasVariant(
                    variants,
                    "size",
                    "_80"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "size", "_24")
              ? true
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__uumyf)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/image4.png"}
                  />
                ),

                value: args.navUserAvatar24,
                className: classNames(sty.slotNavUserAvatar24, {
                  [sty.slotNavUserAvatar24__partner_size__24]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_24"),
                  [sty.slotNavUserAvatar24__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotNavUserAvatar24__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotNavUserAvatar24__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_32")
              ? true
              : hasVariant(variants, "size", "_24")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__ojhk6)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/image4.png"}
                  />
                ),

                value: args.navUserAvatar32,
                className: classNames(sty.slotNavUserAvatar32, {
                  [sty.slotNavUserAvatar32__partner_size__32]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_32"),
                  [sty.slotNavUserAvatar32__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotNavUserAvatar32__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotNavUserAvatar32__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotNavUserAvatar32__size__40]: hasVariant(
                    variants,
                    "size",
                    "_40"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_24")
              ? true
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "partner", "partner")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___8P0W5)}
                    role={"img"}
                    src={
                      "/plasmic/market_v_2/images/intrepidSqaureLogoBlack2021Png.png"
                    }
                  />
                ),

                value: args.partnerAvatar24,
                className: classNames(sty.slotPartnerAvatar24, {
                  [sty.slotPartnerAvatar24__partner]: hasVariant(
                    variants,
                    "partner",
                    "partner"
                  ),

                  [sty.slotPartnerAvatar24__partner_size__24]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_24"),
                  [sty.slotPartnerAvatar24__partner_size__32]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_32"),
                  [sty.slotPartnerAvatar24__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotPartnerAvatar24__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotPartnerAvatar24__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "partner", "partner") &&
                hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "partner", "partner") &&
                hasVariant(variants, "size", "_18")
              ? true
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "partner", "partner")
              ? true
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__bqMj6)}
                    role={"img"}
                    src={
                      "/plasmic/market_v_2/images/intrepidSqaureLogoBlack2021Png.png"
                    }
                  />
                ),

                value: args.partnerAvatar18,
                className: classNames(sty.slotPartnerAvatar18, {
                  [sty.slotPartnerAvatar18__partner]: hasVariant(
                    variants,
                    "partner",
                    "partner"
                  ),

                  [sty.slotPartnerAvatar18__partner_size__18]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_18"),
                  [sty.slotPartnerAvatar18__partner_size__24]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_24"),
                  [sty.slotPartnerAvatar18__partner_size__32]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_32"),
                  [sty.slotPartnerAvatar18__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotPartnerAvatar18__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotPartnerAvatar18__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_32")
              ? true
              : hasVariant(variants, "partner", "partner") &&
                hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "partner", "partner") &&
                hasVariant(variants, "size", "_18")
              ? false
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "partner", "partner")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__k1Wfk)}
                    role={"img"}
                    src={
                      "/plasmic/market_v_2/images/intrepidSqaureLogoBlack2021Png.png"
                    }
                  />
                ),

                value: args.partnerAvatar32,
                className: classNames(sty.slotPartnerAvatar32, {
                  [sty.slotPartnerAvatar32__partner]: hasVariant(
                    variants,
                    "partner",
                    "partner"
                  ),

                  [sty.slotPartnerAvatar32__partner_size__18]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_18"),
                  [sty.slotPartnerAvatar32__partner_size__24]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_24"),
                  [sty.slotPartnerAvatar32__partner_size__32]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_32"),
                  [sty.slotPartnerAvatar32__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotPartnerAvatar32__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotPartnerAvatar32__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_40")
              ? true
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__ph0Zn)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/image4.png"}
                  />
                ),

                value: args.navUserAvatar40,
                className: classNames(sty.slotNavUserAvatar40, {
                  [sty.slotNavUserAvatar40__partner_size__32]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_32"),
                  [sty.slotNavUserAvatar40__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotNavUserAvatar40__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotNavUserAvatar40__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotNavUserAvatar40__size__40]: hasVariant(
                    variants,
                    "size",
                    "_40"
                  ),

                  [sty.slotNavUserAvatar40__size__48]: hasVariant(
                    variants,
                    "size",
                    "_48"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_48")
              ? true
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__wowhz)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/image4.png"}
                  />
                ),

                value: args.navUserAvatar48,
                className: classNames(sty.slotNavUserAvatar48, {
                  [sty.slotNavUserAvatar48__partner_size__32]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_32"),
                  [sty.slotNavUserAvatar48__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotNavUserAvatar48__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotNavUserAvatar48__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotNavUserAvatar48__size__48]: hasVariant(
                    variants,
                    "size",
                    "_48"
                  ),

                  [sty.slotNavUserAvatar48__size__64]: hasVariant(
                    variants,
                    "size",
                    "_64"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_64")
              ? true
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___5ZfoV)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/image4.png"}
                  />
                ),

                value: args.navUserAvatar64,
                className: classNames(sty.slotNavUserAvatar64, {
                  [sty.slotNavUserAvatar64__partner_size__32]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_32"),
                  [sty.slotNavUserAvatar64__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotNavUserAvatar64__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotNavUserAvatar64__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotNavUserAvatar64__size__64]: hasVariant(
                    variants,
                    "size",
                    "_64"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "partner", "partner") &&
            hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_80")
              ? true
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___8TGwz)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/image4.png"}
                  />
                ),

                value: args.navUserAvatar80,
                className: classNames(sty.slotNavUserAvatar80, {
                  [sty.slotNavUserAvatar80__partner_size__32]:
                    hasVariant(variants, "partner", "partner") &&
                    hasVariant(variants, "size", "_32"),
                  [sty.slotNavUserAvatar80__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotNavUserAvatar80__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotNavUserAvatar80__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotNavUserAvatar80__size__80]: hasVariant(
                    variants,
                    "size",
                    "_80"
                  )
                })
              })
            : null}
          {(
            hasVariant(variants, "size", "_80")
              ? false
              : hasVariant(variants, "size", "_64")
              ? false
              : hasVariant(variants, "size", "_48")
              ? false
              : hasVariant(variants, "size", "_40")
              ? false
              : hasVariant(variants, "size", "_32")
              ? false
              : hasVariant(variants, "size", "_24")
              ? false
              : hasVariant(variants, "size", "_18")
              ? true
              : hasVariant(variants, "partner", "partner")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__bEpM)}
                    role={"img"}
                    src={"/plasmic/market_v_2/images/image4.png"}
                  />
                ),

                value: args.navUserAvatar18,
                className: classNames(sty.slotNavUserAvatar18, {
                  [sty.slotNavUserAvatar18__partner]: hasVariant(
                    variants,
                    "partner",
                    "partner"
                  ),

                  [sty.slotNavUserAvatar18__size__18]: hasVariant(
                    variants,
                    "size",
                    "_18"
                  ),

                  [sty.slotNavUserAvatar18__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.slotNavUserAvatar18__size__32]: hasVariant(
                    variants,
                    "size",
                    "_32"
                  ),

                  [sty.slotNavUserAvatar18__size__40]: hasVariant(
                    variants,
                    "size",
                    "_40"
                  ),

                  [sty.slotNavUserAvatar18__size__48]: hasVariant(
                    variants,
                    "size",
                    "_48"
                  ),

                  [sty.slotNavUserAvatar18__size__64]: hasVariant(
                    variants,
                    "size",
                    "_64"
                  ),

                  [sty.slotNavUserAvatar18__size__80]: hasVariant(
                    variants,
                    "size",
                    "_80"
                  )
                })
              })
            : null}
        </div>

        {(
          hasVariant(variants, "size", "_80") &&
          hasVariant(variants, "verified", "verified")
            ? true
            : hasVariant(variants, "size", "_64") &&
              hasVariant(variants, "verified", "verified")
            ? true
            : hasVariant(variants, "size", "_48") &&
              hasVariant(variants, "verified", "verified")
            ? true
            : hasVariant(variants, "size", "_40") &&
              hasVariant(variants, "verified", "verified")
            ? true
            : hasVariant(variants, "size", "_32") &&
              hasVariant(variants, "verified", "verified")
            ? true
            : hasVariant(variants, "size", "_24") &&
              hasVariant(variants, "verified", "verified")
            ? true
            : hasVariant(variants, "size", "_18") &&
              hasVariant(variants, "verified", "verified")
            ? false
            : false
        ) ? (
          <div
            data-plasmic-name={"badge"}
            data-plasmic-override={overrides.badge}
            className={classNames(defaultcss.all, sty.badge, {
              [sty.badge__partner]: hasVariant(variants, "partner", "partner"),
              [sty.badge__size__18]: hasVariant(variants, "size", "_18"),
              [sty.badge__size__18_verified]:
                hasVariant(variants, "size", "_18") &&
                hasVariant(variants, "verified", "verified"),
              [sty.badge__size__24]: hasVariant(variants, "size", "_24"),
              [sty.badge__size__24_verified]:
                hasVariant(variants, "size", "_24") &&
                hasVariant(variants, "verified", "verified"),
              [sty.badge__size__32]: hasVariant(variants, "size", "_32"),
              [sty.badge__size__32_verified]:
                hasVariant(variants, "size", "_32") &&
                hasVariant(variants, "verified", "verified"),
              [sty.badge__size__40]: hasVariant(variants, "size", "_40"),
              [sty.badge__size__40_verified]:
                hasVariant(variants, "size", "_40") &&
                hasVariant(variants, "verified", "verified"),
              [sty.badge__size__48]: hasVariant(variants, "size", "_48"),
              [sty.badge__size__48_verified]:
                hasVariant(variants, "size", "_48") &&
                hasVariant(variants, "verified", "verified"),
              [sty.badge__size__64]: hasVariant(variants, "size", "_64"),
              [sty.badge__size__64_verified]:
                hasVariant(variants, "size", "_64") &&
                hasVariant(variants, "verified", "verified"),
              [sty.badge__size__80]: hasVariant(variants, "size", "_80"),
              [sty.badge__size__80_verified]:
                hasVariant(variants, "size", "_80") &&
                hasVariant(variants, "verified", "verified"),
              [sty.badge__verified]: hasVariant(
                variants,
                "verified",
                "verified"
              )
            })}
          >
            <TagBadgeVerification
              data-plasmic-name={"tagBadgeVerification"}
              data-plasmic-override={overrides.tagBadgeVerification}
              className={classNames(
                "__wab_instance",
                sty.tagBadgeVerification,
                {
                  [sty.tagBadgeVerification__size__24]: hasVariant(
                    variants,
                    "size",
                    "_24"
                  ),

                  [sty.tagBadgeVerification__size__80_verified]:
                    hasVariant(variants, "size", "_80") &&
                    hasVariant(variants, "verified", "verified")
                }
              )}
              size={
                hasVariant(variants, "size", "_80") &&
                hasVariant(variants, "verified", "verified")
                  ? "_18"
                  : undefined
              }
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  parentRoot: [
    "parentRoot",
    "badgeParent",
    "avatarparent",
    "badge",
    "tagBadgeVerification"
  ],

  badgeParent: ["badgeParent", "avatarparent", "badge", "tagBadgeVerification"],
  avatarparent: ["avatarparent"],
  badge: ["badge", "tagBadgeVerification"],
  tagBadgeVerification: ["tagBadgeVerification"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicUserAvatar__ArgProps,
      internalVariantPropNames: PlasmicUserAvatar__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicUserAvatar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parentRoot") {
    func.displayName = "PlasmicUserAvatar";
  } else {
    func.displayName = `PlasmicUserAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicUserAvatar = Object.assign(
  // Top-level PlasmicUserAvatar renders the root element
  makeNodeComponent("parentRoot"),
  {
    // Helper components rendering sub-elements
    badgeParent: makeNodeComponent("badgeParent"),
    avatarparent: makeNodeComponent("avatarparent"),
    badge: makeNodeComponent("badge"),
    tagBadgeVerification: makeNodeComponent("tagBadgeVerification"),
    // Metadata about props expected for PlasmicUserAvatar
    internalVariantProps: PlasmicUserAvatar__VariantProps,
    internalArgProps: PlasmicUserAvatar__ArgProps
  }
);

export default PlasmicUserAvatar;
/* prettier-ignore-end */
