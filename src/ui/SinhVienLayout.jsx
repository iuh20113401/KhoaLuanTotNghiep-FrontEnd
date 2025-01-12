import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import UseUser from "../context/UseUser";
import LoadingSpinner from "./Spinner";

function SinhVienLayout() {
  const { data, isLoading } = UseUser();
  const user = data?.user;

  if (isLoading) {
    return (
      <div className="w-screen h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <section className="flex flex-col gap-4">
      <Navbar user={user} />
      <article className="min-h-[80vh] w-[98%] mx-auto">
        <Outlet />
      </article>
    </section>
  );
}

export default SinhVienLayout;
