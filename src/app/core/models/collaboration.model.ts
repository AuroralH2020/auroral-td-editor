export interface Community {
  description: string
  name: string
  commId: string
}

export interface PartnerServer {
  name:  string;
  nodes: string[];
}

export interface PartnerUI {
  name:  string;
  cid:  string;
}

export interface ContractServer {
  cid:   string;
  ctid:  string;
  items: ContractItemServer[];
}

export interface ContractItemServer {
  oid: string;
  rw:  boolean;
}

export class PartnerConvert {
  public static toPartnerUI(partner: PartnerServer, cid: string): PartnerUI {
    return {
      name: partner.name,
      cid
    }
  }
}
