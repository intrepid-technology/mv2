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
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicChipUserProfile.module.css"; // plasmic-import: 0x8Ex9CEDPX/css

export const PlasmicChipUserProfile__VariantProps = new Array("attributes");

export const PlasmicChipUserProfile__ArgProps = new Array(
  "navUserAvatar80",
  "target",
  "username",
  "city",
  "country"
);

function PlasmicChipUserProfile__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        sty.root
      )}
      component={Link}
      platform={"nextjs"}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
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
                className={classNames(
                  projectcss.all,
                  projectcss.img,
                  sty.img__fsHtd
                )}
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
        className={classNames(projectcss.all, sty.userInfoParent)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__m4FAi, {
            [sty.freeBoxattributes_verification__m4FAiUnyVe]: hasVariant(
              variants,
              "attributes",
              "verification"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__y4Qr7, {
              [sty.freeBoxattributes_verification__y4Qr7UnyVe]: hasVariant(
                variants,
                "attributes",
                "verification"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox__nbdg7)}>
              <div className={classNames(projectcss.all, sty.freeBox__nfhn)}>
                {p.renderPlasmicSlot({
                  defaultContents: "Username",
                  value: args.username,
                  className: classNames(sty.slotTargetUsername)
                })}
              </div>
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
                    [sty.tagBadgeVerificationattributes_verification]:
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
            className={classNames(projectcss.all, sty.verificationCityParent)}
          >
            {(
              hasVariant(variants, "attributes", "membership") ? false : true
            ) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fHhjX, {
                  [sty.freeBoxattributes_membership__fHhjXeHral]: hasVariant(
                    variants,
                    "attributes",
                    "membership"
                  ),

                  [sty.freeBoxattributes_rating__fHhjXk3J7I]: hasVariant(
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
                    [sty.tagPartnerDattributes_membership]: hasVariant(
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
                    [sty.ratingDisplayDetailattributes_membership]: hasVariant(
                      variants,
                      "attributes",
                      "membership"
                    ),

                    [sty.ratingDisplayDetailattributes_rating]: hasVariant(
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
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.reviewLinkB
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rrUix
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
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.reviewLinkA
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5WaQl
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
          className={classNames(projectcss.all, sty.freeBox__hZgZ)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"location"}
            data-plasmic-override={overrides.location}
            hasGap={true}
            className={classNames(projectcss.all, sty.location)}
          >
            <div
              data-plasmic-name={"cityText"}
              data-plasmic-override={overrides.cityText}
              className={classNames(projectcss.all, sty.cityText)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__fPbL6)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___0Z9Y0)}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "City",
                    value: args.city,
                    className: classNames(sty.slotTargetCity)
                  })}
                </div>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0P9Ko
                )}
              >
                {","}
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__b02SR)}>
              <div className={classNames(projectcss.all, sty.freeBox___4Fz5W)}>
                <div className={classNames(projectcss.all, sty.freeBox__szPVo)}>
                  {p.renderPlasmicSlot({
                    defaultContents: "Country",
                    value: args.country,
                    className: classNames(sty.slotTargetCountry)
                  })}
                </div>
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

    return PlasmicChipUserProfile__RenderFunc({
      variants,
      args,
      overrides,
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
    location: makeNodeComponent("location"),
    cityText: makeNodeComponent("cityText"),
    // Metadata about props expected for PlasmicChipUserProfile
    internalVariantProps: PlasmicChipUserProfile__VariantProps,
    internalArgProps: PlasmicChipUserProfile__ArgProps
  }
);

export default PlasmicChipUserProfile;
/* prettier-ignore-end */
