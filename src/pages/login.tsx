import { Avatar, Button, Link, TextField } from '@mui/material';

export default function login() {
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
            <div className="flex flex-col text-center ">
                <h1 className="text-6xl font-bold ">LifeByte</h1>
                <span className="text-sm text-primary">
                    Empower Your Journey, One Byte at a Time!
                </span>
            </div>

            <div className=" mt-7 flex justify-center ">
                <div
                    className=" mt-4 w-11/12 rounded-lg   bg-darker  shadow  "
                    id="heightbox"
                >
                    <div className="flex justify-center">
                        <p className="mt-3 text-4xl ">sign up</p>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <TextField
                            id="username"
                            label="Username "
                            variant="outlined"
                            className="w-2/4 rounded-lg bg-light "
                        />
                    </div>
                    <div className="mt-20 flex justify-center">
                        <TextField
                            id="password"
                            label="Password "
                            variant="outlined"
                            className="w-2/4 rounded-lg bg-light"
                        />
                    </div>
                    <div className="mt-20 flex justify-center">
                        <Button
                            variant="contained"
                            className="w-2/4 bg-white text-dark "
                        >
                            login
                        </Button>
                    </div>
                    <div className="forgot-password">
                        <div className=" mt-10   ">
                            <Link
                                href="#"
                                underline="hover"
                                className="text-sm text-light"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <div className=" mb-1    ">
                            <Link
                                href="#"
                                underline="hover"
                                className="text-sm text-light"
                            >
                                Create account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
