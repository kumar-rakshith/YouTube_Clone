import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoVideoUrl, demoChannelTitle } from '../utils/constants';
const VideoCard = ({ video: { id: { videoid },snippet } }) => {
    
    return (
       <Card>
        <Link to={videoid ? `/video/${videoid}`:demoVideoUrl}>
          <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.tittle}
          sx={{ width: 358, height:180}}
          />
        </Link>
       </Card>
    )
}

export default VideoCard
