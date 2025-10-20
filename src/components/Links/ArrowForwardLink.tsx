import { Link } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import type { ReactNode } from "react";

interface LinkProps{
    children?: ReactNode
    color?: string
    ref?:string
}

export default function ArrowForwardLink({children,color= 'inherit',ref='/about'}:LinkProps) {
    return (
        <Link href={ref} color={color} underline="hover" 
        sx={{
            display: "inline-flex",       
            alignItems: "center",     
            gap: 1,                       
        }}>
            {children}
            <ArrowForwardIcon fontSize="small" sx={{ ml: 1 }} />
        </Link>
    )
}
