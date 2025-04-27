import { Injectable } from '@angular/core';
import { InvestmentInput } from '../investment.input.model';
import { signal } from '@angular/core'; // Import signal từ Angular core
@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  resultData= signal< {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] | undefined>(undefined); // Đảm bảo kiểu là mảng của đối tượng, không phải đơn lẻ

  oncalculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

    const annualData = []; // Mảng lưu dữ liệu hàng năm
    let investmentValue = initialInvestment;

    // Vòng lặp tính toán cho từng năm
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;

      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
   this.resultData.set(annualData); // Cập nhật dữ liệu hàng năm vào biến `resultData`
  }

  constructor() {}
}

