import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 864px;
  height: full;
  margin: 0 auto;
  padding-top: 30px;
`;
export const CardContent = styled.div`
  width: 416px;
  height: 260px;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};
  margin-bottom: 30px;
  padding: 30px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.div`
  width: 250px;
  color: ${(props) => props.theme["base-title"]};
  font-size: 20px;
  font-weight: 700;
`;
export const TimePublish = styled.div`
  color: ${(props) => props.theme["base-span"]};
  font-size: 14px;
  font-weight: 400;
`;
export const SubTitle = styled.div`
  width: 352px;
  height: 112px;
  flex-shrink: 0;
  overflow: hidden;
  margin-top: 30px;
  color: ${(props) => props.theme["base-text"]};
  text-overflow: ellipsis;
  white-space: wrap;
  font-size: 16px;
  font-weight: 400;
`;
