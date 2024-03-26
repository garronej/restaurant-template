import { darkTheme } from "../../theme"
import { tss } from 'tss-react/mui'
import { FoodItem } from "./FoodItem"

type FoodDetailProps = {
    className?: string;
    foods: FoodItem[];
}

export function FoodDetail(props: FoodDetailProps) {

    const { className, foods } = props

    const { cx, classes } = useStyles()

    return (
        <div>
            {foods.map((foods) => (
                <div key={foods.id} className={cx(classes.root, className)}>
                    <div
                        className={classes.illustration}
                        style={{ backgroundImage: `url(${foods.illustration})` }}
                    ></div>

                    <div className={classes.textZone}>
                        <div className={classes.nameVsPrice}>
                            <div>{foods.nameOfDish}</div>
                            <div>{foods.price}</div>
                        </div>

                        <div className={classes.details}>
                            {foods.details}
                        </div>

                    </div>
                </div>
            ))}

        </div>

    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "center",
            "borderRadius": "20px",
            "gap": "20px",
            "alignItems": "center",
        },
        "illustration": {
            "borderRadius": "10px",
            "background": "center center/cover",
            "width": "30%",
            "height": "100%",
            "minHeight": "90px",
            "maxWidth": "90px",
        },
        "textZone": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "8px",
            "width": "70%",
        },
        "nameVsPrice": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "fontFamily": theme.typography.fontFamily,
            "color": theme.palette.text.primary,
            "fontSize": theme.typography.body1.fontSize,
            "fontWeight": theme.typography.body1.fontWeight,
        },
        "details": {
            "textAlign": "left",
            "fontFamily": theme.typography.fontFamily,
            "color": theme.palette.text.primary,
            "fontSize": theme.typography.caption.fontSize,
            "fontWeight": theme.typography.caption.fontWeight,
        },
    }))