import { Button, ButtonProps, keyframes, useTheme } from "@mui/material";
import React, { ReactNode, useState, useEffect } from "react";
import { ethers, JsonRpcSigner } from "ethers";
import { guild, user, role, Requirement } from "@guildxyz/sdk";
import {
  signer,
  connectWallet,
} from "@/src/Components/Web3Connect/web3connect";

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
  size: string;
  setWeb3Provider: (provider: any) => void;
}

const YOUR_NFT_CONTRACT_ADDRESS = "0xa35321b333Da28770BAfe297a1F66BE48061363b"; // Replace with your NFT contract address

const ConnectWalletButton: React.FC<ConnectWalletProps> = ({
  children,
  size = "normal",
  style = {},
  href,
  setWeb3Provider,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleClick = async () => {
    try {
      // Connect the wallet
      await connectWallet(setWeb3Provider);
      const wallet = signer;

      // Check if the wallet is connected
      if (wallet) {
        setIsConnected(true);
        const address = wallet.getAddress();

        // Sign function for role assignment
        const sign = async (signableMessage: string | any) => {
          const signature = await wallet.signMessage(signableMessage);
          return signature;
        };

        // Define the NFT ownership requirement
        const nftOwnershipRequirement: Requirement = {
          type: "ERC721",
          chain: "POLYGON",
          address: "YOUR_NFT_CONTRACT_ADDRESS",
          data: {
            minAmount: 1,
          },
        };

        // Assign the role in Guild XYZ
        await role.create(await address, sign, {
          guildId: 52402,
          name: "NFT Owners",
          logic: "AND",
          requirements: [nftOwnershipRequirement],
        });

        await user.join(52402, await address, sign);
      }
    } catch (error) {
      if (!signer) {
        console.error("Error connecting wallet");
      }
      console.error("Error  assigning role:", error);
    }
  };

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
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};

export default ConnectWalletButton;
