import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, address, message } = user;
    const res = await fetch(
      "https://reactform-5c90b-default-rtdb.firebaseio.com/reactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          address,
          message,
        }),
      }
    );
    if(res){
        setUser({
            name: "",
            email: "",
            address: "",
            message: "",
        })
    }
  };
  return (
    <div>
      <div className="jumbotron jumbotron-sm">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <h1 className="h1">
                Contact us <small>Feel free to contact us</small>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="well well-sm">
              <form method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={getUserData}
                        value={user.name}
                        placeholder="Enter name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <label for="email">Email Address</label>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-envelope"></span>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          onChange={getUserData}
                          value={user.email}
                          placeholder="Enter email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="email">Address</label>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-envelope"></span>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          onChange={getUserData}
                          value={user.address}
                          placeholder="Enter Address"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="name">Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="9"
                        cols="25"
                        required="required"
                        onChange={getUserData}
                        value={user.name}
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary pull-right"
                      name="btnContactUs"
                      onClick={postData}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
