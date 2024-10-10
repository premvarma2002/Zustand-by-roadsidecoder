import { Box, Grid, Paper, Typography ,Button } from "@mui/material"
import useHabitStore from "../store/store"

const HabitList = () => {
    const {habits} = useHabitStore();
  return (
    <Box sx={{ display:"flex", flexDirection:"column", gap:2 ,mt:4}}>
        {habits.map((habit)=>(
         <Paper key={habit.id} elevation={2} sx={{ p:2 }}>
           <Grid container alignItems="center">
            <Grid xs={12} sm={6}>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography variant="h6" color="text.secondary">
                    {habit.frequency}
                </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
               <Box sx={{display:"flex", justifyContent:"flex-end",gap:1}}>
                <Button variant="outlined" color="success">
                    Mark Complete
                </Button>
                <Button variant="outlined" color="error">
                    Remove
                </Button>
               </Box>
            </Grid>
           </Grid>
         </Paper>
        ))}
    </Box>
  )
}

export default HabitList