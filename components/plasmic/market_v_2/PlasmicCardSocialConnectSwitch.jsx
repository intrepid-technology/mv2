// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: PjlQKkmde-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconSocialProfile from "../../IconSocialProfile"; // plasmic-import: IC5nyjlnco/component
import SwitchPrimary from "../../SwitchPrimary"; // plasmic-import: M6TX-0ESZQ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicCardSocialConnectSwitch.module.css"; // plasmic-import: PjlQKkmde-/css

export const PlasmicCardSocialConnectSwitch__VariantProps = new Array(
  "connected",
  "width",
  "socialNetwork",
  "accounting"
);

export const PlasmicCardSocialConnectSwitch__ArgProps = new Array();

function PlasmicCardSocialConnectSwitch__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(projectcss.all, sty.parent, {
          [sty.parent__width__360]: hasVariant(variants, "width", "_360"),
          [sty.parent__width__540]: hasVariant(variants, "width", "_540"),
          [sty.parent__width__720]: hasVariant(variants, "width", "_720")
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <IconSocialProfile
            data-plasmic-name={"iconSocialProfile"}
            data-plasmic-override={overrides.iconSocialProfile}
            accounting={
              hasVariant(variants, "accounting", "quickbooks")
                ? "quickbooks"
                : hasVariant(variants, "accounting", "xero")
                ? "xero"
                : undefined
            }
            className={classNames("__wab_instance", sty.iconSocialProfile, {
              [sty.iconSocialProfile__accounting_quickbooks]: hasVariant(
                variants,
                "accounting",
                "quickbooks"
              ),

              [sty.iconSocialProfile__accounting_xero]: hasVariant(
                variants,
                "accounting",
                "xero"
              ),

              [sty.iconSocialProfile__connected]: hasVariant(
                variants,
                "connected",
                "connected"
              ),

              [sty.iconSocialProfile__socialNetwork_angellist]: hasVariant(
                variants,
                "socialNetwork",
                "angellist"
              ),

              [sty.iconSocialProfile__socialNetwork_discord]: hasVariant(
                variants,
                "socialNetwork",
                "discord"
              ),

              [sty.iconSocialProfile__socialNetwork_dribbble]: hasVariant(
                variants,
                "socialNetwork",
                "dribbble"
              ),

              [sty.iconSocialProfile__socialNetwork_facebook]: hasVariant(
                variants,
                "socialNetwork",
                "facebook"
              ),

              [sty.iconSocialProfile__socialNetwork_github]: hasVariant(
                variants,
                "socialNetwork",
                "github"
              ),

              [sty.iconSocialProfile__socialNetwork_google]: hasVariant(
                variants,
                "socialNetwork",
                "google"
              ),

              [sty.iconSocialProfile__socialNetwork_hackernews]: hasVariant(
                variants,
                "socialNetwork",
                "hackernews"
              ),

              [sty.iconSocialProfile__socialNetwork_instagram]: hasVariant(
                variants,
                "socialNetwork",
                "instagram"
              ),

              [sty.iconSocialProfile__socialNetwork_line]: hasVariant(
                variants,
                "socialNetwork",
                "line"
              ),

              [sty.iconSocialProfile__socialNetwork_linkedin]: hasVariant(
                variants,
                "socialNetwork",
                "linkedin"
              ),

              [sty.iconSocialProfile__socialNetwork_pinterest]: hasVariant(
                variants,
                "socialNetwork",
                "pinterest"
              ),

              [sty.iconSocialProfile__socialNetwork_productHunt]: hasVariant(
                variants,
                "socialNetwork",
                "productHunt"
              ),

              [sty.iconSocialProfile__socialNetwork_reddit]: hasVariant(
                variants,
                "socialNetwork",
                "reddit"
              ),

              [sty.iconSocialProfile__socialNetwork_slack]: hasVariant(
                variants,
                "socialNetwork",
                "slack"
              ),

              [sty.iconSocialProfile__socialNetwork_snapchat]: hasVariant(
                variants,
                "socialNetwork",
                "snapchat"
              ),

              [sty.iconSocialProfile__socialNetwork_soundcloud]: hasVariant(
                variants,
                "socialNetwork",
                "soundcloud"
              ),

              [sty.iconSocialProfile__socialNetwork_spotify]: hasVariant(
                variants,
                "socialNetwork",
                "spotify"
              ),

              [sty.iconSocialProfile__socialNetwork_tikTok]: hasVariant(
                variants,
                "socialNetwork",
                "tikTok"
              ),

              [sty.iconSocialProfile__socialNetwork_twitch]: hasVariant(
                variants,
                "socialNetwork",
                "twitch"
              ),

              [sty.iconSocialProfile__socialNetwork_twitter]: hasVariant(
                variants,
                "socialNetwork",
                "twitter"
              ),

              [sty.iconSocialProfile__socialNetwork_wechat]: hasVariant(
                variants,
                "socialNetwork",
                "wechat"
              ),

              [sty.iconSocialProfile__socialNetwork_whatsapp]: hasVariant(
                variants,
                "socialNetwork",
                "whatsapp"
              ),

              [sty.iconSocialProfile__socialNetwork_youtube]: hasVariant(
                variants,
                "socialNetwork",
                "youtube"
              ),

              [sty.iconSocialProfile__width__540]: hasVariant(
                variants,
                "width",
                "_540"
              )
            })}
            size={"_45X45"}
            social={
              hasVariant(variants, "socialNetwork", "youtube")
                ? "youtube"
                : hasVariant(variants, "socialNetwork", "twitter")
                ? "twitter"
                : hasVariant(variants, "socialNetwork", "linkedin")
                ? "linkedin"
                : hasVariant(variants, "socialNetwork", "facebook")
                ? "facebook"
                : hasVariant(variants, "socialNetwork", "instagram")
                ? "instagram"
                : hasVariant(variants, "socialNetwork", "google")
                ? "google"
                : hasVariant(variants, "socialNetwork", "wechat")
                ? "wechat"
                : hasVariant(variants, "socialNetwork", "line")
                ? "line"
                : hasVariant(variants, "socialNetwork", "whatsapp")
                ? "whatsapp"
                : hasVariant(variants, "socialNetwork", "snapchat")
                ? "snapchat"
                : hasVariant(variants, "socialNetwork", "slack")
                ? "slack"
                : hasVariant(variants, "socialNetwork", "reddit")
                ? "reddit"
                : hasVariant(variants, "socialNetwork", "pinterest")
                ? "pinterest"
                : hasVariant(variants, "socialNetwork", "github")
                ? "github"
                : hasVariant(variants, "socialNetwork", "angellist")
                ? "angellist"
                : hasVariant(variants, "socialNetwork", "productHunt")
                ? "productHunt"
                : hasVariant(variants, "socialNetwork", "dribbble")
                ? "dribbble"
                : hasVariant(variants, "socialNetwork", "hackernews")
                ? "hackerNews"
                : hasVariant(variants, "socialNetwork", "spotify")
                ? "spotify"
                : hasVariant(variants, "socialNetwork", "soundcloud")
                ? "soundcloud"
                : hasVariant(variants, "socialNetwork", "discord")
                ? "discord"
                : hasVariant(variants, "socialNetwork", "twitch")
                ? "twitch"
                : hasVariant(variants, "socialNetwork", "tikTok")
                ? "tikTok"
                : undefined
            }
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.text__accounting_quickbooks]: hasVariant(
                  variants,
                  "accounting",
                  "quickbooks"
                ),

                [sty.text__accounting_xero]: hasVariant(
                  variants,
                  "accounting",
                  "xero"
                ),

                [sty.text__socialNetwork_angellist]: hasVariant(
                  variants,
                  "socialNetwork",
                  "angellist"
                ),

                [sty.text__socialNetwork_discord]: hasVariant(
                  variants,
                  "socialNetwork",
                  "discord"
                ),

                [sty.text__socialNetwork_dribbble]: hasVariant(
                  variants,
                  "socialNetwork",
                  "dribbble"
                ),

                [sty.text__socialNetwork_facebook]: hasVariant(
                  variants,
                  "socialNetwork",
                  "facebook"
                ),

                [sty.text__socialNetwork_github]: hasVariant(
                  variants,
                  "socialNetwork",
                  "github"
                ),

                [sty.text__socialNetwork_google]: hasVariant(
                  variants,
                  "socialNetwork",
                  "google"
                ),

                [sty.text__socialNetwork_hackernews]: hasVariant(
                  variants,
                  "socialNetwork",
                  "hackernews"
                ),

                [sty.text__socialNetwork_instagram]: hasVariant(
                  variants,
                  "socialNetwork",
                  "instagram"
                ),

                [sty.text__socialNetwork_line]: hasVariant(
                  variants,
                  "socialNetwork",
                  "line"
                ),

                [sty.text__socialNetwork_linkedin]: hasVariant(
                  variants,
                  "socialNetwork",
                  "linkedin"
                ),

                [sty.text__socialNetwork_pinterest]: hasVariant(
                  variants,
                  "socialNetwork",
                  "pinterest"
                ),

                [sty.text__socialNetwork_productHunt]: hasVariant(
                  variants,
                  "socialNetwork",
                  "productHunt"
                ),

                [sty.text__socialNetwork_reddit]: hasVariant(
                  variants,
                  "socialNetwork",
                  "reddit"
                ),

                [sty.text__socialNetwork_slack]: hasVariant(
                  variants,
                  "socialNetwork",
                  "slack"
                ),

                [sty.text__socialNetwork_snapchat]: hasVariant(
                  variants,
                  "socialNetwork",
                  "snapchat"
                ),

                [sty.text__socialNetwork_soundcloud]: hasVariant(
                  variants,
                  "socialNetwork",
                  "soundcloud"
                ),

                [sty.text__socialNetwork_spotify]: hasVariant(
                  variants,
                  "socialNetwork",
                  "spotify"
                ),

                [sty.text__socialNetwork_tikTok]: hasVariant(
                  variants,
                  "socialNetwork",
                  "tikTok"
                ),

                [sty.text__socialNetwork_twitch]: hasVariant(
                  variants,
                  "socialNetwork",
                  "twitch"
                ),

                [sty.text__socialNetwork_twitter]: hasVariant(
                  variants,
                  "socialNetwork",
                  "twitter"
                ),

                [sty.text__socialNetwork_wechat]: hasVariant(
                  variants,
                  "socialNetwork",
                  "wechat"
                ),

                [sty.text__socialNetwork_whatsapp]: hasVariant(
                  variants,
                  "socialNetwork",
                  "whatsapp"
                ),

                [sty.text__socialNetwork_youtube]: hasVariant(
                  variants,
                  "socialNetwork",
                  "youtube"
                )
              }
            )}
          >
            {hasVariant(variants, "socialNetwork", "youtube")
              ? "Youtube"
              : hasVariant(variants, "socialNetwork", "twitter")
              ? "Twitter"
              : hasVariant(variants, "socialNetwork", "linkedin")
              ? "Linkedin"
              : hasVariant(variants, "socialNetwork", "facebook")
              ? "Facebook"
              : hasVariant(variants, "socialNetwork", "instagram")
              ? "Instagram"
              : hasVariant(variants, "accounting", "quickbooks")
              ? "Quickbooks"
              : hasVariant(variants, "accounting", "xero")
              ? "Xero"
              : hasVariant(variants, "socialNetwork", "google")
              ? "Google"
              : hasVariant(variants, "socialNetwork", "wechat")
              ? "Wechat"
              : hasVariant(variants, "socialNetwork", "line")
              ? "Line"
              : hasVariant(variants, "socialNetwork", "whatsapp")
              ? "Whatsapp"
              : hasVariant(variants, "socialNetwork", "snapchat")
              ? "Snapchat"
              : hasVariant(variants, "socialNetwork", "slack")
              ? "Slack"
              : hasVariant(variants, "socialNetwork", "reddit")
              ? "Reddit"
              : hasVariant(variants, "socialNetwork", "pinterest")
              ? "Pinterest"
              : hasVariant(variants, "socialNetwork", "github")
              ? "Github"
              : hasVariant(variants, "socialNetwork", "angellist")
              ? "Angellist"
              : hasVariant(variants, "socialNetwork", "productHunt")
              ? "Product Hunt"
              : hasVariant(variants, "socialNetwork", "dribbble")
              ? "Dribbble"
              : hasVariant(variants, "socialNetwork", "hackernews")
              ? "Hackernews"
              : hasVariant(variants, "socialNetwork", "spotify")
              ? "Spotify"
              : hasVariant(variants, "socialNetwork", "soundcloud")
              ? "Soundcloud"
              : hasVariant(variants, "socialNetwork", "discord")
              ? "Discord"
              : hasVariant(variants, "socialNetwork", "twitch")
              ? "Twitch"
              : hasVariant(variants, "socialNetwork", "tikTok")
              ? "TikTok"
              : "Social network"}
          </div>
        </p.Stack>

        <SwitchPrimary
          data-plasmic-name={"switchPrimary"}
          data-plasmic-override={overrides.switchPrimary}
          _switch={
            hasVariant(variants, "connected", "connected")
              ? "_switch"
              : undefined
          }
          className={classNames("__wab_instance", sty.switchPrimary, {
            [sty.switchPrimary__connected]: hasVariant(
              variants,
              "connected",
              "connected"
            )
          })}
          color={[]}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "freeBox",
    "iconSocialProfile",
    "text",
    "switchPrimary"
  ],

  parent: ["parent", "freeBox", "iconSocialProfile", "text", "switchPrimary"],
  freeBox: ["freeBox", "iconSocialProfile", "text"],
  iconSocialProfile: ["iconSocialProfile"],
  text: ["text"],
  switchPrimary: ["switchPrimary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardSocialConnectSwitch__ArgProps,
      internalVariantPropNames: PlasmicCardSocialConnectSwitch__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardSocialConnectSwitch__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardSocialConnectSwitch";
  } else {
    func.displayName = `PlasmicCardSocialConnectSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicCardSocialConnectSwitch = Object.assign(
  // Top-level PlasmicCardSocialConnectSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    freeBox: makeNodeComponent("freeBox"),
    iconSocialProfile: makeNodeComponent("iconSocialProfile"),
    text: makeNodeComponent("text"),
    switchPrimary: makeNodeComponent("switchPrimary"),
    // Metadata about props expected for PlasmicCardSocialConnectSwitch
    internalVariantProps: PlasmicCardSocialConnectSwitch__VariantProps,
    internalArgProps: PlasmicCardSocialConnectSwitch__ArgProps
  }
);

export default PlasmicCardSocialConnectSwitch;
/* prettier-ignore-end */
