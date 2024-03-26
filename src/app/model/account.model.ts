export interface AccountDetails {
  accountId:            string;
  balance:              number;
  currentPage:          number;
  totalePages:          number;
  size:                 number;
  accountOperationDtos: AccountOperation[];
}

export interface AccountOperation {
  id:             number;
  operationDate:  Date;
  amount:         number;
  type:           string;
  bankAccountDto: null;
  description:    string;
}
