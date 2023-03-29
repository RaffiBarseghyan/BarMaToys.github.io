import TableFilter from "react-table-filter";
import initialDetails from "../search/data/initialDatails";
function Test() {
    
  return (
    <>
      <TableFilter rows={initialDetails} onFilterUpdate={this._filterUpdated}>
        <th filterkey="name">Name</th>
        <th filterkey="season">Season</th>
        <th filterkey="number">Number</th>
      </TableFilter>
    </>
  );
}

export default Test
