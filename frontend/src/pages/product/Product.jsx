import React, { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

function Product() {
  useEffect(() => {
    document.title = "Product Management | POS";
    document.body.classList.add(
      "hold-transition",
      "light-mode",
      "sidebar-mini",
      "layout-fixed",
      "layout-navbar-fixed",
      "layout-footer-fixed",
      "sidebar-mini-xs"
    );
    document.body.style.background = "#e7eef8";

    return () => {
      document.body.classList.remove(
        "hold-transition",
        "light-mode",
        "sidebar-mini",
        "layout-fixed",
        "layout-navbar-fixed",
        "layout-footer-fixed",
        "sidebar-mini-xs"
      );
      document.body.style.background = null;
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="content-wrapper row">
        <section className="content col">
          <div className="container-fluid">
            <div className="row content-card">
              <div className="col-lg-6">
                <div
                  className="card"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: 10,
                  }}
                >
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Expire Soon</h3>
                    </div>
                  </div>
                  <div
                    className="card-body pl-4 pr-4 mr-4 ml-4"
                    style={{ marginBottom: 20, overflowX: "scroll" }}
                  >
                    <div className="card-deck">
                      <div className="card-columns">
                        <div className="card-susu float-right mb-2">
                          <img src="../dist/img/susu.png" alt="Image" />
                          <div
                            className="card-text mt-1 p-0 ml-1"
                            style={{ fontWeight: "bold" }}
                          >
                            Susu Ultra Milk Coklat 200ml
                            <div
                              className="progress"
                              style={{
                                height: 6,
                                width: 162,
                                backgroundColor: "red",
                                marginTop: 35,
                                borderRadius: 10,
                              }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div
                              className="row"
                              style={{
                                marginBottom: 5,
                                fontWeight: "normal",
                                fontSize: "small",
                              }}
                            >
                              <div className="col-md-6">9 days left</div>
                              <div className="col-md-6 text-right">
                                10/02/2023
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="card"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: 10,
                  }}
                >
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Stock Alerts</h3>
                    </div>
                  </div>
                  <div
                    className="card-body pl-4 pr-4 mr-4 ml-4"
                    style={{ marginBottom: 20, overflowX: "scroll" }}
                  >
                    <div className="card-deck">
                      <div
                        className="card float-right mb-2"
                        style={{
                          minWidth: 200,
                          maxWidth: 200,
                          height: 250,
                          fontSize: "small",
                          backgroundColor: "#F6F6F6",
                          borderRadius: 20,
                        }}
                      >
                        <img
                          className="card-img-top"
                          src="../dist/img/susu.png"
                          alt="Product Image"
                        />
                        <div
                          className="card-body p-0 ml-1"
                          style={{ fontWeight: "bold" }}
                        >
                          Susu Ultra Milk Coklat 200ml
                          <div
                            className="progress"
                            style={{
                              height: 6,
                              width: 162,
                              backgroundColor: "red",
                              borderRadius: 10,
                            }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div
                            className="stock"
                            style={{ fontWeight: "normal" }}
                          >
                            10/100
                          </div>
                          <div
                            className="details mt-3"
                            style={{ textAlign: "center" }}
                          >
                            <a
                              href="#"
                              className="d-block"
                              style={{ color: "grey", fontWeight: "lighter" }}
                            >
                              Go to Product Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div
                  className="card"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: 10,
                    height: "auto",
                  }}
                >
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <div className="add-export" style={{ display: "flex" }}>
                        <button
                          className="btn bg-transparent table-product-button"
                          data-toggle="modal"
                          data-target=".bd-example-modal-sm"
                        >
                          <iconify-icon icon="oi:plus" />
                          Add Product
                        </button>
                        <div
                          className="modal fade bd-example-modal-sm"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="mySmallModalLabel"
                          aria-hidden="true"
                          id="myModal"
                        >
                          <div
                            className="modal-dialog modal-sm"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Add Product</h5>
                              </div>
                              <div className="modal-body">
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">
                                    Image
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control"
                                    id="productImage"
                                    aria-describedby="emailHelp"
                                    placeholder="Image's src"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="productName">
                                    Product Name
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="productName"
                                    aria-describedby="emailHelp"
                                    placeholder="Input Product Name"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">
                                    Brand
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="productBrand"
                                    aria-describedby="emailHelp"
                                    placeholder="Input Brand"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="productExpireDate">
                                    Expire Date
                                  </label>
                                  <div id="sandbox-container">
                                    <div className="input-group date">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="productExpireDate"
                                      />
                                      <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-th" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">
                                    Stocks
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="productStocksAmount"
                                    aria-describedby="emailHelp"
                                    placeholder="Eg. 200"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">
                                    Capital Price
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="productCapitalPrice"
                                    aria-describedby="emailHelp"
                                    placeholder="Eg. IDR 25,000.00"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">
                                    Price
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="productPrice"
                                    aria-describedby="emailHelp"
                                    placeholder="Eg. IDR 35,000.00"
                                  />
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    fontWeight: "normal",
                                    fontSize: "smaller",
                                    width: 100,
                                    height: 35,
                                    border: "none",
                                  }}
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  style={{
                                    backgroundColor: "#5B7CFD",
                                    color: "white",
                                    fontWeight: "normal",
                                    fontSize: "smaller",
                                    width: 125,
                                    height: 35,
                                  }}
                                  id="saveBtn"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn bg-transparent table-product-button"
                          onclick="window.print()"
                        >
                          <iconify-icon icon="oi:share-boxed" />
                          Export Product
                        </button>
                      </div>
                      <div>
                        <div className="input-group">
                          <div className="form-outline">
                            <input
                              type="search"
                              id="form1"
                              className="form-control"
                            />
                          </div>
                          <button type="button" className="btn btn-primary">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body" style={{ padding: "0px 24px" }}>
                    <div
                      className="scrollable-table"
                      style={{ maxHeight: 300, overflowY: "auto" }}
                    >
                      <table className="table">
                        <thead>
                          <tr className="text-muted fs-10">
                            <td scope="col">No</td>
                            <td scope="col">Photo</td>
                            <td scope="col">Product Name</td>
                            <td scope="col">Brand</td>
                            <td scope="col">Category</td>
                            <td scope="col">Expire Date</td>
                            <td scope="col">Stock</td>
                            <td scope="col">Capital Price</td>
                            <td scope="col">Price</td>
                            <td scope="col">Actions</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="fs-10">
                            <td scope="row">1</td>
                            <td>
                              <img
                                className="table-product-img"
                                src="../dist/img/susu.png"
                                alt
                              />
                            </td>
                            <td>Susu Ultra Milk Coklat 200ml</td>
                            <td>Ultra Jaya</td>
                            <td>Milk</td>
                            <td>22/02/2023</td>
                            <td>500</td>
                            <td>IDR 4,500.00</td>
                            <td>IDR 25,500.00</td>
                            <td>
                              <button
                                className="btn table-actions-button bg-transparent border drop-shadow"
                                data-toggle="modal"
                                data-target=".bd-example-modal-sm2"
                                style={{ borderRadius: "50%" }}
                              >
                                <iconify-icon icon="oi:pencil" />
                              </button>
                              <button
                                className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                                style={{ borderRadius: "50%" }}
                              >
                                <iconify-icon
                                  icon="oi:trash"
                                  style={{ marginLeft: 2 }}
                                />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <aside className="control-sidebar control-sidebar-dark"></aside>
    </>
  );
}

export default Product;
