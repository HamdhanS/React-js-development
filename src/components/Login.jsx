import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { App } from '../App.css';
import { AddCustomer } from '../components/AddCustomer';

function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (h) => {
    console.log("h", h);
    h.preventDefault();
    alert("Successfully Logged in ");
    navigate('/CustomerList');

    // Optional: save data or redirect
  };

  const handleAddCustomer = () => {
    navigate('/CustomerList');
  };

  return (
      <Container sx={{ width: '50%', px: '4', alignItems: "center", paddingTop: "120px", height: '600px', }}>
        <Box sx={{ p: 4, boxShadow: 3, borderRadius: 3, mt: 1,height:"400px" }}>
          <Typography style={{ color: "Green", marginLeft: "210px",marginTop:"40px", text:"bold" }} variant="h5" gutterBottom>
            Customer Login
          </Typography> 
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4} >
              <Grid item xs={12} sm={6} size={8} style={{ marginLeft: "90px", marginTop:"30px"}}>
                <TextField label=" Email or Phone Number" name="Email or Phone Number" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6} size={8} style={{ marginLeft: "90px" }}>
                <TextField label="Password" name="Password" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6} size={8} style={{ marginLeft: "90px",}}>
                <Button type="submit" style={{ background: "green", color: "white", alignItems: "Center", marginRight: " 40px", marginTop:"10px", width: "430px" ,height:"50px"}} >Login</Button>
              </Grid>
            </Grid>
          </form>
        </Box>

      </Container>

  );
}

export default SignIn;
