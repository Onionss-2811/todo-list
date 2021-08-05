import React from "react";
import "./style.css";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 1,
      newItemName: "",
      title: "Việc làm trong ngày",
      items: [],
    };
  }
  handleInputChange = (e) => {
    this.setState({ newItemName: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: this.state.currentId, name: this.state.newItemName };
    this.state.items.push(newItem);
    this.setState({ newItemName: "" });
    this.setState({ currentId: this.state.currentId + 1 });
  };
  handleDeleteItem = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filterItems });
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div>Thêm 1 việc mới</div>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newItemName}
          />
          <button>Thêm</button>
        </form>
        {this.state.items.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="item-title">{item.name}</div>
              <button onClick={() => this.handleDeleteItem(item.id)}>
                Xóa
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ToDoList;
