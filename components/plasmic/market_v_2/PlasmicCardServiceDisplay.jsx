// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 82Lpaa43lIc
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ImagePrimary from "../../ImagePrimary"; // plasmic-import: LP50swkVvv/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import TagBadgeVerification from "../../TagBadgeVerification"; // plasmic-import: jKGLXJ6-Gl/component
import TagMemberD from "../../TagMemberD"; // plasmic-import: Ixqb_1Xdrz/component
import RatingDisplayDetail from "../../RatingDisplayDetail"; // plasmic-import: e_QdjWvrde/component
import TagBadge from "../../TagBadge"; // plasmic-import: C8K8aavuz-/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardServiceDisplay.module.css"; // plasmic-import: 82Lpaa43lIc/css
import ViewIcon from "./icons/PlasmicIcon__View"; // plasmic-import: 1gdYphl9Jz/icon
import HeartFillIcon from "./icons/PlasmicIcon__HeartFill"; // plasmic-import: Cp8uDBjLR/icon
import BookmarkIcon from "./icons/PlasmicIcon__Bookmark"; // plasmic-import: 2qZ8N9GyOr/icon

export const PlasmicCardServiceDisplay__VariantProps = new Array(
  "size",
  "description",
  "price",
  "boost",
  "userStats",
  "rating",
  "membership",
  "verification",
  "username",
  "avatar"
);

export const PlasmicCardServiceDisplay__ArgProps = new Array(
  "_360X270",
  "_270X270",
  "sellerUsername",
  "serviceDescription"
);

function PlasmicCardServiceDisplay__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.parent, {
        [sty.parent__description]: hasVariant(
          variants,
          "description",
          "description"
        ),

        [sty.parent__price]: hasVariant(variants, "price", "price"),
        [sty.parent__size__270X270]: hasVariant(variants, "size", "_270X270"),
        [sty.parent__size__360X270]: hasVariant(variants, "size", "_360X270"),
        [sty.parent__size__360X360]: hasVariant(variants, "size", "_360X360")
      })}
    >
      <ImagePrimary
        data-plasmic-name={"display"}
        data-plasmic-override={overrides.display}
        _11={
          hasVariant(variants, "size", "_360X360")
            ? "_360X360"
            : hasVariant(variants, "size", "_270X270")
            ? "_270X270"
            : undefined
        }
        _270X270={
          <React.Fragment>
            {false ? (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img___90SlK)}
                src={
                  "https://craftypixels.com/placeholder-image/40x40/f8f8f8/333333"
                }
              />
            ) : null}
            {p.renderPlasmicSlot({
              defaultContents: (
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img___1O5Bc)}
                  src={
                    "https://craftypixels.com/placeholder-image/270x270/f8f8f8/333333"
                  }
                />
              ),

              value: args._270X270
            })}
          </React.Fragment>
        }
        _360X188={
          <React.Fragment>
            {false ? (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__e6YuM)}
                src={
                  "https://craftypixels.com/placeholder-image/40x40/f8f8f8/333333"
                }
              />
            ) : null}

            <img
              data-plasmic-name={"image360X1882"}
              data-plasmic-override={overrides.image360X1882}
              alt={""}
              className={classNames(defaultcss.img, sty.image360X1882)}
              src={
                "https://craftypixels.com/placeholder-image/360x188/f8f8f8/333333"
              }
            />
          </React.Fragment>
        }
        _360X270={
          <React.Fragment>
            {false ? (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__bSsNa)}
                src={
                  "https://craftypixels.com/placeholder-image/40x40/f8f8f8/333333"
                }
              />
            ) : null}
            {p.renderPlasmicSlot({
              defaultContents: (
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__orizs)}
                  src={
                    "https://craftypixels.com/placeholder-image/360x270/f8f8f8/333333"
                  }
                />
              ),

              value: args._360X270
            })}
          </React.Fragment>
        }
        _43={
          hasVariant(variants, "size", "_360X360")
            ? undefined
            : hasVariant(variants, "size", "_270X270")
            ? undefined
            : "_360X270"
        }
        image360X188={
          <React.Fragment>
            {false ? (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__wPpgb)}
                src={
                  "https://craftypixels.com/placeholder-image/40x40/f8f8f8/333333"
                }
              />
            ) : null}

            <img
              data-plasmic-name={"_360X1882"}
              data-plasmic-override={overrides._360X1882}
              alt={""}
              className={classNames(defaultcss.img, sty._360X1882)}
              src={
                "https://craftypixels.com/placeholder-image/360x188/f8f8f8/333333"
              }
            />
          </React.Fragment>
        }
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"userInfoParent"}
        data-plasmic-override={overrides.userInfoParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.userInfoParent, {
          [sty.userInfoParent__size__270X270]: hasVariant(
            variants,
            "size",
            "_270X270"
          ),

          [sty.userInfoParent__size__360X270]: hasVariant(
            variants,
            "size",
            "_360X270"
          )
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"userMemberInfoParentMax250Px"}
          data-plasmic-override={overrides.userMemberInfoParentMax250Px}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            sty.userMemberInfoParentMax250Px,
            {
              [sty.userMemberInfoParentMax250Px__size__270X270]: hasVariant(
                variants,
                "size",
                "_270X270"
              )
            }
          )}
        >
          <p.PlasmicLink
            data-plasmic-name={"userAvatarParentLink"}
            data-plasmic-override={overrides.userAvatarParentLink}
            className={classNames(defaultcss.a, sty.userAvatarParentLink, {
              [sty.userAvatarParentLink__avatar]: hasVariant(
                variants,
                "avatar",
                "avatar"
              )
            })}
            component={Link}
            platform={"nextjs"}
          >
            <UserAvatar
              data-plasmic-name={"userAvatar"}
              data-plasmic-override={overrides.userAvatar}
              size={"_24"}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"usernameParentLink"}
            data-plasmic-override={overrides.usernameParentLink}
            className={classNames(defaultcss.a, sty.usernameParentLink, {
              [sty.usernameParentLink__username]: hasVariant(
                variants,
                "username",
                "username"
              )
            })}
            component={Link}
            platform={"nextjs"}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Username",
              value: args.sellerUsername,
              className: classNames(sty.slotTargetSellerUsername)
            })}
          </p.PlasmicLink>

          <div
            data-plasmic-name={"isVerification"}
            data-plasmic-override={overrides.isVerification}
            className={classNames(defaultcss.all, sty.isVerification, {
              [sty.isVerification__verification]: hasVariant(
                variants,
                "verification",
                "verification"
              )
            })}
          >
            <TagBadgeVerification
              data-plasmic-name={"tagBadgeVerification"}
              data-plasmic-override={overrides.tagBadgeVerification}
              className={classNames("__wab_instance", sty.tagBadgeVerification)}
              size={"_16"}
            />
          </div>

          <div
            data-plasmic-name={"userMemberLevelParent"}
            data-plasmic-override={overrides.userMemberLevelParent}
            className={classNames(defaultcss.all, sty.userMemberLevelParent, {
              [sty.userMemberLevelParent__membership]: hasVariant(
                variants,
                "membership",
                "membership"
              )
            })}
          >
            <TagMemberD
              data-plasmic-name={"tagMemberD"}
              data-plasmic-override={overrides.tagMemberD}
              className={classNames("__wab_instance", sty.tagMemberD, {
                [sty.tagMemberD__membership]: hasVariant(
                  variants,
                  "membership",
                  "membership"
                ),

                [sty.tagMemberD__size__360X360]: hasVariant(
                  variants,
                  "size",
                  "_360X360"
                )
              })}
            />
          </div>
        </p.Stack>

        <RatingDisplayDetail
          data-plasmic-name={"ratingDisplayDetail"}
          data-plasmic-override={overrides.ratingDisplayDetail}
          className={classNames("__wab_instance", sty.ratingDisplayDetail, {
            [sty.ratingDisplayDetail__rating]: hasVariant(
              variants,
              "rating",
              "rating"
            ),

            [sty.ratingDisplayDetail__size__270X270]: hasVariant(
              variants,
              "size",
              "_270X270"
            )
          })}
          size={hasVariant(variants, "size", "_270X270") ? "_14" : "_16"}
          slot={
            <p.PlasmicLink
              data-plasmic-name={"reviewLinkB"}
              data-plasmic-override={overrides.reviewLinkB}
              className={classNames(defaultcss.a, sty.reviewLinkB)}
              component={Link}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__gnv58,
                  {
                    [sty.text__size__270X270__gnv58YHOxL]: hasVariant(
                      variants,
                      "size",
                      "_270X270"
                    )
                  }
                )}
              >
                {"(1000)"}
              </div>
            </p.PlasmicLink>
          }
        >
          <p.PlasmicLink
            data-plasmic-name={"reviewLinkA"}
            data-plasmic-override={overrides.reviewLinkA}
            className={classNames(defaultcss.a, sty.reviewLinkA)}
            component={Link}
            platform={"nextjs"}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__mzsOx,
                {
                  [sty.text__size__270X270__mzsOxyHOxL]: hasVariant(
                    variants,
                    "size",
                    "_270X270"
                  )
                }
              )}
            >
              {"4.67"}
            </div>
          </p.PlasmicLink>
        </RatingDisplayDetail>
      </p.Stack>

      <div
        data-plasmic-name={"title86CharMax"}
        data-plasmic-override={overrides.title86CharMax}
        className={classNames(defaultcss.all, sty.title86CharMax, {
          [sty.title86CharMax__description]: hasVariant(
            variants,
            "description",
            "description"
          ),

          [sty.title86CharMax__size__270X270]: hasVariant(
            variants,
            "size",
            "_270X270"
          ),

          [sty.title86CharMax__size__360X270]: hasVariant(
            variants,
            "size",
            "_360X270"
          )
        })}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(defaultcss.all, sty.freeBox, {
            [sty.freeBox__description]: hasVariant(
              variants,
              "description",
              "description"
            ),

            [sty.freeBox__size__270X270]: hasVariant(
              variants,
              "size",
              "_270X270"
            ),

            [sty.freeBox__size__360X270]: hasVariant(
              variants,
              "size",
              "_360X270"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents:
              "One morning, when Gregor Samsa woke from troubled dreams, he found himself transforme.",
            value: args.serviceDescription,
            className: classNames(sty.slotTargetServiceDescription, {
              [sty.slotTargetServiceDescription__description]: hasVariant(
                variants,
                "description",
                "description"
              ),

              [sty.slotTargetServiceDescription__size__270X270]: hasVariant(
                variants,
                "size",
                "_270X270"
              ),

              [sty.slotTargetServiceDescription__size__360X270]: hasVariant(
                variants,
                "size",
                "_360X270"
              )
            })
          })}
        </div>
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"priceUserStatsParent"}
        data-plasmic-override={overrides.priceUserStatsParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.priceUserStatsParent, {
          [sty.priceUserStatsParent__size__270X270]: hasVariant(
            variants,
            "size",
            "_270X270"
          ),

          [sty.priceUserStatsParent__size__360X270]: hasVariant(
            variants,
            "size",
            "_360X270"
          )
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"priceSponsorParent"}
          data-plasmic-override={overrides.priceSponsorParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.priceSponsorParent, {
            [sty.priceSponsorParent__size__270X270]: hasVariant(
              variants,
              "size",
              "_270X270"
            )
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"price"}
            data-plasmic-override={overrides.price}
            hasGap={true}
            className={classNames(defaultcss.all, sty.price, {
              [sty.price__boost]: hasVariant(variants, "boost", "boost"),
              [sty.price__price]: hasVariant(variants, "price", "price")
            })}
          >
            <div
              data-plasmic-name={"currencyParent"}
              data-plasmic-override={overrides.currencyParent}
              className={classNames(defaultcss.all, sty.currencyParent)}
            >
              <div
                data-plasmic-name={"currency"}
                data-plasmic-override={overrides.currency}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.currency,
                  {
                    [sty.currency__size__270X270]: hasVariant(
                      variants,
                      "size",
                      "_270X270"
                    )
                  }
                )}
              >
                {"$"}
              </div>
            </div>

            <div
              data-plasmic-name={"priceValueParent"}
              data-plasmic-override={overrides.priceValueParent}
              className={classNames(defaultcss.all, sty.priceValueParent)}
            >
              <div
                data-plasmic-name={"priceValue"}
                data-plasmic-override={overrides.priceValue}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.priceValue,
                  {
                    [sty.priceValue__price]: hasVariant(
                      variants,
                      "price",
                      "price"
                    ),

                    [sty.priceValue__size__270X270]: hasVariant(
                      variants,
                      "size",
                      "_270X270"
                    )
                  }
                )}
              >
                {"100,000"}
              </div>
            </div>
          </p.Stack>

          <div
            data-plasmic-name={"boostedParent"}
            data-plasmic-override={overrides.boostedParent}
            className={classNames(defaultcss.all, sty.boostedParent, {
              [sty.boostedParent__boost]: hasVariant(variants, "boost", "boost")
            })}
          >
            <TagBadge
              data-plasmic-name={"boostedDisplay"}
              data-plasmic-override={overrides.boostedDisplay}
              size={"_16Px"}
              text10Px={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__dGTde
                  )}
                >
                  {"Boosted"}
                </div>
              }
              text8Px={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__bkWea
                  )}
                >
                  {"boosted"}
                </div>
              }
              type={["secondary", "ghost"]}
            />
          </div>
        </p.Stack>

        {(hasVariant(variants, "size", "_270X270") ? false : true) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"userStatsParent"}
            data-plasmic-override={overrides.userStatsParent}
            hasGap={true}
            className={classNames(defaultcss.all, sty.userStatsParent, {
              [sty.userStatsParent__size__270X270]: hasVariant(
                variants,
                "size",
                "_270X270"
              ),

              [sty.userStatsParent__userStats]: hasVariant(
                variants,
                "userStats",
                "userStats"
              )
            })}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"viewButtonCount"}
              data-plasmic-override={overrides.viewButtonCount}
              hasGap={true}
              className={classNames(defaultcss.all, sty.viewButtonCount)}
            >
              <button
                data-plasmic-name={"viewButton"}
                data-plasmic-override={overrides.viewButton}
                className={classNames(defaultcss.button, sty.viewButton)}
              >
                <ViewIcon
                  data-plasmic-name={"viewDisplay"}
                  data-plasmic-override={overrides.viewDisplay}
                  className={classNames(defaultcss.all, sty.viewDisplay)}
                  role={"img"}
                />
              </button>

              <div
                data-plasmic-name={"viewNumberValueParent"}
                data-plasmic-override={overrides.viewNumberValueParent}
                className={classNames(
                  defaultcss.all,
                  sty.viewNumberValueParent
                )}
              >
                <div
                  data-plasmic-name={"viewNumberIncrement"}
                  data-plasmic-override={overrides.viewNumberIncrement}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.viewNumberIncrement
                  )}
                >
                  {"1000"}
                </div>
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"heartButtonCount"}
              data-plasmic-override={overrides.heartButtonCount}
              hasGap={true}
              className={classNames(defaultcss.all, sty.heartButtonCount)}
            >
              <button
                data-plasmic-name={"heartButton"}
                data-plasmic-override={overrides.heartButton}
                className={classNames(defaultcss.button, sty.heartButton)}
              >
                <HeartFillIcon
                  data-plasmic-name={"heartDisplay"}
                  data-plasmic-override={overrides.heartDisplay}
                  className={classNames(defaultcss.all, sty.heartDisplay)}
                  role={"img"}
                />
              </button>

              <div
                data-plasmic-name={"heartNumberValueParent"}
                data-plasmic-override={overrides.heartNumberValueParent}
                className={classNames(
                  defaultcss.all,
                  sty.heartNumberValueParent
                )}
              >
                <div
                  data-plasmic-name={"heartNumberIncrement"}
                  data-plasmic-override={overrides.heartNumberIncrement}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.heartNumberIncrement
                  )}
                >
                  {"1000"}
                </div>
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"bookmarkButtonCount"}
              data-plasmic-override={overrides.bookmarkButtonCount}
              hasGap={true}
              className={classNames(defaultcss.all, sty.bookmarkButtonCount)}
            >
              <button
                data-plasmic-name={"bookmarkButton"}
                data-plasmic-override={overrides.bookmarkButton}
                className={classNames(defaultcss.button, sty.bookmarkButton)}
              >
                <BookmarkIcon
                  data-plasmic-name={"bookmarkDisplay"}
                  data-plasmic-override={overrides.bookmarkDisplay}
                  className={classNames(defaultcss.all, sty.bookmarkDisplay)}
                  role={"img"}
                />
              </button>

              <div
                data-plasmic-name={"bookmarkNumberValueParent"}
                data-plasmic-override={overrides.bookmarkNumberValueParent}
                className={classNames(
                  defaultcss.all,
                  sty.bookmarkNumberValueParent
                )}
              >
                <div
                  data-plasmic-name={"bookmarkNumberIncrement"}
                  data-plasmic-override={overrides.bookmarkNumberIncrement}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.bookmarkNumberIncrement
                  )}
                >
                  {"1000"}
                </div>
              </div>
            </p.Stack>
          </p.Stack>
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "display",
    "_360X1882",
    "image360X1882",
    "userInfoParent",
    "userMemberInfoParentMax250Px",
    "userAvatarParentLink",
    "userAvatar",
    "usernameParentLink",
    "isVerification",
    "tagBadgeVerification",
    "userMemberLevelParent",
    "tagMemberD",
    "ratingDisplayDetail",
    "reviewLinkA",
    "reviewLinkB",
    "title86CharMax",
    "freeBox",
    "priceUserStatsParent",
    "priceSponsorParent",
    "price",
    "currencyParent",
    "currency",
    "priceValueParent",
    "priceValue",
    "boostedParent",
    "boostedDisplay",
    "userStatsParent",
    "viewButtonCount",
    "viewButton",
    "viewDisplay",
    "viewNumberValueParent",
    "viewNumberIncrement",
    "heartButtonCount",
    "heartButton",
    "heartDisplay",
    "heartNumberValueParent",
    "heartNumberIncrement",
    "bookmarkButtonCount",
    "bookmarkButton",
    "bookmarkDisplay",
    "bookmarkNumberValueParent",
    "bookmarkNumberIncrement"
  ],

  display: ["display", "_360X1882", "image360X1882"],
  _360X1882: ["_360X1882"],
  image360X1882: ["image360X1882"],
  userInfoParent: [
    "userInfoParent",
    "userMemberInfoParentMax250Px",
    "userAvatarParentLink",
    "userAvatar",
    "usernameParentLink",
    "isVerification",
    "tagBadgeVerification",
    "userMemberLevelParent",
    "tagMemberD",
    "ratingDisplayDetail",
    "reviewLinkA",
    "reviewLinkB"
  ],

  userMemberInfoParentMax250Px: [
    "userMemberInfoParentMax250Px",
    "userAvatarParentLink",
    "userAvatar",
    "usernameParentLink",
    "isVerification",
    "tagBadgeVerification",
    "userMemberLevelParent",
    "tagMemberD"
  ],

  userAvatarParentLink: ["userAvatarParentLink", "userAvatar"],
  userAvatar: ["userAvatar"],
  usernameParentLink: ["usernameParentLink"],
  isVerification: ["isVerification", "tagBadgeVerification"],
  tagBadgeVerification: ["tagBadgeVerification"],
  userMemberLevelParent: ["userMemberLevelParent", "tagMemberD"],
  tagMemberD: ["tagMemberD"],
  ratingDisplayDetail: ["ratingDisplayDetail", "reviewLinkA", "reviewLinkB"],
  reviewLinkA: ["reviewLinkA"],
  reviewLinkB: ["reviewLinkB"],
  title86CharMax: ["title86CharMax", "freeBox"],
  freeBox: ["freeBox"],
  priceUserStatsParent: [
    "priceUserStatsParent",
    "priceSponsorParent",
    "price",
    "currencyParent",
    "currency",
    "priceValueParent",
    "priceValue",
    "boostedParent",
    "boostedDisplay",
    "userStatsParent",
    "viewButtonCount",
    "viewButton",
    "viewDisplay",
    "viewNumberValueParent",
    "viewNumberIncrement",
    "heartButtonCount",
    "heartButton",
    "heartDisplay",
    "heartNumberValueParent",
    "heartNumberIncrement",
    "bookmarkButtonCount",
    "bookmarkButton",
    "bookmarkDisplay",
    "bookmarkNumberValueParent",
    "bookmarkNumberIncrement"
  ],

  priceSponsorParent: [
    "priceSponsorParent",
    "price",
    "currencyParent",
    "currency",
    "priceValueParent",
    "priceValue",
    "boostedParent",
    "boostedDisplay"
  ],

  price: [
    "price",
    "currencyParent",
    "currency",
    "priceValueParent",
    "priceValue"
  ],

  currencyParent: ["currencyParent", "currency"],
  currency: ["currency"],
  priceValueParent: ["priceValueParent", "priceValue"],
  priceValue: ["priceValue"],
  boostedParent: ["boostedParent", "boostedDisplay"],
  boostedDisplay: ["boostedDisplay"],
  userStatsParent: [
    "userStatsParent",
    "viewButtonCount",
    "viewButton",
    "viewDisplay",
    "viewNumberValueParent",
    "viewNumberIncrement",
    "heartButtonCount",
    "heartButton",
    "heartDisplay",
    "heartNumberValueParent",
    "heartNumberIncrement",
    "bookmarkButtonCount",
    "bookmarkButton",
    "bookmarkDisplay",
    "bookmarkNumberValueParent",
    "bookmarkNumberIncrement"
  ],

  viewButtonCount: [
    "viewButtonCount",
    "viewButton",
    "viewDisplay",
    "viewNumberValueParent",
    "viewNumberIncrement"
  ],

  viewButton: ["viewButton", "viewDisplay"],
  viewDisplay: ["viewDisplay"],
  viewNumberValueParent: ["viewNumberValueParent", "viewNumberIncrement"],
  viewNumberIncrement: ["viewNumberIncrement"],
  heartButtonCount: [
    "heartButtonCount",
    "heartButton",
    "heartDisplay",
    "heartNumberValueParent",
    "heartNumberIncrement"
  ],

  heartButton: ["heartButton", "heartDisplay"],
  heartDisplay: ["heartDisplay"],
  heartNumberValueParent: ["heartNumberValueParent", "heartNumberIncrement"],
  heartNumberIncrement: ["heartNumberIncrement"],
  bookmarkButtonCount: [
    "bookmarkButtonCount",
    "bookmarkButton",
    "bookmarkDisplay",
    "bookmarkNumberValueParent",
    "bookmarkNumberIncrement"
  ],

  bookmarkButton: ["bookmarkButton", "bookmarkDisplay"],
  bookmarkDisplay: ["bookmarkDisplay"],
  bookmarkNumberValueParent: [
    "bookmarkNumberValueParent",
    "bookmarkNumberIncrement"
  ],

  bookmarkNumberIncrement: ["bookmarkNumberIncrement"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardServiceDisplay__ArgProps,
      internalVariantPropNames: PlasmicCardServiceDisplay__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardServiceDisplay__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicCardServiceDisplay";
  } else {
    func.displayName = `PlasmicCardServiceDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicCardServiceDisplay = Object.assign(
  // Top-level PlasmicCardServiceDisplay renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    display: makeNodeComponent("display"),
    _360X1882: makeNodeComponent("_360X1882"),
    image360X1882: makeNodeComponent("image360X1882"),
    userInfoParent: makeNodeComponent("userInfoParent"),
    userMemberInfoParentMax250Px: makeNodeComponent(
      "userMemberInfoParentMax250Px"
    ),

    userAvatarParentLink: makeNodeComponent("userAvatarParentLink"),
    userAvatar: makeNodeComponent("userAvatar"),
    usernameParentLink: makeNodeComponent("usernameParentLink"),
    isVerification: makeNodeComponent("isVerification"),
    tagBadgeVerification: makeNodeComponent("tagBadgeVerification"),
    userMemberLevelParent: makeNodeComponent("userMemberLevelParent"),
    tagMemberD: makeNodeComponent("tagMemberD"),
    ratingDisplayDetail: makeNodeComponent("ratingDisplayDetail"),
    reviewLinkA: makeNodeComponent("reviewLinkA"),
    reviewLinkB: makeNodeComponent("reviewLinkB"),
    title86CharMax: makeNodeComponent("title86CharMax"),
    freeBox: makeNodeComponent("freeBox"),
    priceUserStatsParent: makeNodeComponent("priceUserStatsParent"),
    priceSponsorParent: makeNodeComponent("priceSponsorParent"),
    price: makeNodeComponent("price"),
    currencyParent: makeNodeComponent("currencyParent"),
    currency: makeNodeComponent("currency"),
    priceValueParent: makeNodeComponent("priceValueParent"),
    priceValue: makeNodeComponent("priceValue"),
    boostedParent: makeNodeComponent("boostedParent"),
    boostedDisplay: makeNodeComponent("boostedDisplay"),
    userStatsParent: makeNodeComponent("userStatsParent"),
    viewButtonCount: makeNodeComponent("viewButtonCount"),
    viewButton: makeNodeComponent("viewButton"),
    viewDisplay: makeNodeComponent("viewDisplay"),
    viewNumberValueParent: makeNodeComponent("viewNumberValueParent"),
    viewNumberIncrement: makeNodeComponent("viewNumberIncrement"),
    heartButtonCount: makeNodeComponent("heartButtonCount"),
    heartButton: makeNodeComponent("heartButton"),
    heartDisplay: makeNodeComponent("heartDisplay"),
    heartNumberValueParent: makeNodeComponent("heartNumberValueParent"),
    heartNumberIncrement: makeNodeComponent("heartNumberIncrement"),
    bookmarkButtonCount: makeNodeComponent("bookmarkButtonCount"),
    bookmarkButton: makeNodeComponent("bookmarkButton"),
    bookmarkDisplay: makeNodeComponent("bookmarkDisplay"),
    bookmarkNumberValueParent: makeNodeComponent("bookmarkNumberValueParent"),
    bookmarkNumberIncrement: makeNodeComponent("bookmarkNumberIncrement"),
    // Metadata about props expected for PlasmicCardServiceDisplay
    internalVariantProps: PlasmicCardServiceDisplay__VariantProps,
    internalArgProps: PlasmicCardServiceDisplay__ArgProps
  }
);

export default PlasmicCardServiceDisplay;
/* prettier-ignore-end */
