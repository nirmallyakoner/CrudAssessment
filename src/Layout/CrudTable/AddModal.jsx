import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add_Employee } from "../../Redux/CrudSlice";

export default function AddModal() {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const PostUserData = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };
  // console.log(employeeDetails);

  const SubmitInfo = (e) => {
    e.preventDefault();
    if (
      employeeDetails.name !== "" &&
      employeeDetails.email !== "" &&
      employeeDetails.address !== "" &&
      employeeDetails.phone !== ""
    ) {
      dispatch(Add_Employee(employeeDetails));
    } else {
      alert("Fill All The Details Carefully");
    }

    setEmployeeDetails({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style={{ width: "430px", color: "#435D7D" }}>
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">
                Add Employee
              </h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label htmlFor="recipient-name" class="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={PostUserData}
                    value={employeeDetails.name}
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={PostUserData}
                    value={employeeDetails.email}
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    Address:
                  </label>
                  <textarea
                    class="form-control"
                    name="address"
                    onChange={PostUserData}
                    value={employeeDetails.address}
                    id="message-text"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Phone:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    onChange={PostUserData}
                    value={employeeDetails.phone}
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer" style={{ backgroundColor: "#ECF0F1" }}>
              <button
                type="button"
                class="btn"
                data-dismiss="modal"
                style={{ backgroundColor: "#ECF0F1" }}
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-success px-4"
                onClick={SubmitInfo}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
