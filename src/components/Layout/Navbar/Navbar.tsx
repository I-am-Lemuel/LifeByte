import AddIcon from '@mui/icons-material/Add';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HomeIcon from '@mui/icons-material/Home';
import MemoryIcon from '@mui/icons-material/Memory';
import { Button, IconButton } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
    const router = useRouter();
    return (
        <div className="fixed bottom-16 flex w-full justify-center">
            <div className="flex h-16 w-11/12 items-center justify-evenly rounded-lg bg-darker">
                <div className="flex w-full items-center justify-between p-2">
                    <Button
                        className="rounded-full bg-primary text-darker"
                        variant="contained"
                    >
                        <AddIcon />
                    </Button>
                    <Link href="/">
                        <IconButton aria-label="home" size="large">
                            <HomeIcon
                                className={
                                    `h-8 w-8 text-light` +
                                    (router.pathname === '/'
                                        ? ' text-primary'
                                        : '')
                                }
                            />
                        </IconButton>
                    </Link>
                    <Link href="/habits">
                        <IconButton aria-label="habit" size="large">
                            <MemoryIcon
                                className={
                                    `h-8 w-8 text-light` +
                                    (router.pathname === '/habits'
                                        ? ' text-primary'
                                        : '')
                                }
                            />
                        </IconButton>
                    </Link>
                    <Link href="/journey">
                        <IconButton aria-label="journey" size="large">
                            <EditNoteIcon
                                className={
                                    `h-8 w-8 text-light` +
                                    (router.pathname === '/journey'
                                        ? ' text-primary'
                                        : '')
                                }
                            />
                        </IconButton>
                    </Link>
                    <Link href="/stats">
                        <IconButton aria-label="stats" size="large">
                            <AssessmentRoundedIcon
                                className={
                                    `h-8 w-8 text-light` +
                                    (router.pathname === '/stats'
                                        ? ' text-primary'
                                        : '')
                                }
                            />
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
