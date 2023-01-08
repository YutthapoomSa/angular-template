  export interface ResRider {
    resCode: string
    msg: string
    resData: ResRiderData[]
  }
  
  export interface ResRiderData {
    id: number
    firstName: string
    lastName: string
    nickName: string
    licensePlate: string
    phoneNumber: string
    createdAt: string
  }
  