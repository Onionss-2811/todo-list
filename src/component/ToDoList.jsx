import React, { Component } from "react";

class TodoList extends Component {
  handleEdit = () => {
    this.props.openEditForm();
    this.props.editTask(this.props.name, this.props.getIndexTask);
  };
  handleDelete = () => {
    this.props.deleteTask(this.props.name);
  };

  render() {
    return (
    <div className="div-table-td">
      <table className="div-table-table-td">
            <tr>
                <td className="td-to-do-list">{this.props.name}</td>
                <td>
                    <button type="button" className="btn btn-outline-primary btn-sm btn-width" onClick={this.handleEdit}>
                        Edit
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={this.handleDelete}>
                        Delete
                    </button>
                </td>
            </tr>
      </table>      
      </div>
    );
  }
}

export default TodoList;
