import { NextComponentType } from "next";
import { useRouter } from "next/router";
import Loading from "../components/Loading/Loading";
import { useAuth } from "./useAuth";

const withPrivatePage = (Component: NextComponentType) => {
  return function WithPrivatePage(props: any) {
    const authContext = useAuth();
    const router = useRouter();

    if (authContext.loading) return <Loading />;

    if (!authContext.isLoggedIn) {
      router.replace("/");
      return <></>;
    }

    return <Component auth={authContext} {...props} />;
  };
};

export default withPrivatePage;
