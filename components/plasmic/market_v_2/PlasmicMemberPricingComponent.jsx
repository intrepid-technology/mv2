// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: GHyutJMpWs
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import BadgeSectionTitle from "../../BadgeSectionTitle"; // plasmic-import: kKmAboE5L2/component
import PricingTableFeatureItem from "../../PricingTableFeatureItem"; // plasmic-import: YQmJm_xVDH/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: koVqNkx_82/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicMemberPricingComponent.module.css"; // plasmic-import: GHyutJMpWs/css
import CellDividerIcon from "./icons/PlasmicIcon__CellDivider"; // plasmic-import: n34VWl8XDZ4/icon

export const PlasmicMemberPricingComponent__VariantProps = new Array("annual");

export const PlasmicMemberPricingComponent__ArgProps = new Array();

function PlasmicMemberPricingComponent__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
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
      {true ? (
        <div
          data-plasmic-name={"pricing"}
          data-plasmic-override={overrides.pricing}
          className={classNames(projectcss.all, sty.pricing, {
            [sty.pricing__annual]: hasVariant(variants, "annual", "annual")
          })}
        >
          <BadgeSectionTitle
            border={"border"}
            className={classNames(
              "__wab_instance",
              sty.badgeSectionTitle___3XvBq
            )}
            colors={"brand"}
            sectionTitleSlot={"pricing"}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__d0Qcv)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vPQyH
              )}
            >
              {"Simple, transparent pricing"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4U99
              )}
            >
              {
                "Get started for free, without talking to a rep or getting put into a sales funnel. We have simple and transparent pricing that works with you at every stage of your journey."
              }
            </div>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zkIl2, {
              [sty.freeBox__annual__zkIl280AwV]: hasVariant(
                variants,
                "annual",
                "annual"
              )
            })}
          >
            {true ? (
              <div
                data-plasmic-name={"monthlyPricingDiv"}
                data-plasmic-override={overrides.monthlyPricingDiv}
                className={classNames(projectcss.all, sty.monthlyPricingDiv, {
                  [sty.monthlyPricingDiv__annual]: hasVariant(
                    variants,
                    "annual",
                    "annual"
                  )
                })}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__i6HcD
                  )}
                >
                  {"Monthly"}
                </div>
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"annualPricingDiv"}
                data-plasmic-override={overrides.annualPricingDiv}
                className={classNames(projectcss.all, sty.annualPricingDiv, {
                  [sty.annualPricingDiv__annual]: hasVariant(
                    variants,
                    "annual",
                    "annual"
                  )
                })}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6ESt,
                    {
                      [sty.text__annual___6ESt80AwV]: hasVariant(
                        variants,
                        "annual",
                        "annual"
                      )
                    }
                  )}
                >
                  {"Annual"}
                </div>
              </div>
            ) : null}
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__w7Mat)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__dNo1I)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ffh7)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mo6T8
                  )}
                >
                  {"Startup"}
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__aOaxK)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oXusV
                    )}
                  >
                    {"$0"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___1BDgs)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jzQlY
                    )}
                  >
                    {"Per user"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___5Jd8R)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qlOy
                    )}
                  >
                    {
                      "For entrepreneurs just getting started with their remote company"
                    }
                  </div>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bHsR)}
              >
                <CellDividerIcon
                  className={classNames(projectcss.all, sty.svg__l5PDj)}
                  role={"img"}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__rGzLs)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lmcnp
                    )}
                  >
                    {"features"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oJu3Y
                    )}
                  >
                    {"Start, manage, and grow a remote company"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xJxDz
                    )}
                  >
                    {"8% fee for marketplace talent"}
                  </div>
                </p.Stack>

                <PricingTableFeatureItem
                  checkColor={"brand"}
                  className={classNames(
                    "__wab_instance",
                    sty.pricingTableFeatureItem__x1Fxu
                  )}
                >
                  {"Onboard and manage your own freelancers and agencies."}
                </PricingTableFeatureItem>

                <PricingTableFeatureItem
                  checkColor={"brand"}
                  className={classNames(
                    "__wab_instance",
                    sty.pricingTableFeatureItem__u7FPv
                  )}
                >
                  {
                    "Access our talent marketplace of over 27,000 vetted freelancers & agencies"
                  }
                </PricingTableFeatureItem>

                <PricingTableFeatureItem
                  checkColor={"brand"}
                  className={classNames(
                    "__wab_instance",
                    sty.pricingTableFeatureItem___68HFs
                  )}
                >
                  {"Pay freelancers in 170 countries with receipt tracking"}
                </PricingTableFeatureItem>

                <CellDividerIcon
                  className={classNames(projectcss.all, sty.svg__rgU0S)}
                  role={"img"}
                />

                <div className={classNames(projectcss.all, sty.freeBox__m90A0)}>
                  <ButtonPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.buttonPrimary__ioq5I
                    )}
                    color={"brand"}
                    destination={
                      "https://intrepidventures.typeform.com/to/MthpVWrA"
                    }
                    rounded={"rounded"}
                    size={"_360"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__haYHf
                      )}
                    >
                      {"Request access"}
                    </div>
                  </ButtonPrimary>
                </div>
              </p.Stack>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__av9NC)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__c1G)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__p8Rcx
                  )}
                >
                  {"Growth"}
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__c9QgY)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kmfpw,
                      {
                        [sty.text__annual__kmfpw80AwV]: hasVariant(
                          variants,
                          "annual",
                          "annual"
                        )
                      }
                    )}
                  >
                    {hasVariant(variants, "annual", "annual") ? "$45" : "$50"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3OuMv
                    )}
                  >
                    {"/month"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__gGnRm)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8Gg9S
                    )}
                  >
                    {"Per user"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__wu4E)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qzXBc
                    )}
                  >
                    {
                      "For venture backed startups scaling their remote company and global team"
                    }
                  </div>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___8QheI)}
              >
                <CellDividerIcon
                  className={classNames(projectcss.all, sty.svg___0Erlu)}
                  role={"img"}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yYutt)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__atQCq
                    )}
                  >
                    {"features"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ysbj2
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{"Everything in our "}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Startup "}
                      </span>
                      <React.Fragment>{"package plus"}</React.Fragment>
                    </React.Fragment>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tme1G
                    )}
                  >
                    {"5% fee for marketplace talent"}
                  </div>
                </p.Stack>

                <PricingTableFeatureItem
                  checkColor={"brand"}
                  className={classNames(
                    "__wab_instance",
                    sty.pricingTableFeatureItem__va64K
                  )}
                >
                  {
                    "Virtual wallet and physical debit card for project and expense management "
                  }
                </PricingTableFeatureItem>

                <PricingTableFeatureItem
                  checkColor={"brand"}
                  className={classNames(
                    "__wab_instance",
                    sty.pricingTableFeatureItem__uevIx
                  )}
                >
                  {"Manage expenses across teams and departments"}
                </PricingTableFeatureItem>

                <PricingTableFeatureItem
                  checkColor={"brand"}
                  className={classNames(
                    "__wab_instance",
                    sty.pricingTableFeatureItem__shkDl
                  )}
                >
                  {
                    "EOR - Buy, contract, or hire globally, with automated tax and compliance"
                  }
                </PricingTableFeatureItem>

                <CellDividerIcon
                  className={classNames(projectcss.all, sty.svg__jmeDz)}
                  role={"img"}
                />

                <div className={classNames(projectcss.all, sty.freeBox__iszuh)}>
                  <ButtonPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.buttonPrimary__kqlVw
                    )}
                    color={"brand"}
                    destination={
                      "https://intrepidventures.typeform.com/to/MthpVWrA"
                    }
                    rounded={"rounded"}
                    size={"_360"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gziPe
                      )}
                    >
                      {"Request access"}
                    </div>
                  </ButtonPrimary>
                </div>
              </p.Stack>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__fj10K)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__dF4Zl)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pn49
                  )}
                >
                  {"Global"}
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__bIyMd)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vrf1F,
                      {
                        [sty.text__annual__vrf1F80AwV]: hasVariant(
                          variants,
                          "annual",
                          "annual"
                        )
                      }
                    )}
                  >
                    {hasVariant(variants, "annual", "annual") ? "$90" : "$100"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___9Gta
                    )}
                  >
                    {"/month"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yrjxP)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2G0Vt
                    )}
                  >
                    {"Per user"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___6G5DB)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hzFzi
                    )}
                  >
                    {
                      "For global teams that need advanced payment and compliance solutions"
                    }
                  </div>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kchS)}
              >
                <CellDividerIcon
                  className={classNames(projectcss.all, sty.svg__ytauP)}
                  role={"img"}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___2QOg2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nVpEw
                    )}
                  >
                    {"features"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pyFb2
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{"Everything in our "}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Growth "}
                      </span>
                      <React.Fragment>{"package plus"}</React.Fragment>
                    </React.Fragment>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xh08P
                    )}
                  >
                    {"3% fee for marketplace talent"}
                  </div>
                </p.Stack>

                <PricingTableFeatureItem
                  checkColor={"brand"}
                  className={classNames(
                    "__wab_instance",
                    sty.pricingTableFeatureItem__oAvdo
                  )}
                >
                  {
                    "Buy now and pay later, credit line with up to 60 day net terms"
                  }
                </PricingTableFeatureItem>

                <PricingTableFeatureItem
                  checkColor={"brand"}
                  className={classNames(
                    "__wab_instance",
                    sty.pricingTableFeatureItem__a09Wi
                  )}
                >
                  {"Enhanced budget and expense management"}
                </PricingTableFeatureItem>

                <PricingTableFeatureItem
                  checkColor={"brand"}
                  className={classNames(
                    "__wab_instance",
                    sty.pricingTableFeatureItem__j8AH3
                  )}
                >
                  {
                    "Advanced compliance management, for security, IP, NDA’s, and more"
                  }
                </PricingTableFeatureItem>

                <CellDividerIcon
                  className={classNames(projectcss.all, sty.svg__kKhEv)}
                  role={"img"}
                />

                <div
                  className={classNames(projectcss.all, sty.freeBox___4Frk6)}
                >
                  <ButtonPrimary
                    className={classNames(
                      "__wab_instance",
                      sty.buttonPrimary__rVfd9
                    )}
                    color={"brand"}
                    destination={
                      "https://intrepidventures.typeform.com/to/MthpVWrA"
                    }
                    rounded={"rounded"}
                    size={"_360"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ysfgi
                      )}
                    >
                      {"Request access"}
                    </div>
                  </ButtonPrimary>
                </div>
              </p.Stack>
            </div>
          </p.Stack>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"enterpriseSolutions"}
        data-plasmic-override={overrides.enterpriseSolutions}
        hasGap={true}
        className={classNames(projectcss.all, sty.enterpriseSolutions)}
      >
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__x4Htp)}>
            <BadgeSectionTitle
              border={"border"}
              className={classNames(
                "__wab_instance",
                sty.badgeSectionTitle__c2Gsu
              )}
              colors={"brand"}
              sectionTitleSlot={"enterprise"}
            />
          </div>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__jbj1X)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__u3Wwe)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ufSbc
              )}
            >
              {"Enterprise solutions"}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___4PlZs)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vgIZn
              )}
            >
              {
                "Create a custom solution for your global remote company. Get volume pricing and bespoke functionality designed around your unique compliance and payment needs."
              }
            </div>
          </div>

          <ButtonPrimary
            className={classNames("__wab_instance", sty.buttonPrimary__cVnXz)}
            color={"brand"}
            destination={"https://intrepidventures.typeform.com/to/MthpVWrA"}
            rounded={"rounded"}
            size={"_360"}
            type={"primary"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ul0Se
              )}
            >
              {"Request access"}
            </div>
          </ButtonPrimary>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "pricing",
    "monthlyPricingDiv",
    "annualPricingDiv",
    "enterpriseSolutions"
  ],

  pricing: ["pricing", "monthlyPricingDiv", "annualPricingDiv"],
  monthlyPricingDiv: ["monthlyPricingDiv"],
  annualPricingDiv: ["annualPricingDiv"],
  enterpriseSolutions: ["enterpriseSolutions"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMemberPricingComponent__ArgProps,
      internalVariantPropNames: PlasmicMemberPricingComponent__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicMemberPricingComponent__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMemberPricingComponent";
  } else {
    func.displayName = `PlasmicMemberPricingComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicMemberPricingComponent = Object.assign(
  // Top-level PlasmicMemberPricingComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pricing: makeNodeComponent("pricing"),
    monthlyPricingDiv: makeNodeComponent("monthlyPricingDiv"),
    annualPricingDiv: makeNodeComponent("annualPricingDiv"),
    enterpriseSolutions: makeNodeComponent("enterpriseSolutions"),
    // Metadata about props expected for PlasmicMemberPricingComponent
    internalVariantProps: PlasmicMemberPricingComponent__VariantProps,
    internalArgProps: PlasmicMemberPricingComponent__ArgProps
  }
);

export default PlasmicMemberPricingComponent;
/* prettier-ignore-end */