import Layaout from "../components/Layaout"
import Header from "../components/index/header"
import Body from "../components/index/body"

export default function Home() {
  return (
    <div>
    
      <Layaout page="Accueil">

        <Header />
        <Body />

      </Layaout>

    </div>
  )
}
