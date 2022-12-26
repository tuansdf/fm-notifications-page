import { ReactNode } from "react";
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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
