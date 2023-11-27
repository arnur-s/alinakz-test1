import { FC, PropsWithChildren } from "react";
import { SidePanel } from "../SidePanel";
import { StyledBox, StyledDivColumn, StyledMain } from "./styles";
import { TopBar } from "../TopBar";

export const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <StyledBox>
      <aside>
        <SidePanel />
      </aside>

      <StyledDivColumn>
        <TopBar />
        <StyledMain>{props.children}</StyledMain>
      </StyledDivColumn>
    </StyledBox>
  );
};
