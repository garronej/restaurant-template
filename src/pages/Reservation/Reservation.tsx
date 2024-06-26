import { tss } from 'tss'
import Fade from "@mui/material/Fade"
import { DesignOfReservationPage } from "./DesignOfReservationPage"
import { HeroSection } from "components/HeroSection"
import backgroundImageUrl from "assets/reservation2.webp"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"
import { useHeight } from "hooks/useHeightContext"

export function Reservation() {

    const { height } = useHeight()

    const { cx, classes } = useStyles({ height })

    const { t } = useTranslation({ Reservation })

    return (
        <Fade
            in={true}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <HeroSection
                    className={classes.left}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={
                        <>
                            {t("book")}
                            <br/>
                            {t("a table")}
                        </>
                    }
                />
                <DesignOfReservationPage className={classes.right} />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName({ Reservation })
    .withParams<{ height: number }>()
    .create(({ theme, scrollbarStyles, height }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "boxSizing": "border-box",
            "height": "100%",

            [theme.breakpoints.down('desktop')]: {
                "display": "block",
                "overflow": "auto",
                ...scrollbarStyles,
            },
        },
        "left": {
            "width": "60%",

            [theme.breakpoints.only('tablet')]: {
                "width": "unset",
                "height": height,
            },

            [theme.breakpoints.only("mobile")]: {
                "width": "unset",
                "height": theme.spacing(40),
            },
        },
        "right": {
            "flex": 1,
        }
    }));

export const { i18n } = declareComponentKeys<
    | "book"
    | "a table"
>()({ Reservation });