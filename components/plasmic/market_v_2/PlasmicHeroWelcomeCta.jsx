// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: zcIXnSYZXs
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import ButtonUberStyle from "../../ButtonUberStyle"; // plasmic-import: JpZ_1tH-Ag/component
import InputEmailB from "../../InputEmailB"; // plasmic-import: TlHGxonFgD/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicHeroWelcomeCta.module.css"; // plasmic-import: zcIXnSYZXs/css

export const PlasmicHeroWelcomeCta__VariantProps = new Array(
  "size",
  "persona",
  "cta"
);

export const PlasmicHeroWelcomeCta__ArgProps = new Array("children");

function PlasmicHeroWelcomeCta__RenderFunc(props) {
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
        [sty.root__cta_button]: hasVariant(variants, "cta", "button"),
        [sty.root__cta_email]: hasVariant(variants, "cta", "email"),
        [sty.root__persona_member]: hasVariant(variants, "persona", "member"),
        [sty.root__persona_partner]: hasVariant(variants, "persona", "partner"),
        [sty.root__persona_partner_size__720]:
          hasVariant(variants, "persona", "partner") &&
          hasVariant(variants, "size", "_720"),
        [sty.root__size__270]: hasVariant(variants, "size", "_270"),
        [sty.root__size__360]: hasVariant(variants, "size", "_360"),
        [sty.root__size__360_cta_email]:
          hasVariant(variants, "size", "_360") &&
          hasVariant(variants, "cta", "email"),
        [sty.root__size__720]: hasVariant(variants, "size", "_720"),
        [sty.root__size__720_persona_member]:
          hasVariant(variants, "size", "_720") &&
          hasVariant(variants, "persona", "member")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"headlineSubhead"}
        data-plasmic-override={overrides.headlineSubhead}
        hasGap={true}
        className={classNames(projectcss.all, sty.headlineSubhead, {
          [sty.headlineSubhead__persona_partner]: hasVariant(
            variants,
            "persona",
            "partner"
          ),

          [sty.headlineSubhead__persona_partner_size__720]:
            hasVariant(variants, "persona", "partner") &&
            hasVariant(variants, "size", "_720"),
          [sty.headlineSubhead__size__270]: hasVariant(
            variants,
            "size",
            "_270"
          ),

          [sty.headlineSubhead__size__360]: hasVariant(
            variants,
            "size",
            "_360"
          ),

          [sty.headlineSubhead__size__720]: hasVariant(
            variants,
            "size",
            "_720"
          ),

          [sty.headlineSubhead__size__720_persona_member]:
            hasVariant(variants, "size", "_720") &&
            hasVariant(variants, "persona", "member")
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__p7LNb, {
            [sty.freeBox__persona_partner__p7LNbh1Dvk]: hasVariant(
              variants,
              "persona",
              "partner"
            ),

            [sty.freeBox__persona_partner_size__720__p7LNbh1DvkHXq]:
              hasVariant(variants, "persona", "partner") &&
              hasVariant(variants, "size", "_720"),
            [sty.freeBox__size__270__p7LNbWzVrX]: hasVariant(
              variants,
              "size",
              "_270"
            ),

            [sty.freeBox__size__720__p7LNbHXq]: hasVariant(
              variants,
              "size",
              "_720"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zBnnw, {
              [sty.freeBox__size__270__zBnnwwzVrX]: hasVariant(
                variants,
                "size",
                "_270"
              ),

              [sty.freeBox__size__720__zBnnwHXq]: hasVariant(
                variants,
                "size",
                "_720"
              ),

              [sty.freeBox__size__720_persona_partner__zBnnwHXqH1Dvk]:
                hasVariant(variants, "size", "_720") &&
                hasVariant(variants, "persona", "partner")
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bkkSv,
                {
                  [sty.text__persona_member__bkkSv3SAq]: hasVariant(
                    variants,
                    "persona",
                    "member"
                  ),

                  [sty.text__persona_partner__bkkSvh1Dvk]: hasVariant(
                    variants,
                    "persona",
                    "partner"
                  ),

                  [sty.text__size__270__bkkSvWzVrX]: hasVariant(
                    variants,
                    "size",
                    "_270"
                  ),

                  [sty.text__size__720__bkkSvHXq]: hasVariant(
                    variants,
                    "size",
                    "_720"
                  )
                }
              )}
            >
              {hasVariant(variants, "persona", "partner")
                ? "List."
                : hasVariant(variants, "persona", "member")
                ? "Start."
                : "List."}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__krNqh,
                {
                  [sty.text__cta_button__krNqh8Tb0D]: hasVariant(
                    variants,
                    "cta",
                    "button"
                  ),

                  [sty.text__persona_member__krNqh3SAq]: hasVariant(
                    variants,
                    "persona",
                    "member"
                  ),

                  [sty.text__persona_partner__krNqhh1Dvk]: hasVariant(
                    variants,
                    "persona",
                    "partner"
                  ),

                  [sty.text__size__270__krNqhWzVrX]: hasVariant(
                    variants,
                    "size",
                    "_270"
                  ),

                  [sty.text__size__720__krNqhHXq]: hasVariant(
                    variants,
                    "size",
                    "_720"
                  ),

                  [sty.text__size__720_persona_member__krNqhHXq3SAq]:
                    hasVariant(variants, "size", "_720") &&
                    hasVariant(variants, "persona", "member")
                }
              )}
            >
              {hasVariant(variants, "persona", "partner")
                ? "Sell."
                : hasVariant(variants, "persona", "member")
                ? "Launch."
                : "Sell."}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bVkfy,
                {
                  [sty.text__persona_member__bVkfy3SAq]: hasVariant(
                    variants,
                    "persona",
                    "member"
                  ),

                  [sty.text__persona_partner__bVkfYh1Dvk]: hasVariant(
                    variants,
                    "persona",
                    "partner"
                  ),

                  [sty.text__size__270__bVkfywzVrX]: hasVariant(
                    variants,
                    "size",
                    "_270"
                  ),

                  [sty.text__size__720__bVkfyHXq]: hasVariant(
                    variants,
                    "size",
                    "_720"
                  ),

                  [sty.text__size__720_persona_member__bVkfyHXq3SAq]:
                    hasVariant(variants, "size", "_720") &&
                    hasVariant(variants, "persona", "member")
                }
              )}
            >
              {hasVariant(variants, "persona", "partner") ? "Grow." : "Grow."}
            </div>
          </p.Stack>
        </p.Stack>

        <div
          className={classNames(projectcss.all, sty.freeBox___0SFze, {
            [sty.freeBox__persona_partner___0SFzEh1Dvk]: hasVariant(
              variants,
              "persona",
              "partner"
            ),

            [sty.freeBox__persona_partner_size__720___0SFzEh1DvkHXq]:
              hasVariant(variants, "persona", "partner") &&
              hasVariant(variants, "size", "_720"),
            [sty.freeBox__size__270___0SFzewzVrX]: hasVariant(
              variants,
              "size",
              "_270"
            ),

            [sty.freeBox__size__360___0SFzeKakJz]: hasVariant(
              variants,
              "size",
              "_360"
            ),

            [sty.freeBox__size__720___0SFzeHXq]: hasVariant(
              variants,
              "size",
              "_720"
            ),

            [sty.freeBox__size__720_persona_member___0SFzeHXq3SAq]:
              hasVariant(variants, "size", "_720") &&
              hasVariant(variants, "persona", "member")
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__sgyko, {
              [sty.freeBox__persona_member__sgyko3SAq]: hasVariant(
                variants,
                "persona",
                "member"
              ),

              [sty.freeBox__persona_partner__sgykoh1Dvk]: hasVariant(
                variants,
                "persona",
                "partner"
              ),

              [sty.freeBox__persona_partner_size__270__sgykoh1DvkWzVrX]:
                hasVariant(variants, "persona", "partner") &&
                hasVariant(variants, "size", "_270"),
              [sty.freeBox__size__270__sgykoWzVrX]: hasVariant(
                variants,
                "size",
                "_270"
              ),

              [sty.freeBox__size__270_persona_member__sgykoWzVrX3SAq]:
                hasVariant(variants, "size", "_270") &&
                hasVariant(variants, "persona", "member"),
              [sty.freeBox__size__360__sgykoKakJz]: hasVariant(
                variants,
                "size",
                "_360"
              ),

              [sty.freeBox__size__720__sgykoHXq]: hasVariant(
                variants,
                "size",
                "_720"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox___0HSz, {
                [sty.freeBox__persona_member___0HSz3SAq]: hasVariant(
                  variants,
                  "persona",
                  "member"
                ),

                [sty.freeBox__persona_partner___0HSzh1Dvk]: hasVariant(
                  variants,
                  "persona",
                  "partner"
                ),

                [sty.freeBox__persona_partner_size__270___0HSzh1DvkWzVrX]:
                  hasVariant(variants, "persona", "partner") &&
                  hasVariant(variants, "size", "_270"),
                [sty.freeBox__size__270___0HSzWzVrX]: hasVariant(
                  variants,
                  "size",
                  "_270"
                ),

                [sty.freeBox__size__270_persona_member___0HSzWzVrX3SAq]:
                  hasVariant(variants, "size", "_270") &&
                  hasVariant(variants, "persona", "member"),
                [sty.freeBox__size__360___0HSzKakJz]: hasVariant(
                  variants,
                  "size",
                  "_360"
                ),

                [sty.freeBox__size__720___0HSzHXq]: hasVariant(
                  variants,
                  "size",
                  "_720"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: hasVariant(variants, "persona", "partner")
                  ? "Reach a global audience of entrepreneurs and startups selling your unique professional design and technology services."
                  : hasVariant(variants, "persona", "member")
                  ? "Find all the technology products and services you need to startup, launch, and grow your business."
                  : "The marketplace-community for international design and development agencies to sell professional design and technology services globally.",
                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildren__persona_member]: hasVariant(
                    variants,
                    "persona",
                    "member"
                  ),

                  [sty.slotTargetChildren__persona_partner]: hasVariant(
                    variants,
                    "persona",
                    "partner"
                  ),

                  [sty.slotTargetChildren__persona_partner_size__270]:
                    hasVariant(variants, "persona", "partner") &&
                    hasVariant(variants, "size", "_270"),
                  [sty.slotTargetChildren__persona_partner_size__720]:
                    hasVariant(variants, "persona", "partner") &&
                    hasVariant(variants, "size", "_720"),
                  [sty.slotTargetChildren__size__270]: hasVariant(
                    variants,
                    "size",
                    "_270"
                  ),

                  [sty.slotTargetChildren__size__270_persona_member]:
                    hasVariant(variants, "size", "_270") &&
                    hasVariant(variants, "persona", "member"),
                  [sty.slotTargetChildren__size__360]: hasVariant(
                    variants,
                    "size",
                    "_360"
                  ),

                  [sty.slotTargetChildren__size__360_persona_member]:
                    hasVariant(variants, "size", "_360") &&
                    hasVariant(variants, "persona", "member"),
                  [sty.slotTargetChildren__size__360_persona_partner]:
                    hasVariant(variants, "size", "_360") &&
                    hasVariant(variants, "persona", "partner"),
                  [sty.slotTargetChildren__size__720]: hasVariant(
                    variants,
                    "size",
                    "_720"
                  ),

                  [sty.slotTargetChildren__size__720_persona_member]:
                    hasVariant(variants, "size", "_720") &&
                    hasVariant(variants, "persona", "member")
                })
              })}
            </div>
          </div>
        </div>
      </p.Stack>

      {(
        hasVariant(variants, "cta", "email")
          ? false
          : hasVariant(variants, "cta", "button")
          ? false
          : true
      ) ? (
        <ButtonPrimary
          data-plasmic-name={"buttonPrimary"}
          data-plasmic-override={overrides.buttonPrimary}
          className={classNames("__wab_instance", sty.buttonPrimary, {
            [sty.buttonPrimary__cta_button]: hasVariant(
              variants,
              "cta",
              "button"
            ),

            [sty.buttonPrimary__cta_email]: hasVariant(
              variants,
              "cta",
              "email"
            ),

            [sty.buttonPrimary__persona_member]: hasVariant(
              variants,
              "persona",
              "member"
            ),

            [sty.buttonPrimary__persona_partner]: hasVariant(
              variants,
              "persona",
              "partner"
            ),

            [sty.buttonPrimary__persona_partner_size__720]:
              hasVariant(variants, "persona", "partner") &&
              hasVariant(variants, "size", "_720"),
            [sty.buttonPrimary__size__720]: hasVariant(
              variants,
              "size",
              "_720"
            ),

            [sty.buttonPrimary__size__720_persona_member]:
              hasVariant(variants, "size", "_720") &&
              hasVariant(variants, "persona", "member")
          })}
          color={"primary"}
          width={hasVariant(variants, "size", "_720") ? "_360" : "_140"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__emeni,
              {
                [sty.text__persona_member__emeni3SAq]: hasVariant(
                  variants,
                  "persona",
                  "member"
                ),

                [sty.text__persona_member_size__270__emeni3SAqWzVrX]:
                  hasVariant(variants, "persona", "member") &&
                  hasVariant(variants, "size", "_270"),
                [sty.text__persona_partner_size__270__emenih1DvkWzVrX]:
                  hasVariant(variants, "persona", "partner") &&
                  hasVariant(variants, "size", "_270"),
                [sty.text__persona_partner_size__360__emenih1DvkKakJz]:
                  hasVariant(variants, "persona", "partner") &&
                  hasVariant(variants, "size", "_360"),
                [sty.text__size__270__emeniWzVrX]: hasVariant(
                  variants,
                  "size",
                  "_270"
                ),

                [sty.text__size__360__emeniKakJz]: hasVariant(
                  variants,
                  "size",
                  "_360"
                ),

                [sty.text__size__360_persona_member__emeniKakJz3SAq]:
                  hasVariant(variants, "size", "_360") &&
                  hasVariant(variants, "persona", "member"),
                [sty.text__size__720__emeniHXq]: hasVariant(
                  variants,
                  "size",
                  "_720"
                ),

                [sty.text__size__720_persona_member__emeniHXq3SAq]:
                  hasVariant(variants, "size", "_720") &&
                  hasVariant(variants, "persona", "member"),
                [sty.text__size__720_persona_partner__emeniHXqH1Dvk]:
                  hasVariant(variants, "size", "_720") &&
                  hasVariant(variants, "persona", "partner")
              }
            )}
          >
            {hasVariant(variants, "size", "_720") &&
            hasVariant(variants, "persona", "member")
              ? "Request access"
              : hasVariant(variants, "persona", "member") &&
                hasVariant(variants, "size", "_270")
              ? "Request access"
              : hasVariant(variants, "size", "_360") &&
                hasVariant(variants, "persona", "member")
              ? "Request access"
              : hasVariant(variants, "persona", "member")
              ? "Apply to join"
              : hasVariant(globalVariants, "screen", "iphone12ProMax")
              ? "Apply to partner"
              : "Apply to partner"}
          </div>
        </ButtonPrimary>
      ) : null}
      {(hasVariant(variants, "cta", "button") ? true : false) ? (
        <ButtonUberStyle
          data-plasmic-name={"buttonUberStyle"}
          data-plasmic-override={overrides.buttonUberStyle}
          className={classNames("__wab_instance", sty.buttonUberStyle, {
            [sty.buttonUberStyle__cta_button]: hasVariant(
              variants,
              "cta",
              "button"
            ),

            [sty.buttonUberStyle__persona_partner]: hasVariant(
              variants,
              "persona",
              "partner"
            )
          })}
          size={hasVariant(variants, "cta", "button") ? "_140" : undefined}
        />
      ) : null}
      {(hasVariant(variants, "cta", "email") ? true : false) ? (
        <InputEmailB
          data-plasmic-name={"inputEmailB"}
          data-plasmic-override={overrides.inputEmailB}
          className={classNames("__wab_instance", sty.inputEmailB, {
            [sty.inputEmailB__cta_email]: hasVariant(variants, "cta", "email"),
            [sty.inputEmailB__persona_partner]: hasVariant(
              variants,
              "persona",
              "partner"
            ),

            [sty.inputEmailB__size__270]: hasVariant(variants, "size", "_270")
          })}
          size={
            hasVariant(globalVariants, "screen", "desktop") ? "_270" : "_360"
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qUWk5,
              {
                [sty.text__cta_email__qUWk544Lt1]: hasVariant(
                  variants,
                  "cta",
                  "email"
                )
              }
            )}
          >
            {
              "Free to join, no credit card required. By entering your email, you agree to receive marketing emails from Intrepid."
            }
          </div>
        </InputEmailB>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "headlineSubhead",
    "buttonPrimary",
    "buttonUberStyle",
    "inputEmailB"
  ],

  headlineSubhead: ["headlineSubhead"],
  buttonPrimary: ["buttonPrimary"],
  buttonUberStyle: ["buttonUberStyle"],
  inputEmailB: ["inputEmailB"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeroWelcomeCta__ArgProps,
      internalVariantPropNames: PlasmicHeroWelcomeCta__VariantProps
    });

    return PlasmicHeroWelcomeCta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroWelcomeCta";
  } else {
    func.displayName = `PlasmicHeroWelcomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroWelcomeCta = Object.assign(
  // Top-level PlasmicHeroWelcomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headlineSubhead: makeNodeComponent("headlineSubhead"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),
    buttonUberStyle: makeNodeComponent("buttonUberStyle"),
    inputEmailB: makeNodeComponent("inputEmailB"),
    // Metadata about props expected for PlasmicHeroWelcomeCta
    internalVariantProps: PlasmicHeroWelcomeCta__VariantProps,
    internalArgProps: PlasmicHeroWelcomeCta__ArgProps
  }
);

export default PlasmicHeroWelcomeCta;
/* prettier-ignore-end */
