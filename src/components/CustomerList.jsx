
import { DataGrid } from '@mui/x-data-grid';
 import Paper from '@mui/material/Paper';
 import Box from '@mui/material/Box';
 import Grid from '@mui/material/Grid'; // <-- Add this import
 import { useNavigate } from 'react-router-dom';
 import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
 import { useState } from 'react';
 import { MdEdit ,MdDelete  } from "react-icons/md";
 import AddCustomer from './AddCustomer';
 
 


 function CustomerList() {
  //const [row, setRows] = useState([]);
 
  const handleDelete = (id) => {
   console.log("Deleting row with ID:", id);
  // Optional: confirmation
   const confirm = window.confirm("Are you sure you want to delete?");
  if (confirm) {
     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
     //alert("Successfully Deleted");
   }
 };



 const handleEdit = () => {
  if (isEdit) {
    setRows(prev =>
      prev.map(row => (row.id === formData.id ? formData : row))
    );
  } else {
    setRows(prev => [...prev, { ...formData, id: prev.length + 1 }]);
  }
  setOpen(false);
};


 const [formData, setFormData] = useState({ id: null, name: '', age: '',Email: '', PhoneNumber: '', Address: '',JoinedDate: '',   });
const [isEdit, setIsEdit] = useState(false);
   const [open, setOpen] = useState(false);

   const navigate = useNavigate();

   const handleOpen = (row = null, edit = false) => {
    console.log("row",row)
  if (edit && row) {
    // Mapping to match your formData keys
    const transformedRow = {
      id: row.id,
      name: row.Name, // 👈 fix the capital N
      age: row.age,
      Email: row.Email,
      PhoneNumber: row.PhoneNumber,
      Address: row.Address,
      JoinedDate: row.JoinedDate,
    };

    setFormData(transformedRow);
    setIsEdit(true);
  } else {
    setFormData({ id: null, name: '', age: '', Email: '', PhoneNumber: '', Address: '', JoinedDate: '' });
    setIsEdit(false);
  }
  setOpen(true);
};

   const handleAddCustomer = () => {
     navigate('/AddCustomer');
   };
   const columns = [
     { field: 'id', headerName: 'ID', width: 50 },     {
       field: 'Name',
       headerName: 'Name',
       sortable: false,
      width: 100,
    },
    {
       field: 'age',
      headerName: 'Age',
       type: 'number',
       width: 100,
       sortable: false,

   },
    {
       field: 'PhoneNumber',
      headerName: 'PhoneNumber',
      sortable: false,
       width: 150,
     },

     {
       field: 'JoinedDate',
       headerName: 'JoinedDate',       
       sortable: false,
       width: 150,
     },
     {
       field: 'Email',
       headerName: 'Email',
       width: 250,
       sortable: false,
     },
{
       field: 'Address',
       headerName: 'Address',
       sortable: false,
       width: 350,
     },
     {
       field: 'actions',
       headerName: 'Actions',
      width: 200,
       renderCell: (params) => (
         <>
           <IconButton
             variant="outlined"
             color="primary"
            //  onClick={handleEdit}
            onClick={() => handleOpen(params.row, true)}
             style={{ marginRight: 8 }}
           >
             <MdEdit/>
           </IconButton>
           <IconButton
             variant="contained"
             color="secondary"
            onClick={() => handleDelete(params.row.id)}
           >
             <MdDelete/>
           </IconButton>
          
         </>
       ),
     }

   ];

  const [rows, setRows] = useState([    
     { id: 1, Name: 'Hamdhan', Email: 'hamdhans2005@gmail.com', age: 21, PhoneNumber: 812276578, Address: 'Madha kovil Street Allikondapttu 606811', JoinedDate: "02-06-2025" },
     { id: 2, Name: 'Shabana', Email: 'shabana2005@gmail.com', age: 21, PhoneNumber: 9384261517, Address: 'Madha kovil Street Allikondapttu 606811', JoinedDate: "03-07-2025" },
     { id: 3, Name: 'AntoHonestRaj', Email: 'antohonestraj2004@gmail.com', age: 22, PhoneNumber: 9361355846, Address: ' Main Road Street Allikondapttu 606811', JoinedDate: "10-3-2025" },
     { id: 4, Name: 'Arun', Email: 'Arun@gmail.com', age: 30, PhoneNumber: 7856423942, Address: 'Tiruvannamalai kovil Street  606811', JoinedDate: "06-02-2025" },
     { id: 5, Name: 'Yakki', Email: 'Yakki@gmail.com', age: 25, PhoneNumber: 164568795, Address: 'Tiruvannamalai Head Posat Office Street  606801', JoinedDate: "22-03-2025" },
     { id: 6, Name: 'Stanly', Email: 'Stanly@gmail.com', age: 20, PhoneNumber: 845687528, Address: '102(2) Main Street Allikondapttu 606431', JoinedDate: "08-01-2025" },
     { id: 7, Name: 'Ram', Email: 'Ram2005@gmail.com', age: 33, PhoneNumber: 812896578, Address: 'Subhash Nagar 19th Cross 506811', JoinedDate: "05-04-2025" },
     { id: 8, Name: 'Lokesh', Email: 'Lokesh2005@gmail.com', age: 35, PhoneNumber: 812273548, Address: ' Shivaji Nagar in bengaluru 41100', JoinedDate: "11-05-2025" },
   ]);

   return (
     <Box sx={{ p: 2 }}>
       {/* Title and Add Button in one row */}
       <Grid container justifyContent="space-between" alignItems="Center" sx={{ mb: 3 }}>
        <Grid item>           <h1>Customer List</h1>
         </Grid>
         <Grid item>
           <Button variant="contained" color="success" onClick={() => setOpen(true)}>
             ➕ Add Customer
           </Button>
         </Grid>
     </Grid>
      <Paper sx={{ height: '100%', width: '100%' }}>
         <DataGrid
           rows={rows}
           columns={columns}
           sx={{ border: 0 }}
         />
       </Paper>
       <div>
         { <Button onClick={() => setOpen(true)}></Button> }
         <Dialog open={open} onClose={() => setOpen(false)}>
           <DialogTitle>Add Customer </DialogTitle>
           <DialogContent>
            <DialogContentText>

               <AddCustomer
                formData={formData}
                setData={setFormData}
                 isEdit={isEdit}

                />
               {/* A dialog is a popup windoiw which can ask user somthing like an information or confortmation */}
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setOpen(false)}>Update</Button>
             <Button onClick={() => setOpen(false)}>Cancel</Button>
           </DialogActions>
         </Dialog>
       </div>
     </Box>

   );
 }

export default CustomerList;
