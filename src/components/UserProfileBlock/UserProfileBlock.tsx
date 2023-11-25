import { Icon } from "../Icon";
import { StyledDivRow, StyledImg, StyledTypography } from "./styles";
import NotificationsIcon from "assets/icons/notifications.svg";
import UserImage from "assets/user.png";

export const UserProfileBlock = () => {
  return (
    <StyledDivRow gap={40}>
      <Icon src={NotificationsIcon} alt="уведомления" />
      <StyledDivRow gap={8}>
        <StyledImg src={UserImage} alt="юзер" />
        <StyledTypography>Иванов И.И.</StyledTypography>
      </StyledDivRow>
    </StyledDivRow>
  );
};
