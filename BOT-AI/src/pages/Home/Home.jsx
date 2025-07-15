import NavBar from "../../components/Navbar/Navbar"
import { Box, Stack, Typography } from '@mui/material';
import InitialChat from '../../components/InitialChat/InitialChat';
//import ChatInput from '../../components/ChatInput/ChatInput';

import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';


export default function Home() {
    const { mode } = useContext(ThemeContext);
    return (
       
            <Stack
            height={'100vh'}
            justifyContent={'space-between'}
            sx={{
                '@media (max-width:767px)': {
                    background: mode == 'light' ? 'linear-gradient(#F9FAFA 60%, #EDE4FF)' : ''
                }
            }}
        >
            <NavBar />
        </Stack>
           
      
    )
}