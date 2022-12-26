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
      <body className={primaryFont.className + " text-dark-grayish-blue"}>
        <main className="mx-auto max-w-sm">{children}</main>
      </body>
    </html>
  );
}
