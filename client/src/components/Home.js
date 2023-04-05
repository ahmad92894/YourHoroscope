import { useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url, "/user");

        setUsername(data.username);
      } catch (e) {
        setNavigate(true);
      }
    })();
  }, []);

  const logout = async () => {
    await axios.post(url, "logout", {}, { withCredentials: true });

    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/" />;
  }
  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hello {username}</h3>
      <a href="javascript:void(0)" className="btn btn-lg btn-primary">
        Logout
      </a>
      onClick={logout}
    </div>
  );
};
