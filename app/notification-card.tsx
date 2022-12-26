import clsx from "clsx";
import Image from "next/image";

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
      className={clsx("flex gap-4 rounded-md p-4", {
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
              <span className="font-bold text-very-dark-blue">{person}</span>
              <span className="font-medium">{action}</span>
              {target ? (
                <span className="font-bold text-blue">{target}</span>
              ) : null}
              {!isRead ? (
                <span className="inline-block h-2 w-2 rounded-full bg-red align-middle"></span>
              ) : null}
            </p>
            <div className="text-grayish-blue">{time}</div>
          </div>

          {extraSrc ? (
            <Image src={extraSrc} alt="" className="h-12 w-12" />
          ) : null}
        </div>

        {/* detail */}
        {message ? (
          <p className="mt-4 rounded-md border border-light-grayish-blue-2 p-4">
            {message}
          </p>
        ) : null}
      </div>
    </div>
  );
}
