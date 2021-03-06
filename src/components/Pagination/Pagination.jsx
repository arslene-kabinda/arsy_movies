import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
export default function CustomPagination({ setPage, numberOfPage = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(event) => handlePageChange(event.target.textContent)}
          count={numberOfPage}
          color="primary"
          variant="outlined"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}
