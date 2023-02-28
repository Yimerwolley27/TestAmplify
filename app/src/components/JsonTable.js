import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

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
    { field: 'score', headerName: 'Score', width: 200 },
    { field: 'text', headerName: 'Text', width: 200 },
    { field: 'beginOffset', headerName: 'Begin Offset', width: 200 },
    { field: 'endOffset', headerName: 'End Offset', width: 200 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default MyDataGrid;