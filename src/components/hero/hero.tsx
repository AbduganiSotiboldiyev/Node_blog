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
                  <Box sx={{position:"relative",color:"white", top: "50%", transform: "translateY(-50%)", paddingLeft:{xs:"10px", sm:"50px" }, width:"70vw"}}>
                    <Typography variant='h2' >
                      {item.title}
                    </Typography>
                    <Typography variant="h5">{item.exert}</Typography>
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





