import TableFilter from "react-table-filter";

function Test() {
  filterUpdated = (newData, filterConfiguration) => {
    this.setState({
      upddatedData: newData,
    });
    
  };
  return (
    <>
     <TableFilter
  rows={data}
  onFilterUpdate={this._filterUpdated}
  initialFilters={this.state.filterConfiguration}
  ref={ (node) => {this.tableFilterNode = node;}>

this.tableFilterNode.reset(newData, resetFilters);
        <th filterkey="name">Name</th>
        <th filterkey="season">Season</th>
        <th filterkey="number">Number</th>
      </TableFilter>
      
    </>
  );
}

export default Test;
