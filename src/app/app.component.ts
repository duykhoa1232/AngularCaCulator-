import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

import { InvestmentResultsComponent } from "./investment-results/investment-results.component"; // Import mô hình dữ liệu đầu vào

@Component({
  selector: 'app-root',
  standalone: true, // Sử dụng standalone component, không cần khai báo trong AppModule
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent], // Import các component con
  templateUrl: './app.component.html', // Đường dẫn đến template HTML
  styleUrls: ['./app.component.css'], // Sửa từ `styleUrl` thành `styleUrls` (dạng số nhiều)
})
export class AppComponent {

}
