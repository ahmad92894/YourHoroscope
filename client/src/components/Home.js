import { useEffect } from "react";

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
