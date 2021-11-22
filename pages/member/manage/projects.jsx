import * as React from "react";

import { PAGE_TAB_NAVIGATIONS, PAGE_TAB_NAVIGATION_KEY } from "constants/page-tab-navigations";

import { PlasmicMembermanageprojects } from "../../../components/plasmic/market_v_2/PlasmicMembermanageprojects";
import useProjects from "../../../hooks/useProjects";

function Membermanageprojects() {
  const { data, status } = useProjects();
  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error fetching Info</div>}
      {status === "success" && (
        <div>
          <h2>These are projects bought by this seller</h2>
          {data.map((order) => {
            return <div key={order.id}>{order.name}, {order.amount}</div>;
          })}
        </div>
      )}
      <PlasmicMembermanageprojects />;
    </div>
  );
}

export default Membermanageprojects;
Membermanageprojects.tabNavigations = PAGE_TAB_NAVIGATIONS[PAGE_TAB_NAVIGATION_KEY.EDIT_MEMBER]