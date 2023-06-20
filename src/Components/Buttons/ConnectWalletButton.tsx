import { Button, ButtonProps, keyframes, useTheme } from "@mui/material";
import { connectWallet } from "@/src/Components/Web3Connect/web3connect";
import React, { ReactNode, useState } from "react";
import { BrowserProvider } from "ethers";

const resourceKeyFrame = keyframes`
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

interface ConnectWalletProps {
  children: ReactNode;
  style?: React.CSSProperties;
  href?: string;
  setWeb3Provider: (provider: BrowserProvider) => void;
  size: string;
}

const ConnectWalletButton: React.FC<ConnectWalletProps> = ({
  children,
  size = "normal",
  style = {},
  href,
  setWeb3Provider,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`button ${isHovered ? "button-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "#4fd382",
        letterSpacing: "0.2em",
        border: `1px solid ${theme.palette.secondary.dark}`,
        borderRadius: "8px",
        paddingInline: "20px",
        paddingTop: "6px",
        paddingBottom: "6px",
        fontSize: size === "small" ? 14 : 16,
        fontWeight: "bold",
        color: "secondary.dark",
        textDecoration: "none",
        textTransform: "uppercase",
        animation: `${resourceKeyFrame} 3s infinite ease`,
        ...style,
      }}
      onClick={() => connectWallet(setWeb3Provider)}
    >
      {children}
    </button>
  );
};

export default ConnectWalletButton;
