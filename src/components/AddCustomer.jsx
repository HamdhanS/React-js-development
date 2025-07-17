import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddCustomer() {
  const navigate = useNavigate();

  const handleSubmit = (h) => {
    h.preventDefault();
    alert("Customer details saved!");
    // Optional: save data or redirect
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
     <Container maxWidth={false} sx={{ width: '50%', px: 4 }}>
      <Box sx={{ p: 4, boxShadow: 3, borderRadius: 3, mt: 1 }}>
        <Typography variant="h5" gutterBottom>
          Add New Customer
        </Typography> 
        
          <Grid container spacing={2} size={8}>
            <Grid item xs={12} sm={6} size={12}>
              <TextField label=" Name" name="Name" fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6} size={12}> 
              <TextField label="LastName" name="lastName" fullWidth required />
            </Grid>

            <Grid item xs={12} sm={6} size={12}>
              <TextField label="Email" name="email" type="email" fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6} size={12}>
              <TextField label="Phone Number" name="phone" type="tel" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6} size={12}>
              <TextField
                label="Address"
                name="address"
                fullWidth
                multiline
                rows={1}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} size={12}>
              <TextField label="Age" name="age" type="number" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6} size={12}>
              <TextField
                label="Join Date"
                name="joinDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        
      </Box>
     </Container>
  );
}

export default AddCustomer;
