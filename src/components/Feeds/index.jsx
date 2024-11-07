import * as React from "react";
import { Contain, Percentage, Price, Symbol, Wrapper } from "./style";
import { ArrowUpRight01Icon } from "hugeicons-react";

const Feed = ({ data }) => {
  return (
    <Wrapper>
      <Contain>
        <Symbol variant="body1">BTC</Symbol>
        <Price variant="body2">$100,000</Price>
      </Contain>

      <Contain>
        <Percentage fontcolor="green">
          <span>
            <ArrowUpRight01Icon size={14} color="green" />
          </span>
          12% <span style={{ color: "#fff" }}> (1h)</span>
        </Percentage>
      </Contain>
    </Wrapper>
  );
};

export default Feed;
