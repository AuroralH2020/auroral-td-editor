export interface MyNode {
  last_privacy_update: Date;
  organisation: string;
  partners: string;
  registrations: string;
  cid: string;
  nodes: string;
  last_configuration_update: Date;
  last_partners_update: Date;
  agid: string;
}

export interface MyOrgNode {
  cid: string;
  agid: string;
  company: string;
}
