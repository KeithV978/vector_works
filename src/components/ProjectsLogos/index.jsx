import * as React from "react";
import { Slide, Slider, SlideTrack, Wrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
  NetworkBinanceSmartChain,
  NetworkBitcoin,
  NetworkLitecoin,
  NetworkTron,
  TokenETH,
  TokenSOL,
  TokenUSDT,
} from "@web3icons/react";
import useFeed from "../../utils/useFeed";
import Feed from "../Feeds";

const ProjectsLogos = () => {
  const { data, loading, error } = useFeed();
  console.log(error);
  return (
    <Wrapper>
      {!loading && (
        <Slider>
          <SlideTrack>
            {data.map((item, index) => {
              return (
                <Slide key={index} className="slide">
                  <Feed data={item} />
                </Slide>
              );
            })}
          </SlideTrack>
          {/* <SlideTrack>
            {["BTC-$12000", "ETH-$4000", "TON-$200", "SOL-$150"].map(
              (item, index) => {
                return (
                  <Slide key={index} className="slide">
                    
                    <Typography variant="h4" fontWeight={700}>
                      {item}
                    </Typography>
                  </Slide>
                );
              }
            )}
          </SlideTrack> */}
        </Slider>
      )}

      <Box sx={{ marginBottom: 2, display: { sm: "block", xs: "none" } }}>
        <Stack
          direction="row"
          gap={1}
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {[
            {
              icon: <NetworkBitcoin />,
              title: "btc",
            },
            {
              icon: <TokenETH />,
              title: "eth",
            },

            {
              icon: <TokenSOL />,
              title: "sol",
            },

            {
              icon: <NetworkBinanceSmartChain />,
              title: "bnb",
            },
            {
              icon: <NetworkTron />,
              title: "tron",
            },
            {
              icon: <NetworkLitecoin />,
              title: "lite",
            },
            {
              icon: <TokenUSDT />,
              title: "usdt",
            },
          ].map((item, index) => {
            return (
              <Typography
                key={index}
                variant="h3"
                // fontWeight={700}
                color="#313131"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  // textTransform: "uppercase",
                }}
              >
                <span style={{ color: "#414141", fontSize: "2rem" }}>
                  {item.icon}
                </span>
                {/* {item.title} */}
              </Typography>
            );
          })}
        </Stack>
      </Box>
    </Wrapper>
  );
};
export default ProjectsLogos;
