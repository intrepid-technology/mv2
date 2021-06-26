// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 0on5_Y1mrei
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconPrimary from "../../IconPrimary"; // plasmic-import: -fEFICkFUf/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import TagBadgeVerification from "../../TagBadgeVerification"; // plasmic-import: jKGLXJ6-Gl/component
import TagPartnerD from "../../TagPartnerD"; // plasmic-import: cHSOn6vPGV/component
import RatingDisplayDetail from "../../RatingDisplayDetail"; // plasmic-import: e_QdjWvrde/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardUserprofile.module.css"; // plasmic-import: 0on5_Y1mrei/css
import BookmarkIcon from "./icons/PlasmicIcon__Bookmark"; // plasmic-import: 2qZ8N9GyOr/icon
import ViewIcon from "./icons/PlasmicIcon__View"; // plasmic-import: 1gdYphl9Jz/icon
import HeartFillIcon from "./icons/PlasmicIcon__HeartFill"; // plasmic-import: Cp8uDBjLR/icon

export const PlasmicCardUserprofile__VariantProps = new Array();

export const PlasmicCardUserprofile__ArgProps = new Array();

function PlasmicCardUserprofile__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const [isRootActive, triggerRootActiveProps] = useTrigger("usePressed", {});
  const triggers = {
    active_root: isRootActive
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      data-plasmic-trigger-props={[triggerRootActiveProps]}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"saveButtonContainer"}
        data-plasmic-override={overrides.saveButtonContainer}
        hasGap={true}
        className={classNames(defaultcss.all, sty.saveButtonContainer)}
      >
        {(triggers.active_root ? true : true) ? (
          <button
            data-plasmic-name={"saveProfile"}
            data-plasmic-override={overrides.saveProfile}
            className={classNames(defaultcss.button, sty.saveProfile)}
          >
            <IconPrimary
              data-plasmic-name={"iconPrimary"}
              data-plasmic-override={overrides.iconPrimary}
              size={"_18Px"}
              svgIcon={
                <BookmarkIcon
                  data-plasmic-name={"svgIcon"}
                  data-plasmic-override={overrides.svgIcon}
                  className={classNames(defaultcss.all, sty.svgIcon)}
                  role={"img"}
                />
              }
              svgIcon16Px={
                <BookmarkIcon
                  data-plasmic-name={"svgIcon3"}
                  data-plasmic-override={overrides.svgIcon3}
                  className={classNames(defaultcss.all, sty.svgIcon3)}
                  role={"img"}
                />
              }
              svgIcon18Px={
                <BookmarkIcon
                  data-plasmic-name={"svgSave"}
                  data-plasmic-override={overrides.svgSave}
                  className={classNames(defaultcss.all, sty.svgSave)}
                  role={"img"}
                />
              }
            />
          </button>
        ) : null}
      </p.Stack>

      <UserAvatar
        data-plasmic-name={"userAvatar"}
        data-plasmic-override={overrides.userAvatar}
        className={classNames("__wab_instance", sty.userAvatar)}
        size={"_80"}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__bjfN)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__giDyd)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___3EZvu)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__coEqy
              )}
            >
              {"Username"}
            </div>

            <div className={classNames(defaultcss.all, sty.box__gZTi1)}>
              <TagBadgeVerification
                data-plasmic-name={"tagBadgeVerification"}
                data-plasmic-override={overrides.tagBadgeVerification}
                size={"_16"}
              />
            </div>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__kAf90)}
        >
          <div className={classNames(defaultcss.all, sty.box__plkCo)}>
            <TagPartnerD
              data-plasmic-name={"tagPartnerD"}
              data-plasmic-override={overrides.tagPartnerD}
            />
          </div>

          <div className={classNames(defaultcss.all, sty.box__k5Eh6)}>
            <RatingDisplayDetail
              data-plasmic-name={"ratingDisplayDetail"}
              data-plasmic-override={overrides.ratingDisplayDetail}
            />
          </div>
        </p.Stack>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__wvjeV)}>
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___33H8
          )}
        >
          {
            "One morning, when Gregor Samsa woke from troubled dreams, he found himself transforme"
          }
        </div>
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"userStatsParent"}
        data-plasmic-override={overrides.userStatsParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.userStatsParent)}
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
            className={classNames(defaultcss.all, sty.viewNumberValueParent)}
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
            className={classNames(defaultcss.all, sty.heartNumberValueParent)}
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
              sty.box__r8DGt
            )}
          >
            {"City"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__tFqJe
            )}
          >
            {","}
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box__kfxKm)}>
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__dk2F0
            )}
          >
            {"Country"}
          </div>
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "saveButtonContainer",
    "saveProfile",
    "iconPrimary",
    "svgIcon",
    "svgIcon3",
    "svgSave",
    "userAvatar",
    "tagBadgeVerification",
    "tagPartnerD",
    "ratingDisplayDetail",
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

  saveButtonContainer: [
    "saveButtonContainer",
    "saveProfile",
    "iconPrimary",
    "svgIcon",
    "svgIcon3",
    "svgSave"
  ],

  saveProfile: ["saveProfile", "iconPrimary", "svgIcon", "svgIcon3", "svgSave"],
  iconPrimary: ["iconPrimary", "svgIcon", "svgIcon3", "svgSave"],
  svgIcon: ["svgIcon"],
  svgIcon3: ["svgIcon3"],
  svgSave: ["svgSave"],
  userAvatar: ["userAvatar"],
  tagBadgeVerification: ["tagBadgeVerification"],
  tagPartnerD: ["tagPartnerD"],
  ratingDisplayDetail: ["ratingDisplayDetail"],
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
      internalArgPropNames: PlasmicCardUserprofile__ArgProps,
      internalVariantPropNames: PlasmicCardUserprofile__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardUserprofile__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardUserprofile";
  } else {
    func.displayName = `PlasmicCardUserprofile.${nodeName}`;
  }
  return func;
}

export const PlasmicCardUserprofile = Object.assign(
  // Top-level PlasmicCardUserprofile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    saveButtonContainer: makeNodeComponent("saveButtonContainer"),
    saveProfile: makeNodeComponent("saveProfile"),
    iconPrimary: makeNodeComponent("iconPrimary"),
    svgIcon: makeNodeComponent("svgIcon"),
    svgIcon3: makeNodeComponent("svgIcon3"),
    svgSave: makeNodeComponent("svgSave"),
    userAvatar: makeNodeComponent("userAvatar"),
    tagBadgeVerification: makeNodeComponent("tagBadgeVerification"),
    tagPartnerD: makeNodeComponent("tagPartnerD"),
    ratingDisplayDetail: makeNodeComponent("ratingDisplayDetail"),
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
    // Metadata about props expected for PlasmicCardUserprofile
    internalVariantProps: PlasmicCardUserprofile__VariantProps,
    internalArgProps: PlasmicCardUserprofile__ArgProps
  }
);

export default PlasmicCardUserprofile;
/* prettier-ignore-end */
