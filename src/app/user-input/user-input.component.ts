import { Component, Output, EventEmitter, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-results/investiment-service.service';
import  type { InvestmentInput } from '../investment.input.model';


@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'] // Sửa từ `styleUrl` thành `styleUrls`
})

export class UserInputComponent {
  constructor( private investmentSerive:InvestmentService){

  }
  // Các biến lưu trữ giá trị nhập từ người dùng
  enteredInitialInvestment = signal('0'); // Sửa chính tả từ `eteredinitialinvestment`
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  // Hàm xử lý khi form được submit
  onSubmit() {
    this.investmentSerive.oncalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(), // Chuyển đổi chuỗi thành số
      annualInvestment: +this.enteredAnnualInvestment(), // Chuyển đổi chuỗi thành số
      expectedReturn: +this.enteredExpectedReturn(), // Chuyển đổi chuỗi thành số
      duration: +this.enteredDuration(), // Chuyển đổi chuỗi thành số
    });
    console.log(
      this.enteredInitialInvestment,
      this.enteredAnnualInvestment,
      this.enteredExpectedReturn,
      this.enteredDuration
    );

    // Phát sự kiện với dữ liệu đã nhập

    this.enteredInitialInvestment.set('0'); // Đặt lại giá trị sau khi submit
    this.enteredAnnualInvestment.set('0'); // Đặt lại giá trị sau khi submi
    this.enteredExpectedReturn.set('5'); // Đặt lại giá trị sau khi submit
    this.enteredDuration.set('10'); // Đặt lại giá trị sau khi submit
  }
}





