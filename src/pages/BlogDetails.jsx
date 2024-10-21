import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { Stack } from '@mui/material';

const BlogDetails = () => {

  const [post, setBlogPost] = useState([])
  const [loading, setLoading] = useState(false)

  const { blogId } = useParams();

  const baseURL = process.env.REACT_APP_API_URI;

  const fetchPost = async (id) => {
    setLoading(true)
    try {
      const post = await axios.get(baseURL + '/posts/' + id);

      if (post.status === 200) {
        toast.success('Post loaded successfully.')
        setBlogPost(post?.data || [])
      } else {
        toast.error('Unable to load the data')
      }
    } catch (error) {
      console.log('Error', error)
    } finally {
      setLoading(false)
    }
  }

  // Dependancy
  useEffect(() => {
    fetchPost(blogId);
  }, [blogId])


  return (
    <div className='py-11'>
      {loading ? <p>Loading...</p> :
        <Card className='mb-8 border p-5' sx={{ borderRadius: "15px", boxShadow: "1px 5px 10px rgba(0,0,0, 0.1)" }} key={`post_${post.id}`}>
          <CardContent>
            <Typography sx={{ mb: "15px" }} gutterBottom variant="h4" component="div">
              {post.title}
            </Typography>
            <Typography component={'div'} variant="body" sx={{ color: 'text.secondary', marginBottom: "15px" }}>
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      }

      {!loading &&
        <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
          <span>{blogId > 1 &&
            <Link className='font-semibold text-blue-500' to={`/blog/${parseInt(blogId) - 1}`}>Previous</Link>
          }</span>
          {blogId < 100 &&
            <Link className='font-semibold text-blue-500' to={`/blog/${parseInt(blogId) + 1}`}>Next</Link>
          }
        </Stack>
      }
    </div>
  )
}

export default BlogDetails
