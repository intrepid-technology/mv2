// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: izEK-vpKs14
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import InputFormCardPrimary from "../../InputFormCardPrimary"; // plasmic-import: 7K8uSXduxTH/component
import InputFormCardEmailSearchBadge from "../../InputFormCardEmailSearchBadge"; // plasmic-import: 0JndNhJNnle/component
import ChipDisplay from "../../ChipDisplay"; // plasmic-import: 9_NbJKBtbu/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicBusinessIndustry.module.css"; // plasmic-import: izEK-vpKs14/css

export const PlasmicBusinessIndustry__VariantProps = new Array();

export const PlasmicBusinessIndustry__ArgProps = new Array();

function PlasmicBusinessIndustry__RenderFunc(props) {
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
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___6MfvN)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__ma8Tu)}
            >
              <InputFormCardPrimary
                data-plasmic-name={"companyIndustryCard"}
                data-plasmic-override={overrides.companyIndustryCard}
                button={"button"}
                className={classNames(
                  "__wab_instance",
                  sty.companyIndustryCard
                )}
                description={"Helps with matching you to the right members "}
                dropdownHeadlineA={"Industry"}
                dropdownHeadlineB={"Company size"}
                headline={"Company size & industry"}
                inputType={"dropdownDropdown"}
                subDescription={"subDescription"}
                subHead={"Select the industry and the size of your company"}
              />

              <InputFormCardPrimary
                data-plasmic-name={"companymarketsCard"}
                data-plasmic-override={overrides.companymarketsCard}
                button={"button"}
                className={classNames("__wab_instance", sty.companymarketsCard)}
                description={"Helps with matching you to the right members "}
                dropdownHeadlineA={"Industry"}
                dropdownHeadlineB={"Company size"}
                headline={"Markets & customers"}
                inputType={"dropdownDropdown"}
                subDescription={"subDescription"}
                subHead={
                  "Select the industry and company size of your desired partners or customers."
                }
              />

              <InputFormCardPrimary
                data-plasmic-name={"companyProjectsCard"}
                data-plasmic-override={overrides.companyProjectsCard}
                button={"button"}
                className={classNames(
                  "__wab_instance",
                  sty.companyProjectsCard
                )}
                description={"Helps with matching you to the right members "}
                descriptionA={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__fp4Ua
                    )}
                  >
                    {"Description"}
                  </div>
                }
                descriptionB={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__qi4Ni
                    )}
                  >
                    {"Description"}
                  </div>
                }
                dropdownHeadlineA={"Project size"}
                dropdownHeadlineB={"Rate per hour"}
                headline={"Projects & rates"}
                inputType={"dropdownDropdown"}
                subDescription={"subDescription"}
                subHead={
                  "Select the project size and rate per hour of your services, or your desired partners."
                }
              />

              <InputFormCardEmailSearchBadge
                data-plasmic-name={"companyInterestsCard"}
                data-plasmic-override={overrides.companyInterestsCard}
                button={"button"}
                className={classNames(
                  "__wab_instance",
                  sty.companyInterestsCard
                )}
                description={"Add up to 8 categories"}
                email={
                  <input
                    data-plasmic-name={"textbox"}
                    data-plasmic-override={overrides.textbox}
                    className={classNames(defaultcss.input, sty.textbox)}
                    placeholder={"search for skills.."}
                    size={1}
                    type={"text"}
                    value={""}
                  />
                }
                headline={"Interests"}
                search={"search"}
                subDescription={"subDescription"}
                subHead={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__j8Gye
                    )}
                  >
                    {
                      "Search and enter the products/services you are interested in, separated by commas"
                    }
                  </div>
                }
              >
                <ChipDisplay
                  data-plasmic-name={"chipDisplay"}
                  data-plasmic-override={overrides.chipDisplay}
                  className={classNames("__wab_instance", sty.chipDisplay)}
                  color={"brand"}
                  type={"ghost"}
                />
              </InputFormCardEmailSearchBadge>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "companyIndustryCard",
    "companymarketsCard",
    "companyProjectsCard",
    "companyInterestsCard",
    "textbox",
    "chipDisplay"
  ],

  companyIndustryCard: ["companyIndustryCard"],
  companymarketsCard: ["companymarketsCard"],
  companyProjectsCard: ["companyProjectsCard"],
  companyInterestsCard: ["companyInterestsCard", "textbox", "chipDisplay"],
  textbox: ["textbox"],
  chipDisplay: ["chipDisplay"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBusinessIndustry__ArgProps,
      internalVariantPropNames: PlasmicBusinessIndustry__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicBusinessIndustry__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBusinessIndustry";
  } else {
    func.displayName = `PlasmicBusinessIndustry.${nodeName}`;
  }
  return func;
}

export const PlasmicBusinessIndustry = Object.assign(
  // Top-level PlasmicBusinessIndustry renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    companyIndustryCard: makeNodeComponent("companyIndustryCard"),
    companymarketsCard: makeNodeComponent("companymarketsCard"),
    companyProjectsCard: makeNodeComponent("companyProjectsCard"),
    companyInterestsCard: makeNodeComponent("companyInterestsCard"),
    textbox: makeNodeComponent("textbox"),
    chipDisplay: makeNodeComponent("chipDisplay"),
    // Metadata about props expected for PlasmicBusinessIndustry
    internalVariantProps: PlasmicBusinessIndustry__VariantProps,
    internalArgProps: PlasmicBusinessIndustry__ArgProps
  }
);

export default PlasmicBusinessIndustry;
/* prettier-ignore-end */
