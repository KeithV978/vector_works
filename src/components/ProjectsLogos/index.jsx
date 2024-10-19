import { Slide, Slider, SlideTrack, Wrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  NetworkAlgorand,
  NetworkBinanceSmartChain,
  NetworkBitcoin,
  NetworkLitecoin,
  NetworkPolygonPos,
  NetworkTron,
  TokenETH,
  TokenSOL,
  TokenTON,
  TokenUSDT,
} from "@web3icons/react";

const index = () => {
  return (
    <Wrapper>
      <Slider>
        <SlideTrack>
          {["BTC-$12000", "ETH-$4000", "TON-$200", "SOL-$150"].map(
            (item, index) => {
              return (
                <Slide key={index} className="slide">
                  {/* <img src={item} height="100" width="250" alt="" /> */}
                  <Typography variant="h4" fontWeight={700}>
                    {item}
                  </Typography>
                </Slide>
              );
            }
          )}
        </SlideTrack>
        <SlideTrack>
          {["BTC-$12000", "ETH-$4000", "TON-$200", "SOL-$150"].map(
            (item, index) => {
              return (
                <Slide key={index} className="slide">
                  {/* <img src={item} height="100" width="250" alt="" /> */}
                  <Typography variant="h4" fontWeight={700}>
                    {item}
                  </Typography>
                </Slide>
              );
            }
          )}
        </SlideTrack>
      </Slider>

      <Box>
        <Stack
          direction="row"
          gap={3}
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          {[
            {
              icon: <NetworkBitcoin />,
              title: "bitcoin",
            },
            {
              icon: <TokenETH />,
              title: "ethereum",
            },
            {
              icon: <TokenTON />,
              title: "ton",
            },
            {
              icon: <TokenSOL />,
              title: "solana",
            },
            {
              icon: <NetworkPolygonPos />,
              title: "polygon",
            },
            {
              icon: <NetworkAlgorand />,
              title: "algorand",
            },
            {
              icon: <NetworkBinanceSmartChain />,
              title: "binance",
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
                variant="h4"
                fontWeight={700}
                color="#313131"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <span style={{ color: "#414141" }}>{item.icon}</span>
                {item.title}
              </Typography>
            );
          })}
        </Stack>
      </Box>
    </Wrapper>
  );
};
export default index;
