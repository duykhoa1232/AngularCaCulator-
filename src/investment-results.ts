import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { InvestmentInput } from './app/investment.input.model';

@Component({
  selector: 'app-root',
  standalone: true, // Sử dụng standalone component, không cần khai báo trong AppModule
  imports: [HeaderComponent, UserInputComponent], // Import các component con
  templateUrl: './app.component.html', // Đường dẫn đến template HTML
  styleUrls: ['./app.component.css'], // Sửa từ `styleUrl` thành `styleUrls` (dạng số nhiều)
})
export class AppComponent {
   resultData:signal<>
   {
    year: number; // Năm hiện tại
    interest: number; // Lãi suất kiếm được trong năm
    valueEndOfYear: number; // Giá trị đầu tư cuối năm
    annualInvestment: number; // Số tiền đầu tư hàng năm
    totalInterest: number; // Tổng lãi suất tích lũy
    totalAmountInvested: number; // Tổng số tiền đã đầu tư
   }[]|undefined>(undefined);

  // Hàm tính toán kết quả đầu tư
  oncalculateInvestmentResults(data:InvestmentInput {
    initialInvestment: number; // Số tiền đầu tư ban đầu
    annualInvestment: number; // Số tiền đầu tư hàng năm
    expectedReturn: number; // Tỷ lệ lợi nhuận kỳ vọng (%)
    duration: number; // Thời gian đầu tư (năm)
  }) {
    // Giải nén các giá trị từ tham số `data`
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

    const annualData = []; // Mảng lưu dữ liệu hàng năm
    let investmentValue = initialInvestment; // Giá trị đầu tư ban đầu

    // Vòng lặp tính toán cho từng năm
    for (let i = 0; i < duration; i++) {
      const year = i + 1; // Năm hiện tại
      const interestEarnedInYear = investmentValue * (expectedReturn / 100); // Lãi suất kiếm được trong năm
      investmentValue += interestEarnedInYear + annualInvestment; // Cập nhật giá trị đầu tư cuối năm

      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment; // Tổng lãi suất tích lũy

      // Thêm dữ liệu của năm hiện tại vào mảng
      annualData.push({
        year: year, // Năm hiện tại
        interest: interestEarnedInYear, // Lãi suất kiếm được trong năm
        valueEndOfYear: investmentValue, // Giá trị đầu tư cuối năm
        annualInvestment: annualInvestment, // Số tiền đầu tư hàng năm
        totalInterest: totalInterest, // Tổng lãi suất tích lũy
        totalAmountInvested: initialInvestment + annualInvestment * year, // Tổng số tiền đã đầu tư
      });
    }

 this.resultData.set(annualData); // Cập nhật dữ liệu hàng năm vào biến `resultData`
  In ra dữ liệu hàng năm trong console
  }
}
