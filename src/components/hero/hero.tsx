import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { format } from 'date-fns';



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



const data = [
  {
    image : "https://i.pinimg.com/564x/e3/f9/f5/e3f9f5f051fc851aef94bc91b9f0f5b1.jpg",
    title : "Be the best NodeJs developer",
    exert : "Here is some tips and suggestions to become the best NodeJS developer",
    author : {
      name : "Abdugani",
      image: "https://avatars.githubusercontent.com/u/91188722?v=4",
    }
  },
   {
    image : "https://i.pinimg.com/564x/44/49/28/444928c9b6398640cba5589cd539c9d1.jpg",
    title : "React Native Platform",
    exert : "The easiest ways to create a React Native Platform",
    author : {
      name : "A_Shakhnoza",
      image: "https://avatars.githubusercontent.com/u/91188722?v=4",
    }
  }
]

