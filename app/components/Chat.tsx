import { Box, Typography } from '@mui/material';

type ChatProps = {
  messages: string[];
};

const Chat = ({ messages }: ChatProps) => {
  return (
    <Box
      sx={{
        marginTop: 10, // Ajusta según el tamaño del header
        height: 'calc(100vh - 150px)', // Ajusta según el tamaño del header y del input
        overflowY: 'scroll',
        border: '1px solid #ddd',
        padding: 2
      }}
    >
      {messages.length === 0 ? (
        <Typography variant="body1">Bienvenido(a), seré tu consejero nutricionista. Por favor ingresa tus datos.</Typography>
      ) : (
        messages.map((message, index) => <Typography key={index} variant="body1">{message}</Typography>)
      )}
    </Box>
  );
};

export default Chat;
