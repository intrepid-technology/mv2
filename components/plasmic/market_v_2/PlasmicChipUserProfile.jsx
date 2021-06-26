// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 0x8Ex9CEDPX
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import TagBadgeVerification from "../../TagBadgeVerification"; // plasmic-import: jKGLXJ6-Gl/component
import TagPartnerD from "../../TagPartnerD"; // plasmic-import: cHSOn6vPGV/component
import RatingDisplayDetail from "../../RatingDisplayDetail"; // plasmic-import: e_QdjWvrde/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicChipUserProfile.module.css"; // plasmic-import: 0x8Ex9CEDPX/css
import ViewIcon from "./icons/PlasmicIcon__View"; // plasmic-import: 1gdYphl9Jz/icon
import HeartFillIcon from "./icons/PlasmicIcon__HeartFill"; // plasmic-import: Cp8uDBjLR/icon
import BookmarkIcon from "./icons/PlasmicIcon__Bookmark"; // plasmic-import: 2qZ8N9GyOr/icon

export const PlasmicChipUserProfile__VariantProps = new Array("attributes");

export const PlasmicChipUserProfile__ArgProps = new Array(
  "navUserAvatar80",
  "target"
);

function PlasmicChipUserProfile__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      component={Link}
      platform={"nextjs"}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.all, sty.link)}
        component={Link}
        platform={"nextjs"}
      >
        <UserAvatar
          data-plasmic-name={"userAvatar"}
          data-plasmic-override={overrides.userAvatar}
          className={classNames("__wab_instance", sty.userAvatar)}
          navUserAvatar80={p.renderPlasmicSlot({
            defaultContents: (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__fsHtd)}
                role={"img"}
                src={"/plasmic/market_v_2/images/image4.png"}
              />
            ),

            value: args.navUserAvatar80
          })}
          size={"_64"}
        />
      </p.PlasmicLink>

      <p.Stack
        as={"div"}
        data-plasmic-name={"userInfoParent"}
        data-plasmic-override={overrides.userInfoParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.userInfoParent)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__m4FAi, {
            [sty.box__attributes_verification__m4FAiUnyVe]: hasVariant(
              variants,
              "attributes",
              "verification"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__y4Qr7, {
              [sty.box__attributes_verification__y4Qr7UnyVe]: hasVariant(
                variants,
                "attributes",
                "verification"
              )
            })}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__nbdg7
              )}
            >
              {"Username"}
            </div>

            {(
              hasVariant(variants, "attributes", "verification") ? false : true
            ) ? (
              <TagBadgeVerification
                data-plasmic-name={"tagBadgeVerification"}
                data-plasmic-override={overrides.tagBadgeVerification}
                className={classNames(
                  "__wab_instance",
                  sty.tagBadgeVerification,
                  {
                    [sty.tagBadgeVerification__attributes_verification]:
                      hasVariant(variants, "attributes", "verification")
                  }
                )}
                size={"_14"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"verificationCityParent"}
            data-plasmic-override={overrides.verificationCityParent}
            hasGap={true}
            className={classNames(defaultcss.all, sty.verificationCityParent)}
          >
            {(
              hasVariant(variants, "attributes", "membership") ? false : true
            ) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__fHhjX, {
                  [sty.box__attributes_membership__fHhjXeHral]: hasVariant(
                    variants,
                    "attributes",
                    "membership"
                  ),

                  [sty.box__attributes_rating__fHhjXk3J7I]: hasVariant(
                    variants,
                    "attributes",
                    "rating"
                  )
                })}
              >
                <TagPartnerD
                  data-plasmic-name={"tagPartnerD"}
                  data-plasmic-override={overrides.tagPartnerD}
                  className={classNames("__wab_instance", sty.tagPartnerD, {
                    [sty.tagPartnerD__attributes_membership]: hasVariant(
                      variants,
                      "attributes",
                      "membership"
                    )
                  })}
                />
              </p.Stack>
            ) : null}
            {(hasVariant(variants, "attributes", "rating") ? false : true) ? (
              <RatingDisplayDetail
                data-plasmic-name={"ratingDisplayDetail"}
                data-plasmic-override={overrides.ratingDisplayDetail}
                className={classNames(
                  "__wab_instance",
                  sty.ratingDisplayDetail,
                  {
                    [sty.ratingDisplayDetail__attributes_membership]:
                      hasVariant(variants, "attributes", "membership"),
                    [sty.ratingDisplayDetail__attributes_rating]: hasVariant(
                      variants,
                      "attributes",
                      "rating"
                    )
                  }
                )}
                size={"_14"}
                slot={
                  <p.PlasmicLink
                    data-plasmic-name={"reviewLinkB"}
                    data-plasmic-override={overrides.reviewLinkB}
                    className={classNames(defaultcss.all, sty.reviewLinkB)}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__rrUix
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
                  className={classNames(defaultcss.all, sty.reviewLinkA)}
                  component={Link}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___5WaQl
                    )}
                  >
                    {"4.67"}
                  </div>
                </p.PlasmicLink>
              </RatingDisplayDetail>
            ) : null}
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__hZgZ)}
        >
          {(hasVariant(variants, "attributes", "stats") ? false : true) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"userStatsParent"}
              data-plasmic-override={overrides.userStatsParent}
              hasGap={true}
              className={classNames(defaultcss.all, sty.userStatsParent, {
                [sty.userStatsParent__attributes_stats]: hasVariant(
                  variants,
                  "attributes",
                  "stats"
                ),

                [sty.userStatsParent__attributes_verification]: hasVariant(
                  variants,
                  "attributes",
                  "verification"
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

          <p.Stack
            as={"div"}
            data-plasmic-name={"location"}
            data-plasmic-override={overrides.location}
            hasGap={true}
            className={classNames(defaultcss.all, sty.location)}
          >
            <div
              data-plasmic-name={"cityText"}
              data-plasmic-override={overrides.cityText}
              className={classNames(defaultcss.all, sty.cityText)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__fPbL6
                )}
              >
                {"City"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___0P9Ko
                )}
              >
                {","}
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.box__b02SR)}>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___4Fz5W
                )}
              >
                {"Country"}
              </div>
            </div>
          </p.Stack>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "link",
    "userAvatar",
    "userInfoParent",
    "tagBadgeVerification",
    "verificationCityParent",
    "tagPartnerD",
    "ratingDisplayDetail",
    "reviewLinkA",
    "reviewLinkB",
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
    "bookmarkNumberIncrement",
    "location",
    "cityText"
  ],

  link: ["link", "userAvatar"],
  userAvatar: ["userAvatar"],
  userInfoParent: [
    "userInfoParent",
    "tagBadgeVerification",
    "verificationCityParent",
    "tagPartnerD",
    "ratingDisplayDetail",
    "reviewLinkA",
    "reviewLinkB",
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
    "bookmarkNumberIncrement",
    "location",
    "cityText"
  ],

  tagBadgeVerification: ["tagBadgeVerification"],
  verificationCityParent: [
    "verificationCityParent",
    "tagPartnerD",
    "ratingDisplayDetail",
    "reviewLinkA",
    "reviewLinkB"
  ],

  tagPartnerD: ["tagPartnerD"],
  ratingDisplayDetail: ["ratingDisplayDetail", "reviewLinkA", "reviewLinkB"],
  reviewLinkA: ["reviewLinkA"],
  reviewLinkB: ["reviewLinkB"],
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

  bookmarkNumberIncrement: ["bookmarkNumberIncrement"],
  location: ["location", "cityText"],
  cityText: ["cityText"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicChipUserProfile__ArgProps,
      internalVariantPropNames: PlasmicChipUserProfile__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicChipUserProfile__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChipUserProfile";
  } else {
    func.displayName = `PlasmicChipUserProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicChipUserProfile = Object.assign(
  // Top-level PlasmicChipUserProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    userAvatar: makeNodeComponent("userAvatar"),
    userInfoParent: makeNodeComponent("userInfoParent"),
    tagBadgeVerification: makeNodeComponent("tagBadgeVerification"),
    verificationCityParent: makeNodeComponent("verificationCityParent"),
    tagPartnerD: makeNodeComponent("tagPartnerD"),
    ratingDisplayDetail: makeNodeComponent("ratingDisplayDetail"),
    reviewLinkA: makeNodeComponent("reviewLinkA"),
    reviewLinkB: makeNodeComponent("reviewLinkB"),
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
    location: makeNodeComponent("location"),
    cityText: makeNodeComponent("cityText"),
    // Metadata about props expected for PlasmicChipUserProfile
    internalVariantProps: PlasmicChipUserProfile__VariantProps,
    internalArgProps: PlasmicChipUserProfile__ArgProps
  }
);

export default PlasmicChipUserProfile;
/* prettier-ignore-end */
