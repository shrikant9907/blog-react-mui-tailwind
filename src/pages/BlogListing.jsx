import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box, Pagination, Stack } from '@mui/material';

const BlogListing = () => {

  const [blogPosts, setBlogPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const baseURL = process.env.REACT_APP_API_URI;

  const fetchBlogListing = async () => {
    setLoading(true);
    try {
      const posts = await axios.get(baseURL + '/posts');
      if (posts.status === 200) {
        toast.success('Posts loaded successfully.')
        setBlogPosts(posts?.data || [])
      } else {
        toast.error('Unable to load the data')
      }
    } catch (error) {
      console.log('Error', error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogListing();
  }, []) 

  const sliceOffset = (page - 1) * 5;// 0 * 5 = 0, 1 * 5 = 5, 2* 5 = 10
  const limit = sliceOffset + 5; // 5, 10, 15

  const pageCounts = blogPosts?.length / 5;

  return (
    <div className='py-11'>
      <Typography sx={{ mb: "44px" }} gutterBottom variant="h3">
        Blog Posts
      </Typography>
      {loading && <p>Loading...</p>}

      {
       !loading && blogPosts && blogPosts.slice(sliceOffset, limit).map((post => {

          const postLink = '/blog/' + post?.id;
          return <Card className='mb-8 border p-5' sx={{ borderRadius: "15px", boxShadow: "1px 5px 10px rgba(0,0,0, 0.1)" }} key={`post_${post.id}`}>
            <CardContent>
              <Typography className='hover:underline' sx={{ mb: "15px" }} gutterBottom variant="h4" component="div">
                <Link to={postLink}>{post.title}</Link>
              </Typography>
              <Typography component={'div'} variant="body" sx={{ color: 'text.secondary', marginBottom: "15px" }}>
                {post.body}
              </Typography>

              <Box>
                <Link className='text-blue-500' to={postLink}>Learn More..</Link>
              </Box>
            </CardContent>
          </Card>

        }))
      }

      {!loading && pageCounts && pageCounts > 5 && 
        <Pagination 
          className='flex justify-center' 
          count={pageCounts} size="large" 
          page ={page}
          onChange={(event, value) => setPage(value)}
        />
      }
    </div>
  )
}

export default BlogListing
