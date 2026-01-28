import { Link, useLocation } from 'react-router-dom'
import { BookOpen, ShoppingCart, Heart, User, Home } from 'lucide-react'

export default function BottomNav() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <nav className="bottom-nav">
      
      <Link to="/" className={isActive('/') ? 'text-black' : 'text-gray-400'}>
        <Home />
        <p>Home</p>
      </Link>

      <Link to="/recipes" className={isActive('/recipes') ? 'text-black' : 'text-gray-400'}>
        <BookOpen />
        <p>Recipes</p>
      </Link>

      <Link to="/grocery" className={isActive('/grocery') ? 'text-black' : 'text-gray-400'}>
        <ShoppingCart />
        <p>Grocery</p>
      </Link>

      <Link to="/favorites" className={isActive('/favorites') ? 'text-black' : 'text-gray-400'}>
        <Heart />
        <p>Favorites</p>
      </Link>

      <Link to="/profile" className={isActive('/profile') ? 'text-black' : 'text-gray-400'}>
        <User />
        <p>Profile</p>
       
      </Link>
       <p>Made with ❤ & React by bibi</p>

    </nav>
  )
}
