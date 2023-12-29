import { Component } from "react";
import sortAsc from '../assets/icons/sortAsc.svg';
import sortDesc from '../assets/icons/sortDesc.svg';

class TableHeader extends Component {
  raiseSort = (column) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.column === column)
      sortColumn.orderBy = sortColumn.orderBy === "asc" ? "desc" : "asc";
    else {
      sortColumn.column = column;
      sortColumn.orderBy = "asc";
    }

    this.props.onSort(sortColumn);
  };

  renderSorted = (column) => {
    const {sortColumn} = this.props;

    if(column.path !== sortColumn.column || column.key) return null;
    else if(sortColumn.orderBy === 'asc') return <img src={sortAsc} alt="icon"/>;
    return <img src={sortDesc} alt="icon"/>;
  }

  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
            key={column.path || column.key}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSorted(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
