import React, { useEffect, useState } from "react";

import ChipBadgeDisplay from "components/ChipBadgeDisplay";
import { PlasmicServicedetail } from "../../components/plasmic/market_v_2/PlasmicServicedetail";
import getCurrentUserId from "../../utils/getUser";
import { getListing } from "../../hooks/useListing";
import useCreateOrder from "../../hooks/useCreateOrder";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useService } from "hooks/useServices";
import { useServiceCategory } from "hooks/useServiceCategories";

function Servicedetail() {
  const router = useRouter();
  const [listingId, setListingId] = useState(null);
  const [buyerId, setBuyerId] = useState(null);
  const { data: listing, isLoading } = useQuery(
    ["listing", { listingId }],
    getListing
  );

  const handleCheckout = async () => {
    createOrderMutation.mutate();
  };

  const createOrderMutation = useCreateOrder(buyerId, listingId);

  useEffect(() => {
    if (!router?.query?.id) return;

    async function getAndSetCurrentUserId() {
      const uid = await getCurrentUserId();
      setBuyerId(uid);
    }
    getAndSetCurrentUserId();

    setListingId(router?.query?.id);
  }, [router]);

  let serviceListing = {
    "category": {
      "serviceCategory": "2",
      "service": "3",
      "features": [
        {
          "id": 1,
          "label": "Competitor Analysis"
        },
        {
          "id": 2,
          "label": "Quatitative Survey"
        },
        {
          "id": 3,
          "label": "User Personas"
        }
      ],
      "content": "sample content included in this service",
      "industries": [
        {
          "id": 1,
          "label": "Industry 1"
        }
      ],
      "tools": [
        {
          "id": 2,
          "label": "Tool 2"
        },
        {
          "id": 3,
          "label": "Tool 3"
        }
      ]
    },
    "name": "Service Sample Name",
    "description": "This is a sample description of our service",
    "delivery": {
      "process": {
        "overview": "Delivery process short dummy overview",
        "steps": [
          {
            "title": "Step 1",
            "description": "Testing the process steps"
          }
        ]
      },
      "time": "90",
      "meetings": {
        "id": 4,
        "label": "4"
      },
      "revisions": {
        "id": 7,
        "label": "7"
      },
      "requirements": [
        {
          "title": "Req 1",
          "description": "Req 1 details"
        },
        {
          "title": "Req 2",
          "description": "Word document is mandatory to be shared"
        }
      ],
      "formats": [
        {
          "id": 3,
          "label": "Format 3"
        }
      ],
      "costType": {
        "id": 2,
        "label": "Flat Fee"
      },
      "cost": "50"
    },
    "images": [
      {
        "url": "https://firebasestorage.googleapis.com/v0/b/intrepid-market-2021.appspot.com/o/images%2FNaN?alt=media&token=598c16c2-edb5-4e67-aa76-7f361184e78c"
      },
      {
        "url": "https://i.picsum.photos/id/1003/160/120.jpg?hmac=vTvsso6oIYAPcqYnQeSdWBdUjWTr_tzsd3qeOckF7Gc"
      },
      {
        "url": "https://i.picsum.photos/id/76/160/120.jpg?hmac=W3Xh4BNcoD9nBqqzxEGlV1PZwepEJ50D07y3LJk-GJ0"
      },
      {
        "url": ""
      },
      {
        "url": ""
      }
    ],
    "amount": 800,
    "seller": "48649605-13db-479b-a0a2-162b2d6c7030"
  }

  const serviceCategory = useService(serviceListing?.category?.service)
  const serviceSubCategory = useServiceCategory(serviceListing?.category?.serviceCategory)

  if (isLoading || !listing) {
    return <>Loading</>;
  }

  if (createOrderMutation.isSuccess) {
    router.push(createOrderMutation.data.url);
  }

  if (createOrderMutation.isError) {
    console.log(createOrderMutation.error.message);
  }

  return (
    <PlasmicServicedetail
      serviceTitle={serviceListing.name}
      serviceName={serviceListing.name}
      category={serviceCategory?.label || ''}
      subCategory={serviceSubCategory?.label ? `/  ${serviceSubCategory?.label}` : ''}
      serviceAmount={`$${serviceListing.amount}`}
      serviceDescription={serviceListing?.description}
      serviceHeroImage={{
        src: serviceListing.images[0]?.url
      }}
      serviceImageOne={{
        src: serviceListing.images[1]?.url,
      }}
      serviceImageTwo={{
        src: serviceListing.images[2]?.url
      }}
      serviceImageThree={{
        src: serviceListing.images[3]?.url
      }}
      serviceImageFour={{
        src: serviceListing.images[4]?.url
      }}
      serviceFeaturesWrapper={{
        wrapChildren: (children) => (
          serviceListing?.category?.features?.map(({id, label}) => <ChipBadgeDisplay type="ghost" color="brand">{label}</ChipBadgeDisplay>)
        )
      }}
      descriptionAccordion={{
          content: serviceListing.description
      }}
      orderButton={{
        props: {
          onClick: handleCheckout,
          disabled: !buyerId,
        },
      }}
    />
  );
}

export default Servicedetail;
