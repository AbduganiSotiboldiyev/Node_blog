import { Avatar, Box, Divider, Typography } from "@mui/material"
import { DetailedBlogProps } from "./detailedblog.props"
import Image from "next/image"
import { format } from "date-fns"
import { EstimatedTimeToRead } from "@/helpers/time.toread"

const DetailedBlogPage = ({blog} : DetailedBlogProps) => {

  return (
    <>
      <Box width={{xs: "100%", sm: "100%"}} >
        <Box key={blog.id} sx={{  backgroundColor:"black", padding:"20px", marginTop:"20px", borderRadius: "8px",boxShadow:"0px 8px 16px rgba(255,255,255, 0.1)"}} >
          <Box position={"relative"} width={"100%"} height={{xs:"30vh", md: "50vh"}} marginBottom={"50px"}> 
            <Image src={blog.image.url} alt={blog.title} fill style={{objectFit : "cover", borderRadius:"8px"}} />
          </Box>
          <Box sx={{display: "flex", gap:"20px", marginTop : "30px", alignblogs:"center"}}>
                <Avatar src={blog.author.avatar.url}></Avatar>
                <Box sx={{display: "flex", flexDirection:"column"}}>
                  <Typography variant="h6">{blog.author.name}</Typography>
                  <Typography variant="body2" color={"grey"}>{format(new Date(blog.createdAt), "dd MMM,yyyy")} &#x2022; {EstimatedTimeToRead(blog.description.text)} min to read</Typography>
                </Box>
            </Box>
            <Divider/>
            <Typography variant="h4" marginTop={"30px"} >{blog.title} </Typography>
            <Typography variant="h6" color={"gray"}>{blog.exert} </Typography>
            <Typography variant="body1" color={"gray"}>{blog.description.text} </Typography>
            <div dangerouslySetInnerHTML = {{__html : blog.description.html}}></div>

            <Divider sx={{padding: "30px"}}/>
            
        </Box>

   
    </Box>
    </>
  )
}

export default DetailedBlogPage