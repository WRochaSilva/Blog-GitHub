import styled from "styled-components";

export const ProfileContainer = styled.div`
  /* position: relative; */
  display: flex;
  width: 864px;
  height: 212px;
  /* flex-shrink: 0; */
  border-radius: 10px;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin: -80px auto 0px;
  padding: 30px;
`;
export const Avatar = styled.img`
  /* position: absolute; */
  width: 148px;
  height: 148px;
  /* flex-shrink: 0; */
  border-radius: 8px;
`;
export const ProfileInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
`;
export const ProfileName = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  font-size: 24px;
  font-weight: 700;
`;
export const ProfileDescription = styled.h2`
  color: ${(props) => props.theme["base-text"]};
  font-size: 16px;
`;
export const ProfileSocialMedia = styled.h3`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 16px;
`;
export const LinkGitHub = styled.div``;
