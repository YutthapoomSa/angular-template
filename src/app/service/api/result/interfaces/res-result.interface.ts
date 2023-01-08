export interface Resresult {
    resCode: string
    msg: string
    resData: ResresultData
  }
  
  export interface ResresultData {
    id: number
    userId: number
    riderId: number
    subTitleId: number
    resultRider: string
    comment: string
    orderNumber: string
    startDate: string
    endDate: string
    createdAt: string
  }
  