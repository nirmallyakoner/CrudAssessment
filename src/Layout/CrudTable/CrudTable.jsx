import React, { useEffect, useState } from "react";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { Remove_Employee } from "../../Redux/CrudSlice";

export default function CrudTable() {
  let employeeData = useSelector((state) => state.Crud.employeeData);
  const dispatch = useDispatch();
  const handleRemoveEmployee = (index) => {
    dispatch(Remove_Employee(index));
  };
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const totalEntries = employeeData.length;
  const firstIndex = (currentPage - 1) * recordsPerPage + 1;
  const lastIndex = Math.min(currentPage * recordsPerPage, totalEntries);

  const records = employeeData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const npage = Math.ceil(employeeData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log(numbers, npage, records);
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      console.log(numbers, npage, records);
    }
  };
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };
  
  return (
    <div>
      <div
        className="py-3 mb-2 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#435D7D", color: "white" }}
      >
        <h1>Manage Employees</h1>
        <div className="mx-5">
          <button
            className="btn py-2 px-4 btn-danger m-2"
            data-toggle="modal"
            data-target="#exampleModal"
            type="button"
            
          >
            {" "}
            <span
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "4px 5px",
                fontSize: "10px",
              }}
            >
              <i class="fa-solid fa-minus" style={{ color: "#bd2130" }}></i>
            </span>{" "}
            <span style={{ color: "white" }}>Delete</span>
          </button>

          <button
            className="btn py-2 px-4 btn-success m-2"
            type="button"
            data-toggle="modal"
            data-target="#exampleModal1"
          >
            {" "}
            <span
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "4px 5px",
                fontSize: "10px",
                marginRight: "3px",
              }}
            >
              <i class="fa-solid fa-plus" style={{ color: "#1e7e34" }}></i>
            </span>{" "}
            <span style={{ color: "white" }}>Add New Employees</span>
          </button>
        </div>
      </div>
      <DeleteModal />
      <AddModal />
      <div className="mx-4">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" name="" id=""  />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records?.map((e, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    <input type="checkbox" name="" id="" value={index} checked={ e.isChecked} onChange={(e)=>handleCheckBox(e)}/>
                  </th>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.address}</td>
                  <td>{e?.phone}</td>

                  <td>
                    <span>
                      <i
                        class="fa-solid fa-pen mx-2"
                        style={{ color: "#FFC929", cursor: "pointer" }}
                      ></i>
                      {"    "}

                      <i
                        class="fa-solid fa-trash mx-2"
                        style={{ color: "#bd2130", cursor: "pointer" }}
                        onClick={() => handleRemoveEmployee(index)}
                      ></i>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>
            {" "}
            Showing {lastIndex} out of {totalEntries} entries
          </p>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" onClick={prePage}>
                  Previous
                </a>
              </li>
              {numbers?.map((e, index) => {
                return (
                  <li
                    class={`page-item ${currentPage === e ? "active" : ""}`}
                    key={index}
                  >
                    <a class="page-link" href="#" onClick={() => changePage(e)}>
                      {e}
                    </a>
                  </li>
                );
              })}
              <li class="page-item">
                <a class="page-link" href="#" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
