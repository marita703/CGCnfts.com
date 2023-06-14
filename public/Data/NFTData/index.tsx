interface NFT {
  name: string;
  url: string;
  borderImage: string;
}

const NFTArray: NFT[] = [
  {
    name: "nft1",
    url: "/Images/NFTS/Nft_0.png",
    borderImage: "linear-gradient(to right, #3966FF, #FF599c) 1",
  },
  {
    name: "nft2",
    url: "/Images/NFTS/Nft_2.png",
    borderImage: "linear-gradient(to right, #3966FF, #FF599C,  #FBC13a) 1",
  },
  {
    name: "nft3",
    url: "/Images/NFTS/Nft_3.png",
    borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
  },
];

export default NFTArray;
