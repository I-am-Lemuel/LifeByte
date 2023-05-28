
import { Avatar, Button, Link, TextField } from '@mui/material';

export default function Stats() {
    return (
        <div>
            <div className="relative m-4 flex h-16 items-center">
            <div className="absolute">
                <Avatar
                    alt="Bert"
                    src="/images/bert.jpg"
                    sx={{
                        width: 64,
                        height: 64,
                    }}
                />
            </div>
            </div>
            <div className="flex w-full items-center justify-center ">
            <h1 className="text-6xl font-bold ">LifeByte</h1>
            </div>
            <div className="flex w-full items-center justify-center  mt-1 ">
                <p className= 'flex items-center text-sm text-primary'>Empower Your Journey, One Byte at a Time!</p>
                </div>

            <div className=" mt-7 flex justify-center ">
                <div className=" w-11/12 rounded-lg bg-darker   mt-4  shadow  " id='heightbox'>
                <div className='flex justify-center'>
                    <p className='text-4xl mt-3 '>sign up</p>
                </div>
                <div className='flex justify-center mt-8'>
                <TextField  id="username" label="Username: " variant="outlined" className="w-2/4 bg-light rounded-lg "/>
                    </div>
                    <div className='flex justify-center mt-20'>
                    <TextField  id="password" label="Password: " variant="outlined" className="w-2/4 bg-light rounded-lg"/>
                    </div>
                    <div className='flex justify-center mt-20'>
                    <Button variant="contained" className="w-2/4 bg-white text-dark ">login</Button>
                    </div>
                    <div className='forgot-password'>
                    <div className=' flex justify-center mt-10 '>
                        <Link href="#" underline="hover" className='text-sm text-light'>Forgot Password?</Link>
                </div>
                <div className=' flex justify-center mb-1  '>
                        <Link href="#" underline="hover" className='text-sm text-light'>Create account</Link>
                </div>
                </div>
                </div>
    </div>
        </div>


        
    );
}