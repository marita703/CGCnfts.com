// import React, { useEffect } from "react";
// import { guild, role, user, Requirement } from "@guildxyz/sdk";
// import { ethers} from "ethers";

// const NFTRoleCreation: React.FC = () => {
//   useEffect(() => {
//     const setUpGuildAccess = async () => {
//       const wallet = ethers.Wallet.createRandom();
//       const sign = (signableMessage: string | any) =>
//         wallet.signMessage(signableMessage);

//       try {
//         const nftOwnershipRequirement: Requirement = {
//           type: "ERC721",
//           chain: "ETHEREUM", // Chain where your NFTs exist
//           address: "YOUR_NFT_CONTRACT_ADDRESS", // Replace with your NFT contract address
//           data: {
//             minAmount: 1, // At least 1 NFT owned to meet the requirement
//           },
//         };

//         await role.create(wallet.address, sign, {
//           guildId: 52402, // Replace with your guild's ID
//           name: "NFT Owners",
//           logic: "AND",
//           requirements: [nftOwnershipRequirement],
//         });
//         await user.join(52402, wallet.address, sign);
//       } catch (error) {
//         console.error("Error setting up Guild XYZ integration:", error);
//       }
//     };

//     setUpGuildAccess();
//   }, []);
// };

// export default NFTRoleCreation;
