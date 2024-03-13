import { TableStyles } from "react-data-table-component";

export const customStyles: TableStyles = {
  table: {
    style: {
      height: "fit-content",
      //   minHeight: "50vh",
    },
},
headRow: {
    style: {
        display: "flex",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      gap: "0.5rem",
      backgroundColor: "#f8f8f8",
      color: "#767676",
    },
  },
  headCells: {
    style: {
      padding: "0",
      letterSpacing: "0.2px",
      fontSize: "1.45rem",
    },
  },
  rows: {
    style: {
      display: "flex",
      gap: "0.5rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      
    },
},
cells: {
    style: {
        padding: "0",
      letterSpacing: "0.2px",
      fontSize: "1.45rem",
      minWidth: "unset",
      marginTop: "1.5rem",
        marginBottom: "1.5rem",
      },
    },
}
  
