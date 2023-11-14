import styled from "styled-components";

export const SearchInputContainer = styled.div`
  width: 864px;
  height: 120px;
  margin: 0 auto;
  padding-top: 30px;
`;
export const HeaderSearchInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;
export const Input = styled.input`
  width: 864px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["base-border"]};
  background: ${(props) => props.theme["base-input"]};
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
  }
  font-size: 16px;
  font-weight: 400;
  color: white;
`;
