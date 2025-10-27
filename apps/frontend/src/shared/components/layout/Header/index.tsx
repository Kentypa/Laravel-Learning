import { PagesEndponts } from "@enums/pagesEndpoints";
import { FC } from "react";
import { Link } from "react-router";

export const Header: FC = () => {
  return (
    <header className="bg-primary p-3 flex justify-around w-full">
      <Link to={PagesEndponts.HOME}>
        <span className="text-white hover:text-accent">Home Page</span>
      </Link>
      <Link to={PagesEndponts.USER}>
        <span className="text-white hover:text-accent">User Cabinet</span>
      </Link>
    </header>
  );
};
