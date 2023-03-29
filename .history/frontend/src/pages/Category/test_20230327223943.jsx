import TableFilter from 'react-table-filter';
import react-table-filter/lib/styles.css;

function Test() {
    return(<>
        <TableFilter
  rows={data}
  onFilterUpdate={this._filterUpdated}>
  <th filterkey="name">
    Name
  </th>
  <th filterkey="season">
    Season
  </th>
  <th filterkey="number">
    Number
  </th>
</TableFilter>
        </>)

}