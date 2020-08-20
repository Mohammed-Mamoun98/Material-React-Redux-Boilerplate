import React from "react";
import PropTypes from "prop-types";
import TableauReport from "tableau-react";

const TableauDemo = (props) => {
  const options = {
    hideTabs: true,
    hideFilters: true,
    // hideToolbar: true,
    toolbarPosition: "Top",
  };

  const filters = {
    College: ["Education"],
  };

  return (
    <>
      <TableauReport
        // url="http://reports.my-site.com/my-workbook/my-report"
        // url="http://public.tableau.com/views/RegionalSampleWorkbook/Storms"
        url="http://public.tableau.com/views/RegionalSampleWorkbook/College"
        options={options}
        filters={filters}
      />
    </>
  );
};

// TableauDemo.prototype = {
//   name: PropTypes.string,
// };

export default TableauDemo;
