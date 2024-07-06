import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';


const ExerciseCard = ({ exercise }) => {
  return (
      <Link className="exercise-card" to={`/exercise/${exercise.id}`}
      >
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
          <Stack direction="row">
              <Button sx={{
                  ml: '21px',
                  color: '#fff',
                  bgcolor: '#ffa9a9',
                  fontSize: '14px',
                  borderRadius: '20px',
                  textTransform: 'capitalize'
              }}>
                  {exercise.bodyPart}
              </Button>
              <Button sx={{
                  ml: '21px',
                  color: '#fff',
                  bgcolor: '#5daafc',
                  fontSize: '14px',
                  borderRadius: '20px',
                  textTransform: 'capitalize'
              }}>
                  {exercise.target}
              </Button>  
          </Stack>
          <Typography ml='21px' mt="11px" pb="10px" color="#024996" fontWeight="bold" fontSize="22px" textTransform="capitalize"
          >
          {exercise.name}</Typography>
      </Link>
  )
}

export default ExerciseCard