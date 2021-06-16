// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: 61iZdr_d05z
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
import InputTextField from "../../InputTextField"; // plasmic-import: ATs3nXJ-Tjc/component
import ToolTipServiceListing from "../../ToolTipServiceListing"; // plasmic-import: GDvJTAih6h/component
import InputTextRich from "../../InputTextRich"; // plasmic-import: V-SFFoHu_mr/component
import ServiceListingProcessCard from "../../ServiceListingProcessCard"; // plasmic-import: 3CifhlTUu0m/component
import FooterServiceListing from "../../FooterServiceListing"; // plasmic-import: XhB16zaJfQ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicServiceListingDescription.module.css"; // plasmic-import: 61iZdr_d05z/css

export const PlasmicServiceListingDescription__VariantProps = new Array();

export const PlasmicServiceListingDescription__ArgProps = new Array();

function PlasmicServiceListingDescription__RenderFunc(props) {
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

      <style global jsx>{`
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
              {"Description"}
            </NavbarServiceListing>

            <ProgressBar
              data-plasmic-name={"progressBar"}
              data-plasmic-override={overrides.progressBar}
              className={classNames("__wab_instance", sty.progressBar)}
              progress={"_30"}
            />
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___09Zdm)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionTitleBlock"}
              data-plasmic-override={overrides.questionTitleBlock}
              hasGap={true}
              className={classNames(defaultcss.all, sty.questionTitleBlock)}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__xYvX3
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__nr931
                    )}
                  >
                    {"Step 2"}
                  </div>
                }
                slot2={"Write a title for your service. Max: 70 characters."}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__laelq
                  )}
                >
                  {"What is the name/title of your service?"}
                </div>
              </CardQuestionServiceListing>

              <InputTextField
                data-plasmic-name={"inputTextField"}
                data-plasmic-override={overrides.inputTextField}
                className={classNames("__wab_instance", sty.inputTextField)}
              />
            </p.Stack>

            <ToolTipServiceListing
              className={classNames(
                "__wab_instance",
                sty.toolTipServiceListing__eMfGr
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
            className={classNames(defaultcss.all, sty.box__qeVgc)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionDescriptionBlock"}
              data-plasmic-override={overrides.questionDescriptionBlock}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                sty.questionDescriptionBlock
              )}
            >
              <CardQuestionServiceListing
                className={classNames(
                  "__wab_instance",
                  sty.cardQuestionServiceListing__ts7RO
                )}
                overline={"overline"}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__uc5Jc
                    )}
                  >
                    {"Step 2"}
                  </div>
                }
                slot2={
                  "Describe the service you’re offering. Max: 150 characters"
                }
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___0B5MK
                  )}
                >
                  {"What is the description of your service?"}
                </div>
              </CardQuestionServiceListing>

              <InputTextRich
                className={classNames(
                  "__wab_instance",
                  sty.inputTextRich__tm58R
                )}
                description={"description"}
                headline={"headline"}
              />
            </p.Stack>

            <ToolTipServiceListing
              className={classNames(
                "__wab_instance",
                sty.toolTipServiceListing__rczMv
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
            className={classNames(defaultcss.all, sty.box__axd3H)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"questionProcessBlock"}
              data-plasmic-override={overrides.questionProcessBlock}
              hasGap={true}
              className={classNames(defaultcss.all, sty.questionProcessBlock)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__j5P5R)}
              >
                <CardQuestionServiceListing
                  className={classNames(
                    "__wab_instance",
                    sty.cardQuestionServiceListing___7VrCf
                  )}
                  overline={"overline"}
                  slot={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__vqvCv
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
                        sty.box__wEkof
                      )}
                    >
                      {"Describe a minimum of 1 step, to maximum of 8 steps."}
                    </div>
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__io8Zz
                    )}
                  >
                    {"What is your unique service delivery process?"}
                  </div>
                </CardQuestionServiceListing>
              </p.Stack>

              <InputTextRich
                className={classNames(
                  "__wab_instance",
                  sty.inputTextRich__y56Zz
                )}
                description={"description"}
              >
                {"Short overview"}
              </InputTextRich>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__oslf)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__mnyPp
                  )}
                >
                  {"Description"}
                </div>

                <ServiceListingProcessCard
                  data-plasmic-name={"serviceListingProcessCard"}
                  data-plasmic-override={overrides.serviceListingProcessCard}
                  className={classNames(
                    "__wab_instance",
                    sty.serviceListingProcessCard
                  )}
                />
              </p.Stack>
            </p.Stack>

            <ToolTipServiceListing
              className={classNames(
                "__wab_instance",
                sty.toolTipServiceListing__anMlZ
              )}
              slot={"Process & outcomes"}
            >
              {
                "Describe the key steps/process involved to deliver your service to the client.Provide a detailed, step-by-step overview or outline on how a project will progress.The process you use to deliver your service, provides insight to the client on the level of service you offer, and the details of the experience you provide to deliver the desired outcome."
              }
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
    "questionTitleBlock",
    "inputTextField",
    "questionDescriptionBlock",
    "questionProcessBlock",
    "serviceListingProcessCard",
    "footerServiceListing"
  ],

  serviceListingNavbar: [
    "serviceListingNavbar",
    "navbarServiceListing",
    "progressBar"
  ],

  navbarServiceListing: ["navbarServiceListing"],
  progressBar: ["progressBar"],
  questionTitleBlock: ["questionTitleBlock", "inputTextField"],
  inputTextField: ["inputTextField"],
  questionDescriptionBlock: ["questionDescriptionBlock"],
  questionProcessBlock: ["questionProcessBlock", "serviceListingProcessCard"],
  serviceListingProcessCard: ["serviceListingProcessCard"],
  footerServiceListing: ["footerServiceListing"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicServiceListingDescription__ArgProps,
      internalVariantPropNames: PlasmicServiceListingDescription__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicServiceListingDescription__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServiceListingDescription";
  } else {
    func.displayName = `PlasmicServiceListingDescription.${nodeName}`;
  }
  return func;
}

export const PlasmicServiceListingDescription = Object.assign(
  // Top-level PlasmicServiceListingDescription renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    serviceListingNavbar: makeNodeComponent("serviceListingNavbar"),
    navbarServiceListing: makeNodeComponent("navbarServiceListing"),
    progressBar: makeNodeComponent("progressBar"),
    questionTitleBlock: makeNodeComponent("questionTitleBlock"),
    inputTextField: makeNodeComponent("inputTextField"),
    questionDescriptionBlock: makeNodeComponent("questionDescriptionBlock"),
    questionProcessBlock: makeNodeComponent("questionProcessBlock"),
    serviceListingProcessCard: makeNodeComponent("serviceListingProcessCard"),
    footerServiceListing: makeNodeComponent("footerServiceListing"),
    // Metadata about props expected for PlasmicServiceListingDescription
    internalVariantProps: PlasmicServiceListingDescription__VariantProps,
    internalArgProps: PlasmicServiceListingDescription__ArgProps
  }
);

export default PlasmicServiceListingDescription;
/* prettier-ignore-end */
