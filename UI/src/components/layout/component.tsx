import { IChildrenNode } from "../../config";
import { PCBtnsSection } from "./components";
import { useMediaQuery } from "hooks/useMediaQuery";
import { ConditionalWrapper } from "components/conditional-wrapper";
import {
  StyledContentWrapper,
  StyledLayout,
  StyledPCEffects,
  StyledPCLine,
  StyledRouterWrapper,
  StyledWrapper,
} from "./styles";

const Layout: React.FC<IChildrenNode> = ({ children }) => {
  const isMatches = useMediaQuery("(max-width: 920px), (max-height: 714px)");

  return (
    <ConditionalWrapper
      condition={!isMatches}
      wrapper={(children) => (
        <StyledLayout>
          <StyledWrapper>
            {children} <PCBtnsSection />
          </StyledWrapper>
        </StyledLayout>
      )}
    >
      <StyledContentWrapper>
        <StyledPCLine />
        <StyledPCEffects />
        <StyledRouterWrapper>{children}</StyledRouterWrapper>
      </StyledContentWrapper>
    </ConditionalWrapper>
  );
};

export default Layout;
