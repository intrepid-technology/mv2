// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: NDaIYzZaPz
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavbarServiceListing from "../../NavbarServiceListing"; // plasmic-import: PUBVQZa84u/component
import ProgressBar from "../../ProgressBar"; // plasmic-import: jFfoBtNGGG/component
import CardQuestionServiceListing from "../../CardQuestionServiceListing"; // plasmic-import: hAog-BJq-d/component
import ButtonFormDropdownSelect from "../../ButtonFormDropdownSelect"; // plasmic-import: s2oJmDwLX-/component
import ToolTipServiceListing from "../../ToolTipServiceListing"; // plasmic-import: GDvJTAih6h/component
import SectionServiceFeatures from "../../SectionServiceFeatures"; // plasmic-import: Ulc7rzEWW6/component
import SectionServiceContent from "../../SectionServiceContent"; // plasmic-import: 62pZUpsW52/component
import SearchBadge from "../../SearchBadge"; // plasmic-import: DreZnHdEQY/component
import ChipBadgeDisplay from "../../ChipBadgeDisplay"; // plasmic-import: 9_NbJKBtbu/component
import FooterServiceListing from "../../FooterServiceListing"; // plasmic-import: XhB16zaJfQ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicServicelistingcategory.module.css"; // plasmic-import: NDaIYzZaPz/css

export const PlasmicServicelistingcategory__VariantProps = new Array();

export const PlasmicServicelistingcategory__ArgProps = new Array();

function PlasmicServicelistingcategory__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <p.Stack
          as={"form"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"serviceListingNavbar"}
            data-plasmic-override={overrides.serviceListingNavbar}
            className={classNames(defaultcss.all, sty.serviceListingNavbar)}
          >
            <NavbarServiceListing
              data-plasmic-name={"navbarServiceListing"}
              data-plasmic-override={overrides.navbarServiceListing}
              className={classNames("__wab_instance", sty.navbarServiceListing)}
            >
              {"Category"}
            </NavbarServiceListing>

            <ProgressBar
              data-plasmic-name={"progressBar"}
              data-plasmic-override={overrides.progressBar}
              className={classNames("__wab_instance", sty.progressBar)}
              progress={"_20"}
            />
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__lZF)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionCategoryBlock"}
              data-plasmic-override={overrides.questionCategoryBlock}
              hasGap={true}
              className={classNames(defaultcss.all, sty.questionCategoryBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__dcOn
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__pkXf3
                    )}
                  >
                    {"Step 1"}
                  </div>
                }
                slot2={"Choose a category and select a service."}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__zq3QH
                  )}
                >
                  {"What kind of service are you listing?"}
                </div>
              </CardQuestionServiceListing>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__x298X)}
              >
                <ButtonFormDropdownSelect
                  dropdownTitle={"Select"}
                  headlineLabelTitle={"Select a service category"}
                  size={"_360X40"}
                />

                <ButtonFormDropdownSelect
                  className={classNames(
                    "__wab_instance",
                    sty.buttonFormDropdownSelect__tbnG
                  )}
                  dropdownTitle={"Select"}
                  headlineLabelTitle={"Select a service"}
                  size={"_360X40"}
                />
              </p.Stack>
            </p.Stack>

            <ToolTipServiceListing
              className={classNames(
                "__wab_instance",
                sty.toolTipServiceListing__ksFga
              )}
              slot={"Choosing listing categories"}
            >
              {
                "Selecting accurate categories helps Members know what to expect when it comes to format, features, outcomes, and level of service they'll receive when creating digital products with you, or your team."
              }
            </ToolTipServiceListing>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__jpq5H)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionFeaturesBlock"}
              data-plasmic-override={overrides.questionFeaturesBlock}
              hasGap={true}
              className={classNames(defaultcss.all, sty.questionFeaturesBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing___8HTdO
                )}
                overline={"overline"}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___3EZpz
                    )}
                  >
                    {"Step 2"}
                  </div>
                }
                slot2={"Select all that apply"}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___1Seve
                  )}
                >
                  {"What features are included?"}
                </div>
              </CardQuestionServiceListing>

              <SectionServiceFeatures
                data-plasmic-name={"sectionServiceFeatures"}
                data-plasmic-override={overrides.sectionServiceFeatures}
                breadcrumbs={"breadcrumbs"}
                className={classNames(
                  "__wab_instance",
                  sty.sectionServiceFeatures
                )}
                uxDesign={"userResearch"}
              />
            </p.Stack>

            <ToolTipServiceListing
              className={classNames(
                "__wab_instance",
                sty.toolTipServiceListing___9IGyb
              )}
              slot={"Selecting features"}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__wMqc)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionContentBlock"}
              data-plasmic-override={overrides.questionContentBlock}
              hasGap={true}
              className={classNames(defaultcss.all, sty.questionContentBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__xVvw0
                )}
                overline={"overline"}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__ec2Tr
                    )}
                  >
                    {"Step 2"}
                  </div>
                }
                slot2={"Enter a number for all that apply to your service"}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__bmB1
                  )}
                >
                  {"What content is included?"}
                </div>
              </CardQuestionServiceListing>

              <SectionServiceContent
                data-plasmic-name={"sectionServiceContent"}
                data-plasmic-override={overrides.sectionServiceContent}
                breadcrumbs={"breadcrumbs"}
                className={classNames(
                  "__wab_instance",
                  sty.sectionServiceContent
                )}
                serviceType={"webMultiplePage"}
              />
            </p.Stack>

            <ToolTipServiceListing
              className={classNames(
                "__wab_instance",
                sty.toolTipServiceListing__bCaGm
              )}
              slot={"Including content"}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__anJua)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionIndustryBlock"}
              data-plasmic-override={overrides.questionIndustryBlock}
              hasGap={true}
              className={classNames(defaultcss.all, sty.questionIndustryBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__uTqYv
                )}
                overline={"overline"}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__x2Yx9
                    )}
                  >
                    {"Step 2"}
                  </div>
                }
                slot2={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__bIpMh
                    )}
                  >
                    {"Choose industry tags for better matching. Max 5 tags."}
                  </div>
                }
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__kUwyk
                  )}
                >
                  {"What is the industry community for your service?"}
                </div>
              </CardQuestionServiceListing>

              <SearchBadge
                className={classNames("__wab_instance", sty.searchBadge__icJl8)}
              >
                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__pz6Zd
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__iTzFp
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__eu6JQ
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__i3Mav
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__h93Hl
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__kItB5
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__y9Mo
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___3KdQz
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__fenyn
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__bDUg
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__tsx9I
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__cCYr
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>
              </SearchBadge>
            </p.Stack>

            <ToolTipServiceListing
              className={classNames(
                "__wab_instance",
                sty.toolTipServiceListing__n3X4A
              )}
              slot={"About industry categories"}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__sdBU)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionToolsBlock"}
              data-plasmic-override={overrides.questionToolsBlock}
              hasGap={true}
              className={classNames(defaultcss.all, sty.questionToolsBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__f8IjI
                )}
                overline={"overline"}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___5Hiy
                    )}
                  >
                    {"Step 2"}
                  </div>
                }
                slot2={
                  "Choose tool tags to increase visibility in searches. Max 5 tags."
                }
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__dwbMk
                  )}
                >
                  {"What tools, or technology do you use for your service?"}
                </div>
              </CardQuestionServiceListing>

              <SearchBadge
                className={classNames(
                  "__wab_instance",
                  sty.searchBadge___0Gt9X
                )}
              >
                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__lmADv
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__x1CJ
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__qZrmk
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__xco1P
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__nbmqT
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___9Y1PI
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__ul2Kn
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__ptPw5
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay___4OWSg
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__ioDe
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>

                <ChipBadgeDisplay
                  className={classNames(
                    "__wab_instance",
                    sty.chipBadgeDisplay__uimjw
                  )}
                  type={"ghost"}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__xKpSu
                    )}
                  >
                    {"Badge"}
                  </div>
                </ChipBadgeDisplay>
              </SearchBadge>
            </p.Stack>

            <ToolTipServiceListing
              className={classNames(
                "__wab_instance",
                sty.toolTipServiceListing___3JwE4
              )}
              slot={"Tools and matching"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___1Gzs4
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu"
                }
              </div>
            </ToolTipServiceListing>
          </p.Stack>

          <FooterServiceListing
            data-plasmic-name={"footerServiceListing"}
            data-plasmic-override={overrides.footerServiceListing}
            className={classNames("__wab_instance", sty.footerServiceListing)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "serviceListingNavbar",
    "navbarServiceListing",
    "progressBar",
    "questionCategoryBlock",
    "questionFeaturesBlock",
    "sectionServiceFeatures",
    "questionContentBlock",
    "sectionServiceContent",
    "questionIndustryBlock",
    "questionToolsBlock",
    "footerServiceListing"
  ],

  serviceListingNavbar: [
    "serviceListingNavbar",
    "navbarServiceListing",
    "progressBar"
  ],

  navbarServiceListing: ["navbarServiceListing"],
  progressBar: ["progressBar"],
  questionCategoryBlock: ["questionCategoryBlock"],
  questionFeaturesBlock: ["questionFeaturesBlock", "sectionServiceFeatures"],
  sectionServiceFeatures: ["sectionServiceFeatures"],
  questionContentBlock: ["questionContentBlock", "sectionServiceContent"],
  sectionServiceContent: ["sectionServiceContent"],
  questionIndustryBlock: ["questionIndustryBlock"],
  questionToolsBlock: ["questionToolsBlock"],
  footerServiceListing: ["footerServiceListing"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicServicelistingcategory__ArgProps,
      internalVariantPropNames: PlasmicServicelistingcategory__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicServicelistingcategory__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServicelistingcategory";
  } else {
    func.displayName = `PlasmicServicelistingcategory.${nodeName}`;
  }
  return func;
}

export const PlasmicServicelistingcategory = Object.assign(
  // Top-level PlasmicServicelistingcategory renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    serviceListingNavbar: makeNodeComponent("serviceListingNavbar"),
    navbarServiceListing: makeNodeComponent("navbarServiceListing"),
    progressBar: makeNodeComponent("progressBar"),
    questionCategoryBlock: makeNodeComponent("questionCategoryBlock"),
    questionFeaturesBlock: makeNodeComponent("questionFeaturesBlock"),
    sectionServiceFeatures: makeNodeComponent("sectionServiceFeatures"),
    questionContentBlock: makeNodeComponent("questionContentBlock"),
    sectionServiceContent: makeNodeComponent("sectionServiceContent"),
    questionIndustryBlock: makeNodeComponent("questionIndustryBlock"),
    questionToolsBlock: makeNodeComponent("questionToolsBlock"),
    footerServiceListing: makeNodeComponent("footerServiceListing"),
    // Metadata about props expected for PlasmicServicelistingcategory
    internalVariantProps: PlasmicServicelistingcategory__VariantProps,
    internalArgProps: PlasmicServicelistingcategory__ArgProps
  }
);

export default PlasmicServicelistingcategory;
/* prettier-ignore-end */
