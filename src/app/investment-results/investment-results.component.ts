import { InvestmentService } from './investiment-service.service';
import { Component, computed, inject } from '@angular/core';
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
   results=computed(() => this.investmentService.resultData()); // Sử dụng computed để theo dõi sự thay đổi của resultData
}



