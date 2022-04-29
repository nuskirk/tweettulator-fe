import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";

export default function DefaultLayout(props: PropsWithChildren<any>) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <HeaderComponent />
      <Outlet />
      {props.children}
      <FooterComponent className="bg-slate-400" />
    </div>
  );
}
