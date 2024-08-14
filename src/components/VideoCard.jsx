import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoVideoUrl, demoChannelTitle } from '../utils/constants';
const VideoCard = ({ video: { id: { videoid }, snippet } }) => {

    return (
        <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoid ? `/video/${videoid}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.tittle} sx={{ width: 358, height: 180 }} />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoid ? `/video/${videoid}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color="#fff">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gary', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard
