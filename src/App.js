import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Card/Card';
import {Container, Grid} from '@mui/material';

function App() {
  return (
    //JSX
    <div>
      <NavBar/>
      <Container>
        <Grid container>
          <Grid item md={3}>
            <ItemListContainer/>
          </Grid>
          <Grid item md={3}>
            <ItemListContainer/>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
}

export default App;
