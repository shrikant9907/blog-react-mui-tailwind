
// Share
export const fetchPost = async (baseURL, id, setData, setLoading) => {
    // GET | POST | PUT | PATCH

    // POST 
    // API URL
    // Payload
    // Callback

    setLoading(true)
    try {
      const post = await axios.get(baseURL + '/posts/' + id); // API URL /Post | Put | Patch

      if (post.status === 200) {
        toast.success('Post loaded successfully.')
        setData(post?.data || []) // Callback
      } else {
        toast.error('Unable to load the data')
      }
    } catch (error) {
      console.log('Error', error)
    } finally {
      setLoading(false)
    }
  }
