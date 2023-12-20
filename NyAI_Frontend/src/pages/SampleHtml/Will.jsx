import "../Css/Sample.css";

export const Will = (props) => {
  const { formData } = props;
  const {
    date,
    fatherName,
    name,
    address,
    rentAmount,
    proposedCompany,
    directorName,
    property,
    period,
    rentDate,
    aggrementPlace,
    aggrementDate,
    witness1,
    witness2,
  } = formData;

  return (
    <div>
      <div className="sample">
        <center>
          <h2 className="m-4">Will</h2>
        </center>
        <p>
          This deed of will is executed at <b>——————- (give the name of the place)</b>
          on this ———— day of —————( give the date) by Sh.————————————————————
          ————————( name of the person executing or the Testator) resident of
          —————— ————————————————————-( give the residential and permanent
          address of the testator) aged around ————- (age) years, hereinafter
          called the Testator. Life is short and uncertain; God knows when it
          may come to an end. At present, I am in sound and disposing mind. I
          fully understand what is right and wrong. I with my free will, without
          any force or compulsion from any corner in any manner, make this deed
          of will in order to avoid any litigation or unpleasantness after my
          demise. This is my last and final will and any will be executed
          earlier shall stand cancelled or modified by this will. Whereas the
          Testator is the owner of the following movable and immovable
          properties——— ———————————————- (Give comprehensive details of the
          entire movable as well as immovable properties owned by the testator)
          In order to avoid all disputes that may arise after my death, I hereby
          devise and bequeath that the said properties with all my rights,
          titles and interest therein as under: Any other person besides the
          above-said beneficiary shall have no rights, title or interest therein
          of any kind whatsoever. The said beneficiary shall have the full
          powers to sell and transfer the same in any manner. I have executed
          this will of my own free will and without any undue influence, or
          outside pressure and being in full possession of my faculties of sense
          and being fully aware of all the aspects of the present will. IN
          WITNESSES WHEREOF, the Testator named above has signed this will on
          ————— ——— day of ——————————-, at ————————————————————
          —————————–(address/place) in presence of following two witnesses who
          have attested the same after I have executed the same. TESTATOR (Name
          of Testator) WITNESSES: (Name of 2 Witnesses) 1. 2.
        </p>
      </div>
    </div>
  );
};
