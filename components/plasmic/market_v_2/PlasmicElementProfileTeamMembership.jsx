// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: EKXHCUhUTAt
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
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import AvatarGroupIncrement from "../../AvatarGroupIncrement"; // plasmic-import: 8w7pyy9EQG8/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicElementProfileTeamMembership.module.css"; // plasmic-import: EKXHCUhUTAt/css

export const PlasmicElementProfileTeamMembership__VariantProps = new Array();

export const PlasmicElementProfileTeamMembership__ArgProps = new Array();

function PlasmicElementProfileTeamMembership__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso9SjFZaOqjqz()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"team"}
        data-plasmic-override={overrides.team}
        className={classNames(projectcss.all, sty.team)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ggIb6
          )}
        >
          {hasVariant(globalVariants, "screen", "desktop") ? "Team" : "Teams"}
        </div>
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"teamMemberparent"}
        data-plasmic-override={overrides.teamMemberparent}
        hasGap={true}
        className={classNames(projectcss.all, sty.teamMemberparent)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"cardTeamMembership"}
          data-plasmic-override={overrides.cardTeamMembership}
          hasGap={true}
          className={classNames(projectcss.all, sty.cardTeamMembership)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__oJ4Wb)}
          >
            <UserAvatar
              className={classNames("__wab_instance", sty.userAvatar__yG8Na)}
              navUserAvatar48={
                <img
                  alt={""}
                  className={classNames(projectcss.img, sty.img___8ZbBz)}
                  src={
                    "/plasmic/market_v_2/images/fa289C7A182449412Dcfb44D3F2984B7Png.png"
                  }
                />
              }
              size={"_48"}
            />

            <p.PlasmicLink
              data-plasmic-name={"teamLink"}
              data-plasmic-override={overrides.teamLink}
              className={classNames(projectcss.a, sty.teamLink)}
              component={Link}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ldMlX
                )}
              >
                {"Craftwerk"}
              </div>
            </p.PlasmicLink>
          </p.Stack>

          <AvatarGroupIncrement
            className={classNames(
              "__wab_instance",
              sty.avatarGroupIncrement__e5Zs9
            )}
            number={"7"}
          />
        </p.Stack>

        <p.Stack
          as={"div"}
          data-plasmic-name={"cardTeamMembership2"}
          data-plasmic-override={overrides.cardTeamMembership2}
          hasGap={true}
          className={classNames(projectcss.all, sty.cardTeamMembership2)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ld279)}
          >
            <UserAvatar
              className={classNames("__wab_instance", sty.userAvatar__rNdzL)}
              navUserAvatar48={
                <img
                  alt={""}
                  className={classNames(projectcss.img, sty.img__qUkKz)}
                  src={
                    "/plasmic/market_v_2/images/_466762084Bf3466293Fba47C63Ba55F7Jpg.jpeg"
                  }
                />
              }
              size={"_48"}
            />

            <p.PlasmicLink
              data-plasmic-name={"teamLink2"}
              data-plasmic-override={overrides.teamLink2}
              className={classNames(projectcss.a, sty.teamLink2)}
              component={Link}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lig2S
                )}
              >
                {"Zajno"}
              </div>
            </p.PlasmicLink>
          </p.Stack>

          <AvatarGroupIncrement
            className={classNames(
              "__wab_instance",
              sty.avatarGroupIncrement__ncoiU
            )}
            number={"9"}
          />
        </p.Stack>

        <p.Stack
          as={"div"}
          data-plasmic-name={"cardTeamMembership3"}
          data-plasmic-override={overrides.cardTeamMembership3}
          hasGap={true}
          className={classNames(projectcss.all, sty.cardTeamMembership3)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__za13C)}
          >
            <UserAvatar
              className={classNames("__wab_instance", sty.userAvatar__ecg5D)}
              navUserAvatar48={
                <img
                  alt={""}
                  className={classNames(projectcss.img, sty.img__qik2)}
                  src={
                    "/plasmic/market_v_2/images/_479E0Aa76Edbad47C51F159Fd88E2Bfapng.png"
                  }
                />
              }
              size={"_48"}
            />

            <p.PlasmicLink
              data-plasmic-name={"teamLink3"}
              data-plasmic-override={overrides.teamLink3}
              className={classNames(projectcss.a, sty.teamLink3)}
              component={Link}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rjnUw
                )}
              >
                {"Fire Art"}
              </div>
            </p.PlasmicLink>
          </p.Stack>

          <AvatarGroupIncrement
            className={classNames(
              "__wab_instance",
              sty.avatarGroupIncrement__wQhHd
            )}
            number={"15"}
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "team",
    "teamMemberparent",
    "cardTeamMembership",
    "teamLink",
    "cardTeamMembership2",
    "teamLink2",
    "cardTeamMembership3",
    "teamLink3"
  ],

  team: ["team"],
  teamMemberparent: [
    "teamMemberparent",
    "cardTeamMembership",
    "teamLink",
    "cardTeamMembership2",
    "teamLink2",
    "cardTeamMembership3",
    "teamLink3"
  ],

  cardTeamMembership: ["cardTeamMembership", "teamLink"],
  teamLink: ["teamLink"],
  cardTeamMembership2: ["cardTeamMembership2", "teamLink2"],
  teamLink2: ["teamLink2"],
  cardTeamMembership3: ["cardTeamMembership3", "teamLink3"],
  teamLink3: ["teamLink3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicElementProfileTeamMembership__ArgProps,
      internalVariantPropNames:
        PlasmicElementProfileTeamMembership__VariantProps
    });

    return PlasmicElementProfileTeamMembership__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementProfileTeamMembership";
  } else {
    func.displayName = `PlasmicElementProfileTeamMembership.${nodeName}`;
  }
  return func;
}

export const PlasmicElementProfileTeamMembership = Object.assign(
  // Top-level PlasmicElementProfileTeamMembership renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    team: makeNodeComponent("team"),
    teamMemberparent: makeNodeComponent("teamMemberparent"),
    cardTeamMembership: makeNodeComponent("cardTeamMembership"),
    teamLink: makeNodeComponent("teamLink"),
    cardTeamMembership2: makeNodeComponent("cardTeamMembership2"),
    teamLink2: makeNodeComponent("teamLink2"),
    cardTeamMembership3: makeNodeComponent("cardTeamMembership3"),
    teamLink3: makeNodeComponent("teamLink3"),
    // Metadata about props expected for PlasmicElementProfileTeamMembership
    internalVariantProps: PlasmicElementProfileTeamMembership__VariantProps,
    internalArgProps: PlasmicElementProfileTeamMembership__ArgProps
  }
);

export default PlasmicElementProfileTeamMembership;
/* prettier-ignore-end */
