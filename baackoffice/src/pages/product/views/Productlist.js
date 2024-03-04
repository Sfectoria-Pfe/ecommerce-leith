
import * as React from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { Avatar } from "@mui/material";
import { Button } from "react-bootstrap";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddCircleIcon from "@mui/icons-material/AddCircle";
function createData(id, name, category, Price, image) {
  return { id, name, category, Price, image };
}

const rows = [
  createData(1, "Bletouth", "PC", 24, "4.0"),
  createData(2, "laptop", "PC", 9, ""),
  createData(3, "redmi", "spartphone", 16, ""),
];

export default function Orderlist() {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
    <Sheet variant="soft" sx={{ pt: 1, borderRadius: "sm" }} >
      <Table
        stripe="odd"
        hoverRow
        sx={{
          captionSide: "top",
          "& tbody": { bgcolor: "background.surface" },
        }}
      >
        <caption>
          <Button variant="outline-secondary" className='position-absolute top-0 end-0    bg-opacity-50 shadow p-3 mb-5  rounded'>
            <AddCircleIcon /> ADD Product
          </Button>{" "}
        </caption>
        <thead>
          <tr>
            {/* <th style={{ width: '40%' }}>Column width (40%)</th> */}
            <th>image</th>
            <th>ProductName</th>
            <th>price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                
                <Avatar
                  alt="Remy Sharp"
                  style={{ width: "40px", height: "40px" }}
                  src={row.image}
                />
              </td>
              <td>{row.name}</td>
              <td>{row.Price}</td>
              <td>{row.category}</td>
              <td>
                <Button variant="outline-warning">
                  <EditCalendarIcon />
                </Button>{" "}
                <Button variant="outline-danger">
                  <DeleteOutlineIcon />
                </Button>{" "}
                <Button variant="outline-info">
                  <RemoveRedEyeIcon />
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
    </div>
  );
}
