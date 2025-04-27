export interface InvestmentInput {
  initialInvestment: number; // Số tiền đầu tư ban đầu
  annualInvestment: number; // Số tiền đầu tư hàng năm
  expectedReturn: number; // Tỷ lệ lợi nhuận kỳ vọng (%)
  duration: number; // Thời gian đầu tư (năm)
}
