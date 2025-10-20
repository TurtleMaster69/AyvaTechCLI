import React, { useState } from 'react';
import { Box, Pagination } from '@mui/material';

// Define props interface
interface PaginatedBoxProps {
  components: React.ReactNode[];
  itemsPerRow?: number;
}

const PaginatedBox: React.FC<PaginatedBoxProps> = ({ components, itemsPerRow = 4 }) => {
  const itemsPerPage = 20;
  const [page, setPage] = useState<number>(1);
  
  // Calculate total pages
  const totalPages = Math.ceil(components.length / itemsPerPage);
  
  // Get components for current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentComponents = components.slice(startIndex, endIndex);
  
  // Split components into rows
  const rows: React.ReactNode[][] = [];
  for (let i = 0; i < currentComponents.length; i += itemsPerRow) {
    rows.push(currentComponents.slice(i, i + itemsPerRow));
  }

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
      {rows.map((row, rowIndex) => (
        <Box
          key={`row-${rowIndex}`}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            marginBottom: 10,
            justifyContent: 'flex-start',
          }}
        >
          {row.map((component, index) => (
            <Box
              key={`item-${startIndex + rowIndex * itemsPerRow + index}`}
              sx={{
                flex: `0 0 calc(${100 / itemsPerRow}% - 16px)`,
                boxSizing: 'border-box',
              }}
            >
              {component}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default PaginatedBox;