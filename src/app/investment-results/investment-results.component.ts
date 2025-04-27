import { InvestmentService } from './investiment-service.service';
import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'] // Sửa từ `styleUrl` thành `styleUrls`
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // Trả về dữ liệu kết quả từ InvestmentService
  get results() {
    return this.investmentService.resultData || []; // Xử lý trường hợp `resultData` là `undefined`
  }
}



