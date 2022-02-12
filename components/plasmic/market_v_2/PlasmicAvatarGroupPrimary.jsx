// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3jRhtnjrFaHJWfNWC1k5BV
// Component: JOFGXHZCoU
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import UserAvatar from "../../UserAvatar"; // plasmic-import: KmwWxjrE8L/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_market_v_2.module.css"; // plasmic-import: 3jRhtnjrFaHJWfNWC1k5BV/projectcss
import sty from "./PlasmicAvatarGroupPrimary.module.css"; // plasmic-import: JOFGXHZCoU/css

export const PlasmicAvatarGroupPrimary__VariantProps = new Array(
  "amount",
  "groupSize"
);

export const PlasmicAvatarGroupPrimary__ArgProps = new Array();

function PlasmicAvatarGroupPrimary__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
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
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootamount__2_groupSize__16]:
            hasVariant(variants, "amount", "_2") &&
            hasVariant(variants, "groupSize", "_16"),
          [sty.rootgroupSize__16_amount__3]:
            hasVariant(variants, "groupSize", "_16") &&
            hasVariant(variants, "amount", "_3"),
          [sty.rootgroupSize__16_amount__4]:
            hasVariant(variants, "groupSize", "_16") &&
            hasVariant(variants, "amount", "_4")
        }
      )}
    >
      <UserAvatar
        className={classNames("__wab_instance", sty.userAvatar__op0Ag, {
          [sty.userAvataramount__2__op0Ag2Zh4P]: hasVariant(
            variants,
            "amount",
            "_2"
          ),

          [sty.userAvataramount__3__op0AgJSrVy]: hasVariant(
            variants,
            "amount",
            "_3"
          ),

          [sty.userAvataramount__4__op0Ag3OMqc]: hasVariant(
            variants,
            "amount",
            "_4"
          ),

          [sty.userAvataramount__5__op0AgbkkXr]: hasVariant(
            variants,
            "amount",
            "_5"
          ),

          [sty.userAvatargroupSize__16__op0AgIQnN]: hasVariant(
            variants,
            "groupSize",
            "_16"
          ),

          [sty.userAvatargroupSize__18__op0AgtdXvc]: hasVariant(
            variants,
            "groupSize",
            "_18"
          ),

          [sty.userAvatargroupSize__24__op0Ag5Cbp]: hasVariant(
            variants,
            "groupSize",
            "_24"
          ),

          [sty.userAvatargroupSize__32__op0AgoUtaW]: hasVariant(
            variants,
            "groupSize",
            "_32"
          )
        })}
        navUserAvatar16={
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__dolm6
            )}
            src={
              "/plasmic/market_v_2/images/brookeCagleW7Pk4FfrSy0Unsplashjpg.jpeg"
            }
          />
        }
        size={
          hasVariant(variants, "groupSize", "_32")
            ? "_32"
            : hasVariant(variants, "groupSize", "_24")
            ? "_24"
            : hasVariant(variants, "groupSize", "_18")
            ? "_18"
            : hasVariant(variants, "groupSize", "_16")
            ? undefined
            : undefined
        }
      />

      {(hasVariant(variants, "amount", "_5") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar__qw9CS, {
            [sty.userAvataramount__2__qw9CS2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__3__qw9CSjSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            ),

            [sty.userAvataramount__4__qw9CS3OMqc]: hasVariant(
              variants,
              "amount",
              "_4"
            ),

            [sty.userAvataramount__5__qw9CSbkkXr]: hasVariant(
              variants,
              "amount",
              "_5"
            ),

            [sty.userAvatargroupSize__16_amount__5__qw9CSiQnNBkkXr]:
              hasVariant(variants, "groupSize", "_16") &&
              hasVariant(variants, "amount", "_5")
          })}
          size={
            hasVariant(variants, "groupSize", "_16") &&
            hasVariant(variants, "amount", "_5")
              ? undefined
              : "_18"
          }
        />
      ) : null}
      {(hasVariant(variants, "amount", "_5") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar__nsGCi, {
            [sty.userAvataramount__2__nsGCi2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__3__nsGCiJSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            ),

            [sty.userAvataramount__4__nsGCi3OMqc]: hasVariant(
              variants,
              "amount",
              "_4"
            ),

            [sty.userAvataramount__5__nsGCibkkXr]: hasVariant(
              variants,
              "amount",
              "_5"
            ),

            [sty.userAvatargroupSize__16_amount__5__nsGCiIQnNBkkXr]:
              hasVariant(variants, "groupSize", "_16") &&
              hasVariant(variants, "amount", "_5")
          })}
          size={
            hasVariant(variants, "groupSize", "_16") &&
            hasVariant(variants, "amount", "_5")
              ? undefined
              : "_18"
          }
        />
      ) : null}
      {(hasVariant(variants, "amount", "_5") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar__vjSNx, {
            [sty.userAvataramount__2__vjSNx2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__3__vjSNxJSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            ),

            [sty.userAvataramount__4__vjSNx3OMqc]: hasVariant(
              variants,
              "amount",
              "_4"
            ),

            [sty.userAvataramount__5__vjSNxbkkXr]: hasVariant(
              variants,
              "amount",
              "_5"
            ),

            [sty.userAvatargroupSize__16_amount__5__vjSNxIQnNBkkXr]:
              hasVariant(variants, "groupSize", "_16") &&
              hasVariant(variants, "amount", "_5")
          })}
          size={
            hasVariant(variants, "groupSize", "_16") &&
            hasVariant(variants, "amount", "_5")
              ? undefined
              : "_18"
          }
        />
      ) : null}
      {(hasVariant(variants, "amount", "_5") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar___1IX6Z, {
            [sty.userAvataramount__2___1IX6Z2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__3___1IX6ZJSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            ),

            [sty.userAvataramount__4___1IX6Z3OMqc]: hasVariant(
              variants,
              "amount",
              "_4"
            ),

            [sty.userAvataramount__5___1IX6ZbkkXr]: hasVariant(
              variants,
              "amount",
              "_5"
            ),

            [sty.userAvatargroupSize__16_amount__5___1IX6ZIQnNBkkXr]:
              hasVariant(variants, "groupSize", "_16") &&
              hasVariant(variants, "amount", "_5")
          })}
          size={
            hasVariant(variants, "groupSize", "_16") &&
            hasVariant(variants, "amount", "_5")
              ? undefined
              : "_18"
          }
        />
      ) : null}
      {(hasVariant(variants, "amount", "_4") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar__g8Xff, {
            [sty.userAvataramount__2__g8Xff2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__3__g8XffjSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            ),

            [sty.userAvataramount__4__g8Xff3OMqc]: hasVariant(
              variants,
              "amount",
              "_4"
            ),

            [sty.userAvatargroupSize__16_amount__4__g8XffiQnN3OMqc]:
              hasVariant(variants, "groupSize", "_16") &&
              hasVariant(variants, "amount", "_4")
          })}
          size={
            hasVariant(variants, "groupSize", "_16") &&
            hasVariant(variants, "amount", "_4")
              ? undefined
              : "_32"
          }
        />
      ) : null}
      {(hasVariant(variants, "amount", "_4") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar__kf6WJ, {
            [sty.userAvataramount__2__kf6WJ2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__3__kf6WJjSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            ),

            [sty.userAvataramount__4__kf6WJ3OMqc]: hasVariant(
              variants,
              "amount",
              "_4"
            ),

            [sty.userAvatargroupSize__16_amount__4__kf6WJiQnN3OMqc]:
              hasVariant(variants, "groupSize", "_16") &&
              hasVariant(variants, "amount", "_4")
          })}
          size={
            hasVariant(variants, "groupSize", "_16") &&
            hasVariant(variants, "amount", "_4")
              ? undefined
              : "_32"
          }
        />
      ) : null}
      {(hasVariant(variants, "amount", "_4") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar__ipfFb, {
            [sty.userAvataramount__2__ipfFb2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__3__ipfFbjSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            ),

            [sty.userAvataramount__4__ipfFb3OMqc]: hasVariant(
              variants,
              "amount",
              "_4"
            ),

            [sty.userAvataramount__5__ipfFBbkkXr]: hasVariant(
              variants,
              "amount",
              "_5"
            ),

            [sty.userAvatargroupSize__16_amount__4__ipfFbiQnN3OMqc]:
              hasVariant(variants, "groupSize", "_16") &&
              hasVariant(variants, "amount", "_4"),
            [sty.userAvatargroupSize__16_amount__5__ipfFbiQnNBkkXr]:
              hasVariant(variants, "groupSize", "_16") &&
              hasVariant(variants, "amount", "_5")
          })}
          size={
            hasVariant(variants, "groupSize", "_16") &&
            hasVariant(variants, "amount", "_4")
              ? undefined
              : "_32"
          }
        />
      ) : null}
      {(hasVariant(variants, "amount", "_3") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar__b4Pkp, {
            [sty.userAvataramount__2__b4Pkp2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__3__b4PkpjSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            ),

            [sty.userAvataramount__3_groupSize__16__b4PkpjSrVyIQnN]:
              hasVariant(variants, "amount", "_3") &&
              hasVariant(variants, "groupSize", "_16")
          })}
          navUserAvatar16={
            <img
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.img__dxJKw
              )}
              src={
                "/plasmic/market_v_2/images/cesarRinconXhVpWcr5GrQUnsplashjpg.jpeg"
              }
            />
          }
          size={
            hasVariant(variants, "amount", "_3") &&
            hasVariant(variants, "groupSize", "_16")
              ? undefined
              : "_18"
          }
        />
      ) : null}
      {(hasVariant(variants, "amount", "_3") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar__zdi5Y, {
            [sty.userAvataramount__2__zdi5Y2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__3__zdi5YJSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            ),

            [sty.userAvataramount__3_groupSize__16__zdi5YJSrVyIQnN]:
              hasVariant(variants, "amount", "_3") &&
              hasVariant(variants, "groupSize", "_16"),
            [sty.userAvataramount__4__zdi5Y3OMqc]: hasVariant(
              variants,
              "amount",
              "_4"
            )
          })}
          navUserAvatar16={
            <img
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.img___31TU3
              )}
              src={
                "/plasmic/market_v_2/images/charlesDeluvioKVg2Dqtak7CUnsplashjpg.jpeg"
              }
            />
          }
          size={
            hasVariant(variants, "amount", "_3") &&
            hasVariant(variants, "groupSize", "_16")
              ? undefined
              : "_18"
          }
        />
      ) : null}
      {(hasVariant(variants, "amount", "_2") ? true : false) ? (
        <UserAvatar
          className={classNames("__wab_instance", sty.userAvatar__zOal, {
            [sty.userAvataramount__2__zOal2Zh4P]: hasVariant(
              variants,
              "amount",
              "_2"
            ),

            [sty.userAvataramount__2_groupSize__16__zOal2Zh4PIQnN]:
              hasVariant(variants, "amount", "_2") &&
              hasVariant(variants, "groupSize", "_16"),
            [sty.userAvataramount__3__zOalJSrVy]: hasVariant(
              variants,
              "amount",
              "_3"
            )
          })}
          size={
            hasVariant(variants, "amount", "_2") &&
            hasVariant(variants, "groupSize", "_16")
              ? undefined
              : "_32"
          }
        />
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAvatarGroupPrimary__ArgProps,
      internalVariantPropNames: PlasmicAvatarGroupPrimary__VariantProps
    });

    return PlasmicAvatarGroupPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatarGroupPrimary";
  } else {
    func.displayName = `PlasmicAvatarGroupPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatarGroupPrimary = Object.assign(
  // Top-level PlasmicAvatarGroupPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicAvatarGroupPrimary
    internalVariantProps: PlasmicAvatarGroupPrimary__VariantProps,
    internalArgProps: PlasmicAvatarGroupPrimary__ArgProps
  }
);

export default PlasmicAvatarGroupPrimary;
/* prettier-ignore-end */
