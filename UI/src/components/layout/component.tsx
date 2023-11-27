import { IChildrenNode } from "config";

import { PCBtnsSection } from "./components";
import {
  StyledContentWrapper,
  StyledLayout,
  StyledPCEffects,
  StyledPCLine,
  StyledRouterWrapper,
  StyledWrapper,
} from "./styles";

const Layout: React.FC<IChildrenNode> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledWrapper>
        <StyledContentWrapper>
          <StyledPCLine />
          <StyledPCEffects />
          <StyledRouterWrapper>{children}</StyledRouterWrapper>
        </StyledContentWrapper>
        <PCBtnsSection />
      </StyledWrapper>
    </StyledLayout>
  );
};

export default Layout;
