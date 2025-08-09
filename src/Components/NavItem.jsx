import { Link , useLocation } from 'react-router-dom';

function NavItem({ path, name }) {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("Current Path:", currentPath);
  return (
    <Link
        to={path}
      className={
        currentPath === path
          ? "underline"
          : "text-black hover:text-black" // or your custom hover effect
      }
    >
      {name}
    </Link>
  );
}

export default NavItem;
