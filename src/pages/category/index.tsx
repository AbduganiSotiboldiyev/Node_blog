import { CategoryType } from "@/components/interface/category.interface"
import { BlogService } from "@/components/services/blog.service"
import Layout from "@/layout/layout"
import Seo from "@/layout/seo/seo"
import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

const CategoryPage = ({categories} : CategoryPageProps) => {
    const route = useRouter()
  return (
    <Seo metaTitle="ALl about my it blog">
        <Layout>
            <Box height={{xs : "30vh", sm :"50vh"}} width={{xs: "90%", sm:"70%"}} marginX={"auto"} marginTop={"50px"} 
            sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor :"black", padding: "20px",borderRadius: "8px", gap: "20px"}}
            >
                <Typography variant={"h4"} fontFamily={"cursive"}>All Categories</Typography>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    {categories.map(item => (
                        <Button onClick={() => route.push(`/category/${item.slug}`)} key={item.slug}>#{item.label}</Button>
                    ))}

                </ButtonGroup>
            </Box>
        </Layout>

    </Seo>
  )
}

export default CategoryPage

export const getServerSideProps : GetServerSideProps<CategoryPageProps> =  async () => {
    const categories = await BlogService.getCategories()
    return {
        props: {
            categories,
        }
    }
}

interface CategoryPageProps{
    categories: CategoryType[],
}