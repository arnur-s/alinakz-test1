import { Typography } from "@mui/material";
import { usePageName } from "hooks/index";
import { StyledDivRow } from "./styles";
import { UserProfileBlock } from "../UserProfileBlock/UserProfileBlock";

export const TopBar = () => {
  const pageName = usePageName();

  return (
    <StyledDivRow>
      <Typography variant="h1">{pageName}</Typography>
      <UserProfileBlock />
    </StyledDivRow>
  );
};
