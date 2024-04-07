import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"
import { useState, useEffect } from "react"

import { LeftSide } from "components/LeftSide"
import { RightSide } from "./RightSide"
import backgroundImageUrl from "assets/food-pho.webp"


type PropsHome = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function Home(props: PropsHome) {

    const [checked, setChecked] = useState(false)

    const { onChangePage } = props

    const { cx, classes } = useStyles()

    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <Fade
            in={checked}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <LeftSide
                    selectedPage='home'
                    className={classes.left}
                    onChangePage={onChangePage}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={<>Zen <br /> Gourmet</>}
                />
                <RightSide
                    className={classes.right}
                    onChangePage={onChangePage}
                />
            </div>
        </Fade>
    )
}

const useStyles = tss.create(({ theme }) => ({
    "root": {
        "display": "flex",
        "flexGrow": 1,
        "gap": theme.spacing(2),
        "margin": theme.spacing(2),
    },
    "left": {
        "width": "75%",
    },
    "right": {
        "width": "25%",
    }
}));