// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: CqX-cwjNXm
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import CardHeaderTitleDisplay from "../../CardHeaderTitleDisplay"; // plasmic-import: 1wS8JpmDTD/component
import MarketUserProfile from "../../MarketUserProfile"; // plasmic-import: Kq0Npq6HpD/component
import CardServiceDisplay from "../../CardServiceDisplay"; // plasmic-import: 82Lpaa43lIc/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import * as sty from "./PlasmicMarket.module.css"; // plasmic-import: CqX-cwjNXm/css

export const PlasmicMarket__VariantProps = new Array();

export const PlasmicMarket__ArgProps = new Array();

function PlasmicMarket__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
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
          <div
            data-plasmic-name={"sectionMarketHeadline"}
            data-plasmic-override={overrides.sectionMarketHeadline}
            className={classNames(defaultcss.all, sty.sectionMarketHeadline)}
          >
            <CardHeaderTitleDisplay
              className={classNames(
                "__wab_instance",
                sty.cardHeaderTitleDisplay___4KxLs
              )}
              headings={[]}
              size={"_360"}
              slot={"Services"}
              textDisplay={"Market"}
              textSubhead={
                "Discover unique services to start, launch, and grow your business."
              }
            />
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"sectionNewServiceListings"}
            data-plasmic-override={overrides.sectionNewServiceListings}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionNewServiceListings
            )}
          >
            <CardHeaderTitleDisplay
              className={classNames(
                "__wab_instance",
                sty.cardHeaderTitleDisplay__upcyJ
              )}
              headings={["title"]}
              slot={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__o0Huz
                  )}
                >
                  {"New partners"}
                </div>
              }
              textSubhead={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__wxNnk
                  )}
                >
                  {"Who's new and who's hot within the commmunity."}
                </div>
              }
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__x52DM)}
            >
              <CardHeaderTitleDisplay
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitleDisplay__lJkoc
                )}
                headings={["title", "headline"]}
                textSubhead={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___8Qeyr
                    )}
                  >
                    {"Rising stars"}
                  </div>
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__peEx)}
              >
                <MarketUserProfile
                  data-plasmic-name={"marketUserProfile"}
                  data-plasmic-override={overrides.marketUserProfile}
                  className={classNames(
                    "__wab_instance",
                    sty.marketUserProfile
                  )}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"sectionServiceCollections"}
            data-plasmic-override={overrides.sectionServiceCollections}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionServiceCollections
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__w5Mqp)}
            >
              <CardHeaderTitleDisplay
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitleDisplay__iuvNa
                )}
                headings={["title"]}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__aC4Uc
                    )}
                  >
                    {"Go to market fast"}
                  </div>
                }
                textSubhead={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__fGgzj
                    )}
                  >
                    {
                      "A selection of services that will help you launch your next project."
                    }
                  </div>
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox___9OZlj)}
              >
                <CardServiceDisplay
                  data-plasmic-name={"cardServiceDisplay"}
                  data-plasmic-override={overrides.cardServiceDisplay}
                  boost={"boost"}
                  className={classNames(
                    "__wab_instance",
                    sty.cardServiceDisplay
                  )}
                  membership={"membership"}
                  price={"price"}
                  rating={"rating"}
                  size={"_270X270"}
                  userStats={"userStats"}
                  verification={"verification"}
                />
              </p.Stack>
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
    "sectionMarketHeadline",
    "sectionNewServiceListings",
    "marketUserProfile",
    "sectionServiceCollections",
    "cardServiceDisplay"
  ],

  sectionMarketHeadline: ["sectionMarketHeadline"],
  sectionNewServiceListings: ["sectionNewServiceListings", "marketUserProfile"],
  marketUserProfile: ["marketUserProfile"],
  sectionServiceCollections: [
    "sectionServiceCollections",
    "cardServiceDisplay"
  ],

  cardServiceDisplay: ["cardServiceDisplay"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMarket__ArgProps,
      internalVariantPropNames: PlasmicMarket__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicMarket__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMarket";
  } else {
    func.displayName = `PlasmicMarket.${nodeName}`;
  }
  return func;
}

export const PlasmicMarket = Object.assign(
  // Top-level PlasmicMarket renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionMarketHeadline: makeNodeComponent("sectionMarketHeadline"),
    sectionNewServiceListings: makeNodeComponent("sectionNewServiceListings"),
    marketUserProfile: makeNodeComponent("marketUserProfile"),
    sectionServiceCollections: makeNodeComponent("sectionServiceCollections"),
    cardServiceDisplay: makeNodeComponent("cardServiceDisplay"),
    // Metadata about props expected for PlasmicMarket
    internalVariantProps: PlasmicMarket__VariantProps,
    internalArgProps: PlasmicMarket__ArgProps
  }
);

export default PlasmicMarket;
/* prettier-ignore-end */
