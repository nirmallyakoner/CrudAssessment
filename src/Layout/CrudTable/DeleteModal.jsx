import React from "react";

export default function DeleteModal() {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" style={{ color: "#435D7D" }}>
        <div class="modal-content">
          <div class="modal-header pl-4">
            <h4 class="modal-title py-2" id="exampleModalLabel">
              Delete Employee
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
          <div class="modal-body pl-4">
            Are You Sure you want to delete these records?
          </div>
          <p
            className="mb-5 pl-4"
            style={{ fontSize: "14px", color: "#FFC929" }}
          >
            This action cannot be undone.
          </p>
          <div class="modal-footer" style={{ backgroundColor: "#ECF0F1" }}>
            <button
              type="button"
              class="btn"
              data-dismiss="modal"
              style={{ backgroundColor: "#ECF0F1" }}
            >
              Cancel
            </button>
            <button type="button" class="btn btn-danger px-4">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
