import { Button, 
         Dialog, 
         DialogActions,
         DialogContent, 
         DialogContentText, 
         DialogTitle
} from '@mui/material';
import { useState } from 'react';

const Popup =() => {
    
    const [ open, setOpen] = useState(false);
    return (
    <div>
        <Button variant='contained' 
        color='primary' 
        onClick={() => setOpen(true)}>open Dialog</Button>
        <Dialog  open={open} onClose={() => setOpen(false)}>
            <DialogTitle>This Is My Dialog Box </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* A dialog is a popup windoiw which can ask user somthing like an information or confortmation */}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button variant='contained'
                    color='success'
                     onclick={() => setOpen(false )}>Upadet</Button>
                    <Button variant='ountlined'
                    color='error' onClick={() => setOpen(false)}>Cancel</Button>

                </DialogActions>
        </Dialog>
    </div>
    );
}

export default Popup;









































































// import { makeStyles } from '@mui/material/styles'; // optional, see note below


//     function popover() {
//         const [anchor,setanchor] = useState(null);
//         const popover = (event) => {
//         setanchor(event.currntTarget);
//         }
//         return(
//             <did>
//                 <Button
//                 style={{marginTop:300,marginLeft:300    }}
//                     variant='contained'
//                     color='secondary'
//                     onClick={openPopover}
//                    > 
//                    clik me                                                                                                      
//                 </Button>
//                 <popover>
//                 open={Boolean(anchor)}
//                 anchorEI={anchor}
//                 anchorOrigin={{
//                     vartical: 'toop',
//                     horizontal:'right'
//                 }}
//                 transformOrigin={{
//                     vartical: 'button',
//                     horizontal:'left'
//                 }}  
//                 onClose={() => setanchor(null)}
//                     <Typography variant='h6'>Hello world !!</Typography>
//                 </popover>
//             </did>
//         );
//     }
    


//     export default popover;







