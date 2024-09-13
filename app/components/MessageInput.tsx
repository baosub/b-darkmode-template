import { TextField, Button, Box, Container } from '@mui/material';

type MessageInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
};

const MessageInput = ({ value, onChange, onSend }: MessageInputProps) => {
  return (

    <Container>
        <Box
    sx={{
      position: 'fixed',
      bottom: 0,
    
    
     
      padding: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',  // Distribuye los elementos de forma equitativa
      gap: 1,                           // Añade un pequeño espacio entre los elementos
      flexWrap: 'wrap'                  // Permite que los elementos se acomoden en varias líneas si es necesario
    }}
  >

   
    <TextField
      variant="outlined"
  
      rows={3}
      value={value}
      onChange={onChange}
    
      sx={{
        flexGrow: 1,                   // Permite que el textarea crezca para llenar el espacio disponible
        minWidth: '200px',             // Establece un ancho mínimo para evitar deformaciones
        marginRight: 1,
        width: '100%'
       
      }}
    />
    <Button 
      variant="contained" 
      color="primary" 
      onClick={onSend}
      sx={{
        minWidth: '80px',              // Ancho mínimo para evitar que el botón se haga muy pequeño
      }}
    >
      Enviar
    </Button>


    
    
  </Box>
  </Container>

        

    
  );
};

export default MessageInput;
