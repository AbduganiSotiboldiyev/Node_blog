import { Sidebar } from '@/components'
import { BlogsType } from '@/components/interface/blogs.interface'
import { CategoryType } from '@/components/interface/category.interface'
import { BlogService } from '@/components/services/blog.service'
import Layout from '@/layout/layout'
import { GetServerSideProps } from 'next'
import {DetailedBlogPage} from "@/components"
import { Box } from '@mui/material'
import Seo from '@/layout/seo/seo'
import { useRouter } from 'next/router'



const DetailedBlog = ({blog, categories,latestBlogs } : DetailedBlogPageProps) => {
    const route = useRouter()
  return (
    <Seo metaTitle={blog.title}>

        <Layout>
            <Box sx={{display: 'flex', flexDirection:{xs: "column",sm :"row"}, gap: "20px " , padding : "20px"}}>
                <DetailedBlogPage blog={blog}/>
                <Sidebar latestBlogs= {latestBlogs} categories={categories}/>
            </Box>
            
        </Layout>
    </Seo>
  )
}

export default DetailedBlog

export const getServerSideProps: GetServerSideProps<DetailedBlogPageProps> = async ({query}) => {
    const blog = await BlogService.getDetailedBlog(query.slug as string)
    const latestBlogs = await BlogService.getLatestBlogs()
    const categories = await BlogService.getCategories()
    return {
        props: {
            blog,
            latestBlogs,
            categories,

        }
    }
}

interface DetailedBlogPageProps {
    blog : BlogsType,
    latestBlogs : BlogsType[],
    categories : CategoryType[],
 
}