import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style-login.css";
import ToDoList from "./ToDoList";

class LogIn extends Component {
  state = {
    accName: "",
    accPass: "",
    acc: [
      { name: "tu", pass: "123" },
      { name: "lam", pass: "456" },
      { name: "pro", pass: "789" },
    ],
    check: "false",
  };
  checkAccount = (e) => {
    e.preventDefault();
    var currentAcc = { name: this.state.accName, pass: this.state.accPass };
    const account = this.state.acc.filter((account) => {
      return (
        account.name === currentAcc.name && account.pass === currentAcc.pass
      );
    });
    // let key = "user";
    // let [myObj] = account;
    if (account.length !== 0) {
      // localStorage.setItem(key, JSON.stringify(myObj.name));
      localStorage.setItem("name", account[0].name);
    } else {
      document.getElementById("error").innerHTML = "lỗi";
    }
    console.log(localStorage.getItem("name", account[0].name));
  };
  correctCheck = () => {
    return <ToDoList />;
  };
  checkAccountName = (e) => {
    e.preventDefault();
    this.setState({ accName: e.target.value });
  };
  checkAccountPass = (e) => {
    e.preventDefault();
    this.setState({ accPass: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        <form onSubmit={this.correctCheck}>
          <div className="content">
            <h2>ĐĂNG NHẬP</h2>
            <div className="divLogIn">
              <table>
                <tr>
                  <th>Tên tài khoản:</th>
                  <td>
                    <input type="text" onChange={this.checkAccountName}></input>
                  </td>
                </tr>
                <tr>
                  <th>Mật khẩu:</th>{" "}
                  <td>
                    <input type="text" onChange={this.checkAccountPass}></input>
                  </td>
                </tr>
                <td>
                  <button
                    onClick={this.checkAccount}
                    className="btn btn-outline-primary"
                  >
                    Đăng nhập
                  </button>
                </td>
                <td>
                  <span id="error"></span>
                </td>

                <tr>
                  <Link to="/ToDolist">todolist</Link>
                </tr>
              </table>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
