import { tss } from 'tss-react/mui'
import { CustomCard } from 'components/CustomCard'
import firstImage from "assets/food-nem.webp"
import secondImage from "assets/reservation2.webp"
import thirdImage from "assets/resto4.webp"


type PropsRightSide = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function RightSide(props: PropsRightSide) {

    const { className, onChangePage } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <CustomCard 
                className={classes.card}
                backgroundImageUrl={firstImage}
                onClick={() => onChangePage("menu")}
            >
                Menu
            </CustomCard>

            <CustomCard 
                className={classes.card}
                backgroundImageUrl={secondImage}
                onClick={() => onChangePage("reservation")}
            >
                Reservation
            </CustomCard>
            <CustomCard 
                className={classes.card}
                backgroundImageUrl={thirdImage}
                onClick={() => onChangePage("about")}
            >
                Our restaurant
            </CustomCard>
        </div>

    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": theme.spacing(2),
            "overflow": "hidden",
        },
        "card": {
            "display": "flex",
            "flexGrow": 1,
        }
    }))