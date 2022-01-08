// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 1bXsQsUL74U
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import SectionMemberProfileHero from "../../SectionMemberProfileHero"; // plasmic-import: Q-O9AS-Maj_/component
import NavbarMemberUserProfile from "../../NavbarMemberUserProfile"; // plasmic-import: pRIPzCF9OFR/component
import ElementProfileAbout from "../../ElementProfileAbout"; // plasmic-import: fNbAgFgAmx/component
import ElementProfileMemberDetails from "../../ElementProfileMemberDetails"; // plasmic-import: 7guiVd95chm/component
import ElementProfileTeamMembership from "../../ElementProfileTeamMembership"; // plasmic-import: EKXHCUhUTAt/component
import ElementMemberProfileConnections from "../../ElementMemberProfileConnections"; // plasmic-import: F_iWPxEqO6X/component
import ElementProfileAttributes from "../../ElementProfileAttributes"; // plasmic-import: D0kbF0YbT67/component
import ElementProfileSocial from "../../ElementProfileSocial"; // plasmic-import: jeCDVKO8R8/component
import ElementMemberProfileCarousell from "../../ElementMemberProfileCarousell"; // plasmic-import: Ip2eQQfcFG/component
import FooterB from "../../FooterB"; // plasmic-import: kxeO2gTzwxU/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicDesignTemplateMember.module.css"; // plasmic-import: 1bXsQsUL74U/css

export const PlasmicDesignTemplateMember__VariantProps = new Array();

export const PlasmicDesignTemplateMember__ArgProps = new Array();

function PlasmicDesignTemplateMember__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : true
          ) ? (
            <SectionMemberProfileHero
              data-plasmic-name={"sectionMemberProfileHero"}
              data-plasmic-override={overrides.sectionMemberProfileHero}
              className={classNames(
                "__wab_instance",
                sty.sectionMemberProfileHero
              )}
            />
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : true
          ) ? (
            <NavbarMemberUserProfile
              data-plasmic-name={"navbarMemberUserProfile"}
              data-plasmic-override={overrides.navbarMemberUserProfile}
              className={classNames(
                "__wab_instance",
                sty.navbarMemberUserProfile
              )}
            />
          ) : null}
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionAboutDetails"}
              data-plasmic-override={overrides.sectionAboutDetails}
              hasGap={true}
              className={classNames(projectcss.all, sty.sectionAboutDetails)}
            >
              {(
                hasVariant(globalVariants, "screen", "iphone12ProMax")
                  ? true
                  : hasVariant(globalVariants, "screen", "desktop")
                  ? true
                  : false
              ) ? (
                <ElementProfileAbout
                  data-plasmic-name={"elementProfileAbout"}
                  data-plasmic-override={overrides.elementProfileAbout}
                  className={classNames(
                    "__wab_instance",
                    sty.elementProfileAbout
                  )}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "iphone12ProMax")
                  ? true
                  : hasVariant(globalVariants, "screen", "desktop")
                  ? true
                  : false
              ) ? (
                <ElementProfileMemberDetails
                  data-plasmic-name={"elementProfileMemberDetails"}
                  data-plasmic-override={overrides.elementProfileMemberDetails}
                  className={classNames(
                    "__wab_instance",
                    sty.elementProfileMemberDetails
                  )}
                />
              ) : null}
            </p.Stack>
          ) : null}

          <p.Stack
            as={"div"}
            data-plasmic-name={"memberTeamConnectionsSection"}
            data-plasmic-override={overrides.memberTeamConnectionsSection}
            hasGap={true}
            className={classNames(
              projectcss.all,
              sty.memberTeamConnectionsSection
            )}
          >
            <ElementProfileTeamMembership
              data-plasmic-name={"elementProfileTeamMembership"}
              data-plasmic-override={overrides.elementProfileTeamMembership}
              className={classNames(
                "__wab_instance",
                sty.elementProfileTeamMembership
              )}
            />

            <ElementMemberProfileConnections
              data-plasmic-name={"elementMemberProfileConnections"}
              data-plasmic-override={overrides.elementMemberProfileConnections}
              className={classNames(
                "__wab_instance",
                sty.elementMemberProfileConnections
              )}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"sectionMemberProfileIndustrySocial"}
            data-plasmic-override={overrides.sectionMemberProfileIndustrySocial}
            hasGap={true}
            className={classNames(
              projectcss.all,
              sty.sectionMemberProfileIndustrySocial
            )}
          >
            {(
              hasVariant(globalVariants, "screen", "iphone12ProMax")
                ? true
                : hasVariant(globalVariants, "screen", "desktop")
                ? true
                : false
            ) ? (
              <ElementProfileAttributes
                data-plasmic-name={"elementProfileAttributes"}
                data-plasmic-override={overrides.elementProfileAttributes}
                className={classNames(
                  "__wab_instance",
                  sty.elementProfileAttributes
                )}
              />
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "iphone12ProMax")
                ? true
                : hasVariant(globalVariants, "screen", "desktop")
                ? true
                : false
            ) ? (
              <ElementProfileSocial
                data-plasmic-name={"elementProfileSocial"}
                data-plasmic-override={overrides.elementProfileSocial}
                className={classNames(
                  "__wab_instance",
                  sty.elementProfileSocial
                )}
              />
            ) : null}
          </p.Stack>

          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : false
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionProfileMemberSimilarMembers"}
              data-plasmic-override={
                overrides.sectionProfileMemberSimilarMembers
              }
              hasGap={true}
              className={classNames(
                projectcss.all,
                sty.sectionProfileMemberSimilarMembers
              )}
            >
              {(
                hasVariant(globalVariants, "screen", "iphone12ProMax")
                  ? true
                  : hasVariant(globalVariants, "screen", "desktop")
                  ? true
                  : false
              ) ? (
                <ElementMemberProfileCarousell
                  className={classNames(
                    "__wab_instance",
                    sty.elementMemberProfileCarousell__inwI
                  )}
                  headlineLabel={
                    hasVariant(globalVariants, "screen", "iphone12ProMax")
                      ? "Similar members"
                      : hasVariant(globalVariants, "screen", "desktop")
                      ? "Similar members"
                      : "Headline label"
                  }
                />
              ) : null}
            </p.Stack>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : false
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionProfileMemberPeopleAlsoViewed"}
              data-plasmic-override={
                overrides.sectionProfileMemberPeopleAlsoViewed
              }
              hasGap={true}
              className={classNames(
                projectcss.all,
                sty.sectionProfileMemberPeopleAlsoViewed
              )}
            >
              {(
                hasVariant(globalVariants, "screen", "iphone12ProMax")
                  ? true
                  : hasVariant(globalVariants, "screen", "desktop")
                  ? true
                  : false
              ) ? (
                <ElementMemberProfileCarousell
                  className={classNames(
                    "__wab_instance",
                    sty.elementMemberProfileCarousell__kao6G
                  )}
                  headlineLabel={
                    hasVariant(globalVariants, "screen", "iphone12ProMax")
                      ? "People also viewed"
                      : hasVariant(globalVariants, "screen", "desktop")
                      ? "People also viewed"
                      : "Headline label"
                  }
                />
              ) : null}
            </p.Stack>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : true
          ) ? (
            <FooterB
              data-plasmic-name={"footerB"}
              data-plasmic-override={overrides.footerB}
              className={classNames("__wab_instance", sty.footerB)}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "sectionMemberProfileHero",
    "navbarMemberUserProfile",
    "sectionAboutDetails",
    "elementProfileAbout",
    "elementProfileMemberDetails",
    "memberTeamConnectionsSection",
    "elementProfileTeamMembership",
    "elementMemberProfileConnections",
    "sectionMemberProfileIndustrySocial",
    "elementProfileAttributes",
    "elementProfileSocial",
    "sectionProfileMemberSimilarMembers",
    "sectionProfileMemberPeopleAlsoViewed",
    "footerB"
  ],

  sectionMemberProfileHero: ["sectionMemberProfileHero"],
  navbarMemberUserProfile: ["navbarMemberUserProfile"],
  sectionAboutDetails: [
    "sectionAboutDetails",
    "elementProfileAbout",
    "elementProfileMemberDetails"
  ],

  elementProfileAbout: ["elementProfileAbout"],
  elementProfileMemberDetails: ["elementProfileMemberDetails"],
  memberTeamConnectionsSection: [
    "memberTeamConnectionsSection",
    "elementProfileTeamMembership",
    "elementMemberProfileConnections"
  ],

  elementProfileTeamMembership: ["elementProfileTeamMembership"],
  elementMemberProfileConnections: ["elementMemberProfileConnections"],
  sectionMemberProfileIndustrySocial: [
    "sectionMemberProfileIndustrySocial",
    "elementProfileAttributes",
    "elementProfileSocial"
  ],

  elementProfileAttributes: ["elementProfileAttributes"],
  elementProfileSocial: ["elementProfileSocial"],
  sectionProfileMemberSimilarMembers: ["sectionProfileMemberSimilarMembers"],
  sectionProfileMemberPeopleAlsoViewed: [
    "sectionProfileMemberPeopleAlsoViewed"
  ],

  footerB: ["footerB"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDesignTemplateMember__ArgProps,
      internalVariantPropNames: PlasmicDesignTemplateMember__VariantProps
    });

    return PlasmicDesignTemplateMember__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDesignTemplateMember";
  } else {
    func.displayName = `PlasmicDesignTemplateMember.${nodeName}`;
  }
  return func;
}

export const PlasmicDesignTemplateMember = Object.assign(
  // Top-level PlasmicDesignTemplateMember renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionMemberProfileHero: makeNodeComponent("sectionMemberProfileHero"),
    navbarMemberUserProfile: makeNodeComponent("navbarMemberUserProfile"),
    sectionAboutDetails: makeNodeComponent("sectionAboutDetails"),
    elementProfileAbout: makeNodeComponent("elementProfileAbout"),
    elementProfileMemberDetails: makeNodeComponent(
      "elementProfileMemberDetails"
    ),

    memberTeamConnectionsSection: makeNodeComponent(
      "memberTeamConnectionsSection"
    ),

    elementProfileTeamMembership: makeNodeComponent(
      "elementProfileTeamMembership"
    ),

    elementMemberProfileConnections: makeNodeComponent(
      "elementMemberProfileConnections"
    ),

    sectionMemberProfileIndustrySocial: makeNodeComponent(
      "sectionMemberProfileIndustrySocial"
    ),

    elementProfileAttributes: makeNodeComponent("elementProfileAttributes"),
    elementProfileSocial: makeNodeComponent("elementProfileSocial"),
    sectionProfileMemberSimilarMembers: makeNodeComponent(
      "sectionProfileMemberSimilarMembers"
    ),

    sectionProfileMemberPeopleAlsoViewed: makeNodeComponent(
      "sectionProfileMemberPeopleAlsoViewed"
    ),

    footerB: makeNodeComponent("footerB"),
    // Metadata about props expected for PlasmicDesignTemplateMember
    internalVariantProps: PlasmicDesignTemplateMember__VariantProps,
    internalArgProps: PlasmicDesignTemplateMember__ArgProps
  }
);

export default PlasmicDesignTemplateMember;
/* prettier-ignore-end */
