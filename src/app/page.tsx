import { permanentRedirect } from "next/navigation";

const HomePage = () => {
  permanentRedirect("/dashboard");
};

export default HomePage;
