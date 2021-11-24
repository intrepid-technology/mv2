import * as React from "react";
import { PlasmicMembermanageprojects } from "../../../components/plasmic/market_v_2/PlasmicMembermanageprojects";
import { PlasmicTableProjectAdminRecord } from "../../../components/plasmic/market_v_2/PlasmicTableProjectAdminRecord";
import useProjects from "../../../hooks/useProjects";

function Membermanageprojects() {
  const { data, status } = useProjects();
  return (
    <PlasmicMembermanageprojects
      listingNumber={data ? data.length : 0}
      tableProjectAdminRecord={{
        render: () =>
          status === "success" &&
          data.map((order) => (
            <PlasmicTableProjectAdminRecord
              status={"inProgress"}
              serviceTitle={order.name}
              price={order.amount}
            />
          )),
      }}
    />
  );
}

export default Membermanageprojects;
