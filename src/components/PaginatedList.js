import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginatedList = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    // Fetch new data or update UI accordingly
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default PaginatedList;
