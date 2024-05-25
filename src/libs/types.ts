import { z } from 'zod'

export interface ResultReturnType<DataT, ErrorT> {
  isError: boolean
  error?: ErrorT
  data?: DataT
}
