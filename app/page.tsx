import NotificationCard from "/app/notification-card";

import avatarAngelaGray from "/public/avatar-angela-gray.webp";
import avatarAnnaKim from "/public/avatar-anna-kim.webp";
import avatarJacobThompson from "/public/avatar-jacob-thompson.webp";
import avatarKimberlySmith from "/public/avatar-kimberly-smith.webp";
import avatarMarkWebber from "/public/avatar-mark-webber.webp";
import avatarNathanPeterson from "/public/avatar-nathan-peterson.webp";
import avatarRizkyHasanuddin from "/public/avatar-rizky-hasanuddin.webp";
import imgChess from "/public/image-chess.webp";

export default function Page() {
  return (
    <div className="rounded-xl bg-white lg:p-8 lg:drop-shadow-2xl">
      <div className="my-8 flex items-baseline justify-between lg:mt-0">
        <div className="space-x-2">
          <span className="text-2xl font-bold text-very-dark-blue">
            Notifications
          </span>
          <span className="rounded-md bg-blue py-0.5 px-3 text-lg font-bold text-white">
            3
          </span>
        </div>

        <button>Mark all as read</button>
      </div>

      <div className="space-y-2">
        <NotificationCard
          profileSrc={avatarMarkWebber}
          person="Mark Webber"
          action="reacted to your recent post"
          target="My first tournament today!"
          isRead={false}
          time="1m ago"
        />
        <NotificationCard
          profileSrc={avatarAngelaGray}
          person="Angela Gray"
          action="followed you"
          isRead={false}
          time="5m ago"
        />
        <NotificationCard
          profileSrc={avatarJacobThompson}
          person="Jacob Thompson"
          action="has joined your group"
          target="Chess Club"
          isRead={false}
          time="1 day ago"
        />
        <NotificationCard
          profileSrc={avatarRizkyHasanuddin}
          person="Rizky Hasannuddin"
          action="sent you a private message"
          isRead
          time="5 days ago"
          message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improveing my game."
        />
        <NotificationCard
          profileSrc={avatarKimberlySmith}
          person="Kimberly Smith"
          action="connected on your picture"
          isRead
          time="1 week ago"
          extraSrc={imgChess}
        />
        <NotificationCard
          profileSrc={avatarNathanPeterson}
          person="Nathan Peterson"
          action="reacted to your recent post"
          target="5 end-game strategies to increase your win rate"
          isRead
          time="2 weeks ago"
        />
        <NotificationCard
          profileSrc={avatarAnnaKim}
          person="Anna Kim"
          action="left the group"
          target="Chess Club"
          isRead
          time="2 weeks ago"
        />
      </div>
    </div>
  );
}
