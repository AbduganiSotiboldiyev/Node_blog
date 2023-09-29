import { navItems } from "@/config/constants"
import { data } from "@/config/data-api"
import { Box,Typography,Button, Divider,Avatar } from "@mui/material"
import format from "date-fns/format"
import Image from "next/image"
import {Fragment} from "react"

const Sidebar = () => {
  return (
    <>
      <Box width={{xs : "100%", sm: "30%"}}>
        <Box position={"sticky"}  top={"100px"} sx={{transition : "all 0.3s ease"}} >
            <Box sx={{padding : "20px" , border : "1px solid grey" ,borderRadius : "8px"}}>
                <Typography variant="h5">Sidebar </Typography>
                  <Box sx={{display: "flex", flexDirection: "column", marginTop: "20px"}}>
                    {navItems.map(nav => (
                      <Fragment key={nav.route} >
                        <Button fullWidth sx={{justifyContent: "flex-start" ,height: "50px"}}>
                          {nav.label}
                        </Button>
                        <Divider/>    

                      </Fragment>
                    ))}
                  </Box>
            </Box>
            <Box  sx={{padding : "20px" , border : "1px solid grey" ,borderRadius : "8px", marginTop: "20px"}}>
              <Typography variant="h5"> Latest Blogs</Typography>
              <Box sx={{display : "flex", flexDirection : "column"}}>
                {data.map(item => (
                  <Fragment key={item.title}>
                    <Box  sx={{marginTop:"20px", display:"flex",alignItems:"center", gap:"20px"}}> 
                      <Image src={item.image} alt={item.title} width={100} height={100} style={{objectFit : "cover", borderRadius: "8px"}}/>
                      <Box sx={{display : "flex", flexDirection : "column",gap:"10px"}}>
                        <Typography variant="h5">{item.title}</Typography>
                        <Box sx={{display:"flex" , gap:"10px", alignItems:"center",opacity : "0.6 "}} >
                            <Avatar alt={item.author.name} src={item.author.image} />
                            <Box >
                              <Typography  variant="body1">
                                {item.author.name}
                              </Typography>
                              <Typography>{format(new Date(), 'dd MMM, yyyy')}</Typography>
                            </Box>
                          </Box>
                      </Box>
                    </Box>
                    <Divider sx={{marginTop:"20px" }}/>
                  </Fragment>
                ))}
              </Box>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Sidebar