import React, { useState, useEffect } from "react";

function BucketList() {
  const [diaryItems, setDiaryItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch data from API endpoint
    fetch("http://127.0.0.1:8000/apiV1/bucket-list/")
      .then((response) => response.json())
      .then((data) => setDiaryItems(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddPost = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewItemName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { name: newItemName };
    fetch("http://127.0.0.1:8000/apiV1/bucket-list/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setDiaryItems([...diaryItems, data]);
        handleCloseModal();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="th-background">
      <div className="p-3">
        <h1 className="text-center mt-3 mb-5">#MomoBurger Diary</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card content">
              <ul className="list-group list-group-flush">
                {/* Render real data from API */}
                {diaryItems.map((item) => (
                  <li key={item.id} className="list-group-item content">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleAddPost}
              className="floating-btn"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              +
            </button>
            <div
              className={`modal fade ${showModal ? "show" : ""}`}
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
              style={{ display: showModal ? "block" : "none" }}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Add a Post
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={handleCloseModal}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="newItemName">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="newItemName"
                          value={newItemName}
                          onChange={(event) =>
                            setNewItemName(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BucketList;
