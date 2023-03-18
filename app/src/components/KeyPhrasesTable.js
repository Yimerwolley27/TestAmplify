import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const MyDataGrid = ({ data }) => {
  // Extract the nested data from the JSON
  const keyPhrases = JSON.parse(data.Item.KeyPhrases.S);
  const rows = keyPhrases.map((keyPhrase, index) => ({
    id: index,
    score: keyPhrase.Score,
    text: keyPhrase.Text,
    beginOffset: keyPhrase.BeginOffset,
    endOffset: keyPhrase.EndOffset,
  }));

  // Define the columns for the DataGrid
  const columns = [
    { field: 'score', headerName: 'Score', width: 250 },
    { field: 'text', headerName: 'Text', width: 250 },
    { field: 'beginOffset', headerName: 'Begin Offset', width: 250 },
    { field: 'endOffset', headerName: 'End Offset', width: 250 },
  ];

  return (
    <div style={{ height: 631, width: '80%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
};

export default MyDataGrid;
