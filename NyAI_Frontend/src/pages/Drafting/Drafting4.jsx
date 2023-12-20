import Layout from "../../components/layout/Layout";
import "../css/Drafting4.css";

const Drafting4 = () => {
  return (
    <Layout title={"Drafting-4"}>
      <div className="drafting4 container-md">
        <div className="row gap-md-5 gap-2">
          <h1>SIMPLIFIED DOCUMENT</h1>
          <div className="col p-md-5 p-2">
            <h2>Parties Involved </h2>
            <ul>
              <li>
                <b>Lessor/Owner: </b>Johnender Doe.
              </li>
              <li>
                {" "}
                <b>Address:</b> Nehru House, 4 Bahadur Shah Zafar Marg, New
                Delhi, Delhi 110002{" "}
              </li>
              <li>
                <b>Lessee/Tenant:</b> XYZ Cosmetics PVT. Ltd (proposed director:
                Durgesh Hoenheim)
              </li>
              <li>
                <b>Address:</b> S-434 Alaknanda Road, Delhi, 110019{" "}
              </li>
            </ul>

            <h2>Definitions</h2>
            <ul>
              <li>"Lessor/Owner" refers to Johnender Doe. </li>
              <li>
                "Lessee/Tenant" refers to XYZ Cosmetics PVT. Ltd and its
                representatives.
              </li>
              <li>
                Includes legal heirs, successors, assigns, and representatives.
              </li>
            </ul>

            <h2> Property Details</h2>
          </div>

          <div className="col p-md-5 p-2 d-flex flex-column justify-content-between align-items-end">
            <div>
            <h2>Applicable Acts</h2>
            <ul className="acts">
              <li><b>Rent Control Laws:</b> Different states in India have their own Rent Control Acts. These acts govern issues related to rent, eviction, and landlord-tenant relationships. If there is a violation, the relevant state's Rent Control Act would apply.</li>
              <li><b> Transfer of Property Act, 1882:</b> This act deals with the transfer of property by various means, including leases. It contains provisions regarding the rights and responsibilities of lessors and lessees. </li>
              <li><b>Indian Contract Act, 1872: </b>This act</li>
            </ul>
            </div>
              <button>Download</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Drafting4;
