import DashboardIcon from "assets/icons/dashboard.svg";
import MyTicketsIcon from "assets/icons/my-tickets.svg";
import ApprovedTicketsIcon from "assets/icons/approved-tickets.svg";
import DeclinedTicketsIcon from "assets/icons/declined-tickets.svg";
import NewTicketIcon from "assets/icons/new-ticket.svg";

export const menu = [
  {
    id: "dashboard",
    name: "Дашборд",
    path: "dashboard",
    icon: DashboardIcon,
    pageName: "Дашборд: Анализ заявок компании",
  },
  {
    id: "my-tickets",
    name: "Мои заявки",
    path: "my-tickets",
    icon: MyTicketsIcon,
    pageName: "Мои заявки",
  },
  {
    id: "new-ticket",
    name: "Новая заявка",
    path: "new-ticket",
    icon: NewTicketIcon,
    pageName: "Новая заявка",
  },
  {
    id: "approved-tickets",
    name: "Согласованные заявки",
    path: "approved-tickets",
    icon: ApprovedTicketsIcon,
    pageName: "",
  },
  {
    id: "declined-tickets",
    name: "Отклоненные заявки",
    path: "declined-tickets",
    icon: DeclinedTicketsIcon,
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
