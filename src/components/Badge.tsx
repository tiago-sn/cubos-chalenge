import * as React from "react";
import styled from "styled-components";

interface IBadgeProps {
  text: string;
}

const Span = styled.span`
  border: 1px solid #116193;
  padding: 0 5px;
  margin: 1px;
  border-radius: 20px;
  background-color: white;
`;

const Badge: React.FC<IBadgeProps> = ({ text }) => {
  return <Span className="badge">{text}</Span>;
};

export default Badge;
