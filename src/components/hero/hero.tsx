import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { format } from 'date-fns';
import { data } from '@/config/data-api';



const Hero = () => {
  return (
    <Box sx={{width : "100%" , height: "70vh", backgroundColor: "red"}}>
        <Carousel 
          responsive={{
              mobile: {
                breakpoint: { max: 4000, min: 0 },
                items: 1
              }
          }}
        >

            {data.map(item => (
              <Box key={item.image}>
                <Box sx={{position: "relative", width: "100%" , height:"70vh"}}>
                 <Image src={item.image} alt={item.title} fill style={{objectFit : "cover"}} />
                 <Box sx={{position:"absolute", top: 0, left: 0 ,right:0,bottom:0,width: "100%" ,backgroundColor: "rgba(0,0,0,0.6)"}}>
                  <Box sx={{position:"relative",color:"white", top: "50%", transform: "translateY(-50%)", paddingLeft:{xs:"10px", md:"50px" }, width:"70vw"}}>
                    <Typography sx={{fontSize : {xs : "30px", md : "50px"}}} >
                      {item.title}
                    </Typography>
                    <Typography sx={{fontSize : {xs : "18px", md : "22px"}}} color="rgba(255,255,255,0.8)">{item.exert}</Typography>
                    <Box sx={{display:"flex" , gap:"10px", marginTop:"50px"}}>
                      <Avatar alt={item.author.name} src={item.author.image}/>
                      <Box >
                        <Typography >
                          {item.author.name}
                        </Typography>
                        <Typography>{format(new Date(), 'dd MMM, yyyy')}</Typography>
                      </Box>
                    </Box>
                  </Box>

                 </Box>
                </Box>
              </Box>
            ))}
         
          
        </Carousel>
        
    </Box>
  )
}

export default Hero





