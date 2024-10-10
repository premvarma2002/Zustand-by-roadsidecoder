import { Box, Container, Typography } from '@mui/material';
import './App.css';
import AddHabitForm from './components/add-habit-form';
import HabitList from './components/habit-list';

const App = () => {
  //  const store = useHabitStore()
  //  console.log(store);

  return (
    <Container>
      <Box>
        <Typography variant='h2' component='h1' gutterBottom align='center'>
          Habit Tracker
        </Typography>
        {/* form  */}
        <AddHabitForm/>
        {/* list  */}
        <HabitList/>
        {/* stats */}
      </Box>
    </Container>
  )
}

export default App