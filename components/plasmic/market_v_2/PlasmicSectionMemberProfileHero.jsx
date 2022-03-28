// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: Q-O9AS-Maj_
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import CardHeroMemberProfileDisplay from "../../CardHeroMemberProfileDisplay"; // plasmic-import: YUvGYQ5tJXz/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicSectionMemberProfileHero.module.css"; // plasmic-import: Q-O9AS-Maj_/css

export const PlasmicSectionMemberProfileHero__VariantProps = new Array();

export const PlasmicSectionMemberProfileHero__ArgProps = new Array();

function PlasmicSectionMemberProfileHero__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"parent"}
          data-plasmic-override={overrides.parent}
          hasGap={true}
          className={classNames(projectcss.all, sty.parent)}
        >
          <CardHeroMemberProfileDisplay
            data-plasmic-name={"cardHeroMemberProfileDisplay"}
            data-plasmic-override={overrides.cardHeroMemberProfileDisplay}
            className={classNames(
              "__wab_instance",
              sty.cardHeroMemberProfileDisplay
            )}
          />

          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"profileCommunityParent"}
              data-plasmic-override={overrides.profileCommunityParent}
              hasGap={true}
              className={classNames(projectcss.all, sty.profileCommunityParent)}
            >
              <div
                data-plasmic-name={"community"}
                data-plasmic-override={overrides.community}
                className={classNames(projectcss.all, sty.community)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uQFt
                  )}
                >
                  {"Community"}
                </div>
              </div>

              <p.Stack
                as={"div"}
                data-plasmic-name={"statsParent"}
                data-plasmic-override={overrides.statsParent}
                hasGap={true}
                className={classNames(projectcss.all, sty.statsParent)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"memberStatParent"}
                  data-plasmic-override={overrides.memberStatParent}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.memberStatParent)}
                >
                  <div
                    data-plasmic-name={"memberNumberCount"}
                    data-plasmic-override={overrides.memberNumberCount}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.memberNumberCount
                    )}
                  >
                    {"278"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lhNgd
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "desktop")
                      ? "Subscriptions"
                      : "Subscription"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"followersStatParent"}
                  data-plasmic-override={overrides.followersStatParent}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    sty.followersStatParent
                  )}
                >
                  <div
                    data-plasmic-name={"followingNumberCount"}
                    data-plasmic-override={overrides.followingNumberCount}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.followingNumberCount
                    )}
                  >
                    {"500"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3QQmy
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "iphone12ProMax")
                      ? "Connections"
                      : hasVariant(globalVariants, "screen", "desktop")
                      ? "Connections"
                      : "Followers"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"partnerStatParent"}
                  data-plasmic-override={overrides.partnerStatParent}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.partnerStatParent)}
                >
                  <div
                    data-plasmic-name={"partnerNumberCount"}
                    data-plasmic-override={overrides.partnerNumberCount}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.partnerNumberCount
                    )}
                  >
                    {"10k"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qKdWg
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "iphone12ProMax")
                      ? "Followers"
                      : hasVariant(globalVariants, "screen", "desktop")
                      ? "Followers"
                      : "Teams"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"viewsStatParent"}
                  data-plasmic-override={overrides.viewsStatParent}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.viewsStatParent)}
                >
                  <div
                    data-plasmic-name={"viewsNumberCount"}
                    data-plasmic-override={overrides.viewsNumberCount}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.viewsNumberCount
                    )}
                  >
                    {"162"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zSr5B
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "desktop")
                      ? "Reviews"
                      : "Reviews"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"reactsStatParent"}
                  data-plasmic-override={overrides.reactsStatParent}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.reactsStatParent)}
                >
                  <div
                    data-plasmic-name={"reactsNumberCount"}
                    data-plasmic-override={overrides.reactsNumberCount}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.reactsNumberCount
                    )}
                  >
                    {"24k"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mRbl9
                    )}
                  >
                    {"Reacts"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"savesStatParent"}
                  data-plasmic-override={overrides.savesStatParent}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.savesStatParent)}
                >
                  <div
                    data-plasmic-name={"savesNumberCount"}
                    data-plasmic-override={overrides.savesNumberCount}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.savesNumberCount
                    )}
                  >
                    {"38"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5H6RB
                    )}
                  >
                    {"Saves"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "cardHeroMemberProfileDisplay",
    "profileCommunityParent",
    "community",
    "statsParent",
    "memberStatParent",
    "memberNumberCount",
    "followersStatParent",
    "followingNumberCount",
    "partnerStatParent",
    "partnerNumberCount",
    "viewsStatParent",
    "viewsNumberCount",
    "reactsStatParent",
    "reactsNumberCount",
    "savesStatParent",
    "savesNumberCount"
  ],

  parent: [
    "parent",
    "cardHeroMemberProfileDisplay",
    "profileCommunityParent",
    "community",
    "statsParent",
    "memberStatParent",
    "memberNumberCount",
    "followersStatParent",
    "followingNumberCount",
    "partnerStatParent",
    "partnerNumberCount",
    "viewsStatParent",
    "viewsNumberCount",
    "reactsStatParent",
    "reactsNumberCount",
    "savesStatParent",
    "savesNumberCount"
  ],

  cardHeroMemberProfileDisplay: ["cardHeroMemberProfileDisplay"],
  profileCommunityParent: [
    "profileCommunityParent",
    "community",
    "statsParent",
    "memberStatParent",
    "memberNumberCount",
    "followersStatParent",
    "followingNumberCount",
    "partnerStatParent",
    "partnerNumberCount",
    "viewsStatParent",
    "viewsNumberCount",
    "reactsStatParent",
    "reactsNumberCount",
    "savesStatParent",
    "savesNumberCount"
  ],

  community: ["community"],
  statsParent: [
    "statsParent",
    "memberStatParent",
    "memberNumberCount",
    "followersStatParent",
    "followingNumberCount",
    "partnerStatParent",
    "partnerNumberCount",
    "viewsStatParent",
    "viewsNumberCount",
    "reactsStatParent",
    "reactsNumberCount",
    "savesStatParent",
    "savesNumberCount"
  ],

  memberStatParent: ["memberStatParent", "memberNumberCount"],
  memberNumberCount: ["memberNumberCount"],
  followersStatParent: ["followersStatParent", "followingNumberCount"],
  followingNumberCount: ["followingNumberCount"],
  partnerStatParent: ["partnerStatParent", "partnerNumberCount"],
  partnerNumberCount: ["partnerNumberCount"],
  viewsStatParent: ["viewsStatParent", "viewsNumberCount"],
  viewsNumberCount: ["viewsNumberCount"],
  reactsStatParent: ["reactsStatParent", "reactsNumberCount"],
  reactsNumberCount: ["reactsNumberCount"],
  savesStatParent: ["savesStatParent", "savesNumberCount"],
  savesNumberCount: ["savesNumberCount"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSectionMemberProfileHero__ArgProps,
      internalVariantPropNames: PlasmicSectionMemberProfileHero__VariantProps
    });

    return PlasmicSectionMemberProfileHero__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionMemberProfileHero";
  } else {
    func.displayName = `PlasmicSectionMemberProfileHero.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionMemberProfileHero = Object.assign(
  // Top-level PlasmicSectionMemberProfileHero renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    cardHeroMemberProfileDisplay: makeNodeComponent(
      "cardHeroMemberProfileDisplay"
    ),

    profileCommunityParent: makeNodeComponent("profileCommunityParent"),
    community: makeNodeComponent("community"),
    statsParent: makeNodeComponent("statsParent"),
    memberStatParent: makeNodeComponent("memberStatParent"),
    memberNumberCount: makeNodeComponent("memberNumberCount"),
    followersStatParent: makeNodeComponent("followersStatParent"),
    followingNumberCount: makeNodeComponent("followingNumberCount"),
    partnerStatParent: makeNodeComponent("partnerStatParent"),
    partnerNumberCount: makeNodeComponent("partnerNumberCount"),
    viewsStatParent: makeNodeComponent("viewsStatParent"),
    viewsNumberCount: makeNodeComponent("viewsNumberCount"),
    reactsStatParent: makeNodeComponent("reactsStatParent"),
    reactsNumberCount: makeNodeComponent("reactsNumberCount"),
    savesStatParent: makeNodeComponent("savesStatParent"),
    savesNumberCount: makeNodeComponent("savesNumberCount"),
    // Metadata about props expected for PlasmicSectionMemberProfileHero
    internalVariantProps: PlasmicSectionMemberProfileHero__VariantProps,
    internalArgProps: PlasmicSectionMemberProfileHero__ArgProps
  }
);

export default PlasmicSectionMemberProfileHero;
/* prettier-ignore-end */
