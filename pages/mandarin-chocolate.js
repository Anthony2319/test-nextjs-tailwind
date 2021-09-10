import Layaout from "../components/Layaout"
import Body from "../components/mandarinchocolate/body" 
import Caroussel from "../components/mandarinchocolate/caroussel" 
export default function MandarinChocolate() {
    return (
        <div>
            <Layaout page="Mandarin-Chocolate">

                <Caroussel />
                <Body />

            </Layaout>
        </div>
    )
}
