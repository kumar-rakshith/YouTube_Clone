import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {Videos, Sidebar} from './';
import { fetchFromAPI } from '../utils/fetchFromApi';


const Feed = () => {
  const [seletedCategory, setselectedCategory]= useState('New');
  const [videos,setvideos] = useState([]);

  useEffect(()=>{
    setvideos(null);

    fetchFromAPI(`search?part=snippet&q=${seletedCategory}`)
    .then((data)=>setvideos(data.items))
  },[seletedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar 
        seletedCategory ={seletedCategory}
        setselectedCategory={setselectedCategory}
        />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2024 RAKSHITH KUMAR
        </Typography>
      </Box>


      <Box p={2} sx={{
        overflowY:'auto',
        height:'90vh',
        flex:2
      }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {seletedCategory} <span style={{
            color:'#f31503'
          }}>
            Video
          </span>
        </Typography>
        <Videos videos ={videos} />
      </Box>
    </Stack>
  );
}

export default Feed
