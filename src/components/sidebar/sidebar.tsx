import { navItems } from "@/config/constants"
import { Box,Typography,Button, Divider,Avatar } from "@mui/material"
import format from "date-fns/format"
import Image from "next/image"
import {Fragment} from "react"
import { SidebarProps } from "./sidebar.props"
import { useRouter } from "next/router"

const Sidebar = ({latestBlogs,categories} : SidebarProps) => {
  const route = useRouter()
  
  return (
    <>
      <Box width={{xs : "100%", sm: "30%"}} marginTop={"100px"}>
        <Box position={"sticky"}  top={"100px"} sx={{transition : "all 0.3s ease"}} >
            <Box sx={{padding : "20px" , border : "1px solid grey" ,borderRadius : "8px"}}>
                <Typography variant="h5">Category  </Typography>
                  <Box sx={{display: "flex", flexDirection: "column", marginTop: "20px"}}>
                    {categories.map(nav => (
                      <Fragment key={nav.slug} >
                        <Button fullWidth sx={{justifyContent: "flex-start" ,height: "50px"}} onClick={()=> route.push(`/category/${nav.slug}`)}>
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
                {latestBlogs.map(item => (
                  <Fragment key={item.id}>
                    <Box onClick={() => route.push(`/blog/${item.slug}`)} sx={{marginTop:"20px", display:"flex",alignItems:"center", gap:"20px", cursor : "pointer"}}> 
                      <Image src={item.image.url} alt={item.title} width={100} height={100} style={{objectFit : "cover", borderRadius: "8px"}}/>
                      <Box sx={{display : "flex", flexDirection : "column",gap:"10px"}}>
                        <Typography variant="h5">{item.title.slice(0, 20)}</Typography>
                        <Box sx={{display:"flex" , gap:"10px", alignItems:"center",opacity : "0.6 "}} >
                            <Avatar alt={item.author.name} src={item.author.avatar.url} />
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