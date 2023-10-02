import { Content, Sidebar } from "@/components"
import { BlogsType } from "@/components/interface/blogs.interface"
import { CategoryType } from "@/components/interface/category.interface"
import { BlogService } from "@/components/services/blog.service"
import Layout from "@/layout/layout"
import Seo from "@/layout/seo/seo"
import { Box } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

const CategoryBlogs = ({blogs,latestBlogs,categories} : getCategoryBlogs ) => {
    const route = useRouter()
  return (
    <Seo metaTitle= {`${route.query.slug}`}>
        <Layout>
        <Box sx={{display: 'flex', flexDirection:{xs: "column",sm :"row"}, gap: "20px " , padding : "20px"}}>
            <Sidebar latestBlogs= {latestBlogs} categories={categories}/>
            <Content blogs={blogs}/>
        </Box>

        </Layout>

    </Seo>
  )
}

export default CategoryBlogs
export const getServerSideProps: GetServerSideProps<getCategoryBlogs> = async ({query}) => {
    const blogs = await BlogService.getCategoryBlogs(query.slug as string)
    const latestBlogs = await BlogService.getLatestBlogs()
    const categories = await BlogService.getCategories()
    return {
        props: {
            blogs,
            latestBlogs,
            categories,

        }
    }
}

interface getCategoryBlogs {
    blogs : BlogsType[],
    latestBlogs : BlogsType[],
    categories : CategoryType[],
 
}