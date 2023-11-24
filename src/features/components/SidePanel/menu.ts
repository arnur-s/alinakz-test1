import DashboardIcon from "src/assets/icons/dashboard.svg";
import MyTicketsIcon from "src/assets/icons/my-tickets.svg";
import ApprovedTicketsIcon from "src/assets/icons/approved-tickets.svg";
import DeclinedTicketsIcon from "src/assets/icons/declined-tickets.svg";
import NewTicketIcon from "src/assets/icons/new-ticket.svg";

export const menu = [
  {
    id: "dashboard",
    name: "Дашборд",
    icon: DashboardIcon,
  },
  {
    id: "my-tickets",
    name: "Мои заявки",
    icon: MyTicketsIcon,
  },
  {
    id: "new-ticket",
    name: "Новая заявка",
    icon: NewTicketIcon,
  },
  {
    id: "approved-tickets",
    name: "Согласованные заявки",
    icon: ApprovedTicketsIcon,
  },
  {
    id: "declined-tickets",
    name: "Отклоненные заявки",
    icon: DeclinedTicketsIcon,
  },
];
