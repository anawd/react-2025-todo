import { NavLink } from "react-router"
import Text from "../components/Text"

export default function Footer() {
  return (
    <footer>
      <nav className="flex items-center justify-center gap-4">
        <NavLink to="/">
          <Text variant="body-sm-bold" className="text-gray-300">
            Home
          </Text>
        </NavLink>
        <NavLink to="compo">
          <Text variant="body-sm-bold" className="text-gray-300">
            Componentes
          </Text>
        </NavLink>
      </nav>
    </footer>
  )
}
