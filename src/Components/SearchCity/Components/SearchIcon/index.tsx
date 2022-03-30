import { FC } from "react";
import styled from "styled-components";
import { ReactComponent as SearchSVG } from "../../../../assets/images/search-icon.svg";

const SearchIcon: FC<SearchIconProps> = ({ onClick }: SearchIconProps) => {
  return (
    <SearchIconContainer>
      <SVG onClick={onClick} />
    </SearchIconContainer>
  );
};

export default SearchIcon;

interface SearchIconProps {
  onClick?: () => void;
}

const SearchIconContainer = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const SVG = styled(SearchSVG)`
  fill: currentColor;
`;
