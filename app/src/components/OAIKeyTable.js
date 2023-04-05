import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const OAIDataGrid = ({ data }) => {
  // Extract the nested data from the JSON
  const input = data.Item.Result.S
  const startingIdx = input.indexOf('[')
  const result = input.slice(startingIdx)

  const keyPhrases = JSON.parse(result);
  const rows = keyPhrases.map((keyPhrase, index) => ({
    id: index,
    text: keyPhrase.Key,
  }));

  // Define the columns for the DataGrid
  const columns = [
    { field: 'text', headerName: 'Key', width: 350 },
  ];

  return (  
    <div style={{ height: 631, width: '30%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
};

export default OAIDataGrid;