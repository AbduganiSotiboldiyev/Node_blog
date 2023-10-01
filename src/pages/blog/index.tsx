import { Content } from "@/components"
import { BlogsType } from "@/components/interface/blogs.interface"
import { BlogService } from "@/components/services/blog.service"
import Layout from "@/layout/layout"
import { Box, Typography } from "@mui/material"
import { GetServerSideProps } from "next"

const BlogPage = ({blogs} : BlogPageProps) => {
  return (
    <Layout>
        <Box sx={{display: 'flex', flexDirection:{xs: "column",sm :"row"}, gap: "20px " , padding : "20px", justifyContent: "center"}} width={{xs : "100%", sm : "60%"}} marginX={"auto"}>
          
          <Content blogs={blogs}/>
      </Box>
    </Layout>
  )
}

export default BlogPage

export const getServerSideProps : GetServerSideProps<BlogPageProps> =  async () => {
  const blogs = await BlogService.getAllBlogs()
  
  return {
    props: {
      blogs,
    }
  }
}

interface BlogPageProps {
  blogs : BlogsType[]
}