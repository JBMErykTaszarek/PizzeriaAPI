import logo from './logo.svg';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import Order from "./components/order/index.js"

function App() {
  return (
   <Container maxWidth="md">
     <Typography gutterBottom variant="h2" align="center">
        Test
     </Typography>
      <Order>

      </Order>
   </Container>
  );
}

export default App;
