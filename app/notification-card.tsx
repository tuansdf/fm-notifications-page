import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  profileSrc: any;
  person: string;
  action: string;
  target?: string;
  time: string;
  isRead?: boolean;
  extraSrc?: any;
  message?: string;
}

export default function NotificationCard({
  profileSrc,
  person,
  action,
  target,
  time,
  isRead,
  extraSrc,
  message,
}: IProps) {
  return (
    <div
      className={clsx("flex gap-4 rounded-lg p-4", {
        "bg-very-light-grayish-blue": !isRead,
      })}
    >
      <Image
        src={profileSrc}
        alt=""
        className="h-12 w-12 flex-none rounded-full"
      />

      <div className="w-full">
        <div className="flex w-full justify-between gap-4">
          <div>
            <p className="space-x-2">
              <Link href="#">
                <span className="font-bold text-very-dark-blue hover:text-blue">
                  {person}
                </span>
              </Link>
              <span className="font-medium">{action}</span>
              {target ? (
                <Link href="#">
                  <span className="font-bold text-blue">{target}</span>
                </Link>
              ) : null}
              {!isRead ? (
                <span className="inline-block h-2 w-2 rounded-full bg-red align-middle"></span>
              ) : null}
            </p>
            <div className="text-grayish-blue">{time}</div>
          </div>

          {extraSrc ? (
            <Image
              src={extraSrc}
              alt=""
              className="h-12 w-12 cursor-pointer rounded-lg hover:ring-2 hover:ring-light-grayish-blue-2 hover:ring-offset-1"
            />
          ) : null}
        </div>

        {/* detail */}
        {message ? (
          <p className="mt-4 cursor-pointer rounded-md border border-light-grayish-blue-1 p-4 transition-colors duration-100 hover:bg-light-grayish-blue-1">
            {message}
          </p>
        ) : null}
      </div>
    </div>
  );
}
