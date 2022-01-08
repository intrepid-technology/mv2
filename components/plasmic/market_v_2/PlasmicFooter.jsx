// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: eCAXzaJOOM3
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LogoHeader from "../../LogoHeader"; // plasmic-import: 9wNFT5FYWe/component
import FooterLink from "../../FooterLink"; // plasmic-import: V79E-hyi-E/component
import FooterSocialLink from "../../FooterSocialLink"; // plasmic-import: uQNvf8Lt2Y/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: eCAXzaJOOM3/css
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: EaVXobEXiy/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: NgzsNZ-ord/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: DEc54POMG/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: vKY9KtbmBr/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: 1ixWuykQyi/icon

export const PlasmicFooter__VariantProps = new Array("color");

export const PlasmicFooter__ArgProps = new Array(
  "children",
  "slot",
  "destination"
);

function PlasmicFooter__RenderFunc(props) {
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
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color]: hasVariant(variants, "color", "color")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__n566F, {
          [sty.freeBox__color__n566F4Sg3R]: hasVariant(
            variants,
            "color",
            "color"
          )
        })}
      >
        <LogoHeader
          data-plasmic-name={"logoHeader"}
          data-plasmic-override={overrides.logoHeader}
          className={classNames("__wab_instance", sty.logoHeader, {
            [sty.logoHeader__color]: hasVariant(variants, "color", "color")
          })}
          color={hasVariant(variants, "color", "color") ? true : undefined}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <img
                alt={""}
                className={classNames(projectcss.img, sty.img__sdyFl)}
                src={"/plasmic/market_v_2/images/intrepidLogo2021V2Darksvg.svg"}
              />
            ),

            value: args.children
          })}
        </LogoHeader>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__aA6Wh, {
            [sty.freeBox__color__aA6Wh4Sg3R]: hasVariant(
              variants,
              "color",
              "color"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yF0Gr)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fvAb7,
                {
                  [sty.text__color__fvAb74Sg3R]: hasVariant(
                    variants,
                    "color",
                    "color"
                  )
                }
              )}
            >
              {"Company"}
            </div>

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__prkiM, {
                [sty.footerLink__color__prkiM4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={hasVariant(variants, "color", "color") ? "light" : "dark"}
              slot={p.renderPlasmicSlot({
                defaultContents: "About us",
                value: args.slot
              })}
            />

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__sqBX, {
                [sty.footerLink__color__sqBX4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={hasVariant(variants, "color", "color") ? "light" : "dark"}
              destination={"https://intrepidventures.typeform.com/to/MthpVWrA"}
              slot={"Pricing"}
            />

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__lbNcN, {
                [sty.footerLink__color__lbNcN4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={hasVariant(variants, "color", "color") ? "light" : "dark"}
              destination={"https://intrepidventures.typeform.com/to/qoNxle4D"}
              slot={"Sell on Intrepid"}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cMzll)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rqdjj,
                {
                  [sty.text__color__rqdjj4Sg3R]: hasVariant(
                    variants,
                    "color",
                    "color"
                  )
                }
              )}
            >
              {"Resources"}
            </div>

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__jNuuu, {
                [sty.footerLink__color__jNuuu4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={hasVariant(variants, "color", "color") ? "light" : "dark"}
              destination={
                hasVariant(variants, "color", "color")
                  ? "https://blog.tryintrepid.com"
                  : undefined
              }
              slot={"Blog"}
            />

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__qwKs, {
                [sty.footerLink__color__qwKs4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={hasVariant(variants, "color", "color") ? "light" : "dark"}
              destination={"https://news.tryintrepid.com"}
              slot={"Newsletter"}
            />

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink___6PgNe, {
                [sty.footerLink__color___6PgNe4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={hasVariant(variants, "color", "color") ? "light" : "dark"}
              slot={"Help center"}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__l8Tzr)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9Wf6,
                {
                  [sty.text__color___9Wf64Sg3R]: hasVariant(
                    variants,
                    "color",
                    "color"
                  )
                }
              )}
            >
              {"Remote Native"}
            </div>

            {(hasVariant(variants, "color", "color") ? true : true) ? (
              <FooterLink
                className={classNames("__wab_instance", sty.footerLink__c1As0, {
                  [sty.footerLink__color__c1As04Sg3R]: hasVariant(
                    variants,
                    "color",
                    "color"
                  )
                })}
                color={
                  hasVariant(variants, "color", "color") ? "light" : "dark"
                }
                slot={"Podcast"}
              />
            ) : null}

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__ugLtb, {
                [sty.footerLink__color__ugLtb4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={hasVariant(variants, "color", "color") ? "light" : "dark"}
              destination={
                hasVariant(variants, "color", "color")
                  ? "https://intrepid.remotenative.io/"
                  : undefined
              }
              slot={"Community"}
            />
          </p.Stack>

          {(
            hasVariant(globalVariants, "screen", "iphone678")
              ? false
              : hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? false
              : true
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"social"}
              data-plasmic-override={overrides.social}
              hasGap={true}
              className={classNames(projectcss.all, sty.social, {
                [sty.social__color]: hasVariant(variants, "color", "color")
              })}
            >
              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink__uxCdr,
                  {
                    [sty.footerSocialLink__color__uxCdr4Sg3R]: hasVariant(
                      variants,
                      "color",
                      "color"
                    )
                  }
                )}
                color={
                  hasVariant(variants, "color", "color") ? "light" : "dark"
                }
              />

              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink__ouoch,
                  {
                    [sty.footerSocialLink__color__ouoch4Sg3R]: hasVariant(
                      variants,
                      "color",
                      "color"
                    )
                  }
                )}
                color={
                  hasVariant(variants, "color", "color") ? "light" : "dark"
                }
              >
                <Icon9Icon
                  className={classNames(projectcss.all, sty.svg__y7VJt, {
                    [sty.svg__color__y7VJt4Sg3R]: hasVariant(
                      variants,
                      "color",
                      "color"
                    )
                  })}
                  role={"img"}
                />
              </FooterSocialLink>

              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink__h3SeG,
                  {
                    [sty.footerSocialLink__color__h3SeG4Sg3R]: hasVariant(
                      variants,
                      "color",
                      "color"
                    )
                  }
                )}
                color={
                  hasVariant(variants, "color", "color") ? "light" : "dark"
                }
              >
                <Icon10Icon
                  className={classNames(projectcss.all, sty.svg___3MPKg, {
                    [sty.svg__color___3MPKg4Sg3R]: hasVariant(
                      variants,
                      "color",
                      "color"
                    )
                  })}
                  role={"img"}
                />
              </FooterSocialLink>

              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink__ymEz9,
                  {
                    [sty.footerSocialLink__color__ymEz94Sg3R]: hasVariant(
                      variants,
                      "color",
                      "color"
                    )
                  }
                )}
                color={
                  hasVariant(variants, "color", "color") ? "light" : "dark"
                }
              >
                <Icon12Icon
                  className={classNames(projectcss.all, sty.svg__qb4Mh, {
                    [sty.svg__color__qb4Mh4Sg3R]: hasVariant(
                      variants,
                      "color",
                      "color"
                    )
                  })}
                  role={"img"}
                />
              </FooterSocialLink>

              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink___4Euvr,
                  {
                    [sty.footerSocialLink__color___4Euvr4Sg3R]: hasVariant(
                      variants,
                      "color",
                      "color"
                    )
                  }
                )}
                color={
                  hasVariant(variants, "color", "color") ? "light" : "dark"
                }
              >
                <Icon11Icon
                  className={classNames(projectcss.all, sty.svg__cgjwO, {
                    [sty.svg__color__cgjwO4Sg3R]: hasVariant(
                      variants,
                      "color",
                      "color"
                    )
                  })}
                  role={"img"}
                />
              </FooterSocialLink>
            </p.Stack>
          ) : null}
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qeJzd)}
        >
          {(
            hasVariant(globalVariants, "screen", "iphone678")
              ? true
              : hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? true
              : false
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"social2"}
              data-plasmic-override={overrides.social2}
              hasGap={true}
              className={classNames(projectcss.all, sty.social2)}
            >
              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink__jWbXb
                )}
                color={
                  hasVariant(globalVariants, "screen", "iphone12ProMax")
                    ? "dark"
                    : undefined
                }
              />

              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink__igDkw
                )}
                color={
                  hasVariant(globalVariants, "screen", "iphone12ProMax")
                    ? "dark"
                    : undefined
                }
              >
                <p.PlasmicIcon
                  PlasmicIconType={
                    hasVariant(globalVariants, "screen", "iphone12ProMax")
                      ? Icon9Icon
                      : Icon8Icon
                  }
                  className={classNames(projectcss.all, sty.svg__asHoN)}
                  role={"img"}
                />
              </FooterSocialLink>

              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink__ioyHh
                )}
                color={
                  hasVariant(globalVariants, "screen", "iphone12ProMax")
                    ? "dark"
                    : undefined
                }
              >
                <p.PlasmicIcon
                  PlasmicIconType={
                    hasVariant(globalVariants, "screen", "iphone12ProMax")
                      ? Icon10Icon
                      : Icon8Icon
                  }
                  className={classNames(projectcss.all, sty.svg__xx41G)}
                  role={"img"}
                />
              </FooterSocialLink>

              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink__upmJo
                )}
                color={
                  hasVariant(globalVariants, "screen", "iphone12ProMax")
                    ? "dark"
                    : undefined
                }
              >
                <p.PlasmicIcon
                  PlasmicIconType={
                    hasVariant(globalVariants, "screen", "iphone12ProMax")
                      ? Icon12Icon
                      : Icon8Icon
                  }
                  className={classNames(projectcss.all, sty.svg__ffGt)}
                  role={"img"}
                />
              </FooterSocialLink>

              <FooterSocialLink
                className={classNames(
                  "__wab_instance",
                  sty.footerSocialLink__thIZx
                )}
                color={
                  hasVariant(globalVariants, "screen", "iphone12ProMax")
                    ? "dark"
                    : undefined
                }
              >
                <p.PlasmicIcon
                  PlasmicIconType={
                    hasVariant(globalVariants, "screen", "iphone12ProMax")
                      ? Icon11Icon
                      : Icon8Icon
                  }
                  className={classNames(projectcss.all, sty.svg__teYeF)}
                  role={"img"}
                />
              </FooterSocialLink>
            </p.Stack>
          ) : null}

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yuBxq)}
          >
            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__l4NKp, {
                [sty.footerLink__color__l4NKp4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={hasVariant(variants, "color", "color") ? "light" : "dark"}
              slot={"Privacy"}
            />

            <FooterLink
              className={classNames("__wab_instance", sty.footerLink__sR4S, {
                [sty.footerLink__color__sR4S4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              })}
              color={hasVariant(variants, "color", "color") ? "light" : "dark"}
              slot={"Terms"}
            />
          </p.Stack>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__mJnXf,
              {
                [sty.text__color__mJnXf4Sg3R]: hasVariant(
                  variants,
                  "color",
                  "color"
                )
              }
            )}
          >
            {"© Intrepid Financial Technologies, Inc "}
          </div>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "logoHeader", "social", "social2"],
  logoHeader: ["logoHeader"],
  social: ["social"],
  social2: ["social2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logoHeader: makeNodeComponent("logoHeader"),
    social: makeNodeComponent("social"),
    social2: makeNodeComponent("social2"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
