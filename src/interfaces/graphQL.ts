export interface INFT {
  id: string;
  owner: string;
  listed: number;
  timeStampList?: string | string[];
  uri?: string;
}

export interface ICompleteNFT extends INFT {
  name: string;
  media: { url: string };
  cryptedMedia: { url: string };
}

export interface NFTListResponse {
  nftEntities: {
    nodes: INFT[];
  };
}

export interface NFTListPaginatedResponse {
  nftEntities: {
    totalCount: number;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    nodes: INFT[];
  };
}

export interface PaginationResponse<DataType> {
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  data: DataType;
}
