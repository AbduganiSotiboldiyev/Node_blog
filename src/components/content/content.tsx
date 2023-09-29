import { data } from "@/config/data-api"
import {Box,Typography,Avatar,Divider} from "@mui/material"
import Image from "next/image"
import {format} from "date-fns"
const Content = () => {
  return (
    <Box width={{xs: "100%", sm: "100%"}} >
      {data.map(item => (
        <Box key={item.title} sx={{  backgroundColor:"black", padding:"20px", marginTop:"20px", borderRadius: "8px",boxShadow:"0px 8px 16px rgba(255,255,255, 0.1)"}}>
          <Box position={"relative"} width={"100%"} height={{xs:"30vh", md: "50vh"}}> 
            <Image src={item.image} alt={item.title} fill style={{objectFit : "cover", borderRadius:"8px"}}/>
          </Box>
            <Typography variant="h4" marginTop={"30px"} >{item.title} </Typography>
            <Typography variant="body1" color={"gray"}>{item.exert} </Typography>
            <Divider sx={{padding: "30px"}}/>
            <Box sx={{display: "flex", gap:"20px", marginTop : "30px", alignItems:"center"}}>
                <Avatar src={item.author.image}></Avatar>
                <Box sx={{display: "flex", flexDirection:"column"}}>
                  <Typography variant="h6">{item.author.name}</Typography>
                  <Typography variant="body2" color={"grey"}>{format(new Date(), "dd MMM,yyyy")}</Typography>
                </Box>
            </Box>
        </Box>

      ))}
    </Box>
  )
}

export default Content