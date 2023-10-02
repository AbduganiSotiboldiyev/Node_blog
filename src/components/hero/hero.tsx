import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { format } from 'date-fns';
import { data } from '@/config/site.config';
import { HeroProps } from './hero.props';
import { EstimatedTimeToRead } from '@/helpers/time.toread';



const Hero = ({blogs} : HeroProps) => {
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

            {blogs.map(item => (
              <Box key={item.id}>
                <Box sx={{position: "relative", width: "100%" , height:"70vh"}}>
                 <Image src={item.image.url} alt={item.title} fill style={{objectFit : "cover"}} />
                 <Box sx={{position:"absolute", top: 0, left: 0 ,right:0,bottom:0,width: "100%" ,backgroundColor: "rgba(0,0,0,0.6)"}}>
                  <Box sx={{position:"relative",color:"white", top: "50%", transform: "translateY(-50%)", paddingLeft:{xs:"10px", md:"50px" }, width:"70vw"}}>
                    <Typography sx={{fontSize : {xs : "30px", md : "50px"}}} >
                      {item.title}
                    </Typography>
                    <Typography sx={{fontSize : {xs : "18px", md : "22px"}}} color="rgba(255,255,255,0.8)">{item.exert}</Typography>
                    <Box sx={{display:"flex" , gap:"10px", marginTop:"50px"}}>
                      <Avatar alt={item.author.name} src={item.author.avatar.url}/>
                      <Box >
                        <Typography >
                          {item.author.name}
                        </Typography>
                        <Typography>{format(new Date(item.createdAt), 'dd MMM, yyyy')}  &#x2022; {EstimatedTimeToRead(item.description.text)} min to read</Typography>
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





