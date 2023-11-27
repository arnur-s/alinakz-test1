import DashboardIconDark from "assets/icons/dark/dashboard.svg";
import MyTicketsIconDark from "assets/icons/dark/my-tickets.svg";
import ApprovedTicketsIconDark from "assets/icons/dark/approved-tickets.svg";
import DeclinedTicketsIconDark from "assets/icons/dark/declined-tickets.svg";
import NewTicketIconDark from "assets/icons/dark/new-ticket.svg";

import DashboardIconLight from "assets/icons/light/dashboard.svg";
import MyTicketsIconLight from "assets/icons/light/my-tickets.svg";
import ApprovedTicketsIconLight from "assets/icons/light/approved-tickets.svg";
import DeclinedTicketsIconLight from "assets/icons/light/declined-tickets.svg";
import NewTicketIconLight from "assets/icons/light/new-ticket.svg";

export const menu = [
  {
    id: "dashboard",
    name: "Дашборд",
    path: "dashboard",
    icon: [DashboardIconDark, DashboardIconLight],
    pageName: "Дашборд: Анализ заявок компании",
  },
  {
    id: "my-tickets",
    name: "Мои заявки",
    path: "my-tickets",
    icon: [MyTicketsIconDark, MyTicketsIconLight],
    pageName: "Мои заявки",
  },
  {
    id: "new-ticket",
    name: "Новая заявка",
    path: "new-ticket",
    icon: [NewTicketIconDark, NewTicketIconLight],
    pageName: "Новая заявка",
  },
  {
    id: "approved-tickets",
    name: "Согласованные заявки",
    path: "approved-tickets",
    icon: [ApprovedTicketsIconDark, ApprovedTicketsIconLight],
    pageName: "",
  },
  {
    id: "declined-tickets",
    name: "Отклоненные заявки",
    path: "declined-tickets",
    icon: [DeclinedTicketsIconDark, DeclinedTicketsIconLight],
    pageName: "",
  },
];

export const getPageNameFromPath = (path: string) => {
  const menuItem = [...menu].filter((item) => path.includes(item.path));

  if (menuItem.length === 1) {
    return menuItem[0].pageName;
  } else {
    console.error(`Could not find pageName for path: ${path}`);
    return "";
  }
};
