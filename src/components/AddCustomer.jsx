import {
    Container,
    Box,
    Grid,
    TextField,
    Button,
    Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddCustomer = ({ formData, setData, isEdit }) => {
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
        <Container maxWidth={false} sx={{ width: '100%', px: 4 }}>
            <Box sx={{ p: 4, boxShadow: 3, borderRadius: 3, mt: 1 }}>
                <Grid container spacing={2} size={8}>
                    <Grid item xs={12} sm={6} size={12}>
                        <TextField label=" Name" name="Name" fullWidth required
                            value={formData.name}
                            onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} size={12}>
                        <TextField label="Age" name="age" fullWidth required
                            value={formData.age}
                            onChange={(e) => setData(prev => ({ ...prev, age: e.target.value }))}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} size={12}>
                        <TextField label="Phone Number" name="PhoneNumber" type="tel" fullWidth
                            value={formData.PhoneNumber}
                            onChange={(e) => setData(prev => ({ ...prev, PhoneNumber: e.target.value }))}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} size={12}>
                        <TextField label="Email" name="Email" type="email" fullWidth required
                            value={formData.Email}
                            onChange={(e) => setData(prev => ({ ...prev, Email: e.target.value }))}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} size={12}>
                        <TextField
                            label="Address"
                            name="Address"
                            fullWidth
                            multiline
                            rows={1}
                            required
                            value={formData.Address}
                            onChange={(e) => setData(prev => ({ ...prev, Address: e.target.value }))}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} size={12}>
                        <TextField
                            label="Join Date"
                            name="joinDate"
                            input="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            required
                            value={formData.JoinedDate}
                            onChange={(e) => setData(prev => ({ ...prev, JoinedDate: e.target.value }))}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}></Grid>
                </Grid>

            </Box>
        </Container>
    );
}

export default AddCustomer;
