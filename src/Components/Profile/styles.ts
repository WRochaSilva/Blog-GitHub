import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  width: 864px;
  height: 212px;
  /* flex-shrink: 0; */
  border-radius: 10px;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin: -80px auto 0px;
`;
export const Avatar = styled.img`
  position: absolute;
  width: 148px;
  height: 148px;
  /* flex-shrink: 0; */
  border-radius: 8px;
  margin: 30px;
`;
