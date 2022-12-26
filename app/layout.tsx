import { ReactNode } from "react";
import { primaryFont } from "/app/fonts";
import "/styles/globals.css";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html>
      <head>
        <title>Notifications Page - Frontend Mentor - Tuan Nguyen</title>
      </head>
      <body
        className={primaryFont.className + " bg-white text-dark-grayish-blue"}
      >
        <main className="mx-auto max-w-sm lg:max-w-3xl">{children}</main>
      </body>
    </html>
  );
}
