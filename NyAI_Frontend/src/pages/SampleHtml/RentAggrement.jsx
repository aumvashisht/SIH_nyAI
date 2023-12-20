import "../Css/Sample.css"

export const RentAggrement = (props) => {
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
        <h2 className="m-4">RENT AGREEMENT</h2>
      </center>
      <p >
        This Rent Agreement is made on this <b> {date ? date : "( Date )"}</b>{" "}
        by <b>{name ? name : "( Your Name )"}</b>
        S/o <b>{fatherName ? fatherName : "( Father Name )"}</b>.<br />
        (Address:) <b>{address ? address : "( Address )"}</b>
        Hereinafter called the Lessor / Owner, Party Of the first part.
        <br />
        AND
        <br />
        <b>
          {proposedCompany ? proposedCompany : "(Name of the proposed company)"}
        </b>{" "}
        , through its proposed director
        <b>{directorName ? directorName : "( name of Director)"}</b> . called
        Lessee/Tenant, Party of the Second Part.
        <br />
        That the expression of the term , Lessor/Owner and the Lessee/Tenant
        Shall mean and include their legal heirs, successors , assigns ,
        representatives etc. Whereas the Lessor /Owner is the owner and in
        possession of the property No:
        <b>{property ? property : "(Property Number)"}</b> and has agreed to let
        out the one office Room, one Toilet & Bathroom Set on said property, to
        the Lessee/Tenant and the Lessee/Tenant has agreed to take the same on
        rent of <b>{rentAmount ? rentAmount : "(Rent Amount)"}</b> Only per
        month.
        <br />
        <b>NOW THIS RENT AGREEMENT WITNESSETH AS UNDER:-</b>
        <br />
        1.That the Tenant/Lessee shall pay as the monthly rent of
        <b>{rentAmount ? rentAmount : "(Rent Amount)"}</b> Only per month,
        excluding electricity and water charge.
        <br />
        2.That the Tenant /Lessee shall not sub–let any part of the above said
        premises to anyone else under any circumstances without the consent of
        Owner.
        <br />
        3.That the Tenant / Lessee shall abide by all the bye - laws , rules and
        regulation, of the local authorities in respect of the demised premises
        and shall not do any illegal activities in the said demised premises.
        <br />
        4.That this Lease is granted for a period of{" "}
        <b>{period ? period : "( Time Duration )"}</b> only commencing from{" "}
        <b>{rentDate ? rentDate : "(date of rent commencing from)"}</b> and this
        lease can be extended further by both the parties with their mutual
        consent on the basis of prevailing rental value in the market.
        <br />
        5.That the Lessee shall pay Electricity & Water charge as per the
        proportionate consumption of the meter to the Lessor /Owner.
        <br />
        6.That the Tenant/Lessee shall not be entitled to make structure in the
        rented premises except the installation of temporary decoration, wooden
        partition/cabin, air – conditioners etc. without the prior consent of
        the owner.
        <br />
        7.That the Tenant/lessee can neither make addition/alteration in the
        said premises without the written consent of the owner, nor the lessee
        can sublet part or entire premises to any person(s)/firm(s)/company(s).
        <br />
        8.That the Tenant/Lessee shall permit the Lessor/Owner or his Authorized
        agent to enter in to the said tenanted premises for inspection/general
        checking or to carry out the repair work, at any reasonable time.
        <br />
        9.That the Tenant/Lessee shall keep the said premises in clean &
        hygienic condition and shall not do or causes to be done any act which
        may be a nuisance to other.
        <br />
        10.That the Tenant/Lessees shall carry on all day to day minor repairs
        at his/her own cost.
        <br />
        11.That this Agreement may be terminated before the expiry of this
        tenancy period by serving One month prior notice by either party for
        this intention .<br />
        12.That the Lessee shall use the above said premises for Official
        Purpose Only.
        <br />
        13.That the Lessee/Tenant Shall not store/Keep any offensive, dangerous,
        explosive or highly Inflammable articles in the said premises and shall
        not use the same for any unlawful activities .<br />
        14.That the Lessee shall pay the one month’s advance rent to the Lessor
        the same shall be adjusted in monthly rent.
        <br />
        15.That both the parties have read over and understood all the contents
        of this agreement and have signed the same without any force or pressure
        from any side.
        <br />
        In WITNESS WHEREOF the lessor/Owner and the Tenant / Lessee have
        hereunto subscribed their hand at{" "}
        <b>{aggrementPlace ? aggrementPlace : "( Place Detail)"}</b> on this the{" "}
        <b>{aggrementDate ? aggrementDate : "( date of rent agreement )"}</b>
        year first above Mentioned in presents of the following Witnesses
        WITNESSES:
        <br />
        1.<b>{witness1 ? witness1 : "( Witness1 )"}</b>
        <br />
        2. <b>{witness2 ? witness2 : "( Witness2 )"}</b>
        <br />
        <b>{name ? name : "( Name of the landloard )"}</b>{", "}
        <b>
          {proposedCompany ? proposedCompany : "(Name of the proposed company)"}
        </b>
        <br />
        Lessor Lesse
        <br />
      </p>
    </div>
    </div>
  );
};
