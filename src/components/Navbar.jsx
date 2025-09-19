import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light px-3 border-bottom sticky-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 brand">
          <i className="fa-solid fa-jedi brand-icon"></i>
          <span className="brand-text">Star Wars</span>
        </Link>

        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Favorites <span className="badge bg-light text-dark">{store.favorite.length}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" id="favoritesDropdownMenu">
            {store.favorite.length === 0 ? (
              <li className="dropdown-item text-muted">No favorites</li>
            ) : (
              store.favorite.map((item) => (
                <li key={item.id} className="dropdown-item d-flex justify-content-between align-items-center">
                  <span>{item.name}</span>
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({ type: "remove_favorite", payload: item.id });
                    }}
                    aria-label={`Remove ${item.name} from favorites`}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
