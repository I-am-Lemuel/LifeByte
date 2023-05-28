import { Avatar } from '@mui/material';

export const Header = () => {
    return (
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
            <div className="flex w-full items-center justify-center">
                <h1 className="text-2xl font-bold">Welcome, Bert</h1>
            </div>
        </div>
    );
};

export default Header;
