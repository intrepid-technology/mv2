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
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavbarServiceListing from "../../NavbarServiceListing"; // plasmic-import: PUBVQZa84u/component
import ProgressBar from "../../ProgressBar"; // plasmic-import: jFfoBtNGGG/component
import CardQuestionServiceListing from "../../CardQuestionServiceListing"; // plasmic-import: hAog-BJq-d/component
import NativeSelectInput from "../../NativeSelectInput"; // plasmic-import: 6rjTfqGTn_/component
import ToolTipServiceListing from "../../ToolTipServiceListing"; // plasmic-import: GDvJTAih6h/component
import MultiCheckboxInput from "../../MultiCheckboxInput"; // plasmic-import: 6TMzn6NJGN/component
import TextAreaInput from "../../TextAreaInput"; // plasmic-import: 0ftTMwkv9kS/component
import MultiSelectInput from "../../MultiSelectInput"; // plasmic-import: hjWInH_vco/component
import { useScreenVariants as useScreenVariantso9SjFZaOqjqz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o9sjFZaOQJQZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicServicelistingcategory.module.css"; // plasmic-import: NDaIYzZaPz/css

export const PlasmicServicelistingcategory__VariantProps = new Array();

export const PlasmicServicelistingcategory__ArgProps = new Array();

function PlasmicServicelistingcategory__RenderFunc(props) {
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
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"serviceListingNavbar"}
            data-plasmic-override={overrides.serviceListingNavbar}
            className={classNames(projectcss.all, sty.serviceListingNavbar)}
          >
            <NavbarServiceListing
              data-plasmic-name={"navbarServiceListing"}
              data-plasmic-override={overrides.navbarServiceListing}
              className={classNames("__wab_instance", sty.navbarServiceListing)}
              hideBack={true}
              nextButtonDestination={"/service/listing/description"}
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
            className={classNames(projectcss.all, sty.freeBox__lZF)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionCategoryBlock"}
              data-plasmic-override={overrides.questionCategoryBlock}
              hasGap={true}
              className={classNames(projectcss.all, sty.questionCategoryBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__dcOn
                )}
                slot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pkXf3
                    )}
                  >
                    {"Step 1"}
                  </div>
                }
                slot2={"Choose a category and select a service."}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zq3QH
                  )}
                >
                  {"What kind of service are you listing?"}
                </div>
              </CardQuestionServiceListing>

              <p.Stack
                as={"div"}
                data-plasmic-name={"dropdown"}
                data-plasmic-override={overrides.dropdown}
                hasGap={true}
                className={classNames(projectcss.all, sty.dropdown)}
              >
                <NativeSelectInput
                  data-plasmic-name={"serviceCategorySelectInput"}
                  data-plasmic-override={overrides.serviceCategorySelectInput}
                  className={classNames(
                    "__wab_instance",
                    sty.serviceCategorySelectInput
                  )}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yrj5V
                      )}
                    >
                      {"Service Category"}
                    </div>
                  }
                />

                <NativeSelectInput
                  data-plasmic-name={"serviceSelectInput"}
                  data-plasmic-override={overrides.serviceSelectInput}
                  className={classNames(
                    "__wab_instance",
                    sty.serviceSelectInput
                  )}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__k7Btz
                      )}
                    >
                      {"Service"}
                    </div>
                  }
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
            className={classNames(projectcss.all, sty.freeBox__jpq5H)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionFeaturesBlock"}
              data-plasmic-override={overrides.questionFeaturesBlock}
              hasGap={true}
              className={classNames(projectcss.all, sty.questionFeaturesBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing___8HTdO
                )}
                overline={true}
                slot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3EZpz
                    )}
                  >
                    {"Step 2"}
                  </div>
                }
                slot2={"Select all that apply"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1Seve
                  )}
                >
                  {"What features are included?"}
                </div>
              </CardQuestionServiceListing>

              <MultiCheckboxInput
                data-plasmic-name={"serviceFeaturesCheckboxes"}
                data-plasmic-override={overrides.serviceFeaturesCheckboxes}
                className={classNames(
                  "__wab_instance",
                  sty.serviceFeaturesCheckboxes
                )}
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
            className={classNames(projectcss.all, sty.freeBox__wMqc)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionContentBlock"}
              data-plasmic-override={overrides.questionContentBlock}
              hasGap={true}
              className={classNames(projectcss.all, sty.questionContentBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__xVvw0
                )}
                overline={true}
                slot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ec2Tr
                    )}
                  >
                    {"Step 2"}
                  </div>
                }
                slot2={"Describe the content that is included in your service"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bmB1
                  )}
                >
                  {"What content is included?"}
                </div>
              </CardQuestionServiceListing>

              <TextAreaInput
                data-plasmic-name={"serviceContentTextArea"}
                data-plasmic-override={overrides.serviceContentTextArea}
                className={classNames(
                  "__wab_instance",
                  sty.serviceContentTextArea
                )}
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
            className={classNames(projectcss.all, sty.freeBox__anJua)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionIndustryBlock"}
              data-plasmic-override={overrides.questionIndustryBlock}
              hasGap={true}
              className={classNames(projectcss.all, sty.questionIndustryBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__uTqYv
                )}
                overline={true}
                slot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__x2Yx9
                    )}
                  >
                    {"Step 2"}
                  </div>
                }
                slot2={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bIpMh
                    )}
                  >
                    {"Choose industry tags for better matching. Max 5 tags."}
                  </div>
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kUwyk
                  )}
                >
                  {"What is the industry community for your service?"}
                </div>
              </CardQuestionServiceListing>

              <MultiSelectInput
                data-plasmic-name={"serviceIndustriesSelect"}
                data-plasmic-override={overrides.serviceIndustriesSelect}
                className={classNames(
                  "__wab_instance",
                  sty.serviceIndustriesSelect
                )}
              />
            </p.Stack>

            <ToolTipServiceListing
              className={classNames(
                "__wab_instance",
                sty.toolTipServiceListing__n3X4A
              )}
              slot={"About industry categories"}
            >
              {
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu"
              }
            </ToolTipServiceListing>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__sdBU)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionToolsBlock"}
              data-plasmic-override={overrides.questionToolsBlock}
              hasGap={true}
              className={classNames(projectcss.all, sty.questionToolsBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__f8IjI
                )}
                overline={true}
                slot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5Hiy
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
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dwbMk
                  )}
                >
                  {"What tools, or technology do you use for your service?"}
                </div>
              </CardQuestionServiceListing>

              <MultiSelectInput
                data-plasmic-name={"serviceToolsSelect"}
                data-plasmic-override={overrides.serviceToolsSelect}
                className={classNames("__wab_instance", sty.serviceToolsSelect)}
              />
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
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1Gzs4
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu"
                }
              </div>
            </ToolTipServiceListing>
          </p.Stack>
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
    "dropdown",
    "serviceCategorySelectInput",
    "serviceSelectInput",
    "questionFeaturesBlock",
    "serviceFeaturesCheckboxes",
    "questionContentBlock",
    "serviceContentTextArea",
    "questionIndustryBlock",
    "serviceIndustriesSelect",
    "questionToolsBlock",
    "serviceToolsSelect"
  ],

  serviceListingNavbar: [
    "serviceListingNavbar",
    "navbarServiceListing",
    "progressBar"
  ],

  navbarServiceListing: ["navbarServiceListing"],
  progressBar: ["progressBar"],
  questionCategoryBlock: [
    "questionCategoryBlock",
    "dropdown",
    "serviceCategorySelectInput",
    "serviceSelectInput"
  ],

  dropdown: ["dropdown", "serviceCategorySelectInput", "serviceSelectInput"],
  serviceCategorySelectInput: ["serviceCategorySelectInput"],
  serviceSelectInput: ["serviceSelectInput"],
  questionFeaturesBlock: ["questionFeaturesBlock", "serviceFeaturesCheckboxes"],
  serviceFeaturesCheckboxes: ["serviceFeaturesCheckboxes"],
  questionContentBlock: ["questionContentBlock", "serviceContentTextArea"],
  serviceContentTextArea: ["serviceContentTextArea"],
  questionIndustryBlock: ["questionIndustryBlock", "serviceIndustriesSelect"],
  serviceIndustriesSelect: ["serviceIndustriesSelect"],
  questionToolsBlock: ["questionToolsBlock", "serviceToolsSelect"],
  serviceToolsSelect: ["serviceToolsSelect"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicServicelistingcategory__ArgProps,
      internalVariantPropNames: PlasmicServicelistingcategory__VariantProps
    });

    return PlasmicServicelistingcategory__RenderFunc({
      variants,
      args,
      overrides,
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
    dropdown: makeNodeComponent("dropdown"),
    serviceCategorySelectInput: makeNodeComponent("serviceCategorySelectInput"),
    serviceSelectInput: makeNodeComponent("serviceSelectInput"),
    questionFeaturesBlock: makeNodeComponent("questionFeaturesBlock"),
    serviceFeaturesCheckboxes: makeNodeComponent("serviceFeaturesCheckboxes"),
    questionContentBlock: makeNodeComponent("questionContentBlock"),
    serviceContentTextArea: makeNodeComponent("serviceContentTextArea"),
    questionIndustryBlock: makeNodeComponent("questionIndustryBlock"),
    serviceIndustriesSelect: makeNodeComponent("serviceIndustriesSelect"),
    questionToolsBlock: makeNodeComponent("questionToolsBlock"),
    serviceToolsSelect: makeNodeComponent("serviceToolsSelect"),
    // Metadata about props expected for PlasmicServicelistingcategory
    internalVariantProps: PlasmicServicelistingcategory__VariantProps,
    internalArgProps: PlasmicServicelistingcategory__ArgProps
  }
);

export default PlasmicServicelistingcategory;
/* prettier-ignore-end */
