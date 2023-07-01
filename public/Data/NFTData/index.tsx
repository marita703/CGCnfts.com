interface NFT {
  name: string;
  url: string;
  borderImage: string;
}

const NFTArray: NFT[] = [
  {
    name: "nft1",
    url: "/Images/NFTS/1.png",
    borderImage: "linear-gradient(to right, #3966FF, #FF599c) 1",
  },
  {
    name: "nft2",
    url: "/Images/NFTS/2.png",
    borderImage: "linear-gradient(to right, #3966FF, #FF599C,  #55d13a) 1",
  },
  {
    name: "nft3",
    url: "/Images/NFTS/3.png",
    borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
  },
];

export default NFTArray;
