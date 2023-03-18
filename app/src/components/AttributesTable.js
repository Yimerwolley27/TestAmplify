import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const AttributesDataGrid = ({ data }) => {
  // Extract the nested data from the JSON
  const Item  = data.Item;
  const entries = Object.entries(Item);
  const rows = entries.map(([attribute, value], index) => ({
    id: index,
    attribute: attribute,
    value: value.NULL !== undefined ? 'null' : Object.values(value)[0],
  }));

  // Define the columns for the DataGrid
  const columns = [
    { field: 'attribute', headerName: 'Attribute', width: 250 },
    { field: 'value', headerName: 'Value', width: 250 },
  ];

  return (
    <div style={{ height: 631, width: '40%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
};

export default AttributesDataGrid;
