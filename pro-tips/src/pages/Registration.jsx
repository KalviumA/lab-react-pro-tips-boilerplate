import React, { useState } from "react";

export default function Registration() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
  });

  const [submit, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      details.firstName &&
      details.lastName &&
      details.email &&
      details.mobileNo
    ) {
      setSubmit(true);
      setValidate(true);
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      
        <form onSubmit={handleSubmit}>
        {submit && validate ?  (
        <h1>Registration successfully!</h1>
      ) : null}
          <label htmlFor="firstname">FirstName</label>{" "}
          <input
            type="text"
            placeholder="Enter Firstname"
            name="firstname"
            value={details.firstName}
            onChange={(e) =>
              setDetails({ ...details, firstName: e.target.value })
            }
          />{" "}
          <br />
          {submit && !details.firstName? <p>Enter the first name</p>:null}
          <br />

          <label htmlFor="lastname">LastName</label>{" "}
          <input
            type="text"
            placeholder="Enter Lastname"
            name="lastname"
            value={details.lastName}
            onChange={(e) =>
              setDetails({ ...details, lastName: e.target.value })
            }
          />{" "}
          <br />
          {submit && !details.lastName? <p>Enter the last name</p>:null}
          <br />

          <label htmlFor="email">Email</label>{" "}
          <input
            type="text"
            placeholder="Enter email id"
            name="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />{" "}
          <br />
          {submit && !details.email? <p>Enter the email id</p>:null}
          <br />

          <label htmlFor="mobileNo">Mobile Number</label>{" "}
          <input
            type="text"
            placeholder="Phone number"
            name="mobileNo"
            value={details.mobileNo}
            onChange={(e) =>
              setDetails({ ...details, mobileNo: e.target.value })
            }
          />{" "}
          <br />
          {submit && !details.mobileNo? <p>Enter the Phone number</p>:null}
          <br />

          <button type="submit">Register</button>
        </form>
      
    </div>
  );
}
