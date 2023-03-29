import TableFilter from "react-table-filter";

function Test() {
  filterUpdated = (newData, filterConfiguration) => {
    this.setState({
      upddatedData: newData,
    });
    
  };
  return (
    <>
      <TableFilter rows={data} onFilterUpdate={this._filterUpdated}>
        <th filterkey="name">Name</th>
        <th filterkey="season">Season</th>
        <th filterkey="number">Number</th>
      </TableFilter>
      
    </>
  );
}

export default Test;
