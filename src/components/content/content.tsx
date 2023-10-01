import { data } from "@/config/data-api"
import {Box,Typography,Avatar,Divider} from "@mui/material"
import Image from "next/image"
import {format} from "date-fns"
import { ContentProps } from "./content.props"
import { EstimatedTimeToRead } from "@/helpers/time.toread"
import { useRouter } from "next/router"
const Content = ({blogs} : ContentProps) => {

  const route = useRouter()

  return (
    <Box width={{xs: "100%", sm: "100%"}} >
      {blogs.map(item => (
        <Box key={item.id} onClick={() => route.push(`/blog/${item.slug}`)} sx={{  backgroundColor:"black", padding:"20px", marginTop:"20px", borderRadius: "8px",boxShadow:"0px 8px 16px rgba(255,255,255, 0.1)", cursor:"pointer" }} >
          <Box position={"relative"} width={"100%"} height={{xs:"30vh", md: "50vh"}}> 
            <Image src={item.image.url} alt={item.title} fill style={{objectFit : "cover", borderRadius:"8px"}}/>
          </Box>
            <Typography variant="h4" marginTop={"30px"} >{item.title} </Typography>
            <Typography variant="body1" color={"gray"}>{item.exert} </Typography>
            <Divider sx={{padding: "30px"}}/>
            <Box sx={{display: "flex", gap:"20px", marginTop : "30px", alignItems:"center"}}>
                <Avatar src={item.author.avatar.url}></Avatar>
                <Box sx={{display: "flex", flexDirection:"column"}}>
                  <Typography variant="h6">{item.author.name}</Typography>
                  <Typography variant="body2" color={"gray"}>{format(new Date(item.createdAt), "dd MMM,yyyy")} &#x2022; {EstimatedTimeToRead(item.description.text)} min to read</Typography>
                </Box>
            </Box>
        </Box>

      ))}
    </Box>
  )
}

export default Content